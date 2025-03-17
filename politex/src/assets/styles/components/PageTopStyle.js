import styled from "styled-components";
import {fontMontserrat} from "@/assets/styles/abstract/variables";

const PageTopStyle = styled.div`
  position: relative;
  z-index: 10;
  .header__top {
    background: #15523D;
    width: 100%;

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }
    
    .header__top__icons {
      display: none;
      align-items: center;
      z-index: 6;
    }
    .icon{
      padding: 0!important;
      margin-right: 20px;
      a {
        margin-right: 18px;

        &:last-child {
          margin-right: 0;
        }
        img {
          width: 30px !important;
          height: 30px !important;
        }
      }
     
    }

    .header__top__list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style-type: none;
      padding: 0;
      margin: 0;
      z-index: 6;
    }

    .header__top__list__item {
      &.lang {
        display: none;
      }

      padding: 15px 30px;

      a {
        color: #fff;
        font-family: ${fontMontserrat}, sans-serif;
        font-size: 1rem;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        display: flex;
        align-items: center;

        span {
          margin-left: 20px;
          display: inline-block;
        }
      }
    }

    .swiperLinks {
      overflow: hidden;
    }
    .phoe_and_email {
        display: flex;
    }


    @media screen and (max-width: 1512px) {
      .header__top__list__item {
        padding: 8px 30px;
        span {
          font-size: 0.7rem;
        }
      }
      .icon{
        padding: 0!important;
        margin-right: 20px;
        a {
          margin-right: 18px;

          &:last-child {
            margin-right: 0;
          }
          img {
            width: 25px !important;
            height: 25px !important;
          }
        }

      }

      .header__top__list__item a span {
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 1200px) {
      .container {
        justify-content: space-between;
      }

      .header__top__list__item {
        &.lang {
          display: block;
        }

        padding: 15px 9px;
      }
      .header__top__list__item a {
        font-size: 0.7rem;
      }

      .header__top__icons {
        display: flex!important;
        width: 220px;
      }

      .header__top__list .right {
        display: none;
      }
    }
    @media screen and (max-width: 930px){
      .phoe_and_email{
        display: block;
        .header__top__list__item {
          padding: 3px 0;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .header__top__list__item:nth-child(3) {
        display: none;
      }

      .header__top__list__item a {
        font-size: 0.5rem;
        span{
          font-size: 0.5rem;
        }
      }

      .header__top__icons {
        width: 135px;
      }
      .icon{
        margin-right: 10px;
        a {
          margin-right: 15px;
          
          img {
            width: 18px !important;
            height: 18px !important;
          }
        }


        .header__top__list__item.lang {
        padding-right: 0;
      }
      
    }
    @media screen and (max-width: 398px) {
      .phoe_and_email {
          display: none;
      }
    }
  }
`;

export default PageTopStyle;

