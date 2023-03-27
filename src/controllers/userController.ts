import {Request, Response} from 'express';
import {User} from '../models/User';

export const userForm = (req: Request, res: Response) => {
    let users = User.getAll()
    res.render('pages/userForm', {users});
};

export const userAction = (req: Request, res: Response) => {
    let user = User.getAge(req.body.nome);
    //console.log(req.body.nome);
    let age = user[0].age;
    console.log(age);
    res.render('pages/userForm', {age});
};