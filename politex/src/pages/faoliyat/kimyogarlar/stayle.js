import styled from "styled-components";

export const ChemistsStyle = styled.div`
  .box{
    display: flex;
    gap: 20px;
    margin-top: 80px;
    align-items: flex-start; /* Text rasm tepasidan boshlanadi */
  }
  .image {
    position: sticky;
    top: 100px;
    width: 350px;
    border-radius: 5%;
    box-shadow: rgba(27, 107, 80, 1) 0 5px 15px;
  }
  @media only screen and (max-width: 1512px) {
    .image{
      width: 300px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .image{
      width: 200px;
    }
  }
  @media only screen and (max-width: 985px) {
    .box{
      margin-top: 30px;
    }
    .image{
      top: 20px;
      width: 200px;
    }
  }
  @media only screen and (max-width: 620px) {
    .box{
      display: block;
      gap: 20px;
    }
    .image{
      position: relative;
      top: 110px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
    }
    .text{
      margin-top: 20px;
    }
  }
  
`