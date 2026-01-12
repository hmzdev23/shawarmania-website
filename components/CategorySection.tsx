'use client';

import { BlurFade } from './ui/blur-fade';

interface CategorySectionProps {
    title: string;
    children: React.ReactNode;
}

export default function CategorySection({ title, children }: CategorySectionProps) {
    return (
        <section>
            <BlurFade delay={0.1} inView>
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900 mb-6">{title}</h2>
            </BlurFade>
            {children}
        </section>
    );
}
