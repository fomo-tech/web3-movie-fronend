"use client";

import { ActorResponse, People } from "@/types/movie";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar_0 from "@/img/avatar-0.svg";

interface ActionListProps {
  actors: ActorResponse;
}
const ActiorList = ({ actors }: ActionListProps) => {
  return (
    <div className="actor-list mt-5">
      <h2 className="actor-list__title">Diễn viên & Đạo diễn</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        loop
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="pb-10"
      >
        {actors.peoples.map((p, index) => {
          const profile_src = p.profile_path
            ? `${actors.profile_sizes.h632}/${p.profile_path}`
            : avatar_0;

          return (
            <SwiperSlide key={index}>
              <div className="actor-card">
                <Image
                  src={profile_src}
                  alt={p.original_name}
                  width={120}
                  height={120}
                  className="actor-card__avatar"
                />
                <h3 className="actor-card__name">{p.original_name}</h3>
                <p className="actor-card__role">
                  {p.known_for_department || "N/A"}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ActiorList;
