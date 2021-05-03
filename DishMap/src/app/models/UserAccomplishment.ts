export interface UserAccomplishment {
    id: number;
    likedRecipeIds : number[];
    completedRecipeIds: number[];
    uploadedRecipeIds: number[];
}