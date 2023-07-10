import React, { useContext } from "react";
import AppContext from "@/AppContext/";
import Screen from "@/components/Screen";

export default function HomeScreen() {
  const { languageContext } = useContext(AppContext);
  const { homePage } = languageContext.state.language;

  return <Screen {...homePage} />;
}
