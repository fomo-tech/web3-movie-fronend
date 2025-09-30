"use client";

import React from "react";
// import VideoPlayer from '@/lib/VideoPlayer';
import VideoArtPlayer from "@/lib/ArtPlayer";

interface VideoPlayProps {
  link_m3u8: string;
  poster: string;
}
const VideoPlay = ({ link_m3u8, poster }: VideoPlayProps) => {
  return (
    <div className="aspect-video">
      <VideoArtPlayer
        option={{
          url: link_m3u8,
          poster: poster,
          fullscreen: true,
          pip: true,
          setting: true,
          playbackRate: true,
          fastForward: true,
          autoOrientation: false,
          flip: true,
          lock: true,
          hotkey: true,
          lang: "vi",
          theme: "#e84142",
          autoplay: false,
        }}
      />
    </div>
  );
};

export default VideoPlay;
