import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import PageTop from "@/components/header/PageTop";
// import Header from "@/layout/Header";
// import Footer from "@/layout/Footer";

// const PageTop = lazy(() => import("@/components/header/PageTop"));
const Header = lazy(() => import("@/locales/en/layout/Header"));
const Footer = lazy(() => import("@/locales/en/layout/Footer"));

const LayoutStyle = styled.div`
  .layout__content {
    transform: translateY(-80px);
  }

  @media screen and (max-width: 992px) {
    .layout__content {
      transform: translateY(0);
    }
  }
`;
const Layout = ({ children, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutStyle>
      <PageTop />
      <Suspense fallback={<span className="loader" />}>
        <Header />
      </Suspense>
      <div className="layout__content">{children}</div>
      <Suspense fallback={<span className="loader" />}>
        <Footer />
      </Suspense>
    </LayoutStyle>
  );
};

export default Layout;
