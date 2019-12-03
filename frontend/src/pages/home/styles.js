import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: linear-gradient(to bottom, #f2efef -1%,#f2efef 0%,#f8dfc5 62%,#f9b27f 100%);
`

export const HomeHeader = styled.header`
    height: 100px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    align-items: center;

    .logo{
        margin: 20px 40px;
        max-height: 100%;
        max-width: 290px;
        width: auto;
        height: auto;
    }
`;

export const Nav = styled.nav`
    margin: 0 25px;
    height: 100%;
    display: flex;
    align-items: center;
    float: right;
`

export const NavLinks = styled.ul`
    list-style-type: none;
    margin-right: 20px;
    padding: 2px 10px;
    background-color: #7E7E7E;
    border-radius: 15px;
    align-items: center;

    a {
        font-size: 14px;
        text-decoration: none;
        color: white;
        font-weight: lighter;
        text-transform: uppercase;
    }

    li {
        display: inline-block;
        align-items: center;
        padding: 0 10px;

        button{
            background: none;
            border: none;
        }

        a {
            font-size: 14px;
            text-decoration: none;
            color: white;
            font-weight: lighter;
            text-transform: uppercase;
        }
    }

    .register{
        border-right: 1px solid rgba(255,255,255,0.2);
    }

    .loginBox{
        display: none;
    }
    
    .shown{
        display: block;
    }
`
// export const ProfileImg = styled.img`
//     height: 50px;
//     width: 50px;
//     border: solid 2px #7E7E7E;
//     border-radius: 40px;
// `;

export const ProfileImg = styled.div`
    height: 50px;
    width: 50px;
    border: solid 2px #7E7E7E;
    border-radius: 40px;
    
    svg{
        max-height: 50px;
        max-width: 50px;
        height: auto;
        width: auto;
    }
`;

export const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 720px;
    padding-bottom: 100px;

    .label{
        width: 570px;
        float: left;

    }

    .input{
        background-color: rgb(255,255,255);
        height: 36px;
        width: 520px;
        display: flex;
        align-items: center;
        padding: 10px 30px;
        padding-right: 20px;
        border-radius: 30px;
        font-size: 36px;
        color: #717171;

        a{
            height: 36px;
            color: #717171;
            text-decoration: none;
        }

        .sButton:hover{
            cursor: pointer;
        }
    }
`;

export const Title = styled.h1`
    margin-left: 30px;
    font-size: 36px;
    float: left;
    color: #717171;
    font-family: 'M PLUS Rounded 1c', sans-serif;
`;

export const Input = styled.input`
    font-size: 24px;
    height: 30px;
    width: 480px;
    border: none;
`;

export const LoginBox = styled.div`
    position: absolute;
    top: 70px;
    right: 100px;

    .arrowDown{
        max-height: 10px;
        max-width: 10px;
        height: auto;
        width: auto;
        margin-right: 35px;
        fill: #A5A4A4;
        float: right;
    }

    .box{
        margin-top: 15px;
        height: 100%;
        background-color: white;
        border-radius: 15px;
        padding: 5px 15px;

        .myIcon{
            max-height: 25px;
            max-width: 25px;
            height: auto;
            width: auto;
        }

        .loginInput{
            background-color: #EBEBEB;
            height: 18px;
            margin: 10px 0;
            padding: 5px;
            display: flex;
            align-content: center;
            justify-content: center;
            border-radius: 20px;
        }

        input{
            background: none;
            border: none;
            color: #C1C1C1;
        }

        input::placeholder{
            color: #C1C1C1;
            text-transform: uppercase;
        }

        button{
            margin: 0 0 5px 100px;
            background-color: #5B5B5B;
            color: white;
            border-radius: 20px;
            font-size: 12px;
            padding: 3px 5px;
            text-transform: uppercase;
        }

        button:hover{
            cursor: pointer;
        }
    }
`;