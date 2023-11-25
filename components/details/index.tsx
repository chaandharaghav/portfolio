import About from "../about";
import DetailsTopSection from "../detailsTopSection";
import project from "../project/type";
import Projects from "../project";
import Skills from "../skills";
import Tools from "../tools";

const Details = ({
    company,
    currentFocus,
    about,
    skills,
    tools,
    projects,
}: {
    company: string;
    currentFocus: string;
    about: string;
    skills: string[];
    tools: string[];
    projects: project[];
}) => {
    return (
        <div className="w-full min-h-screen mt-20 lg:mt-0 lg:px-20 lg:pr-10 lg:border-l lg:border-l-bordergray lg:dark:border-l-gray-700">
            <div className="grid grid-rows-2 md:grid-cols-2 w-max">
                <DetailsTopSection header="company" value={company} />
                <DetailsTopSection header="focused on" value={currentFocus} />
            </div>
            <div className="flex flex-col mt-4 md:flex-row">
                <Skills skills={skills} />
                <Tools tools={tools} />
            </div>
            <About about={about} />
            <Projects projects={projects} />
        </div>
    );
};

export default Details;
