import { Head } from "@inertiajs/react";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome to ELCCO 2026" />

            <main className="relative bg-dark-spruce-950 min-h-screen">
                <Navbar />
                <HeroSection />

                <div className="h-screen"></div>
            </main>
        </>
    );
}
