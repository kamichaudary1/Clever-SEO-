export interface UserListType {
    userThumbnail: string;
    userTitle: string;
    userDescp: string;
  }
  
  export interface UsersDataType {
    userTitle: string;
    userTagline: string;
    usersList: UserListType[];
  }