import { Ingredient } from './Ingredient';

export interface Recipe {
    _id: string;
    title: string;
    introduction: string;
    nationality: string;
    ingredients : Ingredient[];
    directions : string[];
    imgUrl: string;
    popularity: number;
}
