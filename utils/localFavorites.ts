import { isClientSide } from "./isClientSide"

const FavoritesItemName = 'favorites'


const getFavorites = ():number[]=>{
    return JSON.parse(localStorage.getItem(FavoritesItemName) || '[]') 
}

const setFavorites = (favorites: number[])=>{
    localStorage.setItem(FavoritesItemName, JSON.stringify(favorites))

}

const toggleFavorite = (id: number)=>{
    let favorites = getFavorites()

    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId=>pokeId !== id)
    }
    else{
        favorites.push(id)
    }
    setFavorites(favorites)
}

const existInFavorites = (id: number): boolean=>{
    const favorites = getFavorites()
    return favorites.includes(id)
}



export default {
    toggleFavorite,
    existInFavorites,
    pokemons: getFavorites
}