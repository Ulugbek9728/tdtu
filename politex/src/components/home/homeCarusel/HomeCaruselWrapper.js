import styled from "styled-components";

import HOMECARUSEL from "@/assets/images/home/homeCarusel1.jpg";

export const HomeCaruselWrapper = styled.div`
  background-image: url(${HOMECARUSEL});
  .home-back {
    background-color: rgba(249, 249, 249, 0.9);
    padding: 60px 20px 20px 140px;
    
    .mySwiper {
      width: 100%;
      max-width: 1920px;
      margin: auto;
      .content {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 70px;
        .text {
          position: relative;
          width: calc(100% - 1200px);
          height: 763px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          .text-one {
            font-family: "Montserrat";
            font-weight: 900;
            font-size: 30px;
            line-height: 50px;
            color: #333333;
          }
         
          
        }
        .button-rigth {
          position: absolute;
          bottom: 55px;
          right: 71%;
        }
        img {
          border-radius: 10px;
          height: 763px;
          width: 1200px;
          object-fit: cover;
          object-position: center;
        }
      }
      .swiper-horizontal > .swiper-pagination-bullets,
      .swiper-pagination-bullets.swiper-pagination-horizontal,
      .swiper-pagination-custom,
      .swiper-pagination-fraction {
        bottom: 50px;
        width: max-content;
        text-align: start;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        display: inline-block;
        border-radius: 50%;
        background: #1b6b50;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: #1b6b50;
        width: 70px;
        height: 12px;
        border-radius: 5px;
      }
    }
    @media only screen and (max-width: 1770px) {
      .mySwiper {
        .content {
          gap: 70px;
          .text {
            width: calc(100% - 950px);
            height: 650px;
            .text-one {
              font-size: 26px;
              line-height: 35px;
            }
            .button-rigth {
              bottom: 60px;
            }
          }
          img {
            height: 650px;
            width: 950px;
          }
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
          bottom: 20px;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          display: inline-block;
          border-radius: 50%;
          background: #1b6b50;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #1b6b50;
          width: 70px;
          height: 12px;
          border-radius: 5px;
        }
      }
    }
    @media only screen and (max-width: 1512px) {
      padding: 60px 20px 20px 100px;
    }
    @media only screen and (max-width: 1350px) {
      .mySwiper {
        .content {
          gap: 70px;
          .text {
            width: calc(100% - 750px);
            height: 550px;
          }
          img {
            height: 550px;
            width: 750px;
          }
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          width: 40px;
          height: 8px;
        }
      }
    }
    @media only screen and (max-width: 1200px) {
      .mySwiper {
        .content {
          .text {
            width: calc(100% - 650px);
            height: 500px;
          }
          img {
            height: 500px;
            width: 650px;
          }
        }
      }
    }
    @media only screen and (max-width: 1000px) {
      .mySwiper {
        .content {
          gap: 50px;
          .text {
            width: calc(100% - 515px);
            height: 362px;
            .text-one {
              font-size: 20px;
              line-height: 24px;
            }
            
          }
          .button-rigth {
            left: 0%;
            bottom: 30px;
          }
          img {
            width: 515px;
            height: 362px;
          }
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
          bottom: 20px;
        }
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
        }
        .swiper-pagination-bullet-active {
          width: 35px;
          height: 6px;
        }
      }
    }
    @media screen and (max-width: 992px) {
      padding: 15px 5px 5px 60px;
      .mySwiper {
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
          bottom: 0;
        }
      
      }
    }
    @media screen and (max-width: 780px) {
      padding: 15px 10px 0px 10px;
      height: 500px;
      .mySwiper {
        height: 100%;
        .content {
          gap: 10px;
          flex-direction: column;
          .text {
            order: 2;
            width: 100%;
            height: max-content;
            .text-one {
              font-size: 20px;
              line-height: 24px;
              text-align: center;
              width: 100%;
            }
          }
          .button-rigth {
            left: 85% !important;
            bottom: 30px;
          }
          img {
            order: 1;
            width: 100%;
            height: 342px;
          }
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
          left: 20px;
          bottom: 15px;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          width: 40px;
          height: 8px;
        }
      }
    }
    @media screen and (max-width: 480px) {
      height: 450px;
      .mySwiper {
        .content {
          .button-rigth {
            bottom: 55px;
            left: 80%!important;
          }
          
          img {
            order: 1;
            width: 100%;
            height: 242px;
          }
        }
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
          left: 20px;
          bottom: 20px;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          width: 40px;
          height: 8px;
        }
      }
    }
  }
`;
