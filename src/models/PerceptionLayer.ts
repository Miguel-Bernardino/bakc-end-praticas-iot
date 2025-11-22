import { Schema, model } from "mongoose"

export interface IPerceptionLayer extends Document {
  temperature?: number;
  humidity?: number;
  lux?: number;
  motionSensor?: number;
  ultrasonicSensor?: number;
  colors?: string;
  button?: number;
  createdAt: Date; 
  [key: string]: any; // <-- permite qualquer campo extra no TypeScript
}

const perceptionLayerSchema = new Schema<IPerceptionLayer>(
  {
    temperature:     { 
      type: Number,                               
    },
    humidity:    { 
      type: Number, 
    },
    lux: { 
      type: Number,        
    },
    motionSensor: { 
      type: Number, 
    },
    ultrasonicSensor: { 
      type: Number, 
    },
    colors: { 
      type: String, 
    },
    button: { 
      type: Number, 
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