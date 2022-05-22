export const isClientSide = ():boolean=>{
    return typeof window === 'object'
}