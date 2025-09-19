'use client'

import { Movie } from '@/types/movie'
import React from 'react'
import TabDetail from './TabDetail'

interface InfoPlayerProps {
    movie: Movie
}

interface CastMember {
    name: string
    role: string
    img: string
}

const InfoPlayer = ({ movie }: InfoPlayerProps) => {
    const castMembers: CastMember[] = [
        { name: 'Triệu Cẩm Đào', role: 'Diễn viên', img: '/images/actor1.jpg' },
        { name: 'Vương Tinh Việt', role: 'Diễn viên', img: '/images/actor2.jpg' },
        { name: 'Hướng Hàm Chi', role: 'Diễn viên', img: '/images/actor3.jpg' },
        { name: 'Trần Hữu Duy', role: 'Diễn viên', img: '/images/actor4.jpg' },
    ]

    return (
        <div className="text-white px-8 py-12  max-w-4xl mx-auto font-sans">
            {/* Movie Title and Subtitle */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
                Định Phong Ba
            </h1>
            <p className="text-gray-400 italic text-lg mt-1">The Wanted Detective</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-6">
                <button className="px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-fuchsia-500 transition-colors duration-200">
                    Theo dõi
                </button>
                <button className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    Chia sẻ
                </button>
            </div>

            {/* Movie Info & Rating */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm sm:text-base text-gray-500">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-400">Đa ngôn ngữ</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-400">FULLHD</span>
                <span className="text-green-500 font-bold text-lg sm:text-xl">⭐ 4.6 (64)</span>
            </div>

            <div className="mt-3 text-gray-500 text-sm sm:text-base flex flex-wrap gap-2">
                <span>2025</span>
                <span className="text-gray-600">•</span>
                <span>T13</span>
                <span className="text-gray-600">•</span>
                <span>36/36 tập</span>
                <span className="text-gray-600">•</span>
                <span>Trung Quốc</span>
            </div>

            {/* Warning Tag */}
            <div className="mt-3 text-red-500 font-semibold text-base sm:text-lg">
                Bạo lực
            </div>

            {/* Movie Synopsis */}
            <p className="mt-5 text-gray-400 leading-relaxed text-base sm:text-lg max-w-3xl">
                Định Phong Ba xoay quanh hành trình minh oan của Tiêu Bắc Minh, một đại thần
                thám nổi danh nhờ trí tuệ và tài phá án siêu việt. Bất ngờ bị vu oan là kẻ
                giết thầy, phản quốc ngay trong ngày đại hôn, anh nhảy xuống hồ để thoát thân
                và biến mất suốt ba năm...
            </p>

            {/* Genres */}
            <div className="mt-5 flex flex-wrap gap-3 text-gray-400">
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm sm:text-base">Cổ trang</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm sm:text-base">Bí ẩn</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm sm:text-base">Phá án</span>
            </div>

            {/* Secondary Tags */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500">
                <span className="px-3 py-1 bg-gray-800 rounded-full">Phim bộ</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Hoa ngữ</span>
            </div>

            {/* ---  --- */}
            <div className="my-10">
                <h2 className="text-2xl font-bold mb-6">Diễn viên & Đạo diễn</h2>
                <div className="flex flex-wrap justify-center sm:justify-start gap-8 md:gap-12">
                    {/* Diễn viên 1 */}
                    <div className="text-center group cursor-pointer">
                        <img
                            src="https://via.placeholder.com/200"
                            alt="Triệu Cẩm Đảo"
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-transparent group-hover:border-fuchsia-600 transition-colors duration-300"
                        />
                        <h3 className="mt-3 font-semibold text-white group-hover:text-fuchsia-500 transition-colors">Triệu Cẩm Đảo</h3>
                        <p className="text-gray-400 text-sm">Diễn viên</p>
                    </div>
                    {/* Diễn viên 2 */}
                    <div className="text-center group cursor-pointer">
                        <img
                            src="https://via.placeholder.com/200"
                            alt="Vương Tinh Việt"
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-transparent group-hover:border-fuchsia-600 transition-colors duration-300"
                        />
                        <h3 className="mt-3 font-semibold text-white group-hover:text-fuchsia-500 transition-colors">Vương Tinh Việt</h3>
                        <p className="text-gray-400 text-sm">Diễn viên</p>
                    </div>
                    {/* Diễn viên 3 */}
                    <div className="text-center group cursor-pointer">
                        <img
                            src="https://via.placeholder.com/200"
                            alt="Hương Hàm Chi"
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-transparent group-hover:border-fuchsia-600 transition-colors duration-300"
                        />
                        <h3 className="mt-3 font-semibold text-white group-hover:text-fuchsia-500 transition-colors">Hương Hàm Chi</h3>
                        <p className="text-gray-400 text-sm">Diễn viên</p>
                    </div>
                    {/* Diễn viên 4 */}
                    <div className="text-center group cursor-pointer">
                        <img
                            src="https://via.placeholder.com/200"
                            alt="Trần Hựu Duy"
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-transparent group-hover:border-fuchsia-600 transition-colors duration-300"
                        />
                        <h3 className="mt-3 font-semibold text-white group-hover:text-fuchsia-500 transition-colors">Trần Hựu Duy</h3>
                        <p className="text-gray-400 text-sm">Diễn viên</p>
                    </div>
                </div>
            </div>

            <TabDetail />

        </div>


    )
}

export default InfoPlayer
