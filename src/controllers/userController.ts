import {     Request, Response, NextFunction     } from 'express';
import { attemptToLogUser, attemptToRegisterUser } from '../services/userService';


export const LogUser = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const user = await attemptToLogUser(req.body);

        res.status(200).json({ message: 'Usuário logado com sucesso!', user });

    } catch (error) {
        next(error);
    }

};

export const RegisterUser = async (req: Request, res: Response, next: NextFunction) => {
  
    try {

        const user = await attemptToRegisterUser(req.body);
        
        res.status(201).json({ message: 'Usuário criado com sucesso!', user });

    } catch (error) {
        next(error);
    }

};