"use client";

import React from "react";

const topics = [
  {
    title: "Hành động",
    href: "hanh-dong.html",
    desc: "Xem phim hành động gay cấn, kịch tính với những pha chiến đấu mãn nhãn, cập nhật mới nhất và trọn bộ full HD.",
    gradient: "gradient-blue",
  },
  {
    title: "Cổ trang",
    href: "co-trang.html",
    desc: "Tuyển tập phim cổ trang Trung Quốc, Hàn Quốc lãng mạn, cung đấu, kiếm hiệp đặc sắc – xem miễn phí trọn bộ.",
    gradient: "gradient-purple",
  },
  {
    title: "Hài hước",
    href: "hai-huoc.html",
    desc: "Phim hài hước vui nhộn, giải trí, mang lại tiếng cười sảng khoái. Cập nhật phim hài chiếu rạp và series hot nhất.",
    gradient: "gradient-green",
  },
  {
    title: "Hoạt hình",
    href: "hoat-hinh.html",
    desc: "Xem phim hoạt hình Disney, Anime, Pixar hay nhất, phù hợp cho cả gia đình. Thưởng thức ngay bản lồng tiếng và phụ đề full HD.",
    gradient: "gradient-orange",
  },
];

const SectionTopic = () => {
  return (
    <section className="topics">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title">Chủ đề</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="topics__grid">
              {topics.map((topic) => (
                <a
                  key={topic.title}
                  href={topic.href}
                  className={`topic-card ${topic.gradient}`}
                >
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                  <span className="topic-card__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTopic;
