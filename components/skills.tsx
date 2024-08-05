import React, { useState } from "react";

interface Skill {
    category: string;
    experience: string;
    skills: string[];
}

const skillsData: Skill[] = [
    {
        category: "AI",
        experience: "2+ Years XP",
        skills: [
            "Large Language Models",
            "Natural Language Processing",
            "Agent Systems",
            "Generative AI",
            "RAG",
            "OpenAI, Claude, Hugging Face",
            // "Data Analytics & Visualization",
            // "Frameworks & Libraries",
        ],
    },
    {
        category: "Machine Learning and Data Science",
        experience: "3+ Years XP",
        skills: [
            "Data Analytics & Visualization",
            "Computer Vision",
            "TensorFlow, PyTorch, Scikit-learn",
            "OpenCV, Media pipe, Yolo",
            "Dashboards & Reporting",
        ],
    },
    {
        category: "Full Stack Development",
        experience: "4+ Years XP",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript",
            "Node.js", "FastAPI"
        ],
    },
    {
        category: "Databases",
        experience: "4+ Years XP",
        skills: ["Supabase", "MongoDB", "Pinecone", "Qdrant"],
    },
    {
        category: "Misc",
        experience: "4+ Years XP",
        skills: ["Git", "Docker", "CI/CD", "Agile Methodologies"],
    },
    {
        category: "Programming",
        experience: "10+ Years XP",
        skills: ["JavaScript", "Python", "C++", "Java"],
    },
];
const SkillsSection: React.FC = () => {
    // Set the first item as open by default
    const [openCategory, setOpenCategory] = useState<string | null>(skillsData[0]?.category || null);

    const toggleCategory = (category: string) => {
        if (openCategory === category) {
            setOpenCategory(null);
        } else {
            setOpenCategory(category);
        }
    };

    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill) => (
                        <div key={skill.category}>
                            <div
                                className="cursor-pointer text-2xl font-semibold flex justify-between items-center"
                                onClick={() => toggleCategory(skill.category)}
                            >
                                {skill.category}
                                <span>
                  {openCategory === skill.category ? "▲" : "▼"}
                </span>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">{skill.experience}</p>
                            {openCategory === skill.category && (
                                <ul className="list-disc pl-5">
                                    {skill.skills.map((s) => (
                                        <li key={s} className="mb-2">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;