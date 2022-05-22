import { Grid, Card } from "@nextui-org/react"
import { FC } from "../../interfaces"
import { FavoriteCardPokemon } from "./"

interface Props {
    pokemons: number[]
}

export const FavoritesPokemons:FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
            pokemons.map( id => (
                <FavoriteCardPokemon key={id} pokeId={id} />
            ))
        }
    </Grid.Container>
  )
}
