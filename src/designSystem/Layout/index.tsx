import { ReactNode } from "react";
import PropTypes from "prop-types";
import { Header } from "../Header";
import "./index.scss";
import { Footer } from "../Footer";

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex grid">
      <Header />
      <div className="container lg flex mx-auto layout__container">
        <div className="grid mt-54">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

 Layout.propTypes = {
  children: PropTypes.node,
 };