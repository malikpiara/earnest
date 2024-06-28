'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
 
export default function SharedLayout() {
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
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="long-description"
              >
                {activeGame.longDescription}
              </motion.p>
              <motion.div className="flex w-72 h-96 bg-pink-300 rounded-2xl m-auto overflow-hidden" >
                <div className="flex text-xl leading-tight mt-8 ml-6">What is the kindest thing someone did for you?</div>
                <div className='rounded-full w-72 h-72 bg-red-600 opacity-40 blur-2xl relative top-40'/>
                
                </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="list gap-5 flex flex-col w-fit items-center my-5">
        <h1>Earnest Cards</h1>
        {GAMES.map((game) => (
          <motion.li
          whileTap={{ scale: 0.98 }}
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            className="bg-white rounded-2xl p-4"
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
      "A wide space of possibilities obstructs our ability to reason and creates room for bad decisions. Its easy to think through the trade-offs and consequences of picking one option when we have four. When we have hundred, our ability to reason becomes crippled. We do nott have time or capacity to fully consider every option.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Self-knowledge",
    description: "Prompts for personal growth.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Date Nights",
    description: "Spice up your lovelife.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
];