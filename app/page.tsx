export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.6, color: '#333', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '60px', borderBottom: '1px solid #eee', paddingBottom: '40px' }}>
        <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#2563eb', marginBottom: '10px' }}>
          KaufNest
        </div>
        <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>
          Professional E-commerce Solutions
        </p>
      </header>

      {/* About Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1f2937' }}>About KaufNest</h2>
        <p style={{ marginBottom: '15px' }}>
          KaufNest is a dedicated e-commerce business specializing in product sourcing, listing optimization, 
          and sales management across major online marketplaces including Amazon and eBay.
        </p>
        <p>
          We partner with wholesalers and manufacturers to bring quality products to customers worldwide, 
          ensuring competitive pricing and exceptional service standards.
        </p>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1f2937' }}>Our Services</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#374151' }}>Amazon Marketplace</h3>
            <p style={{ margin: 0, color: '#6b7280' }}>Professional product listings, inventory management, and customer service</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#374151' }}>eBay Store Management</h3>
            <p style={{ margin: 0, color: '#6b7280' }}>Optimized listings, competitive pricing, and order fulfillment</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#374151' }}>Wholesale Partnerships</h3>
            <p style={{ margin: 0, color: '#6b7280' }}>Long-term relationships with trusted suppliers and manufacturers</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1f2937' }}>Why Choose KaufNest</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#2563eb' }}>✓</span>
            Proven track record in e-commerce sales
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#2563eb' }}>✓</span>
            Reliable inventory management systems
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#2563eb' }}>✓</span>
            Competitive pricing and fast turnaround
          </li>
          <li style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#2563eb' }}>✓</span>
            Professional customer service support
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '30px', color: '#1f2937' }}>Contact Us</h2>
        <div style={{ display: 'grid', gap: '20px', maxWidth: '400px', margin: '0 auto' }}>
          <div>
            <strong style={{ color: '#374151' }}>Email:</strong>
            <br />
            <a href="mailto:info@kaufnest.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
              info@kaufnest.com
            </a>
          </div>
          <div>
            <strong style={{ color: '#374151' }}>Phone:</strong>
            <br />
            <a href="tel:+1234567890" style={{ color: '#2563eb', textDecoration: 'none' }}>
              +1 (234) 567-8900
            </a>
          </div>
          <div>
            <strong style={{ color: '#374151' }}>Address:</strong>
            <br />
            <span style={{ color: '#6b7280' }}>
              123 Business District<br />
              Commerce City, CC 12345<br />
              United States
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', borderTop: '1px solid #eee', color: '#6b7280' }}>
        <p style={{ margin: 0 }}>© 2024 KaufNest. Professional E-commerce Solutions.</p>
      </footer>
    </div>
  )
}
