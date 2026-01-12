'use client';

import { LinkPreview } from './ui/link-preview';

interface LinkPreviewWrapperProps {
    url: string;
    children: React.ReactNode;
    className?: string;
}

export function LinkPreviewWrapper({ url, children, className }: LinkPreviewWrapperProps) {
    return (
        <LinkPreview url={url} className={className}>
            {children}
        </LinkPreview>
    );
}
