export interface User {
    id: string;
    emailAddress: string;
    username: string;
    password: string;
    likedRecipeIds: String[];
    accomplishedRecipeIds: String[];
    uploadedRecipeIds: String[];
}

/**1、字符串转ObjectId

mongoose.Types.ObjectId(id);

2、ObjectId转字符串

mongoose.Types.ObjectId(id).toString() */