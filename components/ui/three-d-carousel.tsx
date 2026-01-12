"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "motion/react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = {
  duration,
  ease: [0.32, 0.72, 0, 1] as const,
}

interface CarouselProps {
  controls: ReturnType<typeof useAnimation>
  cards: string[]
}

const Carousel = memo(({ controls, cards }: CarouselProps) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
  const cylinderWidth = isScreenSizeSm ? 900 : 1600
  const faceCount = cards.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const rotation = useMotionValue(0)
  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  )

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      rotation.set(rotation.get() + 0.3)
    }, 30)

    return () => clearInterval(interval)
  }, [rotation])

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <motion.div
        drag="x"
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={(_, info) =>
          rotation.set(rotation.get() + info.offset.x * 0.05)
        }
        onDragEnd={(_, info) =>
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: {
              type: "spring" as const,
              stiffness: 100,
              damping: 30,
              mass: 0.1,
            },
          })
        }
        animate={controls}
      >
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`key-${imgUrl}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-2xl p-1"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
            }}
          >
            <motion.img
              src={imgUrl}
              alt={`food_${i}`}
              className="pointer-events-none w-full rounded-2xl object-cover aspect-square shadow-xl"
              initial={{ filter: "blur(4px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={transition}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})

Carousel.displayName = "Carousel"

interface ThreeDPhotoCarouselProps {
  images?: string[]
}

export function ThreeDPhotoCarousel({ images }: ThreeDPhotoCarouselProps) {
  const controls = useAnimation()

  const defaultImages = [
    '/food-photos/Chicken-Shawarma.png',
    '/food-photos/Beef-Shawarma-Bowl.png',
    '/food-photos/Falafel-Bowl.png',
    '/food-photos/Skewer-Mix-Bowl.png',
    '/food-photos/Chicken-Shawarma-Bowl.png',
    '/food-photos/Kafta-Skewers-Bowl.png',
    '/food-photos/Beef-Shawarma.png',
    '/food-photos/Shawarma-Bowl-Mix.png',
  ]

  const cards = useMemo(() => images || defaultImages, [images])

  return (
    <div className="relative h-[450px] w-full overflow-hidden">
      <Carousel
        controls={controls}
        cards={cards}
      />
    </div>
  )
}

export default ThreeDPhotoCarousel
