"use client";

import React, { useEffect, useState } from "react";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";


export function Recommendation() {
    return (
        <div
            className="rounded-md flex flex-col antialiased bg-white dark:bg-black  items-center justify-center relative overflow-hidden">

            <h2 className="text-3xl font-bold  my-8 ">Client & Peer Feedback</h2>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
        "I worked with Thimira at LSEG, where managing him was an absolute pleasure. He brought so much energy and passion to our machine learning projects. He is someone who dive into the complex world of AI with the enthusiasm and curiosity. Every task, no matter how daunting, was tackled head-on, turning challenges into opportunities for growth and innovation.\n" +
            "\n" +
            "Thimira has a knack for breaking down complex problems into manageable pieces, making tough concepts seem like a piece of cake. Their work, especially on Large Language Models related project, not only pushed our project forward but also made the whole team more excited and engaged with what we were doing.\n" +
            "\n" +
            "Beyond the tech stuff, Thimira is just a great person to have around. Always positive, always ready to lend a hand or share a laugh. He has got this infectious energy that makes work feel a lot less like work.\n" +
            "\n" +
            "In short, Thimira is a fun and great person. He has got a bright future ahead in machine learning, and I can't wait to see where their journey takes him. Trust me, you want someone like him on your team.",
        name: "Keshan Sodimana",
        title: "Exceptional Machine Learning Engineer with Infectious Enthusiasm and Problem-Solving Expertise",
        // title: "Enthusiastic and Impactful Machine Learning Innovator",
    },

];
