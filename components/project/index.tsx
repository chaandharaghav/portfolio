import React from "react";
import project from "./type";
import Link from "next/link";

const capitalize = (str: string): string => {
    const firstLetter = str.charAt(0).toUpperCase();
    const lower = str.toLowerCase();
    return firstLetter + lower.substring(1, lower.length);
};

const Projects = ({ projects }: { projects: project[] }) => {
    return (
        <div>
            <h3 className="mt-10 mb-8 text-lg font-bold lg:mb-10 lg:mt-16">
                Projects
            </h3>
            <ul>
                {projects.map((project, idx) => (
                    <Project key={idx} project={project} />
                ))}
            </ul>
        </div>
    );
};

const Project = ({ project }: { project: project }) => {
    const { name, link, description, status, techstack } = project;
    return (
        <div className="w-full p-6 mb-6 bg-white border-t-4 rounded-sm dark:bg-dark_project_bg dark:border-t-8 dark:border-t-gray-500 border-t-gray-300 dark:text-black">
            <h5 className="font-bold text-md ">{name}</h5>
            <p className="text-sm underline hover:cursor-pointer ">
                <Link href={link}>{link}</Link>
            </p>
            <p className="mt-5 text-sm">{description}</p>
            <div className="flex flex-wrap mt-6">
                <Pill content={capitalize(status)} isStatus />
                {techstack.map((tech, idx) => (
                    <Pill key={idx} content={tech} isStatus={false} />
                ))}
            </div>
        </div>
    );
};

const Pill = ({
    content,
    isStatus,
}: {
    content: string;
    isStatus: boolean;
}) => {
    let statusComp;
    if (isStatus) {
        let statusColor = "bg-orange-700";
        if (content.toLowerCase() == "completed") {
            statusColor = "bg-green-500";
        }
        statusComp = (
            <span
                className={`inline-block w-2 h-2 mr-1 rounded-full ${statusColor}`}
            ></span>
        );
    }
    return (
        <div className="px-2.5 py-0.5 rounded-2xl border mr-3">
            {isStatus && statusComp}
            <span className="text-sm">{content}</span>
        </div>
    );
};

export default Projects;
