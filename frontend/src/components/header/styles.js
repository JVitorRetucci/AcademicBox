import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 35px;
    border-bottom: 4px solid rgba(227, 227, 227,0.75);
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
    }
    

    .cube{
        max-height: 70px;
        max-width: 65px;
        height: auto;
        width: auto;
        fill: #FE913F;
    }
`

export const Nav = styled.nav`
  margin: 0 25px;
  height: 100%;
  display: flex;
  align-items: center;
  float: right;
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  margin-right: 20px;
  padding: 2px 10px;
  background-color: #7e7e7e;
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

    button {
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

  .register {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .loginBox {
    display: none;
  }

  .shown {
    display: block;
  }
`;
// export const ProfileImg = styled.img`
//     height: 50px;
//     width: 50px;
//     border: solid 2px #7E7E7E;
//     border-radius: 40px;
// `;

export const ProfileImg = styled.div`
  height: 50px;
  width: 50px;
  border: solid 2px #7e7e7e;
  border-radius: 40px;

  svg {
    max-height: 50px;
    max-width: 50px;
    height: auto;
    width: auto;
  }
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 70px;
  right: 100px;

  .arrowDown {
    max-height: 10px;
    max-width: 10px;
    height: auto;
    width: auto;
    margin-right: 35px;
    fill: #a5a4a4;
    float: right;
  }

  .box {
    display:flex;
    flex-direction: column;
    margin-top: 15px;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    padding: 5px 15px;

    a {
      margin: 5px;
      background-color: #5b5b5b;
      color: white;
      border-radius: 20px;
      font-size: 12px;
      padding: 3px 5px;
      text-transform: uppercase;
    }

    .myIcon {
      max-height: 25px;
      max-width: 25px;
      height: auto;
      width: auto;
    }

    .loginInput {
      background-color: #ebebeb;
      height: 18px;
      margin: 3px;
      padding: 5px;
      display: flex;
      align-content: center;
      justify-content: center;
      border-radius: 20px;
    }

    input {
      background: none;
      border: none;
      color: #c1c1c1;
    }

    input::placeholder {
      color: #c1c1c1;
      text-transform: uppercase;
    }

    button {
      margin: 3px 0 3px 100px;
      background-color: #5b5b5b;
      color: white;
      border-radius: 20px;
      font-size: 12px;
      padding: 3px 5px;
      text-transform: uppercase;
    }

    button:hover {
      cursor: pointer;
    }
  }

  .boxII{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    height: 100%;
    width: fit-content;
    background-color: white;
    border-radius: 15px;
    padding: 5px 15px;

    a {
      margin: 5px;
      background-color: #5b5b5b;
      color: white;
      border-radius: 20px;
      font-size: 12px;
      padding: 3px 5px;
      text-transform: uppercase;
    }

    button {
      margin: 5px;
      background-color: #5b5b5b;
      color: white;
      border-radius: 20px;
      font-size: 12px;
      padding: 3px 5px;
      text-transform: uppercase;
    }

    button:hover {
      cursor: pointer;
    }
  }
`;

export const SearchBar = styled.div`
    background-color: rgb(255, 255, 255);
    height: 36px;
    width: 520px;
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    padding-right: 20px;
    border-radius: 30px;
    font-size: 36px;
    color: #717171;


    a {
    height: 36px;
    color: #717171;
    text-decoration: none;
    }

    .sButton:hover {
    cursor: pointer;
    }
`;

export const Input = styled.input`
  font-size: 24px;
  height: 30px;
  width: 480px;
  border: none;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const AddContentButton = styled.button`
    background: #FD600E;
    border: none;
    margin-left: 30px;
    font-size: 42px;
    font-weight: bolder;
    cursor: pointer;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

