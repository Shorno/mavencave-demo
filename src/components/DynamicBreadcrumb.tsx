import {BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation, Link } from "react-router";
import React from "react";
import type {BreadcrumbSegment} from "@/components/ielts/blog-header.tsx";


const getPathSegments = (pathname: string): BreadcrumbSegment[] => {
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((seg, idx) => ({
        label: decodeURIComponent(seg.charAt(0).toUpperCase() + seg.slice(1)),
        path: "/" + segments.slice(0, idx + 1).join("/"),
    }));
};

type DynamicBreadcrumbProps = {
    customSegments?: BreadcrumbSegment[];
};

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({ customSegments }) => {
    const { pathname } = useLocation();
    const segments = customSegments || getPathSegments(pathname);

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center space-x-1 text-base font-medium text-gray-600">
                <li>
                    <Link to="/" className="hover:underline">Home</Link>
                </li>
                {segments.map((seg, idx) => (
                    <React.Fragment key={seg.path}>
                        <li>
                            <BreadcrumbSeparator className="mx-2 text-gray-400">/</BreadcrumbSeparator>
                        </li>
                        <li>
                            {idx === segments.length - 1 ? (
                                <span className="font-bold text-gray-900">{seg.label}</span>
                            ) : (
                                <Link to={seg.path} className="hover:underline">
                                    {seg.label}
                                </Link>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default DynamicBreadcrumb;
