import HeroSection from "@/components/hero.tsx";
import ServicesSection from "@/components/services.tsx";
import StatsSection from "@/components/stats.tsx";
import SessionBook from "@/components/classes-section.tsx";
import ExpertsSection from "@/components/experts.tsx";

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <ServicesSection/>
            <StatsSection/>
            <SessionBook/>
            <ExpertsSection/>
        </>
    )
}