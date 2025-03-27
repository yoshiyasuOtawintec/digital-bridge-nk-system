
import { motion } from "framer-motion";
import { 
  Brain, 
  Code, 
  FileText, 
  MessageSquare, 
  Cpu, 
  Database, 
  Search, 
  ZapIcon, 
  BarChart3, 
  BellRing 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      category: "生成AIを活用したサポート",
      items: [
        {
          title: "HP作成",
          description: "生成AIを活用して、お客様の要件に合わせた高品質なホームページを短期間で作成します。",
          icon: Code,
        },
        {
          title: "ドキュメント作成サポート",
          description: "マニュアルや提案書、報告書など、様々なビジネスドキュメントの作成を効率化します。",
          icon: FileText,
        },
        {
          title: "議事録作成サポート",
          description: "会議の音声データから自動で議事録を作成。重要なポイントを抽出し、編集可能な形式で提供します。",
          icon: MessageSquare,
        },
      ],
    },
    {
      id: 2,
      category: "FA現場のDX導入",
      items: [
        {
          title: "工程管理システム",
          description: "製造工程の進捗をリアルタイムに把握し、効率的な生産管理を実現します。",
          icon: Cpu,
        },
        {
          title: "データ収集・分析",
          description: "設備やラインからのデータを自動収集し、分析することで生産性向上や不良率低減に貢献します。",
          icon: Database,
        },
        {
          title: "異常検知システム",
          description: "AIを活用した異常検知で、設備の故障を未然に防ぎ、ダウンタイムを最小化します。",
          icon: Search,
        },
      ],
    },
    {
      id: 3,
      category: "電力監視システム",
      items: [
        {
          title: "電力使用量の可視化",
          description: "リアルタイムでの電力使用状況の可視化により、エネルギーコストの削減に貢献します。",
          icon: ZapIcon,
        },
        {
          title: "使用状況分析",
          description: "過去データとの比較や時間帯別の使用状況分析で、効率的なエネルギー利用を提案します。",
          icon: BarChart3,
        },
        {
          title: "異常使用アラート",
          description: "通常とは異なる電力使用パターンを検知し、無駄な電力使用や機器の異常を通知します。",
          icon: BellRing,
        },
      ],
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">事業内容</h1>
            <p className="text-xl text-nk-100">
              NKシステムでは、最新技術を活用したサービスで企業のDXを推進し、
              お客様のビジネスの成長と効率化をサポートします。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-nk-900 mb-4">
                  {service.category}
                </h2>
                <div className="w-20 h-1 bg-nk-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  
                  return (
                    <motion.div
                      key={`${service.id}-${itemIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="glass-card p-8 flex flex-col items-center text-center"
                    >
                      <div className="bg-nk-50 p-4 rounded-full mb-6 w-20 h-20 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-nk-700" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-nk-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-nk-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-nk-900">
              お客様に最適なソリューションを提供します
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              サービスについて詳しく知りたい方や、導入についてご相談のある方は、
              お気軽にお問い合わせください。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-nk-700 hover:bg-nk-800 text-white font-medium py-3 px-8 rounded-lg transition-all-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>お問い合わせ</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
