import React from "react";
import style from "./style.module.css";

export interface IMain {
  title: string;
  description: string;
}

export default function Main({ title, description }: IMain) {
  return (
    <main className={style["main"]}>
      <h1 className={style["title"]}>{title}</h1>
      <p className={style["description"]}>{description}</p>
    </main>
  );
}
