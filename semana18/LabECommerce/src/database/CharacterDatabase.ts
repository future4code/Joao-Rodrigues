import { Character } from "../entities/Character"
import { BaseDatabase } from "./BaseDatabase"

export class CharacterDatabase extends BaseDatabase {
  private TABLE_NAME = "character"

  // private connection: any

  // constructor() {
  //   this.connection = connection
  // }

  async create(character: Character) {
    await BaseDatabase.connection(this.TABLE_NAME)
         .insert(character)
  }
  
  async getAll() {
    return BaseDatabase.connection(this.TABLE_NAME).select()
  }
}
