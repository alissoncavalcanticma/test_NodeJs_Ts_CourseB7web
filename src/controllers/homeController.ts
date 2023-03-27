import {Request, Response} from 'express';
//Importando Product Model
import {Product} from '../models/Product';

export const home = (req: Request, res: Response)=>{
    let persona = {
        name: "Alisson",
        age: 33,
        child: "Christian",
        show: true
    }

    let products = Product.getAll();

    let list = ["Alisson", "Fabiana", "Christian"];
    //let list = null;

    res.render('pages/home', {persona, products, list});
};