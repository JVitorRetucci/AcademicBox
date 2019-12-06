import styled from 'styled-components';

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
  padding: 20px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  input {
    font-size: 18px;
    height: 40px;
    width: 480px;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 0 10px;
  }

  textarea {
    font-size: 18px;
    height: 200px;
    width: 480px;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 10px;
    resize: none;
    margin-bottom: 30px;
  }

  button {
    margin-top: 20px;
    background: #484848;
    border: none;
    border-radius: 4px;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 28px;
    cursor: pointer;
  }

  button:hover{
    background: #242424;
  }
`;