const Header = ({ initials }: { initials: String }) => {
    return (
        <div className="flex justify-between min-w-full">
            <Initials initials={initials} />
            <ContactBtn />
        </div>
    );
};

const Initials = ({ initials }: { initials: String }) => {
    return (
        <span className="flex items-center justify-center w-10 h-10 font-medium border-2 border-black rounded-full p-7 dark:border-white">
            {initials}
        </span>
    );
};

export const ContactBtn = () => {
    return (
        <button className="px-4 py-1 text-sm font-medium text-black border rounded-full bg-customyellow hover:border-black h-9 dark:bg-orange-300">
            Contact Me
        </button>
    );
};

export default Header;
