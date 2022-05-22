

import Head from "next/head"

import { FC } from "../../interfaces"
import { isClientSide } from "../../utils";
import { Navbar } from '../ui';

interface Props {
  title?: string
}

const origin = isClientSide()?window.location.origin:''

export const Layout: FC<Props> = ({ children, title }) => {
  
  return (
   <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Oniel Santos"/>
        <meta name="description" content={`Información sobre el pokémon ${title} `}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>

    <Navbar />

    <main style={{
      padding: '0px 20px',
      
    }}>
        { children }
    </main>
   </>
  )
}
