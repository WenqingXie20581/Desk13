import { Ingredient } from './Ingredient';

export interface Recipe {
    id: number;
    title: string;
    introduction: string;
    nationality: string;
    ingredients : Ingredient[];
    directions : string[];
    imgUrl: string;
}
