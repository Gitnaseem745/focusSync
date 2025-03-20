"use client"

import { ArrowRight } from "./icons";

/**
 * Reusable redirection button component with arrow icon
 */
export default function TopButton() {
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={toTop}
            className="fixed right-5 bottom-5 sm:right-10 sm:bottom-10 bg-primary p-4 rounded-full -rotate-90 text-background hover:bg-primary-dark transition-colors ease-linear delay-75"
        >
            <ArrowRight />
        </button>
    )
}
