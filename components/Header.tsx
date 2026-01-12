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
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
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
                        variant="ghost"
                    >
                        (514) 746-7602
                    </NavbarButton>
                    <NavbarButton
                        href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                    >
                        Order Now
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
                            className="block w-full text-left px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-neutral-200/50">
                        <NavbarButton
                            as="a"
                            href="tel:+15147467602"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="secondary"
                            className="w-full justify-center"
                        >
                            Call Us
                        </NavbarButton>
                        <NavbarButton
                            as="a"
                            href="https://www.ubereats.com/ca/store/shawarmania/MUsajDhtVBGQZA2tN689gw?diningMode=DELIVERY"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full justify-center"
                        >
                            Order Now
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
