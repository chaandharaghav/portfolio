import Details from "@/components/details";
import Header from "@/components/header";
import Profile from "@/components/profile";

export default function Home() {
    const data = {
        initials: "CR",
        name: "Chaandha Raghav",
        role: "Software Developer",
        location: "Chennai, India",
        company: "Zoho Corporation",
        currentFocus: "Scaling backend",
        skills: ["Java", "Javascript", "Postgres"],
        tools: ["Intellij", "Git", "VS Code"],
        socials: [
            {
                platform: "github",
                link: "https://www.github.com/chaandharaghav",
            },
            {
                platform: "linkedin",
                link: "https://www.linkedin.com/in/chaandha-raghav-465090194/",
            },
            { platform: "mail", link: "chaandharaghav@gmail.com" },
        ],
        about: `
        I am a seasoned software developer at Zoho Corp, specializing in Java, JavaScript, React, Node.js, and database technologies like PostgreSQL and MySQL.
        
        With a proven track record, I have successfully designed and implemented a scalable logging feature for Zoho, ensuring robust and efficient tracking of system activities. My passion lies in crafting elegant solutions to complex problems, and I thrive on staying at the forefront of technology.`,
        projects: [
            {
                name: "Shopping cart",
                link: "https://github.com/chaandharaghav/shopping-cart",
                description: "Frontend of an ecommerce application",
                status: "completed",
                techstack: ["React", "Redux", "Javascript"],
            },
            {
                name: "Memory card",
                link: "https://github.com/chaandharaghav/memory-card",
                description:
                    "Naruto themed memory game in which you score points by choosing previously not choosen symbols and images",
                status: "completed",
                techstack: ["React", "Javascript", "HTML", "Css"],
            },
            {
                name: "CV Application",
                link: "https://github.com/chaandharaghav/cv-application",
                description:
                    "A resume builder which lets you make resume in a prebuilt template",
                status: "completed",
                techstack: ["React", "Javascript", "HTML", "Css"],
            },
        ],
    };
    return (
        <main className="flex flex-col min-h-screen p-8">
            <Header initials={data.initials} />
            <div className="flex flex-col px-4 pt-24 lg:flex-row md:px-12 lg:px-32 ">
                <Profile
                    name={data.name}
                    role={data.role}
                    location={data.location}
                    socials={data.socials}
                />
                <Details
                    currentFocus={data.currentFocus}
                    company={data.company}
                    skills={data.skills}
                    tools={data.tools}
                    about={data.about}
                    projects={data.projects}
                />
            </div>
        </main>
    );
}
