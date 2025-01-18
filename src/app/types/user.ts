export interface IUser {
    userId?: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile?: string | null;
    countryCode?: string;
    username: string;
    status?: boolean;
    password: string;
    lastLogin: string;
    avatar?: string;
    isAdmin?: boolean | null;
    isDeleted?: boolean;
}
