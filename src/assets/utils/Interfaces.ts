export interface FormatProps {
    mode: boolean,
    aboutLinks: {
        id: number,
        title: string,
        path: string,
        company: string
    }[]
}

export interface Mode {
    mode: boolean
}

export interface NavProps {
    mode: boolean,
    dark: any
}

export interface MainColumnProps {
    mode: boolean,
    title: string,
    description: string,
    skills: any[],
    backgroundColor: string,
    frame: string,
    portfolioLinks: {
        id: number,
        title: string,
        link: string
    }[]
}