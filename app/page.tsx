'use client';

import Image from "next/image";
import {useState} from 'react';
import {ModeToggle} from "@/components/theme_button";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="py-8">
            <div className="flex flex-col items-center pt-32">
                <p className="pt-5 text-4xl pb-16">Machine Learning Enthusiast | Computer Engineering UG @ USJ |
                    Freelancer</p>
                <h1 className="text-6xl font-bold">Hi, I'm Thimira Nirmal</h1>
                <p className="text-lg">@timnirmal</p>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="pt-10"
                >
                    <Image
                        src={isHovered ? "/me2.png" : "/me1.png"}
                        alt="Profile Image"
                        width={250}
                        height={250}
                        className="rounded-full transition-all duration-300 ease-in-out"
                    />
                </div>
            </div>
            {/* <ModeToggle /> */}
        </main>
    );
}
