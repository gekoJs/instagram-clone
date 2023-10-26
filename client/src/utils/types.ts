export type dataType = {
    message: string,
    data: post[] | null
    error?: string
} 

export interface post {
  id: string;
  description: string;
  postType: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  UserId: string;
  User: User;
  Comments?: CommentsEntity[] | null;
  Likes?: LikesEntity[] | null;
}
export interface User {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  password: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
}
export interface CommentsEntity {
  id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  PostId: string;
  UserId: string;
}
export interface LikesEntity {
  id: string;
  PostId: string;
  UserId: string;
}
