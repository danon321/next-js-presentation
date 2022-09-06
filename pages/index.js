import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello, this is Welcome Page</h1>
      <Link href="/items"> All Items </Link>
    </div>
  )
}
