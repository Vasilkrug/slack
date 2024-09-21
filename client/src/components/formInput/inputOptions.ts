export const inputOptions = {
    'email' : {
        required: "Please enter your email",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email"
        }
    },
    'name': {
        required: 'Please enter your name',
    },
    'password': {
        required: 'Please enter your password',
        minLength: {
            value: 8,
            message: "Password must contain 8 characters"
        }

    }
};
