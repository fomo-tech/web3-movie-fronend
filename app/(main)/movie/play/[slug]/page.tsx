import ArtPlayer from '@/lib/ArtPlayer';
import { getMovie, getMoviesByCategory } from '@/services/movie';
import { MovieDetailResponse, MovieResponse, SearchParams } from '@/types/movie';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import InfoPlayer from '../../component/InfoPlayer';
import TabDetail from '../../component/TabDetail';
import VideoPlay from '../../component/VideoPlay';

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
export default async function WatchMovie({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: SearchParams;
}) {
    const [{ slug }, sp] = await Promise.all([params, searchParams]);

    const data = await getMovie<MovieDetailResponse>(slug);


    if (!data) {
        return notFound();
    }

    const episode = sp.episode;

    const episodeData =
        data.item.episodes[0].server_data.find(
            (server) => server.slug === episode
        ) || data.item.episodes[0].server_data[0];

    if (!episodeData.link_m3u8) {
        return notFound();
    }
    console.log(data);

    return (
        <section className="container mx-auto my-6">
            {/* Player wrapper */}
            <div className="overflow-hidden ">
                <VideoPlay
                    link_m3u8={episodeData.link_m3u8}
                    poster={`${process.env.NEXT_PUBLIC_CDN_IMAGE_MOVIE}/uploads/movies/${data.item.poster_url}`}
                />
                {/* Info section */}
                <div className=" px-6 py-4">
                    <InfoPlayer movie={data.item} />
                </div>
            </div>
        </section>


    )
}