

import Head from "next/head"

import { FC } from "../../types/"

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
   <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Oniel Santos"/>
        <meta name="description" content={`Información sobre el pokémon ${title} `}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
    </Head>

    { /* Navbar */ }

    <main>
        { children }
    </main>
   </>
  )
}
