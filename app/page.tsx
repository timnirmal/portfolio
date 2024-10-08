'use client';

import Image from "next/image";
import {useState} from 'react';
import Work from "@/components/work";
// import {ModeToggle} from "@/components/theme_button";
import { Meteors } from "@/components/meteors";
import {ProjectHighlights} from "@/components/project_highlights";
import {Recommendation} from "@/components/recommadation";
import SkillsSection from "@/components/skills";

const svgButtons = [
    { url: "http://github.com/timnirmal", svgPath: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
    { url: "https://www.facebook.com/thimiranirmal", svgPath: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" },
    // { url: "https://example.com/link1", svgPath: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" },
    { url: "https://www.linkedin.com/in/thimiranirmal/", svgPath: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" },
    { url: "mailto:timnirmal@gmail.com", svgPath: "M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" },
    // { url: "mailto:timnirmal@gmail.com", svgPath: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" },
    { url: "https://medium.com/@timnirmal", svgPath: "M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z" },
];

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="pb-8">
            <div className="flex flex-col items-center pt-28">
                <p className="pt-5 text-4xl pb-16">AI/ML Engineer | Computer Engineering Graduate @ USJ |
                    Freelancer</p>
                <h1 className="text-6xl font-bold">Hi, I&apos;m Thimira Nirmal</h1>
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
            <div className="flex flex-row items-center justify-center space-x-4 pt-10">
                {svgButtons.map((button, index) => (
                    <a href={button.url} key={index} target="_blank" rel="noopener noreferrer"
                       className="text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                             fillRule="evenodd"
                             fill="currentColor">
                            <path d={button.svgPath}/>
                        </svg>
                    </a>
                ))}
            </div>
            <div className="flex flex-col items-center">
                {/* Existing elements */}
                <a href="https://drive.google.com/file/d/1nWFMUf3mjRHx20gvDhhu1zrWKn-SJ22e/view?usp=drive_link"
                   target="_blank" rel="noopener noreferrer"
                   className="mt-5 bg-gray-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    View Resume
                </a>
            </div>
            <div className="text-black w-full pt-10">
                {/* Professional Summary Section */}
                <div className="bg-gray-100 py-10 shadow-lg  text-center">
                <h2 className="text-2xl font-bold  mb-4">Professional Summary</h2>
                    <ul className="space-y-2 text-lg">
                        <li><strong>Results-oriented AI Engineer</strong> with 4+ years of experience delivering
                            innovative machine learning and AI solutions across over 100 projects.
                        </li>
                        <li>Adept at <strong>understanding client needs</strong> and quickly translating them into
                            impactful results through creative problem-solving and cutting-edge technology.
                        </li>
                        <li>Proven track record in both <strong>solo and team environments</strong>, balancing research,
                            proof of concepts, and practical implementations.
                        </li>
                        <li><strong>Fast learner with strong adaptability</strong>, committed to exploring and
                            integrating new technologies to drive success and innovation.
                        </li>
                    </ul>
                </div>
            </div>
            <SkillsSection/>
            {/*/!* Core Skills Section *!/*/}
            {/*<div className="flex flex-col items-center text-black mt-10">*/}
            {/*    <h2 className="text-2xl font-bold mb-4">Core Skills</h2>*/}
            {/*    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl text-center">*/}
            {/*        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">*/}
            {/*            <span><strong>Programming:</strong> Python, C++, Next.js, FastAPI</span>*/}
            {/*            <span><strong>AI/ML:</strong> LLM, AI & ML, TensorFlow, PyTorch</span>*/}
            {/*            <span><strong>Cloud & DevOps:</strong> Azure, AWS, Vercel, Heroku</span>*/}
            {/*            <span><strong>Databases:</strong> Supabase, MongoDB, Pinecone, Qdrant</span>*/}
            {/*            <span><strong>Tools & Libraries:</strong> OpenAI, Hugging Face, Next.js</span>*/}
            {/*            <span><strong>Skills:</strong> Client Understanding, Adaptability & Innovation, Collaboration</span>*/}
            {/*            <span><strong>Soft Skills:</strong> Leadership, Self-Motivation, Problem Solving</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Work/>
            <Meteors number={20}/>
            <ProjectHighlights/>
            <div className="bg-white">
            <Recommendation/>
            </div>

        </main>
    );
}


