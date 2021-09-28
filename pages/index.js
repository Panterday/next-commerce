import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { IconButton, Box, Button,  AppBar, Toolbar, Typography, Search, SearchIconWrapper,
Container, Link} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { display } from '@mui/system';
import Navigation from '../components/Navigation';

import HomeContent from '../components/HomeContent';
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <h1>HOME</h1>
      {/* <main className={styles.main}>
        <Button variant="contained" color="secondary">Hello World</Button>;
        <Typography variant="h1">HELLO</Typography>
      </main>

      <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
