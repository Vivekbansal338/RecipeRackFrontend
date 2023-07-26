import "./Header.css";

import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";

function Header({ handleShowSidebar, showSidebar }) {
  return (
    <header className="header">
      <HeaderLeft
        handleShowSidebar={handleShowSidebar}
        showSidebar={showSidebar}
      />
      <HeaderSearch />
      <HeaderNav />
      <HeaderRight />
    </header>
  );
}

export default Header;
