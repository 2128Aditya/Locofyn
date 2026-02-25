const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#020617] text-white border-t border-white/10 w-full px-4 md:px-10 lg:px-20"
    >
      <div className="py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-purple-500">Locafyn</h1>
          <p className="text-gray-400 mt-4">
            Empowering local businesses to build their digital identity and grow faster 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-purple-400 transition">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-400 transition">Services</a>
            </li>
            <li>
              <a href="#business" className="hover:text-purple-400 transition">Businesses</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">How We Help You Grow</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Website Creation</li>
            <li>WhatsApp Integration</li>
            <li>SEO Optimization</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
          <p className="text-gray-400">📍 Deoria, India</p>
          <p className="text-gray-400">📧 aadi21082003@gmail.com</p>
          <p className="text-gray-400">📞 +91 XXXXXXXX</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-white/10">
        © 2026 Locafyn. Built with ❤️ for local businesses
      </div>
    </footer>
  );
};

export default Footer;