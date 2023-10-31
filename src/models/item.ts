import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car";

const ItemSchema = new Schema<Car>({
    color: {
        
    }
},{
    timestamps: true,
    versionKey: false
});