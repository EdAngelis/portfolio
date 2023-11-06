interface ICores {
    primary?: string;
    secondary?: string;
    accent?: string;
    error?: string;
    background?: string;
    font?: string;
    darkGray?: string;
    fontDark?: string;
    backgroundWhiteTransparent?: string;
}
export interface ITheme {
    light: ICores;
    dark: ICores;
    bra: ICores;
    eua: ICores;

}

const themes: ITheme = {
    light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    },
    dark: {
        primary: '#131A2B',
        secondary: '#ffffff',
        accent: '#000000',
        error: '#ffffff',
        background: '#01091C',
        font: '#E4EBF0',
        fontDark: '#A6ADB9',
        backgroundWhiteTransparent: 'rgba(248, 250, 252, 0.1)',
    },
    bra: {
        primary: '#04BF00',
        secondary: '#ffffff',
        darkGray: '#0F0F0F',
        error: '#ffffff',
        background: '#01091C'
    },
    eua: {
        primary: '#0D7CFF',
        secondary: '#ffffff',
        darkGray: '#0F0F0F',
        error: '#ffffff',
        background: '#01091C'
    } 
    };

export default themes;