import {        Router         } from 'express';
import * as PerceptionLayerController from '../controllers/PerceptionLayerController';

const router = Router();

router.post('/add', PerceptionLayerController.sendPerceptionLayerData);
router.get('/get', PerceptionLayerController.getLastValuesPerceptionLayerData);

export default router;