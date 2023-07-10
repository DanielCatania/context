import React, { useContext } from "react";
import AppContext from "@/AppContext/";
import Screen from "@/components/Screen";

export default function ContactScreen() {
  const { languageContext } = useContext(AppContext);
  const { contactPage } = languageContext.state.language;

  return <Screen {...contactPage} />;
}
