import Breadcrumbs from "@/components/common/Breadcrumbs";
import FilterMovie from "@/components/shared/FilterMovie";
import { ROUTES } from "@/routes";
import React from "react";
import Catalog from "./components/Catalog";
import { getMovies, searchMovies } from "@/services/movie";
import { MovieResponse } from "@/types/movie";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await searchMovies<MovieResponse>({
    limit: 1,
  });

  return {
    title: data.seoOnPage.titleHead,
    description: data.seoOnPage.descriptionHead,
    openGraph: {
      type: data.seoOnPage.og_type,
      images: data.seoOnPage.og_image,
      url: data.seoOnPage.og_url,
    },
  };
};

const ListMovies = async () => {
  const data = await getMovies<MovieResponse>("phim-moi", {
    limit: 28,
    page: 1,
  });

  return (
    <>
      {" "}
      <section className="section">
        <div className="max-w-90 mx-auto">
          <div className="row">
            <div className="col-12">
              <div className="section__head">
                {/* section title */}
                <h1 className="section__title section__title--head">
                  Danh sách phim
                </h1>
                {/* end section title */}
                {/* breadcrumbs */}
                <Breadcrumbs
                  items={[
                    {
                      label: "Trang chủ",
                      href: "/",
                    },
                    {
                      label: "Danh sách phim",
                      href: ROUTES.movies,
                      active: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* catalog*/}
      <Catalog
        movies={data.items || []}
        totalPagesInit={Math.ceil(data.params.pagination.totalItems / 24)}
      />
    </>
  );
};

export default ListMovies;
