"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const navItems = [
        { name: "MENU", link: "/menu" },
        { name: "GALLERY", link: "/gallery" },
        { name: "FIND US", link: "/contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-3">
                    <NavbarButton
                        href="tel:+15147467602"
                        variant="secondary"
                    >
                        CALL US
                    </NavbarButton>
                    <NavbarButton
                        href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                    >
                        ORDER NOW
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <Link
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-stone-700 font-semibold text-lg tracking-wide hover:text-red-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex w-full flex-col gap-3 mt-4">
                        <NavbarButton
                            as="a"
                            href="tel:+15147467602"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="secondary"
                            className="w-full"
                        >
                            CALL US
                        </NavbarButton>
                        <NavbarButton
                            as="a"
                            href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                        >
                            ORDER NOW
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
