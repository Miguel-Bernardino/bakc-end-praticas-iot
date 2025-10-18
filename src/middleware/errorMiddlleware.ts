import { Request, Response, NextFunction } from 'express';

interface PersonError extends Error {
    status?: number;
    message: string;
}

export const errorHandler = (err: PersonError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || '❌ Erro interno do servidor';

    res.status(statusCode).json({
        message: message,
    });
};