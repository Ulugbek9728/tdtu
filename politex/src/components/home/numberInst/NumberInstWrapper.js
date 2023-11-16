import styled from "styled-components";

export const NumberInstWrapper = styled.div`
  padding: 60px 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 150% 220%;
  .content {
    height: 380px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border: 5px solid #ffffff;
    backdrop-filter: blur(2px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 0 30px;
    .box {
      div{
        justify-content: center;
      }
      p {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 35px;
        color: #ffffff;
        text-align: center;
        &:last-child {
          margin-top: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 1512px) {
   
    .content {
      height: 300px;
      gap: 30px;
      padding: 0 20px;
      .box {
        p {
          font-size: 30px;
          line-height: 30px;
          &:last-child {
            margin-top: 20px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    padding: 40px 0;
    .content {
      height: 250px;
      gap: 20px;
      padding: 0 15px;
      .box {
        p {
          font-size: 20px;
          line-height: 20px;
          &:last-child {
            margin-top: 15px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 820px) {
    padding: 50px 0;
    .content {
      height: 400px;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0;
      .box {
        p {
          font-size: 25px;
          line-height: 32px;
          &:last-child {
            margin-top: 15px;
          }
        }
      }
      .box-1,
      .box-2,
      .box-4,
      .box-5 {
        width: 50%;
      }
      .box-3 {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 580px) {

  }
  @media only screen and (max-width: 520px) {
    padding: 50px 0;
    .content {
      height: 300px;
      .box {
        p {
          font-size: 20px;
          line-height: 130%;
          &:last-child {
            margin-top: 15px;
          }
        }
      }
    }
  }
`;
