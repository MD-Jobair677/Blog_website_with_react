import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Company": [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" }
    ],
    "Content": [
      { label: "All Articles", href: "/articles" },
      { label: "Categories", href: "/categories" },
      { label: "Authors", href: "/authors" },
      { label: "Newsletter", href: "/newsletter" }
    ],
    "Resources": [
      { label: "Writing Guidelines", href: "/guidelines" },
      { label: "Style Guide", href: "/style-guide" },
      { label: "Brand Assets", href: "/brand" },
      { label: "RSS Feed", href: "/rss" }
    ],
    "Legal": [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "DMCA", href: "/dmca" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@bloghub.com", label: "Email" }
  ];

  return (
    <footer className="bg-black  text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blog-primary-light to-white bg-clip-text text-transparent mb-4">
                BlogHub
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Discover amazing stories, insights, and ideas from passionate writers around the world. 
                Join our community of curious minds.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blog-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>© 2023 BlogHub. Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for readers everywhere.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </a>
            <div className="text-white/50">
              v2.1.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;