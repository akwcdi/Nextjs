import Head from 'next/head'
import styles from './Layout.module.css'
import utilstyles from '../styles/utils.module.css'

const name = 'sample blog'
export const sitetitle = 'sample'

function Layout({ children }) {
  return (
    <div className={styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilstyles.borderCircle}>
        </img>
        <h1 className={utilstyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;