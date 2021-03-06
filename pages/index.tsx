import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api'

import { Layout } from '../components/layouts'
import { PokemonList } from '../components/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title='Listado de Pokémons'>
      <PokemonList pokemons={pokemons} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await  pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map(({name, url}, i)=>{
    const id = i+1
    return {
      name, 
      url, 
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }
  }) 

  return {
    props: {
      pokemons
    }
  }
}


export default HomePage
