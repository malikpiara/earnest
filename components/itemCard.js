'use client';
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion";
import { useState } from "react";

export default function CategoryComponent({title= 'Deep Conversations', description='Carefully curated for cultivating friendships.'}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div onClick={() => setOpen((o) => !o)}
      className={
        open
          ? 'fixed inset-0 h-screen w-screen bg-red-500' 
          : 'opacity-100' 
      } layout>
    <Card className={open ? "flex flex-row items-center gap-6 p-6 bg-background rounded-xl shadow-md wrapper " : "flex flex-row items-center gap-6 p-6 bg-background rounded-xl shadow-md wrapper cursor-pointer"}>
      <div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className={open
          ? ' bg-red-500' 
          : 'bg-blue-500' 
      }>{description}</p>
      {open && <>
      <p>A wide space of possibilities obstructs our ability to reason and creates room for bad decisions. Its easy to think through the trade-offs and consequences of picking one option when we have four. When we have hundred, our ability to reason becomes crippled. We do nott have time or capacity to fully consider every option.</p></>}
      </div>

    </Card>
        </motion.div>
      
  )
}