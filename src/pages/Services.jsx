import { motion } from 'framer-motion'
import { ArrowRight, Shield, Briefcase, Users, Building, Heart, Car, Scale, FileText, Coins, Home, Wallet } from 'lucide-react'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

const services = [
  {
    icon: Car,
    title: 'Personal Injury',
    description: 'Dedicated representation for accident victims. We fight for maximum compensation for your injuries.',
    longDescription: 'Our personal injury attorneys have decades of combined experience representing victims of car accidents, truck accidents, slip and fall incidents, medical malpractice, and wrongful death cases. We understand the physical, emotional, and financial toll an injury can take on you and your family.',
    features: [
      'Car Accident Claims',
      'Truck & Motorcycle Accidents',
      'Slip & Fall Injuries',
      'Medical Malpractice',
      'Workplace Injuries',
      'Wrongful Death',
    ],
    keywords: 'personal injury lawyer, accident attorney, car accident lawyer, slip and fall attorney, wrongful death lawyer, medical malpractice attorney, truck accident lawyer, workplace injury lawyer'
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Aggressive defense strategies to protect your rights, freedom, and future.',
    longDescription: 'When your freedom is on the line, you need an experienced criminal defense attorney by your side. Our team has successfully defended thousands of clients against a wide range of criminal charges, from misdemeanors to serious felonies.',
    features: [
      'DUI & DWI Defense',
      'Drug Crimes',
      'Violent Crimes',
      'White Collar Crimes',
      'Federal Criminal Defense',
      'Appeals & Post-Conviction',
    ],
    keywords: 'criminal defense attorney, DUI lawyer, drug defense lawyer, felony defense, white collar crime attorney, federal criminal defense, assault lawyer, murder defense'
  },
  {
    icon: Heart,
    title: 'Family Law',
    description: 'Compassionate guidance through difficult family legal matters.',
    longDescription: 'Family law matters require both legal expertise and emotional sensitivity. Our attorneys guide clients through divorce, child custody disputes, support matters, and other family legal issues with care and determination.',
    features: [
      'Divorce & Separation',
      'Child Custody & Visitation',
      'Child & Spousal Support',
      'Property Division',
      'Domestic Violence',
      'Adoption',
    ],
    keywords: 'family law attorney, divorce lawyer, child custody attorney, spousal support lawyer, adoption attorney, domestic violence lawyer, property division attorney'
  },
  {
    icon: Building,
    title: 'Corporate Law',
    description: 'Strategic legal solutions for businesses of all sizes.',
    longDescription: 'From startup formation to complex corporate transactions, our business attorneys provide comprehensive legal services to help your company thrive. We understand the challenges facing New York businesses and provide practical, results-oriented legal counsel.',
    features: [
      'Business Formation',
      'Contract Negotiation',
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Employment Law',
      'Intellectual Property',
    ],
    keywords: 'corporate lawyer, business attorney, contract lawyer, M&A attorney, startup lawyer, employment law attorney, intellectual property lawyer, business formation'
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Expert guidance for all real estate transactions and disputes.',
    longDescription: 'Our real estate attorneys handle residential and commercial transactions, zoning issues, landlord-tenant disputes, and real estate litigation. We protect your interests in all property-related matters.',
    features: [
      'Residential Closings',
      'Commercial Real Estate',
      'Landlord-Tenant Disputes',
      'Zoning & Land Use',
      'Title Issues',
      'Real Estate Litigation',
    ],
    keywords: 'real estate lawyer, property attorney, closing attorney, landlord tenant lawyer, zoning attorney, commercial real estate lawyer, title insurance'
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'Protect your legacy and provide for your loved ones future.',
    longDescription: 'Estate planning is about more than just distributing assets—its about protecting your family and ensuring your wishes are honored. Our attorneys create comprehensive estate plans tailored to your unique situation and goals.',
    features: [
      'Wills & Trusts',
      'Powers of Attorney',
      'Healthcare Directives',
      'Probate Administration',
      'Estate Tax Planning',
      'Special Needs Planning',
    ],
    keywords: 'estate planning attorney, will lawyer, trust attorney, probate lawyer, estate tax planning, power of attorney, healthcare directive, elder law'
  },
]

const processSteps = [
  { number: '01', title: 'Free Consultation', description: 'We listen to your case and provide initial legal advice at no cost.' },
  { number: '02', title: 'Case Evaluation', description: 'Our attorneys thoroughly evaluate your case and develop a strategic plan.' },
  { number: '03', title: 'Legal Representation', description: 'We aggressively pursue your case while keeping you informed every step.' },
  { number: '04', title: 'Resolution', description: 'We work toward the best possible outcome, whether through settlement or trial.' },
]

export default function Services() {
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
            <span className="text-primary-600 font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-900 mt-4 mb-6">
              Comprehensive Legal Services
            </h1>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              For over 29 years, Stephen Law Firm has been providing exceptional legal representation 
              to individuals and businesses throughout New York.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-primary-600 mb-6">{service.longDescription}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-primary-700">
                        <ArrowRight className="w-4 h-4 text-primary-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-900 transition-colors"
                  >
                    Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                <div className={`bg-primary-50 rounded-2xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-serif text-2xl font-bold text-primary-900 mb-6">Why Choose Us for {service.title}?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Scale className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-primary-900">Experienced Attorneys</div>
                        <div className="text-primary-600 text-sm">Decades of combined experience in {service.title.toLowerCase()}</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Coins className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-primary-900">No Win, No Fee</div>
                        <div className="text-primary-600 text-sm">Contingency-based representation for qualifying cases</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-primary-900">Proven Results</div>
                        <div className="text-primary-600 text-sm">Millions recovered for our clients</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-300 font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              How We Handle Your Case
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Our proven process ensures the best possible outcome for your legal matter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-primary-900">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-primary-300">{step.description}</p>
              </motion.div>
            ))}
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
              New York's Premier Law Firm
            </h2>
            <div className="space-y-6 text-primary-700 leading-relaxed">
              <p>
                Stephen Law Firm is recognized throughout New York as a leader in legal representation. 
                Our team of experienced attorneys has helped thousands of clients achieve favorable outcomes 
                in their legal matters. Whether you're facing a personal injury claim, criminal charges, 
                or need assistance with a business matter, we have the expertise and resources to help you.
              </p>
              <p>
                Located in the heart of Manhattan, our firm serves clients throughout all five boroughs 
                of New York City and the surrounding areas. We understand the unique challenges that 
                New Yorkers face and provide personalized, responsive legal representation to each and every client.
              </p>
              <p>
                Our commitment to excellence has earned us a reputation as one of the most trusted law firms 
                in New York. We pride ourselves on our communication, transparency, and dedication to achieving 
                the best possible results for our clients. When you choose Stephen Law Firm, you're not just 
                hiring an attorney – you're gaining a trusted advocate who will fight for your rights every step of the way.
              </p>
              <p>
                Contact us today for a free consultation and let us help you navigate your legal challenges. 
                With decades of experience and a proven track record of success, Stephen Law Firm is the 
                choice when it matters most.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-xl text-primary-600 mb-10">
              Schedule your free consultation today. Our experienced attorneys are ready to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-800 text-white font-semibold rounded-sm hover:bg-primary-900 transition-all duration-200"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
