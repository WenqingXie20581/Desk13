import { Recipe } from '../models/Recipe'

export const RECIPES: Recipe[] = [
    {id: 1, title: 'burger', nationality: 'Germany', ingredients: [{name: 'beef', quantity: '1 kg', treatment: 'null'}], directions: ['fry' ,'done']},
    {id: 2, title: 'hot pot', nationality: 'China', ingredients: [{name: 'beef', quantity: '1 kg', treatment: 'null'}, {name: 'chili', quantity: '200 g', treatment: 'null'}], directions: ['boil' ,'done']}
]
