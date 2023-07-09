import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AppContext from "@/AppContext";
import { Languages } from "@/language/type";

export default function Header() {
  const { languageContext } = useContext(AppContext);
  const { setLanguageSelected, state } = languageContext;
  const { language, languageSelected } = state;
  const { header } = language;

  const languageOptions: Languages[] = ["pt-br", "en", "es"];

  return (
    <header>
      <Link href="/">
        <Image src="/img/react.png" alt="React" width={70} height={60} />
        <span>React Context API</span>
      </Link>
      <div>
        <Link href="/about">{header.aboutLink}</Link>
        <Link href="/contact">{header.contactLink}</Link>
        <select onChange={(e) => setLanguageSelected(e.target.value)}>
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
      </div>
    </header>
  );
}
