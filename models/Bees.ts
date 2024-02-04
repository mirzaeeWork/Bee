import { Schema, models, model, Model } from "mongoose";

export type MongobeesType = {
    title: string;
    description: string;
    benefits:[{
        titleBenefit:string,
        descriptionBenefit:string
    }]

};

export type BeesModelType = Model<MongobeesType>;


const beesSchema = new Schema<MongobeesType>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    benefits:[{
        titleBenefit:{type:String,required: true},
        descriptionBenefit:{type:String,required: true}
    }]
},
    {
        timestamps: true,
    }
);

const BeesModel: BeesModelType = models.Bees || model<MongobeesType>('Bees', beesSchema);

export default BeesModel