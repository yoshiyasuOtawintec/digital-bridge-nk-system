
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "ホーム", path: "/" },
    { name: "事業内容", path: "/services" },
    { name: "お問い合わせ", path: "/contact" },
    { name: "企業情報", path: "/company-info" },
    { name: "ニュース", path: "/news" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-10 flex items-center space-x-2"
            aria-label="NKシステム"
          >
            <span className="font-bold text-2xl text-nk-800">
              株式会社NKシステム
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-nk-600",
                  location.pathname === item.path
                    ? "text-nk-700"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-nk-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-white transform transition-transform ease-in-out duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full mt-16 p-6 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "py-2 text-xl font-medium transition-colors hover:text-nk-600",
                  location.pathname === item.path
                    ? "text-nk-700"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
