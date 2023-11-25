import Link from "next/link";
import React from "react";

import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import MailIcon from "./MailIcon";
import social from "./type";

const ContactMe = ({ socials }: { socials: social[] }) => {
    return (
        <div className="mt-10">
            <ul className="flex items-center">
                {socials.map((social, idx) => getSocialIcon(social, idx))}
            </ul>
        </div>
    );
};

const getSocialIcon = (social: social, idx: number) => {
    const iconSize = "30px";
    const commonClasses = "mr-2";
    if (social.platform.toLocaleLowerCase() === "github") {
        return (
            <li key={idx} className={commonClasses}>
                <Link href={social.link}>
                    <GithubIcon dimension={iconSize} />
                </Link>
            </li>
        );
    } else if (social.platform.toLowerCase() === "linkedin") {
        return (
            <li key={idx} className={commonClasses}>
                <Link href={social.link}>
                    <LinkedinIcon dimension="40px" />
                </Link>
            </li>
        );
    } else if (social.platform.toLowerCase() === "mail") {
        return (
            <li key={idx} className={commonClasses}>
                <Link href={"mailto:" + social.link}>
                    <MailIcon dimension={iconSize} />
                </Link>
            </li>
        );
    }
};

export default ContactMe;
