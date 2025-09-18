
import CatalogSection from "@/components/ui/CatalogSection";
import HeroSection from "@/components/ui/HeroSection";
import { getMetadata, getMovies } from "@/services/movie";
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

  const [heroMovies] =
    await Promise.all([
      getMovies<MovieResponse>('phim-moi', {
        limit: 5
      })
    ]);


  return (
    <>
      {/* hero */}
      <HeroSection movies={heroMovies.items || []} />
      <CatalogSection />
    </>

  );
}
