type errorsType = {
    [key: string]: string
};

type themesType = errorsType;

export const saveToLocalStorage = () => {

};

export const getFromLocalStorage = () => {

};

export const authErrors: errorsType = {
    'auth/invalid-credential' : 'Invalid username or password',
    'auth/email-already-in-use' : 'Email already exist'
};

export const changeColorSvg = (svg: SVGElement, theme: string = 'light') => {
    const themeMap: themesType = {
        'light': '#121F24',
        'dark': '#CEE2EB'
    }
    svg.classList.add('svg-class-name');
    svg.setAttribute('fill', themeMap[theme]);
};