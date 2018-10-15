// Core
import { object, string, boolean } from 'yup';

export const login = {
    shape: {
        email:    'shh@fff.lo',
        password: '123456',
        remember: false,
    },
    schema: object().shape({
        email: string()
            .email()
            .required(),
        password: string()
            .min(5)
            .required(),
        remember: boolean(),
    }),
};

export const signup = {
    shape: {
        firstName: 'Sherlock',
        lastName:  'Holmes',
        email:     'shh@fff.lo',
        password:  '123456',
        invite:    '0ic2Sv7NuUJO',
    },
    schema: object().shape({
        firstName: string().required(),
        lastName:  string().required(),
        email:     string()
            .required()
            .email(),
        password: string()
            .required()
            .min(5),
        invite: string()
            .required()
            .min(12)
            .max(12),
    }),
};

export const newPassword = {
    shape: {
        oldPassword: '',
        newPassword: '',
    },
    schema: object().shape({
        oldPassword: string()
            .required()
            .min(5),
        newPassword: string()
            .required()
            .min(5),
    }),
};

export const composer = {
    shape: {
        comment: '',
    },
    schema: object().shape({
        comment: string()
            .required()
            .min(1),
    }),
};
