import { Grid } from '@nextui-org/react'
import { FC, SmallPokemon } from '../../interfaces'
import { PokemonCard } from './PokemonCard'


interface Props {
    pokemons: SmallPokemon[]
}

export const PokemonList:FC<Props> = ({ pokemons }) => {

  return (
    <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon)=>(
            <PokemonCard 
              pokemon={pokemon}
              key={pokemon.id}
            />
          ))
        }
      </Grid.Container>
  )
}
