
import { useState } from "react";
import { motion } from "framer-motion";
import NewsCard from "@/components/NewsCard";

const News = () => {
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: "FAシステムの新サービス開始",
      summary: "工場自動化システムの新サービスの提供を開始しました。詳細はこちらをご覧ください。",
      date: "2023-12-15",
      category: "サービス",
    },
    {
      id: 2,
      title: "電力監視システムの導入事例",
      summary: "某製造業様への電力監視システム導入の事例を紹介します。大幅なコスト削減に成功しました。",
      date: "2023-11-20",
      category: "導入事例",
    },
    {
      id: 3,
      title: "生成AIを活用した業務効率化セミナー開催",
      summary: "来月、生成AIを活用した業務効率化セミナーを開催します。参加希望の方はお問い合わせください。",
      date: "2023-10-05",
      category: "イベント",
    },
    {
      id: 4,
      title: "年末年始の営業について",
      summary: "年末年始の営業についてお知らせいたします。12月29日から1月4日まで休業とさせていただきます。",
      date: "2023-12-01",
      category: "お知らせ",
    },
    {
      id: 5,
      title: "採用情報更新",
      summary: "2024年度の採用情報を更新しました。エンジニア、営業職の募集を行っています。",
      date: "2023-09-15",
      category: "採用",
    },
    {
      id: 6,
      title: "新オフィス移転のお知らせ",
      summary: "業務拡大に伴い、新オフィスへ移転いたしました。新住所、連絡先に変更はございません。",
      date: "2023-08-01",
      category: "お知らせ",
    },
  ]);

  const [filterCategory, setFilterCategory] = useState("");

  const categories = [
    "すべて",
    ...Array.from(new Set(newsItems.map((item) => item.category))),
  ];

  const filteredNews = filterCategory
    ? newsItems.filter((item) => item.category === filterCategory)
    : newsItems;

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-nk-800 to-nk-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ニュース</h1>
            <p className="text-xl text-nk-100">
              NKシステムの最新のお知らせやニュースをご紹介します。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilterCategory(category === "すべて" ? "" : category)}
                  className={`px-4 py-2 rounded-full transition-all-200 ${
                    (category === "すべて" && !filterCategory) ||
                    category === filterCategory
                      ? "bg-nk-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                summary={item.summary}
                date={item.date}
                category={item.category}
                delay={index}
              />
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                該当するニュースはありません。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
