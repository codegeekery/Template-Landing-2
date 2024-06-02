'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { BsTwitterX, BsInstagram, BsMeta } from "react-icons/bs";
import {
    Menu,
    X
} from "lucide-react"
import { useState } from 'react';

const Hero = () => {




    return (
        <>

            <section className="flex relative justify-center items-center min-h-[100vh]">
                <div className="absolute top-0 left-0 w-full h-full bg-hero bg-cover z-[-1]"></div>
                <div className="hero-content-area flex flex-col items-center justify-center text-white">
                    <h1 className='Title'>Life is a party!</h1>
                    <h3 className='Subtitle'>Unmissable Adventure Tours With Your Friends</h3>
                    <Button variant='empty' className="rounded-sm p-6 bg-[#e07e7b] hover:bg-[#e07e7b]/90">
                        Contact Us Now
                    </Button>
                </div>
            </section>




        </>
    )
}

export { Hero }