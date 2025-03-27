
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nk-50 via-white to-nk-100 p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 text-center"
        >
          <h1 className="text-6xl font-bold text-nk-900 mb-6">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            お探しのページは見つかりませんでした
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-nk-700 hover:bg-nk-800 text-white font-medium py-3 px-6 rounded-lg transition-all-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>ホームに戻る</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
