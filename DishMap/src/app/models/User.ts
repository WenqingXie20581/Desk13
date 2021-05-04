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