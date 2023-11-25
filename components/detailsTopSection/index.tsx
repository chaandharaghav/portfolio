import React from "react";

const DetailsTopSection = ({
    header,
    value,
}: {
    header: string;
    value: string;
}) => {
    return (
        <div className="mb-8 md:mr-28 lg:mb-0 border-l-bordergray">
            <h5 className="text-sm">{header.toUpperCase()}</h5>
            <h3 className="text-xl font-light text-customgray dark:text-white">
                {value}
            </h3>
        </div>
    );
};

export default DetailsTopSection;
