import React, { useContext } from "react";
import AppContext from "@/AppContext/";
import Header from "@/components/header";

export default function HomeScreen() {
  const { languageContext } = useContext(AppContext);
  const { homePage } = languageContext.state.language;

  return (
    <>
      <Header />
      <h1>{homePage.title}</h1>
      <p>{homePage.description}</p>
    </>
  );
}
