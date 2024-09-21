import lang from '../../service/lang/eng/en.json';

export const inputOptions = {
    'email': {
        required: lang.enterYourEmail,
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: lang.enterValidEmail
        }
    },
    'name': {
        required: `${lang.please} ${lang.enterYourName}`,
    },
    'password': {
        required: `${lang.please} ${lang.enterPassword}`,
        minLength: {
            value: 8,
            message: lang.passwordMustContains.replace(/{{COUNT}}/, '8')
        }
    }
};
