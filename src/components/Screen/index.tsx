import React, { useContext } from "react";
import Header from "./Header";
import AppContext from "@/AppContext";
import Main, { IMain } from "./Main";
import style from "./style.module.css";

export default function Screen(props: IMain) {
  const { themeContext } = useContext(AppContext);
  const { themeSelected } = themeContext.state;

  return (
    <div id="screen" className={style[themeSelected]}>
      <Header />
      <Main {...props} />
    </div>
  );
}
