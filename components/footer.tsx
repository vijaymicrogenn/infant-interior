import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary/95 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-5">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="logo.png"
              alt="Urban Interiors Logo"
              className="w-36 opacity-95"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming spaces with creative and modern interior solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-accent transition-all duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  S.F No.142, 2C, Siruvani Nager, near Nirmala Matha School,
                  Rathinapuri, Edayampalayam, Kuniyamuthur, Coimbatore-641 008
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel: ++919688109562"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  +91 96881 09562 ,
                </a>
                <a
                  href="tel: +918248573370"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  +91 8248573370
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:hello@urbaninteriors.com"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  hello@infantinteriors.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Infant Interiors — All rights reserved.
          </p>

          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed and developed by{" "}
            <a
              href="https://microgenn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 font-medium"
            >
              Microgenn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
