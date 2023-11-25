import React from "react";

const About = ({ about }: { about: string }) => {
    return (
        <div className="mt-4 whitespace-pre-line">
            <h4 className="mb-2 text-lg font-bold">About</h4>
            <p>{about}</p>
        </div>
    );
};

export default About;
