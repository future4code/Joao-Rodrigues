import styled from 'styled-components'

const ContainerFooter = styled.footer`
    margin-top: 50px;
    padding: 10px 0;
    border-top: 1px solid #BEBEBE;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 0.90em;
    }
`
const ContainerSocialMedias = styled.div`
    display: flex;
    
    a{
        margin: 5px 10px;
    }
`
const Icon = styled.span`
    color: #0B3D92;
    font-size: 1.75em;
    transition: .3s;

    :hover{
        color: #FF301B;
    }
`

export{
    ContainerFooter,
    ContainerSocialMedias,
    Icon
}