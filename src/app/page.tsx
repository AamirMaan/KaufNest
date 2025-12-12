export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <img 
              src="/KaufNest-logo.png" 
              alt="KaufNest Logo" 
              className="h-20 w-20 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">KaufNest</h1>
            <p className="text-lg text-gray-600">Professional E-commerce Solutions</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Your Trusted E-commerce Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in helping businesses succeed on Amazon and eBay marketplaces through 
            strategic product sourcing, optimized listings, and comprehensive marketplace management.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About KaufNest</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  KaufNest is a dedicated e-commerce business specializing in product sourcing, 
                  listing optimization, and sales management across major online marketplaces 
                  including Amazon and eBay.
                </p>
                <p className="text-gray-600">
                  With years of experience in the e-commerce industry, we understand the 
                  complexities of online marketplaces and help our partners navigate them successfully.
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  We partner with wholesalers and manufacturers to bring quality products to 
                  customers worldwide, ensuring competitive pricing and exceptional service standards.
                </p>
                <p className="text-gray-600">
                  Our team combines market expertise with cutting-edge tools to maximize your 
                  sales potential and build sustainable business relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Amazon Marketplace</h3>
              <p className="text-gray-600">Professional product listings, inventory management, and customer service optimization for maximum visibility and sales.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">eBay Store Management</h3>
              <p className="text-gray-600">Complete eBay store setup, optimized listings, competitive pricing strategies, and efficient order fulfillment.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Wholesale Partnerships</h3>
              <p className="text-gray-600">Long-term relationships with trusted suppliers and manufacturers, ensuring quality products and reliable supply chains.</p>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Research & Sourcing</h3>
              <p className="text-gray-600 mb-4">Market analysis and trend identification to find profitable products with high demand and low competition.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Market trend analysis</li>
                <li>• Competitor research</li>
                <li>• Supplier verification</li>
                <li>• Quality assurance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Listing Optimization</h3>
              <p className="text-gray-600 mb-4">SEO-optimized product listings that convert browsers into buyers with compelling descriptions and keywords.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keyword research</li>
                <li>• Product photography</li>
                <li>• A+ content creation</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Inventory Management</h3>
              <p className="text-gray-600 mb-4">Efficient inventory tracking and management to prevent stockouts and optimize cash flow.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Stock level monitoring</li>
                <li>• Automated reordering</li>
                <li>• Demand forecasting</li>
                <li>• Storage optimization</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Support</h3>
              <p className="text-gray-600 mb-4">Professional customer service to maintain high seller ratings and customer satisfaction.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 customer support</li>
                <li>• Return management</li>
                <li>• Review management</li>
                <li>• Dispute resolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose KaufNest</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-3 mt-1">✓</span>
                    <span>Proven track record with over 500+ successful product launches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-3 mt-1">✓</span>
                    <span>Advanced inventory management systems and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-3 mt-1">✓</span>
                    <span>Competitive pricing and fast turnaround times</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-3 mt-1">✓</span>
                    <span>Dedicated account managers and 24/7 support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-3 mt-1">✓</span>
                    <span>Transparent reporting and performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-3 mt-1">✓</span>
                    <span>Scalable solutions for businesses of all sizes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">We analyze your business goals and market opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Strategy</h3>
              <p className="text-sm text-gray-600">Custom strategy development based on your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Implementation</h3>
              <p className="text-sm text-gray-600">Execute the strategy with our proven methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Optimization</h3>
              <p className="text-sm text-gray-600">Continuous monitoring and optimization for best results</p>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:support@kaufnest.com" className="text-purple-200 hover:text-white transition-colors">
                support@kaufnest.com
              </a>
            </div>
            <div className="text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+4917647054749" className="text-purple-200 hover:text-white transition-colors">
                +491 (764) 705-4749
              </a>
            </div>
            <div className="text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-purple-200">
                Reinickendorfer straße 2<br />
                Berlin, BE 13347<br />
                Germany
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 KaufNest. Professional E-commerce Solutions.</p>
        </div>
      </footer>
    </div>
  )
}
