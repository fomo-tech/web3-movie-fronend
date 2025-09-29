import { getActors, getMovie, getMovies } from "@/services/movie";
import {
  ActorResponse,
  MovieDetailResponse,
  MovieResponse,
} from "@/types/movie";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TabDetail from "../component/TabDetail";
import Modal from "@/components/common/Modal";
import DetailInfo from "../component/DetailInfo";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;

  const data = await getMovie<MovieDetailResponse>(slug);

  if (!data) return {};

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

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [detail] = await Promise.all([
    getMovie<MovieDetailResponse>(slug),
    // getActors<ActorResponse>(slug),
    // getMovies<MovieResponse>("phim-moi-cap-nhat"),
  ]);

  if (!detail) {
    notFound();
  }
  return (
    <>
      <DetailInfo detail={detail} />
      {/* end movie */}
      <div className="section section--pt0">
        <div className="container">
          <TabDetail />
        </div>
      </div>
    </>
  );
}
