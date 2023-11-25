import React from "react";

const DetailsTopSection = ({
    header,
    value,
}: {
    header: string;
    value: string;
}) => {
    return (
        <div className="lg:pl-10 mb-8 lg:mb-0 border-l-bordergray">
            <h5 className="text-sm">{header.toUpperCase()}</h5>
            <h3 className="text-xl font-light text-customgray dark:text-white">
                {value}
            </h3>
        </div>
    );
};

export default DetailsTopSection;
