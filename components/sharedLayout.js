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

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Modify how activeGame is set to include shuffled questions
  const handleGameSelect = (game) => {
    setActiveGame({
      ...game,
      questions: shuffleArray(game.questions)
    });
  };
 
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
            onClick={() => handleGameSelect(game)}
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
      { id: 6, text: "What is your favorite way to spend a sunny day?" },
      { id: 7, text: "In which ways are you a difficult person to have a relationship with?" },
      { id: 8, text: "Can you describe your own taste in interiors and design?" },
      { id: 9, text: "In what ways have your parents influenced your choice of partner?" },
      { id: 10, text: "What are the best things you owe your parents?" },
      { id: 11, text: "Are you reluctant or open to bringing together people from different parts of your life?" },
      { id: 12, text: "For you, what would be a good death?" },
      { id: 13, text: "Is it better to give money to the government or to charity?" },
      { id: 14, text: "When do you feel lonely?" },
      { id: 15, text: "If you had to live somewhere else, where would you live?" },
      { id: 16, text: "Which close relative do you like the least. Why?" },
      { id: 17, text: "What do you imagine people say when they gossip about you?" },
      { id: 18, text: "If you had to write a book, what would it be about?" },
      { id: 19, text: "If you knew you only had one year to live from now, how would you spend the next 12 months?" },
      { id: 20, text: "Have you ever sabotaged your own success?" },
      { id: 21, text: "Under what conditions could you have an open relationship and make it work?" },
      { id: 22, text: "Do you have a relationship pattern? If so, has it tended to lead to suitable or unsuitable partners?" },
      { id: 23, text: "What skills does the ideal host have?" },
      { id: 25, text: "If you read your partner's texts, what do you fear you might discover that would upset you?" },
      { id: 26, text: "What do you and your partner argue about the most?" },
      { id: 27, text: "Can adultery ever be acceptable?" },
      { id: 28, text: "What makes a person a good travelling companion?" },
      { id: 29, text: "What are your happiest memories of your parents?" },
      { id: 30, text: "What music has influenced your attitude to life?" },
      { id: 31, text: "Describe a piece of art that you really like. Why?" },
      { id: 32, text: "What would be the first thing you would do if you won the lottery?" },
      { id: 33, text: "If you were in charge of the Bill Gates foundation and could spend the funds tackling one issue, what would it be?" },
      { id: 34, text: "If you had to choose between a happy home life and a mediocre career, or a successful career and a mediocre home life, which would you choose?" },
      { id: 35, text: "What makes you most stressed?" },
      { id: 36, text: "In what ways are you prone to addiction?" },
      { id: 37, text: "Who has offered you the most useful career advice?" },
      { id: 38, text: "When did you last throw your head back in laughter?" },
      { id: 39, text: "If you could own any piece of art, what would it be?" },
      { id: 39, text: "Has a work of literature or art ever directly influenced your life?" },
      { id: 39, text: "Where do you feel most at home?" },
      { id: 39, text: "Describe a memory of a taste or smell and what it evokes to you." },
      { id: 39, text: "Would you like to live more in your body or more in your head?" },
      { id: 39, text: "When have you acted without 100% integrity?" },
      { id: 39, text: "Do you think other people regard you as a good listener?" },
      { id: 39, text: "Of the people you spend time with, who brings out your best qualities?" },
      { id: 39, text: "When do you feel shy?" },
      
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
        { id: 14, text: "When do you feel lonely?" },
        { id: 9, text: "In what ways have your parents influenced your choice of partner?" },
      { id: 10, text: "What are the best things you owe your parents?" },
    ],
  },
  {
    title: "Date Nights",
    description: "Spark deeper connection.",
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
      { id: 6, text: "What is your favorite way to spend a sunny day?" },
      { id: 24, text: "Are sexual fantasies a good thing to be shared?" },
      { id: 14, text: "When do you feel lonely?" },
      { id: 39, text: "Where do you feel most at home?" },
      { id: 34, text: "If you had to choose between a happy home life and a mediocre career, or a successful career and a mediocre home life, which would you choose?" },
      { id: 9, text: "In what ways have your parents influenced your choice of partner?" },
      { id: 10, text: "What are the best things you owe your parents?" },
      { id: 28, text: "What makes a person a good travelling companion?" },
    ],
  },
];