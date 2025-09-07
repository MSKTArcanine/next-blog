export type Post = {
    id:number;
    author:{username:string};
    content:string;
    createdAt:Date;
    desc:string;
    is_published:boolean;
    title:string;
}