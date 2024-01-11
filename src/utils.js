import aftershock from "../src/assets/images/aftershock.png"
import maap from "../src/assets/images/maap.png"
import sheetsSociety from "../src/assets/images/sheetsSociety.png"
import BendigoBank from "../src/assets/images/Bendigo_bank.png"

export const projects = [
    {
        index: "01",
        imageName: BendigoBank,
        projectName: "Bendigo Bank",
        company: "",
        projectTime: "05/2022-present",
        imagePositionReverse: true,
        skills: [
            "#Material UI",
            "#styled-components",
            "#Sass",
            "#Typescript",
            "#GraphQL"
        ],
        tecSkills: [
            "#TypeGraphQL",
            "#Apollo Client",
            "#BFF(Backends For Frontend Pattern)"
        ],
        projectLink: "https://sheetsociety.com/en-au",
        projectIntro: `Due to some critical and confidential reasons, I am unable to show more details of the project`,
        keyAchievements: [
            "Implemented the front end in React.js, TypeScript, and Apollo GraphQL, configured with Webpack, Babel, and Eslint.",
            "Wrote unit testing for React component by using Jest",
            "Reduced the codes quality issues"
        ],
        viewProject: false,
        referLink:
            "https://www.itnews.com.au/news/bendigo-bank-launches-composable-lending-platform-602879#:~:text=The%20composable%20lending%20platform%20is,mortgage%20brokers%20nationwide%20in%202024."
    },
    {
        index: "02",
        imageName: aftershock,
        projectName: "AFTERSHOCK",
        company: "Arkade",
        projectTime: "2021",
        imagePositionReverse: false,
        skills: [
            "React.js",
            "Next.js",
            "Prismic",
            "Shopify Plus",
            "Algolia",
            "GraphQL"
        ],
        tecSkills: null,
        projectLink: "https://www.aftershockpc.com.au/",
        projectIntro: `A leading platform for customized high-performance gaming computers and laptops in Australia.Technologies Used: Specialized in creating a fast, responsive, and intuitive user interface using a mix of React.js and Next.js for server-side rendering.
                       `,

        keyAchievements: [
            "Implemented dynamic routing with Next.js to optimize SEO performance and improve the site's search engine rankings.",
            "Developed reusable React components that enhanced site maintainability and consistency."
        ],
        viewProject: true
    },
    {
        index: "03",
        imageName: sheetsSociety,
        projectName: "SHEETS SOCIETY",
        imagePositionReverse: true,
        company: "Arkade",
        projectTime: "2021",
        skills: ["React.js", "Next.js", "Prismic", "Shopify Plus", "Algolia"],
        tecSkills: null,
        projectLink: "https://sheetsociety.com/en-au",
        projectIntro: `Spearheaded the front-end development for Sheet Society, an elegant platform that offers premium bed linens and homewares, focusing on delivering a modern and user-friendly shopping experience.`,
        keyAchievements: [
            "Played a pivotal role in content strategy by using Prismic, streamlining the content update process and ensuring that the brand's voice and aesthetics are uniformly presented.",
            "Implemented a mobile-first design approach, ensuring that the website offers an optimal viewing experience across a range of devices - from mobile phones to desktop monitors."
        ],
        viewProject: true
    },
    {
        index: "04",
        imageName: maap,
        projectName: "MAAP",
        company: "Arkade",
        projectTime: "2022",
        imagePositionReverse: false,
        skills: ["React.js", "Next.js", "Redux", "Shopify plus", "Algolia"],
        tecSkills: null,
        projectLink: "https://maap.cc/au",
        projectIntro: `Maap is an upscale platform dedicated to offering high-quality cycling apparel. `,
        keyAchievements: [
            "Devised modular and scalable React components that became the foundation for various site features, ensuring maintainability and a cohesive visual narrative.",
            "Worked with client support to provide effective troubleshooting and remediation for web applications"
        ],
        viewProject: true
    }
]
