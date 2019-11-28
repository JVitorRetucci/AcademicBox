import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(183deg, rgba(248,246,246,1) 0%, rgba(246,238,228,1) 66%);
`;

export const MainBody = styled.div`
    padding: 50px;

    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;