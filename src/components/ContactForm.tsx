
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in a real implementation, you would:
    // 1. Verify the reCAPTCHA token
    // 2. Send the form data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "お問い合わせを送信しました",
        description: "担当者より折り返しご連絡いたします。",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card p-8 text-center"
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-3">お問い合わせありがとうございます</h3>
        <p className="text-gray-600 mb-4">
          担当者より折り返しご連絡いたします。
          今しばらくお待ちください。
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            会社名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nk-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            担当者名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nk-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nk-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nk-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nk-500 focus:border-transparent outline-none transition-all"
            required
          ></textarea>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            <span className="text-red-500">*</span> は必須項目です
          </p>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-nk-700 hover:bg-nk-800 text-white font-medium py-3 px-6 rounded-lg transition-all-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;
