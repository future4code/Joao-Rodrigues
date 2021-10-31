import { Character } from './../src/validateCharacter';
import { performAttack2 } from './../src/performAttack';
import {validateCharacter} from '../src/validateCharacter'
describe('Testando a funcao validateCharacter', ()=>{
    test('Ao inserir um character com nome vazio, devera retornar false', ()=>{
        const result = validateCharacter({
            name: '',
            life: 1500,
            defense: 500,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test('Ao inserir um character com life = 0, devera retornar false', ()=>{
        const result = validateCharacter({
            name: 'Ken',
            life: 0,
            defense: 500,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test('Ao inserir um character com strength = 0, devera retornar false', ()=>{
        const result = validateCharacter({
            name: 'Ken',
            life: 1500,
            defense: 500,
            strength: 0
        })

        expect(result).toBe(false)
    })

    test('Ao inserir um character com defense = 0, devera retornar false', ()=>{
        const result = validateCharacter({
            name: 'Ken',
            life: 1500,
            defense: 0,
            strength: 800
        })

        expect(result).toBe(false)
    })
    
    test('Ao inserir um character com campo number < 0, devera retornar false', ()=>{
        const result = validateCharacter({
            name: 'Ken',
            life: 1500,
            defense: -200,
            strength: 800
        })

        expect(result).toBe(false)
    })

    test('Ao inserir um character com campos validos, devera retornar true', ()=>{
        const result = validateCharacter({
            name: 'Ken',
            life: 1500,
            defense: 500,
            strength: 800
        })

        expect(result).toBe(true)
    })

    test("", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Ryu",
          life: 1500,
          defense: 200,
          strength: 600,
        }
    
        const defender: Character = {
          name: "Bison",
          life: 1500,
          defense: 400,
          strength: 800,
        }
    
        performAttack2(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Honda",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack2(attacker, defender, validatorMock as any);
        } catch (error) {
          const err = error as any
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });
})

