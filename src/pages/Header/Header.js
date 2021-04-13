import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import Search from "../../components/Search/Search";
import classes from "./Header.module.scss";
import { connect } from "react-redux";
import BurgerMenu from "../../components/UI/BurgerMenu/BurgerMenu";
import SearchButton from "../../components/UI/SearchButton/SearchButton";
import SideNav from "../../components/SideNav/SideNav";

function Header({ showSearch, showNav }) {
  return (
    <>
      <header className={classes.MobileHeader}>
        <nav className={classes.MobileNav}>
          <BurgerMenu />
          <SideNav show={showNav} />
          <Logo />
          <SearchButton type={"mobile"} />
          <Search show={showSearch} />
        </nav>
      </header>
      <header className={classes.WebHeader}>
        <nav className={classes.WebNav}>
          <Logo />
          <SideNav />
        </nav>
      </header>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    showSearch: state.showSearch,
    showNav: state.showNav,
  };
};

export default connect(mapStatetoProps)(Header);
