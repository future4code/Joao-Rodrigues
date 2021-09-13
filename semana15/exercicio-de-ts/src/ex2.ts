const obterEstatisticas = (numeros: number[])=>{
    const numerosOrdenados = numeros.sort(
        (a, b) => a -b
    )

    let soma: number = 0

    for(let num of numeros){
        soma += num
    }

    type estatisticas = {
        maior: number,
        menor: number,
        media: number
    }

    const minhasEstatisticas: estatisticas = {
        maior: numerosOrdenados[numeros.length-1],
        menor: numerosOrdenados[0],
        media: soma/numeros.length
    }

    return minhasEstatisticas
}

type amostraIdades = {
    numeros: number[],
    minhasEstatisticas: (estatisticasDosNumeros: number[]) => any
}

const minhasIdades: amostraIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    minhasEstatisticas: obterEstatisticas
}

console.log(minhasIdades.minhasEstatisticas(minhasIdades.numeros))





