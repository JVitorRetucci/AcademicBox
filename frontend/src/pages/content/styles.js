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

         p {
           margin-top: 20px;
           font-size: 24px;
           color: #747474;
           padding: 5px 20px;
           border: 1px solid #e8e8e8;
           border-radius: 12px;
           background: white;
         }

         div:first-of-type {
           margin-top: 20px;
           display: flex;
           justify-content: space-between;
           align-items: center;

           .likes {
             display: flex;
             justify-content: center;
             align-items: center;
             margin-top: 0;
             font-size: 24px;
             padding: 5px 20px;
             border-radius: 12px;
             background: white;
             fill: white;

             .aButton{
               background:none;
               border: none;
             }

             .aButton:hover{
               cursor: pointer;
             }

             div {
              margin-top: 0;
             }
             .dislike {
               transform: rotate(180deg);
             }

             span {
               padding: 0 10px;
             }
           }

           a {
             display: block;
             font-size: 24px;
             color: #747474;
             padding: 5px 20px;
             border: 1px solid #e8e8e8;
             border-radius: 12px;
             background: white;
           }
         }
       `;

export const Comments = styled.div`
h2 {
  margin-top: 50px;
  font-size: 32px;
  color: #747474;
  margin-bottom: 20px;
}

ul li {
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 20px;
  font-size: 24px;
  color: #747474;
  padding: 5px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  background: white;

  svg {
    width: 40px;
  }

  span {
    margin-left: 10px;
  }
}
`;

export const SuggestionForm = styled.form`

  display: flex;
  flex-direction: column;

  label {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    color: #878787;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  textarea {
    font-size: 18px;
    height: 200px;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 10px;
    resize: none;
    margin-bottom: 30px;
  }

  button {
    background: #484848;
    border: none;
    border-radius: 4px;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 28px;
    cursor: pointer;
    margin-bottom: 50px;
  }

  button:hover {
    background: #242424;
  }
`;