const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-50 dark:bg-black text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 w-full transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Brand Column */}
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Loca<span className="text-orange-500">fyn</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Empowering local entrepreneurs with premium digital identities. We build the tools you need to dominate your local market.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {["𝕏", "📸", "💼", "📘"].map((icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-orange-500">Quick Navigation</h3>
          <ul className="space-y-4">
            {["Home", "Services", "Work", "Pricing", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-orange-500">Our Solutions</h3>
          <ul className="space-y-4 text-slate-600 dark:text-gray-400">
            <li>High-End Web Design</li>
            <li>Custom App Development</li>
            <li>E-commerce Engines</li>
            <li>SEO Dominance</li>
            <li>Strategic Branding</li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-orange-500">Company</h3>
          <ul className="space-y-4 text-slate-600 dark:text-gray-400">
            <li className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span>Deoria, Uttar Pradesh</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="text-xl">📧</span>
              <span>hello@locafyn.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright area */}
      <div className="border-t border-slate-200 dark:border-white/5 py-8 text-center relative">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Locafyn. Built with ❤️ for Local Businesses. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;