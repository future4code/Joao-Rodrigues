export interface Character{
    name: string
    life: number
    defense: number
    strength: number
}


export const validateCharacter = (character: Character) =>{
    if( character.life <= 0 || 
        character.defense <= 0 ||  
        character.strength <= 0
    ){
        return false
    }

    if(
        !character.name ||
        character.life === undefined || 
        character.strength === undefined ||
        character.defense === undefined
    ){
        return false
    }


    return true
}