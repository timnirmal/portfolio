import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaGithub, FaGlobe } from "react-icons/fa";

type Card = {
    src: string;  // main image
    title: string;  // project title
    categories: string[];  // project category
    description: string;  // project description as Markdown
    images: string[];  // project images
    links: string[];  // project links
};

const ProjectModal = ({ src, description, images, links }: Card) => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            {/* Images at the top */}
            {images && images.length > 0 && (
                <div className="flex mb-6 w-full">
                    <div className="w-full relative">
                        <Image
                            src={images[0]}
                            alt="Feature Image"
                            layout="responsive"
                            width={1600} // Original width of the image
                            height={900} // Original height of the image
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ml-2 w-32">
                        {images.slice(1).map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Image ${index + 1}`}
                                layout="responsive"
                                width={200} // Original width of the image
                                height={200} // Original height of the image
                                className="object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Links after images */}
            {links && links.length > 0 && (
                <div className="mb-6 flex space-x-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 dark:text-blue-300 underline flex items-center space-x-2"
                        >
                            {link.includes("github.com") ? (
                                <FaGithub className="text-2xl" />
                            ) : (
                                <FaGlobe className="text-2xl" />
                            )}
                            <span>{link}</span>
                        </a>
                    ))}
                </div>
            )}

            {/* Description at the bottom */}
            <div className="flex-grow">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl md:text-4xl font-bold mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl md:text-3xl font-semibold mb-3" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg md:text-2xl font-semibold mb-2" {...props} />,
                        p: ({node, ...props}) => <p className="text-base md:text-lg leading-relaxed mb-4" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside ml-6 text-base md:text-lg" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-inside ml-6 text-base md:text-xl" {...props} />,
                        table: ({node, ...props}) => <table className="table-auto w-full border-collapse text-base md:text-xl" {...props} />,
                        th: ({node, ...props}) => <th className="border border-gray-300 px-4 py-2 text-left bg-gray-200 text-base md:text-xl" {...props} />,
                        td: ({node, ...props}) => <td className="border border-gray-300 px-4 py-2 text-left text-base md:text-xl" {...props} />,
                    }}
                    className="text-neutral-600 dark:text-neutral-400">
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default ProjectModal;
