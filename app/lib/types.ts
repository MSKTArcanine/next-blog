export type Post = {
    id:number;
    author:{username:string};
    content:string;
    createdAt:Date;
    desc:string;
    is_published:boolean;
    title:string;
}
export type FormState = {
    username:string;
    error:boolean;
}

export type User = {
    username:string;
    password:string;
}

export type FormLogin = {
    username:string;
    error:boolean;
}