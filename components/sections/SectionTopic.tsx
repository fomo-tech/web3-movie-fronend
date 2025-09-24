"use client";

import React from "react";

const topics = [
  {
    title: "Hành động",
    href: "hanh-dong.html",
    desc: "Xem phim hành động gay cấn, kịch tính với những pha chiến đấu mãn nhãn, cập nhật mới nhất và trọn bộ full HD.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Cổ trang",
    href: "co-trang.html",
    desc: "Tuyển tập phim cổ trang Trung Quốc, Hàn Quốc lãng mạn, cung đấu, kiếm hiệp đặc sắc – xem miễn phí trọn bộ.",
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Hài hước",
    href: "hai-huoc.html",
    desc: "Phim hài hước vui nhộn, giải trí, mang lại tiếng cười sảng khoái. Cập nhật phim hài chiếu rạp và series hot nhất.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Hoạt hình",
    href: "hoat-hinh.html",
    desc: "Xem phim hoạt hình Disney, Anime, Pixar hay nhất, phù hợp cho cả gia đình. Thưởng thức ngay bản lồng tiếng và phụ đề full HD.",
    gradient: "from-purple-500 to-fuchsia-600",
  },
];

const SectionTopic = () => {
  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title mb-3">Chủ đề</h2>
              <div className="section__nav">
                <div className="splide__arrows splide__arrows--ltr">
                  <button
                    className="splide__arrow splide__arrow--prev"
                    type="button"
                    aria-label="Go to last slide"
                    aria-controls="section-contests-track"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                  </button>
                  <button
                    className="splide__arrow splide__arrow--next"
                    type="button"
                    aria-label="Next slide"
                    aria-controls="section-contests-track"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic) => (
                <a
                  key={topic.title}
                  href={topic.href}
                  className={`relative p-6 rounded-2xl shadow-md text-white bg-gradient-to-r ${topic.gradient} transform transition hover:scale-105 hover:shadow-xl`}
                >
                  <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                  <p className="text-sm opacity-90">{topic.desc}</p>

                  {/* Arrow icon */}
                  <span className="absolute bottom-4 right-4 p-2 bg-white/20 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 7L7 17"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7h9v9"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Header */}
      </div>
    </section>
  );
};

export default SectionTopic;
