import styled from 'styled-components';

export const Holder = styled.div`
    margin: 25px 0 0px 25px;
    padding: 10px;
    border: 3px solid #efefef;
    border-radius: 10px;
    height: 250px;
    width: 250px;
    background-color: white;

    h3{
        font-size: 16px;
        padding: 5px;
        text-transform: uppercase;
        color: #878787;
    }

    p{
        padding: 5px;
        height: 180px;
        /* word-break: break-all; */
        font-size: 14px;
        color: #A8A8A8;
    }

    button{
        border: none;
        background: none;
    }

    button:hover{
        cursor: pointer;
    }

    label{
        padding: 5px;
        color: #A8A8A8;
        display: block;
        align-items:center;
        text-align: right;
        margin: 0 auto;
    }

    svg{
        margin-right: 3px;
        max-height: 20px;
        max-width: 20px;
        height: auto;
        width: auto;
    }
`;