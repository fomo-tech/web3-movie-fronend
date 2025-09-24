import CatalogSection from "@/components/sections/CatalogSection";
import HeroSection from "@/components/sections/HeroSection";
import MoviesToday from "@/components/sections/MovieToday";
import {
  getHome,
  getMetadata,
  getMovies,
  searchMovies,
} from "@/services/movie";
import { MovieResponse } from "@/types/movie";
import { Metadata } from "next";
import SectionTopic from "@/components/sections/SectionTopic";
import MovieSectionHome from "@/components/sections/MovieSectionHome";

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getMetadata<MovieResponse>();

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

export default async function Home() {
  const [
    heroMovies,
    whatMovieToWhatToday,
    moviesHome,
    singleMovie,
    seriesMovie,
    cartoonMovie,
  ] = await Promise.all([
    getMovies<MovieResponse>("phim-moi"),
    searchMovies<MovieResponse>(),
    getHome<MovieResponse>(),
    getMovies<MovieResponse>("phim-chieu-rap"),
    getMovies<MovieResponse>("phim-bo-dang-chieu"),
    getMovies<MovieResponse>("hoat-hinh"),
  ]);

  return (
    <>
      {/* hero */}
      <HeroSection movies={heroMovies.items || []} />
      <MovieSectionHome movies={whatMovieToWhatToday.items || []} />
      <SectionTopic />
      <MoviesToday
        movies={heroMovies.items || []}
        title="Phim mới"
        slideKey="1"
        isNew
      />
      <MoviesToday
        movies={singleMovie.items || []}
        title="Phim chiếu rạp"
        slideKey="2"
      />
      <MoviesToday
        movies={seriesMovie.items || []}
        title="Phim bộ"
        slideKey="3"
      />
      <MoviesToday
        movies={cartoonMovie.items || []}
        title="Phim hoạt hình"
        slideKey="4"
      />
    </>
  );
}
