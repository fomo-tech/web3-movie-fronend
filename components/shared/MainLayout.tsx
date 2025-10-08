"use client";

import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Category, National } from "@/types/movie";
import { useMovie } from "@/store/useMovie";
import SearchPopup from "../ui/SearchPopup";

interface MainLayoutProps {
  children?: React.ReactNode;
  categoriesMovie: Category[];
  nationsMovie: National[];
}

const MainLayout = ({
  children,
  categoriesMovie,
  nationsMovie,
}: MainLayoutProps) => {
  const { setCategories, setNationals } = useMovie();

  useEffect(() => {
    setCategories(categoriesMovie);
    setNationals(nationsMovie);
  }, [nationsMovie, categoriesMovie]);
  return (
    <>
      <Sidebar />
      <SearchPopup />
      <main className="main">
        <Header />
        <div className="main__content">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
