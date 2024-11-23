'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuestionCard } from "./card";

export const QuestionCardStack = ({ questions, background }) => {
  const [stack, setStack] = useState(questions);

  const handleSwipeComplete = () => {
    setStack((prevStack) => prevStack.slice(1)); // Remove the top card
  };

  return (
    <div className="relative h-[85dvh] w-full flex justify-center items-center"> 
      <AnimatePresence>
        {stack.slice(0, 1).map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: -50 * index }} // Stack cards vertically
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            <QuestionCard question={question} onSwipeComplete={handleSwipeComplete} background={background} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};