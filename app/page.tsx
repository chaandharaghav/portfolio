import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
    const data = {
        initials: "CR",
    };
    return (
        <main className="flex min-h-screen p-8">
            <Header initials={data.initials} />
        </main>
    );
}
