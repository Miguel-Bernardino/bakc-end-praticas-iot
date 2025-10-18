import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';


export const attemptToLogUser = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const user = await userService.attemptToLogUser(req.body);

        res.status(200).json({ message: 'Usuário logado com sucesso!', user });

    } catch (error) {
        next(error);
    }

};

export const attemptToRegisterUser = async (req: Request, res: Response, next: NextFunction) => {
  
    try {

        const user = await userService.attemptToRegisterUser(req.body);
        
        res.status(201).json({ message: 'Usuário criado com sucesso!', user });

    } catch (error) {
        next(error);
    }

};