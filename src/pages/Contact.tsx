
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
            <p className="text-xl text-nk-100">
              サービスに関するご質問や導入のご相談など、お気軽にお問い合わせください。
              担当者より折り返しご連絡いたします。
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-nk-900">
                  お問い合わせフォーム
                </h2>
                <p className="text-gray-600 mb-8">
                  以下のフォームに必要事項をご入力の上、送信ボタンをクリックしてください。
                  <span className="text-red-500">*</span> は必須項目です。
                </p>
              </motion.div>

              <ContactForm />
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card p-8"
              >
                <h3 className="text-xl font-semibold mb-6 text-nk-900">お問い合わせ先</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-nk-700 mt-1" />
                    <div>
                      <p className="font-medium text-nk-900">お電話でのお問い合わせ</p>
                      <p className="text-gray-600">0532-87-5356</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-nk-700 mt-1" />
                    <div>
                      <p className="font-medium text-nk-900">メールでのお問い合わせ</p>
                      <p className="text-gray-600">info@win-tec.jp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 text-nk-700 mt-1" />
                    <div>
                      <p className="font-medium text-nk-900">営業時間</p>
                      <p className="text-gray-600">平日 9:00 - 18:00</p>
                      <p className="text-gray-500 text-sm">土日祝日は休業</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 text-nk-900">所在地</h3>
                  <p className="text-gray-600 mb-4">
                    〒441-1115<br />
                    愛知県豊橋市石巻本町字大清水２３−１５
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
