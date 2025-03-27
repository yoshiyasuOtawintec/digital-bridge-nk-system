
import { motion } from "framer-motion";
import GoogleMap from "@/components/GoogleMap";

const CompanyInfo = () => {
  const companyDetails = [
    { label: "会社名", value: "株式会社NKシステム" },
    { label: "代表者", value: "太田 佳泰" },
    { label: "所在地", value: "〒441-1115 愛知県豊橋市石巻本町字大清水２３−１５" },
    { label: "電話番号", value: "0532-87-5356" },
    { label: "メールアドレス", value: "info@win-tec.jp" },
    { label: "設立", value: "2016年6月1日" },
    { label: "資本金", value: "非公開" },
    { label: "取引銀行", value: "三菱UFJ銀行、愛知銀行" },
    { label: "事業内容", value: "ソフトウェア開発、FAシステム導入支援、電力監視システムサポート" },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">企業情報</h1>
            <p className="text-xl text-nk-100">
              NKシステムの企業情報をご紹介します。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-nk-900 text-center">
                会社概要
              </h2>

              <div className="glass-card overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {companyDetails.map((detail, index) => (
                      <tr 
                        key={index}
                        className={index !== companyDetails.length - 1 ? "border-b border-gray-200" : ""}
                      >
                        <th className="text-left py-4 px-6 bg-nk-50 text-nk-900 w-1/3">
                          {detail.label}
                        </th>
                        <td className="py-4 px-6 text-gray-700">{detail.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-10 text-nk-900 text-center">
                企業理念
              </h2>

              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-semibold mb-6 text-nk-900">
                  テクノロジーで未来を拓く
                </h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  私たちは、最新のデジタル技術を活用し、お客様の業務効率化と価値創造を支援します。
                  常に進化する技術と向き合い、革新的なソリューションを提供することで、
                  持続可能な社会の実現に貢献します。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-10 text-nk-900 text-center">
                アクセス
              </h2>

              <div className="glass-card p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-nk-900">
                    所在地
                  </h3>
                  <p className="text-gray-700 mb-2">
                    〒441-1115
                  </p>
                  <p className="text-gray-700">
                    愛知県豊橋市石巻本町字大清水２３−１５
                  </p>
                </div>

                <GoogleMap 
                  address="愛知県豊橋市石巻本町字大清水２３−１５" 
                  height="400px" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
