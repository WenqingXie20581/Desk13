import { UserAccomplishment } from "./UserAccomplishment";
import { UserCredential } from "./UserCredential";
import { UserProfile } from "./UserProfile";

export interface User {

    id: number;
    token : string;
    credential : UserCredential;
    profile : UserProfile;
    accomplishment: UserAccomplishment;

}

/**1、字符串转ObjectId

mongoose.Types.ObjectId(id);

2、ObjectId转字符串

mongoose.Types.ObjectId(id).toString() */



/** 旧数据结构
id: string;
emailAddress: string;
username: string;
password: string;
likedRecipeIds: String[];
accomplishedRecipeIds: String[];
uploadedRecipeIds: String[];
*/