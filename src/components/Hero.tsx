
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({ title, subtitle, description, ctaText, ctaLink }: HeroProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] } },
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-nk-50 via-white to-nk-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-2/3 h-2/3 -mr-10 bg-nk-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 -ml-10 bg-nk-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h2 className="text-nk-800 text-lg md:text-xl font-medium mb-4">{subtitle}</h2>
          </motion.div>
          
          <motion.div variants={item}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-nk-900 leading-tight">
              {title}
            </h1>
          </motion.div>
          
          <motion.div variants={item}>
            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              {description}
            </p>
          </motion.div>
          
          <motion.div variants={item}>
            <Link
              to={ctaLink}
              className="inline-flex items-center space-x-2 bg-nk-700 hover:bg-nk-800 text-white font-medium py-3 px-8 rounded-lg transition-all-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
