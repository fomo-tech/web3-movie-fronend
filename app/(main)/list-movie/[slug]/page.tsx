import Breadcrumbs from "@/components/common/Breadcrumbs";
import { ROUTES } from "@/routes";
import React from "react";

import { getMovies } from "@/services/movie";
import { MovieResponse } from "@/types/movie";
import { Metadata } from "next";
import Catalog from "../components/Catalog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ✅ SEO metadata (server-side)
export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;

  const data = await getMovies<MovieResponse>(slug, { limit: 1 });

  return {
    title: data?.seoOnPage?.titleHead || "Danh sách phim",
    description: data?.seoOnPage?.descriptionHead,
    openGraph: {
      type: data?.seoOnPage?.og_type,
      images: data?.seoOnPage?.og_image,
      url: data?.seoOnPage?.og_url,
    },
  };
};

const ListMovies = async ({ params }: PageProps) => {
  const { slug } = await params;

  const data = await getMovies<MovieResponse>(slug, {
    limit: 24,
    page: 1,
  });

  return (
    <>
      <section className="section">
        <div className="max-w-90 mx-auto">
          <div className="row">
            <div className="col-12">
              <div className="section__head">
                <h1 className="section__title section__title--head">
                  {data.breadCrumb?.[0]?.name || "Danh sách phim"}
                </h1>

                <Breadcrumbs
                  items={[
                    { label: "Trang chủ", href: "/" },
                    { label: "Danh sách phim" },
                    {
                      label: data.breadCrumb?.[0]?.name || slug,
                      href: `${ROUTES.movies}/${slug}`,
                      active: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Catalog: client component */}
      <Catalog
        apiType="getMovies"
        slug={slug}
        movies={data.items || []}
        totalPagesInit={Math.ceil(data.params.pagination.totalItems / 24)}
      />
    </>
  );
};

export default ListMovies;
