import { Request, Response, NextFunction, json } from 'express';
import jwt from 'jsonwebtoken';

export const protectedMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const header = req.headers.authorization;
    
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ status: 401, message: '❌ Não autorizado: token ausente ou inválido.' });
    }
    
    const token = header.split(' ')[1];

    if(!token) {
        return res.status(401).json({ status: 401, message: '❌Não autorizado: token ausente.' });
    }

    // Verificar e decodificar o token JWT
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        
        if (err) {
            return res.status(401).json({ 
                status: 401,
                message: '❌ Não autorizado: token inválido.' 
            });
        }

        // Adicionar as informações do usuário ao objeto da requisição
        res.json(decoded);
        next();
    });


}