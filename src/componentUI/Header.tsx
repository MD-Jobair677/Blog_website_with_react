import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/category/tech" },
    { label: "Design", href: "/category/design" },
    { label: "Business", href: "/category/business" },
    { label: "Lifestyle", href: "/category/lifestyle" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blog-primary to-blog-primary-light bg-clip-text text-transparent">
              BlogHub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-blog-text-light hover:text-blog-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blog-text-light h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 w-64 bg-blog-surface border-border focus:border-blog-primary"
              />
            </div>

            {/* Subscribe Button */}
            <Button className="hidden md:inline-flex bg-blog-primary hover:bg-blog-primary-light text-white">
              Subscribe
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-4 border-t">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blog-text-light h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-blog-surface border-border focus:border-blog-primary"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-blog-text-light hover:text-blog-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Subscribe */}
            <Button className="w-full bg-blog-primary hover:bg-blog-primary-light text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;