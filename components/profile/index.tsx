import Image from "next/image";
import LocationImage from "@/public/locationIcon.svg";

const Profile = ({
    role,
    name,
    location,
}: {
    role: string;
    name: string;
    location: string;
}) => {
    return (
        <div className="max-w-sm">
            <h2 className="text-2xl">{role}</h2>
            <h1 className="text-5xl py-6 font-extrabold break-words">{name}</h1>
            <Location location={location} />
        </div>
    );
};

const Location = ({ location }: { location: string }) => {
    return (
        <div className="flex">
            <span className="bg-black min-h-max flex items-center">
                <LocationIcon
                    className="text-customyellow w-10 "
                    dimension="25px"
                />
            </span>
            <span className="text-lg ml-1 inline-block bg-black font-semibold p-1 px-2 dark:bg-white dark:text-black text-white max-w-100">
                {location}
            </span>
        </div>
    );
};

function LocationIcon(props: { className: string; dimension: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.dimension}
            height={props.dimension}
            viewBox="0 0 64 64"
            xmlSpace="preserve"
            {...props}
        >
            <path
                fill="currentColor"
                d="M32 0C18.746 0 8 10.746 8 24c0 5.219 1.711 10.008 4.555 13.93.051.094.059.199.117.289l16 24a4.001 4.001 0 006.656 0l16-24c.059-.09.066-.195.117-.289C54.289 34.008 56 29.219 56 24 56 10.746 45.254 0 32 0zm0 32a8 8 0 110-16 8 8 0 010 16z"
            />
        </svg>
    );
}

export default Profile;
