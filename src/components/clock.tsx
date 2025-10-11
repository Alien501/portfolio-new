import { useEffect, useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultCharMap = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

interface CharacterBlockProps {
    charMap?: readonly (readonly number[])[] | number[][]
}

const CharacterBlock = memo(({charMap = defaultCharMap}: CharacterBlockProps) => {
  return (
    <motion.div 
      className="grid grid-cols-3 gap-0.5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {charMap.flat().map((isActive, i) => (
        <motion.div 
          key={i} 
          className="w-[4px] aspect-square rounded-full relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: i * 0.02,
            type: "tween",
            stiffness: 500,
            damping: 25
          }}
        >
            <motion.span 
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[6px] ${isActive === 1 ? 'text-gray-50' : 'text-gray-50/10'}`}
              animate={{
                filter: isActive === 1 
                  ? 'drop-shadow(0 0 8px rgba(255,255,255,.5)) drop-shadow(0 0 4px rgba(255,255,255,.5))' 
                  : 'drop-shadow(0 0 0px rgba(255,255,255,0))',
              }}
              transition={{ 
                duration: 0.3,
                scale: { duration: 0.5, ease: "easeIn" }
              }}
            >
              ●
            </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
});

CharacterBlock.displayName = 'CharacterBlock';

// Character maps for digits 0-9
const DIGIT_MAPS = [
    [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]], // 0
    [[1, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]], // 1
    [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]], // 2
    [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]], // 3
    [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]], // 4
    [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]], // 5
    [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]], // 6
    [[1, 1, 1], [0, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]], // 7
    [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]], // 8
    [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]], // 9
] as const;

// Special characters (colon, letters H, E, L, !)
const SPECIAL_MAPS = {
    colon: [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]],
    H: [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
    E: [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 0], [1, 1, 1]],
    L: [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]],
    exclamation: [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0]],
} as const;

const getCurrentTimeString = (): string => {
    return new Date()
        .toLocaleString('en-IN', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        .replace(/\D/g, '');
};

export default function Clock() {
    const [isHovered, setIsHovered] = useState(false);
    const [currentTime, setCurrentTime] = useState(() => getCurrentTimeString());

    useEffect(() => {
        setCurrentTime(getCurrentTimeString());

        const timerInterval = setInterval(() => {
            setCurrentTime(getCurrentTimeString());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const displayBlocks = useMemo(() => {
        if (isHovered) {
            return [
                defaultCharMap,
                SPECIAL_MAPS.H,
                SPECIAL_MAPS.E,
                SPECIAL_MAPS.L,
                SPECIAL_MAPS.L,
                DIGIT_MAPS[0],
                SPECIAL_MAPS.exclamation,
                defaultCharMap,
            ];
        }

        return [
            DIGIT_MAPS[Number(currentTime[0]) || 0],
            DIGIT_MAPS[Number(currentTime[1]) || 0],
            SPECIAL_MAPS.colon,
            DIGIT_MAPS[Number(currentTime[2]) || 0],
            DIGIT_MAPS[Number(currentTime[3]) || 0],
            SPECIAL_MAPS.colon,
            DIGIT_MAPS[Number(currentTime[4]) || 0],
            DIGIT_MAPS[Number(currentTime[5]) || 0],
        ];
    }, [isHovered, currentTime]);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full flex space-x-1 justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <AnimatePresence mode="popLayout">
                {displayBlocks.map((charMap, index) => (
                    <motion.div
                        key={`${isHovered}-${index}`}
                        initial={{ opacity: 0, rotateX: -90, scale: 0.8 }}
                        animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateX: 90, scale: 0.8 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                            ease: "easeInOut"
                        }}
                        style={{ transformPerspective: 1000 }}
                    >
                        <CharacterBlock charMap={charMap} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}