
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, ZapIcon } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import NewsCard from "@/components/NewsCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState([
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
  ]);

  return (
    <>
      <Hero
        title="デジタル技術で企業の未来を創造する"
        subtitle="株式会社NKシステム"
        description="生成AI、FAシステム、電力監視まで、企業のDX推進をワンストップでサポートします。最先端の技術と確かな実績で、お客様のビジネスを次のステージへ。"
        ctaText="サービスを見る"
        ctaLink="/services"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nk-900">
              事業内容
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NKシステムでは、生成AI活用サポート、FA現場のDX導入、電力監視システムの3つの柱でお客様のビジネスをサポートします。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="生成AIを活用したサポート"
              description="HP作成やドキュメント・議事録作成など、生成AIを活用して業務効率化をサポートします。"
              icon={Brain}
              delay={0}
            />
            <ServiceCard
              title="FA現場のDX導入"
              description="製造現場の自動化・効率化をサポート。データ活用で生産性と品質の向上を実現します。"
              icon={Cpu}
              delay={2}
            />
            <ServiceCard
              title="電力監視システム"
              description="エネルギー使用の可視化と最適化で、コスト削減と環境負荷軽減に貢献します。"
              icon={ZapIcon}
              delay={4}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-nk-600 text-nk-700 hover:bg-nk-50 rounded-lg transition-all-200"
            >
              すべてのサービスを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-nk-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-0 text-nk-900">
                最新のお知らせ
              </h2>
            </div>
            <Link
              to="/news"
              className="text-nk-700 hover:text-nk-800 font-medium transition-colors mt-4 md:mt-0"
            >
              すべてのお知らせを見る →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                summary={item.summary}
                date={item.date}
                category={item.category}
                delay={index * 2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-nk-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nk-900">
                お問い合わせ
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                サービスに関するご質問や詳細な情報をご希望の方は、お気軽にお問い合わせください。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-nk-700 hover:bg-nk-800 text-white font-medium py-3 px-8 rounded-lg transition-all-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>お問い合わせはこちら</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
