export type IUser = {
    id?: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
    user_type: string;
    heroes: string[];
};
