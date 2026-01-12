"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface VideoMediaProps {
    src: string
    className?: string
    showControls?: boolean
    overlay?: "none" | "light" | "dark"
}

export const VideoMedia: React.FC<VideoMediaProps> = ({
    src,
    className,
    showControls = false,
    overlay = "none",
}) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <video
                ref={videoRef}
                aria-hidden="true"
                muted
                loop
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                playsInline
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            {overlay === "light" && (
                <div className="absolute inset-0 bg-white/20" />
            )}
            {overlay === "dark" && (
                <div className="absolute inset-0 bg-black/20" />
            )}

            {showControls && (
                <button
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-black/70 transition-colors"
                    onClick={togglePlay}
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>
            )}
        </div>
    )
}

export default VideoMedia
