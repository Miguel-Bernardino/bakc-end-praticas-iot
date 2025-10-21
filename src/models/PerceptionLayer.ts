import { Schema, model } from "mongoose"

export interface IPerceptionLayer extends Document {
  temperature?: number;
  humidity?: number;
  lux?: number;
  motionSensor?: number;
  lifeProbability?: number;
  createdAt: Date; 
}

const perceptionLayerSchema = new Schema<IPerceptionLayer>(
  {
    temperature:     { 
      type: Number, 
      required: [true, " Valor da Temperatura é obrigatório" ],                                
    },
    humidity:    { 
      type: Number, 
      required: [true, "Valor da Humidade é obrigatório"], 
    },
    lux: { 
      type: Number, 
      required: [true, "Valor do Sensor de Luz é obrigatório"],            
    },
    motionSensor: { 
      type: Number, 
      required: [true, "Valor do Sensor de Movimento é obrigatório"],
    },
    lifeProbability: { 
      type: Number, 
      required: [true, "Valor da Probabilidade de Vida é obrigatório"],
    },
  },
  { timestamps: true }
);

perceptionLayerSchema.pre('save', async function(next) {

  next();
});

export const PerceptionLayer = model<IPerceptionLayer>('perceptionLayer', perceptionLayerSchema);