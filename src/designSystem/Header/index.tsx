import { Logo } from "../Logo";
import { TextInput } from "../TextInput";
import "./index.scss";

export const Header = () => {

    return (
    <div className="header flex-col w-full fixed pb-12">
    <div className="header__top flex w-full"/>
      <div className="header__bottom flex container lg mx-auto w-full">
       <Logo />
       <div className="flex mt-12 ml-4">
        <TextInput name="search" value="" placeholder="search" onChange={e => console.log(e)} error=""/>
       </div>
      </div>
    </div>
    );
};
