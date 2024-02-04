import BeesModel from "@/models/Bees";
import UserModel from "@/models/Bees"
import connectDB from "@/utils/connectDB"
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const bees = await BeesModel.find();

        return NextResponse.json(
            {
                data: bees,
            },
            { status: 200 }
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            { status: 500 }
        );
    }
}


export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const {
            title,
            description,
            benefits,
        } = await req.json();


        if (
            !title ||
            !description
        ) {
            return NextResponse.json(
                { error: "لطفا اطلاعات معتبر وارد کنید" },
                { status: 400 }
            );
        }

        benefits.map((item: { titleBenefit: string; descriptionBenefit: string }) => {
            if (!item.titleBenefit || !item.descriptionBenefit) {
                return NextResponse.json(
                    { error: "لطفا اطلاعات معتبر وارد کنید" },
                    { status: 400 }
                );
            }
        })

        const newBees = await BeesModel.create({
            title,
            description,
            benefits
        });
        return NextResponse.json(
            { message: "اطلاعات جدید اضافه شد" },
            { status: 201 }
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            { status: 500 }
        );
    }
}
