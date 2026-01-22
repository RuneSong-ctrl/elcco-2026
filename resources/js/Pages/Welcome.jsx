import { Head } from "@inertiajs/react";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import AboutSection from "@/Components/AboutSection";
import SponsorsSection from "@/Components/SponsorSection";
import CompetitionsSection from "@/Components/CompetitionsSection";
import TimelineSection from "@/Components/TimelineSection";
import GallerySection from "@/Components/GallerySection";
import ContactSection from "@/Components/ContactSection";
import FooterSection from "@/Components/FooterSection";
import MerchModal from "@/Components/MerchModal";
import FAQSection from "@/Components/FAQSection";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome to ELCCO 2026" />

            <main className="relative bg-dark-spruce-950 min-h-screen">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SponsorsSection />
                <CompetitionsSection />
                <TimelineSection />
                <GallerySection />
                <FAQSection />
                <ContactSection />
                <FooterSection />
                <MerchModal />
            </main>
        </>
    );
}
