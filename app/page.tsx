import Details from "@/components/details";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Image from "next/image";

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
    };
    return (
        <main className="flex flex-col min-h-screen p-8">
            <Header initials={data.initials} />
            <div className="flex flex-col md:flex-row px-4 md:px-12 lg:px-32 pt-24 ">
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
                />
            </div>
        </main>
    );
}
