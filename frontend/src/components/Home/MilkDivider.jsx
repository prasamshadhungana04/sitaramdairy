// frontend/src/components/Home/MilkDivider.jsx
import { motion } from 'framer-motion';

export default function MilkDivider() {
  return (
    <div className="w-full overflow-hidden leading-none rotate-180 bg-white">
      <motion.svg
        className="relative block w-full h-[50px] md:h-[100px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ y: 10 }}
        animate={{ y: [10, -5, 10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-milk"
        ></path>
      </motion.svg>
    </div>
  );
}