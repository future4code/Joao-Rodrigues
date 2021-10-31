import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    #jogo-container{
        width: 35%;
        height: 100%;
        padding: 60px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        #logo{
            display: flex;
            align-items: center;
            
            img{
                margin-right: 20px;
            }
        }
    }

    @media(max-width: 420px){
        flex-direction: column;
        align-items: center;

        #jogo-container{
            width: 100%;
            height: 50%;
            align-items: center;
        }
    }

`

const ContainerNumeros = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    background-color: #EFEFEF;
    padding: 60px;

    #div, #sorteio, #aviso{
        height: 33%;
        display: flex;
    }

    #sorteio{
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    #aviso{
        font-size: 1rem;
        justify-content: center;
        align-items: flex-end;
    }

    @media(max-width: 420px){
        width: 100%;
        height: 50%;
        padding: 20px;

        #sorteio{
            height: 80%;
            /* justify-content: center; */
        }

        #aviso{
            height: 20%;
        }

        #div{
            height: 0;
        }

        span{
            font-size: 12px;
            padding: 0 50px;
            text-align: center;
        }
    }
`

const Logo = styled.p`
    font-size: 1.875rem;
    font-weight: bold;
    text-transform: capitalize;
`

export{
    Container,
    Logo,
    ContainerNumeros
}