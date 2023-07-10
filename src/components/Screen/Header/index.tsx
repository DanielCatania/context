import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AppContext from "@/AppContext";
import { Languages } from "@/language/type";
import style from "./style.module.css";

export default function Header() {
  const { languageContext } = useContext(AppContext);
  const { setLanguageSelected, state } = languageContext;
  const { language, languageSelected } = state;
  const { header } = language;

  const languageOptions: Languages[] = ["pt-br", "en", "es"];

  return (
    <header className={style["header"]}>
      <Link href="/" className={`${style["logo"]} ${style["link"]}`}>
        <Image src="/img/react.png" alt="React" width={70} height={60} />
        <span>React Context API</span>
      </Link>
      <nav className={style["nav"]}>
        <Link href="/about" className={style["link"]}>
          {header.aboutLink}
        </Link>
        <Link href="/contact" className={style["link"]}>
          {header.contactLink}
        </Link>
        <select
          className={style["language-menu"]}
          onChange={(e) => setLanguageSelected(e.target.value)}
        >
          {languageOptions.map((languageOption) => (
            <option
              value={languageOption}
              selected={languageOption === languageSelected}
              key={languageOption}
            >
              {languageOption}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
