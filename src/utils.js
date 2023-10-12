import aftershock from "../src/assets/images/aftershock.png"
import maap from "../src/assets/images/maap.png"
import sheetsSociety from "../src/assets/images/sheetsSociety.png"
import BendigoBank from "../src/assets/images/Bendigo_bank.png"

export const projects = [
    {
        index: "01",
        imageName: BendigoBank,
        projectName: "LENDING PORTAL",
        company: "",
        projectTime: "",
        imagePositionReverse: true,
        skills: ["HTML", "CSS3", "React.js", "Next.js"],
        projectLink: "https://sheetsociety.com/en-au",
        projectIntro: `We track and monitor our domestic carbon footprint,
                            and in 2021 we offset our local emissions with
                            credits that support the Yarra Yarra Biodiversity
                            Corridor project in Western Australia.`
    },
    {
        index: "02",
        imageName: aftershock,
        projectName: "AFTERSHOCK",
        imagePositionReverse: false,
        skills: ["HTML", "CSS3", "React.js", "Next.js", "redux", "Prismic"],
        projectLink: "https://maap.cc/au",
        projectIntro: `We track and monitor our domestic carbon footprint,
                            and in 2021 we offset our local emissions with
                            credits that support the Yarra Yarra.`
    },
    {
        index: "03",
        imageName: sheetsSociety,
        projectName: "SHEETS SOCIETY",
        imagePositionReverse: true,
        skills: ["HTML", "CSS3", "React.js", "Next.js"],
        projectLink: "https://sheetsociety.com/en-au",
        projectIntro: `We track and monitor our domestic carbon footprint,
                            and in 2021 we offset our local emissions with
                            credits that support the Yarra Yarra Biodiversity
                            Corridor project in Western Australia.`
    },
    {
        index: "04",
        imageName: maap,
        projectName: "MAAP",
        imagePositionReverse: false,
        skills: ["HTML", "CSS3", "React.js", "Next.js", "redux"],
        projectLink: "https://maap.cc/au",
        projectIntro: `We track and monitor our domestic carbon footprint,
                            and in 2021 we offset our local emissions with
                            credits that support the Yarra Yarra.`
    }
]
