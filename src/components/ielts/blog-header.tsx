import { Clock } from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb.tsx";
import React from "react";

export type BreadcrumbSegment = {
    label: string;
    path: string;
};

type BlogHeaderSectionProps = {
    title: string;
    updatedDate?: string;
    customSegments: BreadcrumbSegment[];
    children?: React.ReactNode;
};

export default function BlogHeaderSection({
                                        title,
                                        updatedDate,
                                        customSegments,
                                        children,
                                    }: BlogHeaderSectionProps) {
    return (
        <section className="px-4 pb-10 bg-white p-4 md:p-8 rounded-xl">
            <DynamicBreadcrumb customSegments={customSegments} />

            <h1 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-3 tracking-tight text-gray-900">
                {title}
            </h1>

            {updatedDate && (
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                    <Clock className="w-4 h-4" />
                    আপডেট করা হয়েছে: {updatedDate}
                </div>
            )}

            <div className="space-y-4 text-gray-800 text-base leading-relaxed">
                {children}
            </div>
        </section>
    );
}
