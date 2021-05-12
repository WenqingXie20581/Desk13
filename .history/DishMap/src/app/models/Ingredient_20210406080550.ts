export class Ingredient {
    name : string;
    quantity : string;
    treatment : string;

    constructor(name:string,quantity:string,treatment:string){
        this.name = name;
        this.quantity=quantity;
        this.treatment = treatment;
    }
}