import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Shield, Clock, Star, CheckCircle, Phone } from 'lucide-react'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

const stats = [
  { number: '29+', label: 'Years Experience' },
  { number: '5000+', label: 'Cases Won' },
  { number: '98%', label: 'Success Rate' },
  { number: '24/7', label: 'Client Support' },
]

const practiceAreas = [
  {
    title: 'Personal Injury',
    description: 'Compassionate representation for accident victims. We fight for maximum compensation.',
    keywords: 'personal injury lawyer, accident attorney, car accident lawyer, slip and fall attorney, wrongful death lawyer'
  },
  {
    title: 'Criminal Defense',
    description: 'Aggressive defense strategies. Protect your rights and freedom with experienced advocates.',
    keywords: 'criminal defense attorney, DUI lawyer, drug defense, felony defense, white collar crime'
  },
  {
    title: 'Family Law',
    description: 'Sensitive handling of family matters. Divorce, custody, and support matters.',
    keywords: 'family law attorney, divorce lawyer, child custody, spousal support, adoption attorney'
  },
  {
    title: 'Corporate Law',
    description: 'Strategic legal solutions for businesses. From formation to complex transactions.',
    keywords: 'corporate lawyer, business attorney, contract law, M&A, business formation'
  },
]

const whyChooseUs = [
  { icon: Award, title: 'Award-Winning', description: 'Recognized by industry leaders for excellence in legal representation' },
  { icon: Shield, title: 'Proven Track Record', description: 'Thousands of successful cases and millions in settlements' },
  { icon: Clock, title: 'Around the Clock', description: '24/7 availability for emergencies and urgent legal matters' },
  { icon: Star, title: 'Client-Focused', description: 'Personalized attention and dedicated advocacy for every client' },
]

const testimonials = [
  {
    quote: "Stephen Law Firm transformed my life. Their dedication and expertise resulted in a settlement I never imagined possible.",
    author: "Michael R.",
    case: "Personal Injury"
  },
  {
    quote: "When I faced criminal charges, they fought tirelessly. I'm now free with my record cleared.",
    author: "Sarah K.",
    case: "Criminal Defense"
  },
  {
    quote: "Professional, compassionate, andResults-driven. They guided me through the most difficult time in my life.",
    author: "David L.",
    case: "Family Law"
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              custom={0}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 font-medium text-sm rounded-full mb-6">
                #1 Law Firm in New York
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-tight mb-6">
                Justice You
                <span className="text-gold block">Deserve</span>
              </h1>
              <p className="text-xl text-primary8 leading-relax-600 mb-ed max-w-xl">
                For over 29 years, Stephen Law Firm has been providing exceptional legal representation to New Yorkers. 
                Our commitment to excellence and client satisfaction sets us apart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-800 text-white font-semibold rounded-sm hover:bg-primary-900 transition-all duration-200 group"
                >
                  Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-300 text-primary-800 font-semibold rounded-sm hover:border-primary-800 transition-all duration-200"
                >
                  Our Services
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-primary-600">
                  <span className="font-semibold">500+</span> 5-Star Reviews
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-primary-100 rounded-2xl blur-2xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary-900">Free Case Evaluation</div>
                        <div className="text-sm text-primary-500">No obligation consultation</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary-900">24/7 Emergency Support</div>
                        <div className="text-sm text-primary-500">Always here when you need us</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary-900">No Fees Unless We Win</div>
                        <div className="text-sm text-primary-500">Contingency-based representation</div>
                      </div>
                    </div>
                    <a
                      href="tel:+12125551234"
                      className="flex items-center justify-center w-full py-4 bg-primary-800 text-white font-semibold rounded-sm hover:bg-primary-900 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (212) 555-1234
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-primary-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold uppercase tracking-wider">Practice Areas</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              From personal injury to corporate law, our experienced attorneys provide expert legal representation across all major practice areas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
              >
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-primary-600 mb-6">{area.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-900 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6">
              The Stephen Law Firm Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-800 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-primary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mt-4 mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-primary-50 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-primary-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="font-semibold text-primary-900">{testimonial.author}</div>
                <div className="text-sm text-primary-500">{testimonial.case}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-xl text-primary-200 mb-10">
              Schedule your free consultation today. Our experienced attorneys are ready to fight for your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-primary-900 font-semibold rounded-sm hover:bg-white transition-all duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+12125551234"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-primary-900 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                (212) 555-1234
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
