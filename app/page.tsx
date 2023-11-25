import Details from "@/components/details";
import Header from "@/components/header";
import Profile from "@/components/profile";

export default function Home() {
    const data = {
        initials: "CR",
        name: "Chaandha Raghav",
        role: "Web Developer",
        location: "Chennai, India",
        company: "Zoho Corporation",
        currentFocus: "Scaling backend",
        skills: ["Java", "Javascript", "Postgres"],
        tools: ["Intellij", "Git", "VS Code"],
        social: [
            { platform: "github", link: "github.com/chaandharaghav" },
            { platform: "linkedin", link: "github.com/chaandharaghav" },
        ],
        about: `
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
        
        User generated content in real-time will have multiple touchpoints for offshoring. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.`,
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
            <div className="flex flex-col px-4 pt-24 md:flex-row md:px-12 lg:px-32 ">
                <Profile
                    name={data.name}
                    role={data.role}
                    location={data.location}
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
