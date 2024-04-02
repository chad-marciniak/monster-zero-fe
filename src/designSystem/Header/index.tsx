import { Logo } from "../Logo";
import "./index.scss";

export const Header = () => {

    return (
    <div className="header flex-col w-full fixed pb-12">
    <div className="header__top flex w-full"/>
      <div className="header__bottom flex container lg mx-auto w-full">
       <Logo />
      </div>
    </div>
    );
};
