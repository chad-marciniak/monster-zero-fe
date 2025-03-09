import { Logo } from "../Logo";
import { SearchInput } from "../SearchInput";
import "./index.scss";

export const Header = () => {
  return (
    <div className="header flex-col w-full fixed pb-4">
      <div className="header__top flex w-full" />
      <div className="header__bottom flex container lg mx-auto w-full mt-8">
        <Logo />
        <div className="flex ml-4 search--input-container">
          <SearchInput
            name="search"
            className="search__input"
            value=""
            placeholder="search"
            onChange={(e) => console.log(e)}
            error={false}
          />
        </div>
      </div>
      <div className="header__bottom--border w-full mt-4 mb-4">
        sub header 
      </div>
    </div>
  );
};
