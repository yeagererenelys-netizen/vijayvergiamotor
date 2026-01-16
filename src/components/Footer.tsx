import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-primary-foreground">
                  Vijayvergiya
                </span>
                <span className="text-xs text-secondary-foreground/70">
                  Motor Driving School
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Jaipur's first ISO-certified driving school since 1997. We focus on building confident, safe drivers through expert instruction.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/vijayvargiya.driving/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Student Reviews", path: "/reviews" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Basic Car Driving",
                "Advanced Training",
                "Refresher Courses",
                "Women's Special Classes",
                "Road Safety Training",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  B-32, Gopalpura Bypass Rd, near Tilak Public School, Triveni Nagar, Jaipur, Rajasthan 302018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919982299987"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  +91 99822 99987
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:vijayvergiyadriving@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  vijayvergiyadriving@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Open 24 Hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5977289392!2d75.7785863!3d26.8543897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5bb5ce88ff7%3A0x8c9a0e3d7c8f8a0e!2sVijayvergiya%20Motor%20Driving%20School!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vijayvergiya Motor Driving School Location"
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Vijayvergiya Motor Driving School. All rights reserved.
          </p>
          <p className="text-secondary-foreground/40 text-xs mt-2">
            Drive Smart. Drive Safe. Since 1997.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
