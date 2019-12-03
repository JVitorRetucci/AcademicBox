import styled from 'styled-components';

export const Holder = styled.div`

         margin: 25px 0 0px 25px;
         padding: 10px;
         border: 3px solid #efefef;
         border-radius: 10px;
         height: 250px;
         width: 250px;
         background-color: white;

         a {
           text-decoration: none;
           line-clamp: 1;
           max-lines: 1;
         }

         h3 {
           font-size: 16px;
           padding: 5px;
           text-transform: uppercase;
           color: #878787;
           max-lines: 1;
           line-clamp: 1;
           max-width: 40ch;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }

          
        p{
            padding: 5px;
            height: 180px;
            /* word-break: break-all; */
            font-size: 14px;
            color: #A8A8A8;
        }

          button{
              margin: 3px;
              padding: 4px 2px 2px 4px;
              border: none;
              background: none;
          }

         button:hover {
           cursor: pointer;
         }

         label {
           padding: 5px;
           color: #a8a8a8;
           display: block;
           align-items: center;
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

