import styled from "styled-components";

export const NumberInstWrapper = styled.div`
  position: relative!important;
  aspect-ratio: 10 / 4;
  overflow: hidden;
  
  #myVideo {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 85%;
    padding: 20px;
    height: 380px;
    border: 5px solid #ffffff;
    backdrop-filter: blur(2px);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
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
    aspect-ratio: 10 / 7;
    
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
    aspect-ratio: 10 / 8;

  }
  @media only screen and (max-width: 520px) {
    aspect-ratio: 10 / 10;
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
