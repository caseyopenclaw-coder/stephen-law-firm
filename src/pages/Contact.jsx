import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    details: [
      '350 Fifth Avenue, Suite 5400',
      'New York, NY 10118',
    ],
    description: 'Located in the iconic Empire State Building'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: [
      '(212) 555-1234',
      '(212) 555-5678',
    ],
    description: '24/7 for emergencies'
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'info@stephenlawfirm.com',
      'cases@stephenlawfirm.com',
    ],
    description: 'We respond within 24 hours'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 9:00 AM - 7:00 PM',
      'Saturday: 10:00 AM - 2:00 PM',
      'Sunday: By appointment',
    ],
    description: 'Flexible hours available'
  },
]

const practiceAreas = [
  'Personal Injury',
  'Criminal Defense',
  'Family Law',
  'Corporate Law',
  'Real Estate',
  'Estate Planning',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState(null) // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practiceArea: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0}
            className="text-center"
          >
            <span className="text-primary-600 font-semibold uppercase tracking-wider">Contact Us</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mt-4 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Ready to discuss your legal matter? Fill out the form below or contact us directly. 
              We offer free consultations for all new clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-primary-50 rounded-xl"
              >
                <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">{info.title}</h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-primary-700 mb-1">{detail}</p>
                ))}
                <p className="text-sm text-primary-500 mt-3">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
                Request a Free Consultation
              </h2>
              <p className="text-primary-600 mb-8">
                Fill out the form below and one of our experienced attorneys will contact you within 24 hours.
              </p>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-800">Message Sent Successfully!</div>
                    <div className="text-green-700 text-sm">We'll be in touch within 24 hours.</div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="(212) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practiceArea" className="block text-sm font-medium text-primary-700 mb-2">
                    Legal Matter *
                  </label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    required
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    Describe Your Legal Matter *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Please describe your legal matter and any relevant details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-primary-800 text-white font-semibold rounded-sm hover:bg-primary-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Request Free Consultation
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-primary-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <div className="bg-primary-200 rounded-xl h-80 mb-8 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <p className="text-primary-700 font-medium">350 Fifth Avenue, Suite 5400</p>
                  <p className="text-primary-600">New York, NY 10118</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-primary-700">Free initial consultation within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-primary-700">Honest assessment of your case</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-primary-700">Clear communication throughout your case</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-primary-700">No obligation to proceed</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-primary-800 rounded-xl">
                  <h3 className="font-serif text-xl font-bold text-white mb-4">
                    Emergency Contact
                  </h3>
                  <p className="text-primary-200 mb-4">
                    If you're facing an urgent legal matter outside of business hours, 
                    call our emergency line.
                  </p>
                  <a
                    href="tel:+12125551234"
                    className="inline-flex items-center text-gold font-semibold hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (212) 555-1234
                  </a>
                </div>

                <div className="p-6 bg-primary-50 rounded-xl">
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">
                    Serving All of New York
                  </h3>
                  <p className="text-primary-700">
                    While our office is located in Manhattan, we represent clients throughout 
                    New York State, including all five boroughs (Manhattan, Brooklyn, Queens, 
                    The Bronx, and Staten Island), Long Island, Westchester, and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
              Contact Stephen Law Firm – New York's Trusted Attorneys
            </h2>
            <div className="space-y-6 text-primary-700 leading-relaxed">
              <p>
                When you need experienced legal representation in New York, contact Stephen Law Firm. 
                Our team of dedicated attorneys has been serving clients throughout the Five Boroughs 
                and beyond for over 29 years. From our Manhattan office, we provide comprehensive 
                legal services in personal injury, criminal defense, family law, corporate law, 
                real estate, and estate planning.
              </p>
              <p>
                We understand that legal matters can be stressful and overwhelming. That's why we 
                prioritize clear communication, personalized attention, and aggressive advocacy for 
                every client. Whether you're facing criminal charges, recovering from an accident, 
                starting a business, or planning your estate, our attorneys are here to guide you 
                through every step of the legal process.
              </p>
              <p>
                Located at 350 Fifth Avenue in the heart of Manhattan, our office is easily accessible 
                from all parts of New York City. We offer flexible appointment times, including 
                evenings and weekends by request, to accommodate our clients' busy schedules.
              </p>
              <p>
                <strong>Directions:</strong> Our office is located in the Empire State Building at 
                350 Fifth Avenue, between 33rd and 34th Streets. We are easily accessible by 
                subway (lines B, D, F, M, N, Q, R, W to 34th Street-Herald Square) and major bus routes.
              </p>
              <p>
                <strong>Parking:</strong> There are several parking garages located within walking 
                distance of our office. We recommend parking at the garage on West 33rd Street or 
                the Empire State Building garage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
