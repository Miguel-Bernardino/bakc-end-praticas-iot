import { Schema, model } from "mongoose"

export interface IPerceptionLayer extends Document {
  temperature?: number;
  humidity?: number;
  lux?: number;
  motionSensor?: number;
  ultrasonicSensor?: number;
  createdAt: Date; 
  [key: string]: any; // <-- permite qualquer campo extra no TypeScript
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
    ultrasonicSensor: { 
      type: Number, 
      required: [true, "Valor do Sensor Ultrassônico é obrigatório"],
    },
  },
  { 
    timestamps: true,
    strict: false, 
  }
);

perceptionLayerSchema.pre('save', async function(next) {

  next();
});

export const PerceptionLayer = model<IPerceptionLayer>('perceptionLayer', perceptionLayerSchema);