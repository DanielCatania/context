import React from "react";
import Header from "./Header";
import Main, { IMain } from "./Main";

export default function Screen(props: IMain) {
  return (
    <div id="screen">
      <Header />
      <Main {...props} />
    </div>
  );
}
