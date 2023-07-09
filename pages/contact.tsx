import React, { useContext } from "react";
import AppContext from "@/AppContext/";
import Header from "@/components/header";

export default function ContactScreen() {
  const { languageContext } = useContext(AppContext);
  const { contactPage } = languageContext.state.language;

  return (
    <>
      <Header />
      <h1>{contactPage.title}</h1>
      <p>{contactPage.description}</p>
    </>
  );
}
