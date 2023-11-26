import React from "react";

import SkillIcon from "@/components/skills/Skillcon";

const Skills = ({ skills }: { skills: string[] }) => {
    return (
        <div className="mb-5">
            <h4 className="text-lg font-bold lg:mb-6">Skills</h4>
            <ul className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:flex-row">
                {skills.map((skill, idx) => (
                    <Skill key={idx} name={skill} />
                ))}
            </ul>
        </div>
    );
};

const Skill = ({ name }: { name: string }) => {
    return (
        <li className="mx-4 lg:m-0 rounded-full flex w-16 md:w-20 lg:w-32 [&:nth-child(1)]:text-blue-500 [&:nth-child(2)]:text-pink-500 [&:nth-child(3)]:text-orange-500 ">
            <span className="min-w-max flex justify-center p-1.5 m-3 items-center border border-solid border-[currentColor] rounded-full">
                <SkillIcon className="w-20" />
                <span className="absolute text-black dark:text-gray-50">
                    {name}
                </span>
            </span>
        </li>
    );
};

export default Skills;
