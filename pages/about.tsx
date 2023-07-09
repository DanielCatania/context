import React, { useContext } from "react";
import AppContext from "@/AppContext/";
import Header from "@/components/header";

export default function AboutScreen() {
  const { languageContext } = useContext(AppContext);
  const { aboutPage } = languageContext.state.language;

  return (
    <>
      <Header />
      <h1>{aboutPage.title}</h1>
      <p>{aboutPage.description}</p>
    </>
  );
}
