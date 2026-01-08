"use client";

import { motion } from "framer-motion";

// All available origami icons
export const origamiIcons = [
    "001-crab",
    "002-heart",
    "003-dog",
    "004-hummingbird",
    "005-shark",
    "006-elephant",
    "007-cat",
    "008-rabbit",
    "009-pork",
    "010-fox",
    "011-origami",
    "012-duck",
    "013-papers",
    "014-bird",
    "015-bat",
    "016-bear",
    "017-tie",
    "018-fly",
    "019-dolphin",
    "020-pinwheel",
    "021-penguin",
    "022-origami",
    "023-plane",
    "024-boat",
    "025-butterfly",
    "026-tulip",
    "027-flower",
    "028-tutorial",
    "029-trophy",
    "030-Tortoise",
    "031-whale",
    "032-mushroom",
    "033-origami",
    "034-carrot",
    "035-car",
    "036-swan",
    "037-squid",
    "038-bird",
    "039-dinosaur",
    "040-origami",
    "041-origami",
    "042-origami",
    "043-origami",
    "044-origami",
    "045-origami",
    "046-origami",
    "047-origami",
    "048-frog",
    "049-star",
    "050-fish",
] as const;

export type OrigamiIconName = (typeof origamiIcons)[number];

interface OrigamiDecorationProps {
    icon: OrigamiIconName;
    className?: string;
    size?: "xs" | "sm" | "md" | "lg";
    position: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
    mobilePosition?: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
    opacity?: number;
    rotate?: number;
    colorFilter?: "black" | "dark" | "light" | "sunset" | "sea-green" | "kraft";
    animate?: boolean;
    delay?: number;
}

const sizeMap = {
    xs: "w-4 h-4 md:w-8 md:h-8",
    sm: "w-6 h-6 md:w-12 md:h-12",
    md: "w-8 h-8 md:w-16 md:h-16",
    lg: "w-10 h-10 md:w-20 md:h-20",
};

// CSS filter for different color schemes
const filterMap = {
    black: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)", // Solid black
    dark: "invert(14%) sepia(55%) saturate(1247%) hue-rotate(157deg) brightness(93%) contrast(97%)", // Nile blue
    light: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)", // White
    sunset: "invert(48%) sepia(79%) saturate(746%) hue-rotate(334deg) brightness(92%) contrast(90%)", // Sunset orange
    "sea-green": "invert(54%) sepia(49%) saturate(492%) hue-rotate(122deg) brightness(95%) contrast(90%)", // Sea green
    kraft: "invert(68%) sepia(13%) saturate(664%) hue-rotate(11deg) brightness(92%) contrast(87%)", // Kraft
};

export function OrigamiDecoration({
    icon,
    className = "",
    size = "sm",
    position,
    mobilePosition,
    opacity = 0.08,
    rotate = 0,
    colorFilter = "light",
    animate = true,
    delay = 0,
}: OrigamiDecorationProps) {
    // Use mobilePosition if provided and on mobile, otherwise use desktop position
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const activePosition = isMobile && mobilePosition ? mobilePosition : position;

    const positionStyles: React.CSSProperties = {
        position: "absolute",
        ...activePosition,
    };

    const content = (
        <img
            src={`/origami-icons/${icon}.svg`}
            alt=""
            className={`${sizeMap[size]} ${className}`}
            style={{
                filter: filterMap[colorFilter],
                transform: `rotate(${rotate}deg)`,
            }}
        />
    );

    if (animate) {
        return (
            <motion.div
                className="pointer-events-none block z-10"
                style={{
                    ...positionStyles,
                    opacity: 0,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                    opacity: opacity,
                    scale: 1
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {content}
            </motion.div>
        );
    }

    return (
        <div
            className="pointer-events-none block z-10"
            style={{
                ...positionStyles,
                opacity: opacity,
            }}
        >
            {content}
        </div>
    );
}

// Preset decoration groups for different section types
interface DecorationConfig {
    icon: OrigamiIconName;
    size: "xs" | "sm" | "md" | "lg";
    position: { top?: string; bottom?: string; left?: string; right?: string };
    mobilePosition?: { top?: string; bottom?: string; left?: string; right?: string };
    opacity: number;
    rotate?: number;
    colorFilter: "black" | "dark" | "light" | "sunset" | "sea-green" | "kraft";
    delay?: number;
}

export function OrigamiDecorationGroup({
    decorations,
}: {
    decorations: DecorationConfig[];
}) {
    return (
        <>
            {decorations.map((dec, index) => (
                <OrigamiDecoration
                    key={`${dec.icon}-${index}`}
                    icon={dec.icon}
                    size={dec.size}
                    position={dec.position}
                    mobilePosition={dec.mobilePosition}
                    opacity={dec.opacity}
                    rotate={dec.rotate || 0}
                    colorFilter={dec.colorFilter}
                    delay={dec.delay || index * 0.1}
                />
            ))}
        </>
    );
}
