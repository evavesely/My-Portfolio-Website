import '@/styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }) {
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}