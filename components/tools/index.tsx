import React from "react";

const Tools = ({ tools }: { tools: string[] }) => {
    return (
        <div className="ml-20">
            <h4 className="font-bold text-lg  mb-5">Tools</h4>
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
