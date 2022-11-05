import Head from 'next/head'
import styles from './Layout.module.css'

const name = 'sample blog'
export const sitetitle = 'sample'

function Layout({ children }) {
  return (
    <div className={styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header>
        <img src="/imgs/profile.png">
        </img>
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;