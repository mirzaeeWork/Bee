import type { Metadata } from "next";
import { yekan } from '@/utils/font'
import Layout from '@/components/layout/Layout'
import "./globals.css";


export const metadata: Metadata = {
  title: "فواید زنبور",
  description: "زنبور عسل یکی از موجودات حیاتی در طبیعت است که به طور مستقیم و غیرمستقیم بر زیست‌بوم و انسان‌ها تأثیر مثبت زیادی دارد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={yekan.className} dir="rtl">
      <Layout>
        {children}
      </Layout>
    </body>
  );
}


