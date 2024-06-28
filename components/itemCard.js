'use client';
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion";
import { useState } from "react";

export default function CategoryComponent({title= 'Deep Conversations', description='Carefully curated for cultivating friendships.'}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
    whileTap={{ scale: 0.98 }}
    onClick={() => setOpen((o) => !o)}
    initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
      className={
        open
          ? ' inset-0 ' 
          : 'opacity-100' 
      } layout>
    <Card className={open ? "flex flex-row items-center gap-6 p-6 bg-background shadow-md wrapper w-screen h-screen rounded-none" : "flex flex-row items-center gap-6 p-6 bg-background rounded-xl shadow-md wrapper cursor-pointer"}>
      <div>
        <div className="cardText">
        <motion.h3 className="text-2xl font-bold text-foreground">{title}</motion.h3>
        <motion.p className={open
          ? 'opacity-100' 
          : 'opacity-100' 
      }>{description}</motion.p>
        </div>
      {open && <>
      <motion.div>
      <motion.p className="text-gray-500">A wide space of possibilities obstructs our ability to reason and creates room for bad decisions. Its easy to think through the trade-offs and consequences of picking one option when we have four. When we have hundred, our ability to reason becomes crippled. We do nott have time or capacity to fully consider every option.</motion.p>
      </motion.div>
      </>
      }
      </div>

      

    </Card>
        </motion.div>
      
  )
}