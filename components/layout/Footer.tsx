import styles from '@/components/layout/Footer.module.css'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { e2p } from "@/utils/replaceNumber"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div >
                    <p><FaLocationDot /> دماوند مزرعه شقایق </p>
                    <p><FaPhoneFlip /> {e2p("09034006197")} </p>
                    <p><MdEmail /> mirzaeesamane.work@gmail.com </p>
                </div>
                <div>
                    <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
                </div>

            </div>
        </footer>
    )
}

export default Footer