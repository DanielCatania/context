import React, { useState } from "react";
import { AppProps } from "next/app";
import AppContext from "@/AppContext";
import languagesObject from "@/language";
import { Languages } from "@/language/type";
import "@/style/reset.css";
import "@/style/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [languageSelected, setLanguageSelected] = useState<Languages>("pt-br");
  const [themeSelected, setThemeSelected] = useState<"dark" | "light">("light");

  return (
    <AppContext.Provider
      value={{
        languageContext: {
          state: {
            language: languagesObject[languageSelected],
            languageSelected,
          },
          setLanguageSelected,
        },
        themeContext: {
          state: {
            themeSelected,
          },
          setThemeSelected,
        },
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
