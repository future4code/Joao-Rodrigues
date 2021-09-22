describe('Testando mocks', ()=>{
    test('Criando mocks', ()=>{
        const validatorMock = jest.fn(()=>{
            return true
        })
    })

    test('Criando mocks', ()=>{
        const validatorMock = jest.fn(()=>{
            return false
        })
    })
})