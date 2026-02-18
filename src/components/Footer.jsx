import { Link } from 'react-router-dom'
import { Scale, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  'Personal Injury',
  'Criminal Defense',
  'Family Law',
  'Corporate Law',
  'Real Estate',
  'Estate Planning',
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Scale className="w-8 h-8 text-primary-300" />
              <div>
                <span className="font-serif text-xl font-bold text-white">Stephen</span>
                <span className="font-serif text-xl text-primary-300 ml-1">Law Firm</span>
              </div>
            </div>
            <p className="text-primary-300 mb-6 leading-relaxed">
              Trusted legal representation in New York. Committed to justice, excellence, and client success since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-primary-300 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-300 mt-0.5" />
                <span className="text-primary-300">
                  350 Fifth Avenue, Suite 5400<br />
                  New York, NY 10118
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-300" />
                <a href="tel:+12125551234" className="text-primary-300 hover:text-white transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-300" />
                <a href="mailto:info@stephenlawfirm.com" className="text-primary-300 hover:text-white transition-colors">
                  info@stephenlawfirm.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-300" />
                <span className="text-primary-300">
                  Mon-Fri: 9:00 AM - 7:00 PM<br />
                  Sat: 10:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 text-center text-primary-400">
          <p>&copy; {new Date().getFullYear()} Stephen Law Firm. All rights reserved. | Attorney Advertising</p>
        </div>
      </div>
    </footer>
  )
}
