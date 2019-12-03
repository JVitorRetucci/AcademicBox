import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background: linear-gradient(
    183deg,
    rgba(248, 246, 246, 1) 0%,
    rgba(246, 238, 228, 1) 66%
  );
`;

export const MainBody = styled.div`
         display: flex;
         flex-direction: column;
         width: 800px;
         justify-content: center;
         margin: 0 auto;

         h1 {
           margin-top: 50px;
           font-size: 32px;
           color: #747474;
         }

         h2 {
           font-size: 24px;
           color: #747474;
           padding: 5px 20px;;
           border: 1px solid #e8e8e8;
           border-radius: 12px;
           background: white;
         }
       `;

export const Comments = styled.div``;