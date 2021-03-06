import { pokeApi } from "../api"
import { PokemonFullResponse } from '../interfaces/pokemon-full';

export const  getPokemonInfo = async (nameOrId: string)=>{
    try{
        const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${nameOrId}`)
        return { 
            id: data.id,
            name: data.name,
            sprites: data.sprites    
        }
    }
    catch(error){
        return null;
    }
}