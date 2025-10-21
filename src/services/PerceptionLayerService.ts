import { IPerceptionLayer, PerceptionLayer } from '../models/PerceptionLayer';

// --- Checagem das Credenciais ---
const checkCredentials = (perceptionLayerData?: any): any => {
    const perceptionLayer = perceptionLayerData || {};

    if (!perceptionLayer || typeof perceptionLayer !== 'object' || perceptionLayer.temperature != 0
        || perceptionLayer.humidity != 0  || perceptionLayer.lux != 0
        || perceptionLayer.motionSensor != 0 || perceptionLayer.lifeProbability != 0) {
        return false;
    }

    return perceptionLayer;
};

export async function sendPerceptionLayerData(perceptionLayerData: IPerceptionLayer) : Promise<any> {
    
    const checkedperceptionLayerData: any = checkCredentials(perceptionLayerData);


    if (!checkedperceptionLayerData) {
        return { status: 400, message: 'Os valores de temperatura, umidade, lux, sensor de movimento e probabilidade de vida são obrigatórios.' };
    }

    const newPerceptionLayer = new PerceptionLayer({ 
        temperature: checkedperceptionLayerData.temperature,
        humidity: checkedperceptionLayerData.humidity,
        lux: checkedperceptionLayerData.lux,
        motionSensor: checkedperceptionLayerData.motionSensor,
        lifeProbability: checkedperceptionLayerData.lifeProbability,
    });

    await newPerceptionLayer.save();
    return { status: 201, message: 'Dados da camada de percepção registrados com sucesso.' };
}

export async function getLastValuesPerceptionLayerData(numberOfValues: number = 100) : Promise<any> {
    
    try {

        const recentPerceptionLayerValues = await PerceptionLayer.find({})
          .sort({ createdAt: -1 }) // -1 para ordem decrescente (mais recentes primeiro)
          .limit(numberOfValues);             // Limita o resultado aos documentos

        console.log('Dados recebidos na camada de serviço:', recentPerceptionLayerValues);
        const status = { status: 200, data: recentPerceptionLayerValues };

        return { recentPerceptionLayerValues, status };
        
    } catch (err) {

        const status = { status: 500, message: 'Erro ao buscar os dados da camada de percepção.' };
        return { recentPerceptionLayerValues: null, status };
    }   

}