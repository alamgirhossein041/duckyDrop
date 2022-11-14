import React from "react";
import Head from "next/head";
import Sidebar from "./pages/layouts/sidebar/sidebar";
import style from "./styles/Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={style.container}>
      <Head>
        <title>DApp - Ducky Drop</title>
        <meta
          name="description"
          content="Want to send a crypto airdrop? Use Ducky Drop and massdropping crypto in a ducky way!"
        />
        <link rel="icon" href="/svg/favicon.svg" />
      </Head>
      <Sidebar />
      {children}
    </div>
  );
}
