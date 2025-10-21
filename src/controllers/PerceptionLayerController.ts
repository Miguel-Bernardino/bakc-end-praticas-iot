import {     Request, Response, NextFunction     } from 'express';
import * as PerceptionLayerService from '../services/PerceptionLayerService';

export const sendPerceptionLayerData = async (req: Request, res: Response, next: NextFunction) => {
  
    try {

        const perceptionLayerData = await PerceptionLayerService.sendPerceptionLayerData(req.body);
        if (perceptionLayerData.status === 201) {
            res.status(201).json({ message: 'Valores da Camada de Percepção Enviados com Sucesso!', perceptionLayerData });
        } else {
            res.status(perceptionLayerData.status).json({ message: perceptionLayerData.message });
        }

    } catch (error) {
        next(error);
    }

};

export const getLastValuesPerceptionLayerData = async (req: Request, res: Response, next: NextFunction) => {

    try {

        //const numberOfValues = req.query.numberOfValues ? parseInt(req.query.numberOfValues as string, 10) : 1;
        const { recentPerceptionLayerValues, status } = await PerceptionLayerService.getLastValuesPerceptionLayerData(100) || {};
        
        if (status) {
            res.status(status.status).json({ message: 'Dados da camada de percepção recuperados com sucesso.', data: recentPerceptionLayerValues });
        } else {
            res.status(status.status).json({ message: status.message });
        }

    } catch (error) {
        next(error);
    }

};