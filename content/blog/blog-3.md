---
title: useMemo and useCallback in React.js?
date: 2023-06-20T10:57:54.764Z
thumbnail: /blog-3.png
description: If you are not completely new to React, then you are probably already familiar with useMemoand . useCallbackIf you're responsible for developing or maintaining a medium-sized or large-scale application, you've probably complained about parts of your application being...

tags:
    - Programming
    - Design
    - Web Dev
---

If you are not completely new to React, then you are probably already familiar with useMemoand . useCallbackIf you're responsible for developing or maintaining a medium-sized or large-scale application, you've probably complained about parts of your application being "incomprehensible and useMemoimpossible useCallbacksto read and debug."

These hooks seem to have a magical power of spreading uncontrollably until they take complete control of your repository. You will find that you, and your colleagues around you, are writing them tirelessly in all directions.
You know what’s sad about that? These are completely useless efforts .

You can delete at least 90% of useMemothe and in your code right now useCallback, and at the same time, your application will run perfectly fine, even a little faster than before. Don't get me wrong, I'm not saying useMemoand useCallbackare completely useless. It's just that their use is limited to a few very specific and certain scenarios. Beyond that, most of the time we're wrapping business code in them pointlessly.

That’s what I’m going to talk about today: What mistakes do developers make related useMemoto and ? useCallbackWhat is the real purpose of these two hooks and how can we use them appropriately.
There are two main reasons why these two hooks are spreading in all directions:

Caching (memorize) props to prevent component re-rendering
Cache certain values ​​to avoid expensive calculations on each re-render

We'll take a closer look at both of these reasons in the following article, but the first is: What exactly is the purpose of useMemoand ?useCallback


## 1. Why does a component re-render itself?


"When state or prop changes, the component will re-render itself", this is a consensus about React. Even the official React documentation mentions this. I think this statement draws a wrong inference: "If the prop has not changed (for example, been cached), the component will not be re-rendered." (Translator's Note: The above inference is a typical logical error, A Being a sufficient condition for B does not mean that !A is a sufficient condition for !B.)
The reason why the above sentence is wrong is because there is another important reason that causes the component to re-render: when the component's parent component re-renders!
Or, if we think about it from the opposite perspective: when a component re-renders itself, it also re-renders its children. Take a look at the following code example:

```
const App = () => {
const [state, setState] = useState(1);
return (
<div className="App">
<button onClick={() => setState(state + 1)}>
click to re-render {state}
</button>
<br />
<Page />
</div>
);
};

```

AppComponents have some state and some children, including Pagecomponents. What happens when the button is clicked? The State will change, which will cause the App to re-render, and will trigger it to re-render all its children, including Pagecomponents. In the process, Pagethe component doesn't even have props!
Now, in Pagethe component, if we have a children like this:

```
const Page = () => <Item />;


```

It is completely empty, with no state or props. But when the App is re-rendered, the Page component will still be re-rendered, along with its internal Item components. State changes in App components trigger an entire re-rendering chain within the application. A complete example can be seen in this codesandbox .

The only way to break this chain is to cache the subcomponents within the component. We can useMemodo this with , but a better way is to use the React.memo utility function. Only when a component is wrapped within it will React stop to check whether the props have changed before re-rendering.
Cache a component like this:

```

const Page = () => <Item />;
const PageMemoized = React.memo(Page);



```

Use it in an App that contains state:
```

const App = () => {
const [state, setState] = useState(1);
return (
... // same code as before
<PageMemoized />
);
};




```

In the above, and only in the above scenario, it matters whether the props are cached.
Let's imagine that Pagethe component has a onClickprop that receives a function. PageWhat happens if I pass it to this function without caching it ?
```

const App = () => {
const [state, setState] = useState(1);
const onClick = () => {
console.log('Do something on click');
};
return (
// 不管 onClick 有没有缓存，page 都会重渲染
<Page onClick={onClick} />
);
};

```



AppWill re-render, React will find the component in the App's children Pageand re-render it. onClickIt doesn't matter whether it's wrapped in or useCallbacknot.
So what if we Pagecache the component?

```
const PageMemoized = React.memo(Page);
const App = () => {
const [state, setState] = useState(1);
const onClick = () => {
console.log('Do something on click');
};
return (

<PageMemoized onClick={onClick} />
);
};

```


AppIt will re-render. React will find the component in its children  PageMemoizedand realize that it is React.memowrapped by the method. This will interrupt the re-rendering chain. React will check whether the props of this component have changed in advance. In this example, since onClickis an uncached function, the result of the props comparison will be false, and  PageMemoizedthe component will re-render itself.
Finally, let's look at useCallback in action:


```

const PageMemoized = React.memo(Page);
const App = () => {
const [state, setState] = useState(1);
const onClick = useCallback(
() => { console.log('Do something on click'); },
[]
);
return (
// PageMemoized 因为 onClick 被缓存了，将「不会」重渲染
<PageMemoized onClick={onClick} />
);
};


```

Now, when React checks  PageMemoizedwhether the props have changed, onClickthey will remain unchanged, and only in this case,  PageMemoizedwill not re-render.
What happens if I add another non-cacheable value to the PageMemoized component? Like the following scenario:

```

const PageMemoized = React.memo(Page);
const App = () => {
const [state, setState] = useState(1);
const onClick = useCallback(
() => { console.log('Do something on click'); },
[]
);
return (
// 因为 value 没有被缓存，page 「将会」重渲染
<PageMemoized onClick={onClick} value={[1, 2, 3]} />
);
};



```


React stops to check  PageMemoizedwhether the component's props have changed. onClickIt has indeed not changed, but valueif it has changed,  PageMemoized it will still be re-rendered! You can see the full example here and try deleting the cache to see how everything in the component re-renders.
Thinking about the above example, we can conclude that there is only one scenario where caching props makes sense: when every prop of the component, as well as the component itself, is cached .
useMemoIf there are the following situations in the component code, we can delete and without any psychological burden useCallback:

They are passed to a DOM as attributes, either directly or as an upper level in a dependency tree.
They are passed as props to an uncacheable component, either directly or as an upper level in the dependency tree.
They are passed as props, either directly or as an upper level in the dependency tree, to a component that has at least one prop that is not cached.

**But why not fix the cache (referring to the component and all props of the component and add cache), but delete them? **That’s because: if you had some performance issues due to component re-rendering, you would have noticed and fixed them, right? (Translator's note: That means caching is added to all props and the component itself, not one of the three situations listed above). 😉 Since there are no performance issues with the rest, there is no need to fix the code (it would be better to just delete it). Removing the useless useMemoand useCallbackwill simplify your code and slightly speed up the initial render without any negative impact on existing re-render performance.


MORE CONTENTS ARE COMING---




