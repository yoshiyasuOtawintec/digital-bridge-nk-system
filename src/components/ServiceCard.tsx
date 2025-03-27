
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="glass-card p-6 sm:p-8 h-full flex flex-col"
    >
      <div className="bg-nk-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-nk-700" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-nk-900">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
