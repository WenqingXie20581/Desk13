import { Ingredient } from './Ingredient';

export interface UploadRecipe {
    // id: number;
    title: string;
    nationality: string;
    introduction: string;
    ingredients : Ingredient[];
    directions : string[];
    popularity : number;
    pictureFile: File;
}
