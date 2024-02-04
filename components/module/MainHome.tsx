import Image from 'next/image'
import styles from '@/components/module/MainHome.module.css'
import connectDB from '@/utils/connectDB';
import BeesModel, { MongobeesType } from '@/models/Bees';
import { Types } from 'mongoose';

export type MongoBees = MongobeesType & {
    _id: Types.ObjectId;
};


async function MainHome() {
    await connectDB()
    const bees = await BeesModel.find() as MongoBees[] | undefined;
    // console.log(bees)
    if (!bees) return <h3>مشکلی پیش آمده است</h3>;
    const bee = bees[0]
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/images/multi-bees.png" alt="multi-bees" />
            </div>
            <h3>{bee.title}:</h3>
            <p>{bee.description}.</p>

            <div className={styles.image}>
                <img src="/images/single-bee.png" alt="multi-bees" />
            </div>


            {bee.benefits.length ? (
                <ul>
                    {bee.benefits.map((item, index) => (
                        <li key={index}>
                            <span>{item.titleBenefit} : </span>
                            <span>{item.descriptionBenefit}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                null
            )}

        </div>
    )
}

export default MainHome