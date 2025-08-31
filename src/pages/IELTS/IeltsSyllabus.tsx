import BlogHeaderSection from "@/components/ielts/blog-header";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";
import IeltsExamPatternSection from "@/components/ielts/syllabus/IeltsExamPatternSection.tsx";
import IeltsAcademicWritingSection from "@/components/ielts/syllabus/IeltsAcademicWritingSection.tsx";
import IeltsAcademicReadingSection from "@/components/ielts/syllabus/IeltsAcademicReadingSection.tsx";
import IeltsAcademicListeningSection from "@/components/ielts/syllabus/IeltsAcademicListeningSection.tsx";
import IeltsAcademicSpeakingSection from "@/components/ielts/syllabus/IeltsAcademicSpeakingSection.tsx";
import IeltsGeneralTrainingSyllabusSection from "@/components/ielts/syllabus/IeltsGeneralTrainingSyllabusSection.tsx";
import IeltsGeneralTrainingReadingSection from "@/components/ielts/syllabus/IeltsGeneralTrainingReadingSection.tsx";
import IeltsGeneralTrainingWritingSection from "@/components/ielts/syllabus/IeltsGeneralTrainingWritingSection.tsx";
import NextStepsSection from "@/components/ielts/next-steps.tsx";
import AllInfoTables from "@/components/ielts/all-info-table.tsx";
import IeltsLifeSkillsSection from "@/components/ielts/syllabus/IeltsLifeSkillsSection.tsx";

const customSegments = [
    {label: "বিদেশে উচ্চশিক্ষা", path: "/study-abroad"},
    {label: "পরীক্ষাসমূহ", path: "/study-abroad/exams"},
    {label: "IELTS", path: "/study-abroad/exams/ielts"},
    {label: "Syllabus and Pattern", path: "/study-abroad/exams/ielts/syllabus-pattern"},
];
export default function IeltsSyllabus() {
    return (
        <>
            <BlogHeaderSection
                title="IELTS Exam Syllabus & Pattern 2024–2025"
                updatedDate="Nov 17, 2024, 12:35"
                customSegments={customSegments}
            >
                <p>
                    The <b>IELTS exam</b> consists of four sections: <b>Listening</b>, <b>Reading</b>, <b>Writing</b>,
                    and <b>Speaking</b>.
                    Understanding the <b>IELTS exam pattern</b> is crucial to achieving a high band score. There are two
                    types of test, designed based on your purpose of taking IELTS:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-800 text-base mt-2">
                    <li>
                        <b>IELTS Academic</b> is ideal for those pursuing higher education in countries like Australia,
                        Canada, the UK, and the USA.
                    </li>
                    <li>
                        <b>IELTS General Training</b> is best suited for those seeking work opportunities abroad.
                    </li>
                </ul>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    While the <b>Listening</b> and <b>Speaking</b> sections are identical in both types of tests,
                    the <b>Writing</b> and <b>Reading</b> sections differ.
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    A solid understanding of the <b>IELTS syllabus</b> is key to effective preparation. It helps you
                    focus on the specific types of questions, topics, and skills that are tested in each section. The
                    IELTS paper pattern for the Listening section remains the same for both IELTS Academic and General
                    Training.
                </p>
                <p className="mt-4 text-gray-800 text-base leading-relaxed">
                    Knowing the syllabus ensures you can allocate time efficiently, practice relevant tasks, and avoid
                    surprises on test day.
                </p>
            </BlogHeaderSection>
            <IeltsCarouselSection data={ieltsCarouselData}/>
            <IeltsExamPatternSection/>
            <IeltsAcademicWritingSection/>
            <IeltsAcademicReadingSection/>
            <IeltsAcademicListeningSection/>
            <IeltsAcademicSpeakingSection/>
            <IeltsGeneralTrainingSyllabusSection/>
            <IeltsGeneralTrainingReadingSection/>
            <IeltsGeneralTrainingWritingSection/>
            <IeltsLifeSkillsSection/>
            <NextStepsSection/>
            <AllInfoTables/>
        </>
    )
}