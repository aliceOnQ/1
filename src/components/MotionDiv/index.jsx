import { motion } from "framer-motion";


const MotionDiv = ({ children, className }) => {
   return (
      <motion.div
         className={className}
         initial={{ opacity: 0 ,x:-400,y:0}}
         animate={{ opacity: 1 ,x:0,y:0}}
         exit={{opacity: 0 ,x:window.innerWidth}}
         transition={{duration: 1.5,type:"linear" }}

      >
         {children}
      </motion.div>
   );
}

export default MotionDiv;

// Path: src/components/ProfileCard/index.jsx