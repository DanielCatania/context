import React, { useContext } from "react";
import AppContext from "@/AppContext/";
import Screen from "@/components/Screen";

export default function AboutScreen() {
  const { languageContext } = useContext(AppContext);
  const { aboutPage } = languageContext.state.language;

  return <Screen {...aboutPage} />;
}
