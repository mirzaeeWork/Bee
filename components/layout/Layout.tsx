import styles from '@/components/layout/Layout.module.css'
import Header from './Header'
import Footer from './Footer';
function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout