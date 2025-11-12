import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white hidden sm:block">Concise Summarize</span>
            <span className="text-2xl font-bold text-white sm:hidden">CS</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-8">
            <Link
              to="/"
              className={`px-4 py-2 text-base font-semibold transition-all duration-300 rounded-lg ${
                isActive("/")
                  ? "text-primary bg-accent shadow-lg scale-105"
                  : "text-white hover:text-accent hover:bg-white/10"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 text-base font-semibold transition-all duration-300 rounded-lg ${
                isActive("/about")
                  ? "text-primary bg-accent shadow-lg scale-105"
                  : "text-white hover:text-accent hover:bg-white/10"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
