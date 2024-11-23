'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { QuestionCard } from "./card";
import { QuestionCardStack } from "./stack";

const questions = [
    { id: 1, text: "What is the kindest thing someone did for you recently?" },
    { id: 2, text: "What is your favorite way to spend a rainy day?" },
    { id: 3, text: "What is one thing you are grateful for today?" },
    { id: 4, text: "In what areas of life do you care most about what others think?" },
    { id: 5, text: "What do you tell yourself when you succeed?" },
    { id: 6, text: "What is your favorite way to spend a sunny day?" }
  ];
 
export default function Categories() {
  const [activeGame, setActiveGame] = useState(null);
 
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
 
  return (
    <>
      <AnimatePresence>
        {activeGame ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeGame ? (
          <div className="active-game rounded-none">
            <motion.div
              layoutId={`card-${activeGame.title}`}
              className="inner"
            >
              <div className="header">
                
                <div className="header-inner">
                  <div className="content-wrapper">
                    <motion.h2
                      layoutId={`title-${activeGame.title}`}
                      className="game-title"
                    >
                      {activeGame.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`description-${activeGame.title}`}
                      className="game-description"
                    >
                      {activeGame.description}
                    </motion.p>
                  </div>
                  <motion.button
                    layoutId={`button-${activeGame.title}`}
                    className="button"
                    onClick={()=> setActiveGame(null)}
                  >
                    <X/>
                  </motion.button>
                </div>
              </div>
              
            <motion.div className="relative w-full flex justify-center items-center">
             
            <QuestionCardStack questions={activeGame.questions} background={activeGame.background}/>


            </motion.div>
        </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="list gap-5 flex flex-col w-fit items-center my-12">
        <h1>Pick a topic</h1>
        {GAMES.map((game) => (
          <motion.li
          whileTap={{ scale: 0.98 }}
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            className="bg-[#eee9df] rounded-2xl p-4 h-48"
          >
            
            <div className="game-wrapper">
              <div className="content-wrapper">
                <motion.h2
                  layoutId={`title-${game.title}`}
                  className="game-title"
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className="game-description"
                >
                  {game.description}
                </motion.p>
              </div>
              
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
 
const GAMES = [
  {
    title: "Deep Conversations",
    description: "Carefully curated for cultivating friendships.",
    longDescription:
      "Carefully curated for cultivating friendships.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
    background: {
      bg: "bg-[#BEB3FF]",
      text: "text-[#5f52ad]",
      blob: "bg-[#9181ec]",
    },
    questions: [
      { id: 1, text: "What is the kindest thing someone did for you recently?" },
      { id: 2, text: "What is your favorite way to spend a rainy day?" },
      { id: 4, text: "In what areas of life do you care most about what others think?" },
      { id: 5, text: "What do you tell yourself when you succeed?" },
      { id: 6, text: "What is your favorite way to spend a sunny day?" }
  ],
  },
  {
    title: "Self-knowledge",
    description: "Prompts for personal growth.",
    longDescription:
      "Prompts for personal growth.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
    background: {
      bg: "bg-[#fbf292]",
      text: "text-[#98913b]",
      blob: "bg-[#e8ca46]",
    },
    questions: [
        { id: 2, text: "What is your favorite way to spend a rainy day?" },
        { id: 3, text: "What is one thing you are grateful for today?" },
        { id: 4, text: "In what areas of life do you care most about what others think?" },
    ],
  },
  {
    title: "Date Nights",
    description: "Spice up your lovelife.",
    longDescription:
      "Spice up your lovelife.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
    background: {
      bg: "bg-[#ffd0eb]",
      text: "text-[#f85fb7]",
      blob: "bg-[#f681c4]",
    },
    questions: [
      { id: 1, text: "What is the kindest thing someone did for you recently?" },
      { id: 2, text: "What is your favorite way to spend a rainy day?" },
      { id: 4, text: "In what areas of life do you care most about what others think?" },
      { id: 6, text: "What is your favorite way to spend a sunny day?" }
    ],
  },
];