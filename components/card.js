import { motion, useAnimation } from "framer-motion";

export const QuestionCard = ({ question, onSwipeComplete }) => {
    const controls = useAnimation(); // Add controls for animation

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
            controls.start({
                x: offset > 0 ? 1000 : -1000,
                opacity: 0,
                transition: { duration: 0.5 }
            }).then(() => {
                onSwipeComplete();
            });
        } else {
            controls.start({
                x: 0,
                transition: { type: 'spring', stiffness: 300 }
            });
        }
    };
    return (
        <motion.div
            animate={controls}
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragConstraints={{ top: -50, bottom: 50, left: 0, right: 0 }}
            whileTap={{ scale: 1.02 }}
            onDragEnd={handleDragEnd}
            className="flex flex-col md:w-72 md:h-96 h-[85dvh] bg-[#BEB3FF] rounded-2xl overflow-hidden inset-0 m-auto" >
                <div className="flex text-3xl md:text-xl text-[#5f52ad] relative top-20 w-9/12 md:w-11/12 md:m-5 ml-10 font-medium">{question.text}</div>
                <div className='flex rounded-full w-72 h-72 bg-[#9181ec] blur-2xl relative top-40'/>
        </motion.div>
    )
}