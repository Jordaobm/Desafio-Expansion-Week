import styled, { keyframes } from 'styled-components';

//

const appearFromLeft = keyframes`

from {
    color:#090E18;
    opacity:0;
    transform: translateX(-300px);

} to{
    color:#65BF73;
    opacity:1;
    transform: translateX(0);
}

`;

const appearWatch = keyframes`

0% {
    opacity:0;
    color:#090E18
}
50% {
    opacity:0;
    color:#DE1306;
}
100% {
    opacity:1;
    color:#DE1306;
}

`;


export const Header = styled.div`
background:#090E18;
padding:0 2%;

`;

export const Container = styled.div`
    padding: 0 2%;
    display:flex;
    width:100%;
    height:100vh;
    max-width:1200px;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;

    @media(max-width: 850px) {
        flex-direction: column;
        justify-content:center;
    }
`;

export const ContentText = styled.div`
    @media(max-width: 850px) {
        position:relative;
        top:-30px;
    }

`;

export const ContentImage = styled.div`
    animation: ${appearWatch} 7s;
    


`;

export const PatienceText = styled.div`


    p {
        
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 55px;
        /* identical to box height */

        display: flex;
        align-items: center;
        letter-spacing: 0.05em;

        color: #FFF;
    }

    h1{
        animation: ${appearFromLeft} 3s;

        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 110px;
        line-height: 70px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;

        color: #65BF73;

        @media(max-width: 850px) {
            font-size: 50px;
    }
    }

`;

export const ArrowDown = styled.div`
    position:relative;
    top:-120px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width: 850px) {
        position:relative;
        top:-100px;
    }

`;



export const ContainerText = styled.div`
    padding:0 2%;
    margin-top:100px;
    width:100%;
    max-width:1200px;
    margin:0 auto;
    text-align:justify;
    


`;

export const ContainerFlexCards = styled.div`

    display:flex;
    
    

`;

export const Card = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    max-width:33.33%;
    padding:0 10px;
    


`;

export const CardImage = styled.div`
    align-items:center;

    min-height:300px;

    img {
        max-width:350px;
        background-size:100% 100%;
    }

`;

export const Text1 = styled.div`

    margin:50px 0 100px 0 ;

    h1{
        
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 70px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        
    }
    p{
        margin-top:18px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        
        /* identical to box height */

        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
    }


`;

export const Text2 = styled.div`
    display:flex;
    @media(max-width: 850px) {
       flex-direction:column !important;
    }

`;

export const IconAlert = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;


    @media(max-width: 850px) {
        width:100%;
        margin:50px 0;
    }
`;

export const Text = styled.div`
    
    
`;


export const CardText = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;

    background: #DE1306;
    /* Shadow/ Red */

    box-shadow: 5px 5px 5px #F3A39E;
    border-radius: 0 30px 0 0;  

    padding:18px 36px 20px 18px;
    color:#fff;

    @media(max-width: 850px) {
        width:100%;
    }


`;

export const CardTextChecked = styled.div`

    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;

    background: #65BF73;
    /* Shadow/ Green */

    box-shadow: 5px 5px 5px #93C69B;
    border-radius: 30px 0 0 0;  

    padding:18px 18px 20px 36px;
    color:#fff;

    @media(max-width: 850px) {
        width:100%;
    }
`;


const loading = keyframes`

0% {
    transform: rotate(0deg)
}
100% {
    transform: rotate(360deg)
}

`;


export const AnimatedLoading = styled.div`
    margin: 0 auto;
    width:60px;
    height:60px; 
    animation: ${loading} 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

export const Footer = styled.div`
    margin-top:80px;
    width:100%;
    background:#090E18;

`;


