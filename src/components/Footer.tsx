
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nk-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">株式会社NKシステム</h3>
            <p className="text-gray-300 max-w-md">
              ソフトウェア開発、FAシステム導入支援、電力監視システムサポートなど、
              企業のDX推進をサポートします。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  事業内容
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/company-info" className="text-gray-300 hover:text-white transition-colors">
                  企業情報
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-nk-300 mt-0.5" />
                <span className="text-gray-300">
                  〒441-1115 愛知県豊橋市石巻本町字大清水２３−１５
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nk-300" />
                <span className="text-gray-300">tel: 0532-87-5356</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nk-300" />
                <a
                  href="mailto:info@win-tec.jp"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@win-tec.jp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} 株式会社NKシステム All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
