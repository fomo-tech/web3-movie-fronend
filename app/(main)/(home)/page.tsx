import AdsEarning from "@/components/sections/AdsEarning";
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
  const [heroMovies, whatMovieToWhatToday, moviesHome] = await Promise.all([
    getMovies<MovieResponse>("phim-moi"),
    searchMovies<MovieResponse>(),
    getHome<MovieResponse>(),
  ]);

  return (
    <>
      {/* hero */}
      <HeroSection movies={heroMovies.items || []} />
      <MoviesToday
        movies={whatMovieToWhatToday.items || []}
        title="Phim được xem nhiều"
      />
      <AdsEarning />
      <MoviesToday movies={heroMovies.items || []} title="Phim mới" />
    </>
  );
}
