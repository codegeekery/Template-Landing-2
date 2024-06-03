'use client'
import {
    ArrowBigRight,
    Star, StarHalf,
    Loader
} from 'lucide-react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// import swr
import useSWR from 'swr';
// import API_URL
import { API_URL } from '@/utils/endpoint';






const startsRating = (rating) => {
    return (
        <span className='flex'>
            {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} fill={index < rating ? "#FFB800" : "#111"} strokeWidth={0} />
            ))}
        </span>
    );
}


const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const Testimonials = () => {

    const { data, error } = useSWR(`${API_URL}/GoogleReviews`, fetcher);

    if (error) return <div className='flex justify-center items-center h-screen'> <p>Failed to load reviews</p> </div>

    if (!data) return <div className='flex justify-center items-center h-screen'> <Loader className='size-9 animate-spin' /> </div>

    const { reviews, URL } = data;

    return (
        <>
            <section className="py-12 lg:py-16 translate-y-6">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-end md:justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Read trusted reviews from our customers
                            </h2>

                            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
                                sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat,
                                autem harum dolore reprehenderit quis! Quo totam dignissimos earum.
                            </p>
                        </div>

                        <a href={URL} target='_blank' className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#e07e7b] text-[#e07e7b] hover:bg-[#e07e7b]/90 px-5 py-3 transition  hover:text-white md:mt-0">
                            <span className="font-medium">Read all reviews</span>
                            <ArrowBigRight className="w-6 h-6" />
                        </a>
                    </div>

                    <div className='mt-auto flex'>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            pagination={{ type: 'fraction' }}
                            autoplay={{ delay: 6000, disableOnInteraction: false }}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                }
                            }}
                            className='cursor-pointer'
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{review.name}</p>
                                        <div className='flex'>
                                            <span className='mr-3'>{review.date}</span>
                                            {startsRating(review.ratings)}
                                        </div>
                                        <p className="mt-4 leading-relaxed text-gray-700 mb-8">
                                            {review.content}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </section>

        </>
    );
}

export { Testimonials }