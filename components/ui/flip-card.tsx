"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlipCard({ frontContent, backContent }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-64 w-96 cursor-pointer" onClick={handleFlip}>
        <motion.div
          className="h-full w-full rounded-xl shadow-xl"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Ön Yüz */}
          <div
            className="absolute bg-secondary inset-0 rounded-xl flex items-center justify-center backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            {frontContent}
          </div>

          {/* Arka Yüz */}
          <div
            className="absolute bg-secondary inset-0 rounded-xl flex items-center justify-center backface-hidden text-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {backContent}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
