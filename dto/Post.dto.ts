export interface PostDto {
    users:any;
    text:string;
    images:[string];
    time:[string];
    likes:any;
    comments:any;
}


export interface CommentDto {
    users:any;
    text:string;
    time:[string];
    likes:any;
}