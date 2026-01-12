"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Main Navbar container
export const Navbar = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
                    : child
            )}
        </motion.div>
    );
};

// Desktop nav body
interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: "blur(16px)",
                boxShadow: visible
                    ? "0 4px 30px rgba(0, 0, 0, 0.05)"
                    : "0 1px 3px rgba(0, 0, 0, 0.02)",
                borderColor: visible ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "hidden lg:flex w-full bg-white/70 border-b border-white/40",
                className,
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center h-16">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

// Nav items
interface NavItemsProps {
    items: { name: string; link: string }[];
    className?: string;
    onItemClick?: () => void;
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const pathname = usePathname();

    return (
        <div className={cn("flex items-center space-x-1", className)}>
            {items.map((item, idx) => {
                const isActive = pathname === item.link;
                return (
                    <Link
                        key={`link-${idx}`}
                        href={item.link}
                        onClick={onItemClick}
                        className={cn(
                            "px-4 py-2 text-sm font-medium rounded-full transition-all",
                            isActive
                                ? "text-orange-600 bg-white/50"
                                : "text-neutral-600 hover:text-orange-600 hover:bg-white/50"
                        )}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
};

// Mobile nav container
interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: "blur(16px)",
                boxShadow: visible
                    ? "0 4px 30px rgba(0, 0, 0, 0.05)"
                    : "0 1px 3px rgba(0, 0, 0, 0.02)",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "flex flex-col lg:hidden w-full bg-white/70 border-b border-white/40",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

// Mobile nav header
export const MobileNavHeader = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex items-center justify-between h-16 px-4", className)}>
            {children}
        </div>
    );
};

// Mobile nav menu
interface MobileNavMenuProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const MobileNavMenu = ({ children, isOpen, onClose, className }: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={cn(
                        "border-t border-white/20 bg-white/80 backdrop-blur-xl overflow-hidden",
                        className,
                    )}
                >
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Mobile toggle button
export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className="p-2 text-neutral-600 hover:bg-white/50 rounded-lg transition-colors"
        >
            {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
        </button>
    );
};

// Logo
export const NavbarLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <Image
                src="/branding/Insta-Logo.jpg"
                alt="Shawarmania"
                width={32}
                height={32}
                className="rounded-full"
            />
            <span className="font-semibold text-lg tracking-tight text-neutral-900 group-hover:text-orange-600 transition-colors">
                Shawarmania
            </span>
        </Link>
    );
};

// Button
interface NavbarButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    as?: "a" | "button";
    target?: string;
    rel?: string;
}

export const NavbarButton = ({
    href,
    onClick,
    children,
    variant = "primary",
    className,
    as,
    target,
    rel,
}: NavbarButtonProps) => {
    const baseClasses = "px-4 py-2 text-sm font-medium rounded-full transition-all";

    const variantStyles = {
        primary: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-900/10",
        secondary: "bg-white/50 border border-white/60 text-neutral-900 hover:bg-white",
        ghost: "text-neutral-600 hover:text-orange-600 hover:bg-white/50",
    };

    const combinedClasses = cn(baseClasses, variantStyles[variant], className);

    if (as === "a" || href) {
        return (
            <a
                href={href}
                onClick={onClick}
                target={target}
                rel={rel}
                className={combinedClasses}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};
