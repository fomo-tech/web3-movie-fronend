"use client";

import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Category, National } from "@/types/movie";
import { useMovie } from "@/store/useMovie";

interface MainLayoutProps {
  children?: React.ReactNode;
  categoriesMovie: Category[];
  nationsMovie: National[];
}

const MainLayout = ({ children, categoriesMovie }: MainLayoutProps) => {
  const { setCategories } = useMovie();

  useEffect(() => {
    setCategories(categoriesMovie);
  }, []);
  return (
    <>
      <Sidebar />
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
