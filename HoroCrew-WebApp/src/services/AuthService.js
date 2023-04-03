import { createHttp } from './BaseService';

const http = createHttp(false);


export const signUp = ({
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth
}

) => http.post("/signup",
    {
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
        dayOfBirth,
        monthOfBirth,
        yearOfBirth
    })

export const login = ({ email, password }) => http.post('/login', { email, password })