
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

interface NewsCardProps {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  delay?: number;
}

const NewsCard = ({ id, title, summary, date, category, delay = 0 }: NewsCardProps) => {
  const formattedDate = format(new Date(date), 'yyyy年MM月dd日', { locale: ja });
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="glass-card overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          <span className="px-3 py-1 bg-nk-100 text-nk-800 text-xs rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-nk-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">{summary}</p>
        
        <div className="mt-auto pt-4">
          <Link 
            to={`/news/${id}`} 
            className="inline-flex items-center text-nk-700 hover:text-nk-800 transition-colors"
          >
            <span>続きを読む</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
