import {Hero} from "@/components/study-abroad/Hero.tsx";
import TabList from "@/components/study-abroad/Tabs.tsx";
import ContentTable from "@/components/study-abroad/ContentTable.tsx";
import {tableOfContents} from "@/components/study-abroad/data.tsx";
import FAQAccordion from "@/components/study-abroad/FAQAccordion.tsx";

const studyAbroadTabs = [
    {
        value: "opportunities",
        title: "যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ"
    },
    {
        value: "costs",
        title: "যুক্তরাষ্ট্রে পড়াশোনার খরচ"
    },
    {
        value: "living-costs",
        title: "যুক্তরাষ্ট্রে থাকার আনুমানিক খরচ"
    },
    {
        value: "scholarships",
        title: "যুক্তরাষ্ট্রে স্কলারশিপসমূহ"
    },
    {
        value: "work-opportunities",
        title: "যুক্তরাষ্ট্রে কাজের সুযোগ"
    }
    ,
    {
        value: "visa",
        title: "যুক্তরাষ্ট্রে পড়াশোনার পর কর্মসংস্থানের ভিসা"
    },

]


export default function StudyAbroad() {

    return (
        <div className={"mx-auto max-w-7xl px-4 sm:px-6 mb-32"}>
            <Hero
                heading={"যুক্তরাষ্ট্রে উচ্চশিক্ষার সুযোগ"}
                image={{
                    src: "/images/cover1.jpg",
                    alt: "Study Abroad Hero Image"
                }}
                buttons={{
                    primary: {
                        text: "আপনার পছন্দের বিশ্ববিদ্যালয় খুঁজুন",
                        url: "/search",
                    },
                }}
            />
            <div className={"mb-32"}>
                <TabList
                    tabs={studyAbroadTabs}
                    defaultValue="opportunities"
                    showEmptyState={false}
                >
                    <ContentTable
                        tabs={tableOfContents}
                        defaultValue={"introduction"}
                    />
                </TabList>
            </div>
            <FAQAccordion/>
        </div>
    )
}

