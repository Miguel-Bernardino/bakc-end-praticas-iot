import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

interface PersonError extends Error {
    status?: number;
    message: string;
}

export const errorHandler = (err: PersonError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || '❌ Erro interno do servidor';

    if (err instanceof mongoose.Error.ValidationError) {
        // Retorna 400 Bad Request

        return res.status(400).json({
            status: 'error',
            message: 'Falha na validação dos dados de entrada.',
        });
    }
    

    res.status(statusCode).json({
        message: message,
    });
};