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
            Empowering local entrepreneurs with premium digital identities. 
            We help businesses grow digitally 🚀
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {["𝕏", "📸", "💼", "📘"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-orange-500">
            Quick Navigation
          </h3>

          <ul className="space-y-4">
            <li>
              <a href="/" className="text-slate-600 dark:text-gray-400 hover:text-orange-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="text-slate-600 dark:text-gray-400 hover:text-orange-500 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#work" className="text-slate-600 dark:text-gray-400 hover:text-orange-500 transition">
                Work
              </a>
            </li>

            <li>
              <a href="/team" className="text-slate-600 dark:text-gray-400 hover:text-orange-500 transition">
                Core Team
              </a>
            </li>

            <li>
              <a href="#contact" className="text-slate-600 dark:text-gray-400 hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-orange-500">
            Our Solutions
          </h3>

          <ul className="space-y-4 text-slate-600 dark:text-gray-400">
            <li>High-End Web Design</li>
            <li>Custom App Development</li>
            <li>E-commerce Solutions</li>
            <li>SEO Optimization</li>
            <li>Branding & Strategy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-8 uppercase tracking-widest text-orange-500">
            Contact
          </h3>

          <ul className="space-y-4 text-slate-600 dark:text-gray-400">
            <li className="flex items-center gap-3">
              <span>📍</span>
              <span>Deoria, Uttar Pradesh</span>
            </li>

            <li className="flex items-center gap-3">
              <span>📧</span>
              <span>hello@locafyn.com</span>
            </li>

            <li className="flex items-center gap-3">
              <span>📱</span>
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200 dark:border-white/5 py-8 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Locafyn 🚀 | Built for Local Businesses
        </p>
      </div>
    </footer>
  );
};

export default Footer;