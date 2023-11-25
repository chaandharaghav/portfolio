import React from "react";

const Tools = ({ tools }: { tools: string[] }) => {
    return (
        <div className="md:ml-20">
            <h4 className="mb-5 text-lg font-bold">Tools</h4>
            <ul className="ml-3">
                {tools.map((tool, idx) => (
                    <Tool key={idx} name={tool} />
                ))}
            </ul>
        </div>
    );
};

const Tool = ({ name }: { name: string }) => {
    return <li className="mb-2 text-xl">{name}</li>;
};

export default Tools;
