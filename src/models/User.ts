import { Schema, model } from "mongoose"
import bcrypt from 'bcryptjs';

export interface IUser{
    name: string;
    email: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, select: false },
    },
    { timestamps: true }
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // só faz hash se a senha mudou
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export const User = model<IUser>('User', userSchema);