import { Ingredient } from './Ingredient';

export interface Recipe {
    id: number;
    title: string;
    nationbality: string;
    ingredients : Ingredient[];
    directions : string[];
    }
