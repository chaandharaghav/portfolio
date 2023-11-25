import React from "react";

import SkillIcon from "@/components/skills/Skillcon";

const Skills = ({ skills }: { skills: string[] }) => {
    return (
        <div>
            <h4 className="mb-6 text-lg font-bold ">Skills</h4>
            <ul className="flex flex-col md:flex-row">
                {skills.map((skill, idx) => (
                    <Skill key={idx} name={skill} />
                ))}
            </ul>
        </div>
    );
};

const Skill = ({ name }: { name: string }) => {
    return (
        <li className="m-2 rounded-full flex w-32 [&:nth-child(1)]:text-blue-500 [&:nth-child(2)]:text-pink-500 [&:nth-child(3)]:text-orange-500 ">
            <span className="min-w-max flex justify-center p-1 m-3 items-center border border-solid border-[currentColor] rounded-full">
                <SkillIcon className="w-28" />
                <span className="absolute text-black dark:text-gray-50">
                    {name}
                </span>
            </span>
        </li>
    );
};

export default Skills;
