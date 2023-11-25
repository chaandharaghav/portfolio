import DetailsTopSection from "../detailsTopSection";
import Skills from "../skills";
import Tools from "../tools";

const Details = ({
    company,
    currentFocus,
    skills,
    tools,
}: {
    company: string;
    currentFocus: string;
    skills: string[];
    tools: string[];
}) => {
    return (
        <div className="w-full min-h-screen mt-6 lg:mt-0 lg:px-20 lg:pr-10 lg:border-l lg:border-l-bordergray">
            <div className="grid grid-rows-2 lg:grid-cols-2 w-max lg:pl-10">
                <DetailsTopSection header="company" value={company} />
                <DetailsTopSection header="focused on" value={currentFocus} />
            </div>
            <div className="flex flex-col mt-4 md:flex-row">
                <Skills skills={skills} />
                <Tools tools={tools} />
            </div>
        </div>
    );
};

export default Details;
