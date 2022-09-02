export interface ISignUpNecessaryData {
    name: string;
    birthday: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export interface ISignInNecessaryData {
    email: string;
    password: string;
};
