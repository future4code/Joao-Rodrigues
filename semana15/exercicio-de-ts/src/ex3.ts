type post = {
    autor: string,
    texto: string
}

const post1: post = {
    autor: 'Latino',
    texto: 'Renata, ingrata! Trocou o meu amor por uma ilusão.'
}

const post2: post = {
    autor: 'Romario',
    texto: 'Pelé calado é um poeta'
}

const post3: post = {
    autor: 'Mc Gorila',
    texto: 'Vou escurecer sua familia'
}

const arrayDePost: post[] = [post1, post2, post3]

const buscarPostPorAutor = (posts: post[], autorInformado: string)=>{
    return posts.filter((post)=>{
        return post.autor === autorInformado
    })
}

console.log(buscarPostPorAutor(arrayDePost, 'Romario'))