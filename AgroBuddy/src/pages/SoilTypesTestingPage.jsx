import React from 'react'
import Footer from '../components/Footer'

const SoilTypesTestingPage = () => {
  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Soil Types &amp; Testing
          </h1>
          <p className="mt-3 text-gray-600">
            Understand different soil types and simple ways students can learn about soil
            health.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Major soil types</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Clay soil:</span> Feels sticky, holds water well, good for rice.</li>
              <li><span className="font-semibold">Sandy soil:</span> Feels rough, drains quickly, good for groundnut.</li>
              <li><span className="font-semibold">Loamy soil:</span> Mix of sand, silt, and clay – best for most crops.</li>
              <li><span className="font-semibold">Black soil:</span> Cracks in summer, rich in nutrients, good for cotton.</li>
              <li><span className="font-semibold">Red soil:</span> Reddish colour, suitable for millets, pulses, and oilseeds.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Simple student experiments</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Jar test:</span> Mix soil with water in a glass jar, shake, and let it settle to see layers.</li>
              <li><span className="font-semibold">Feel test:</span> Rub moist soil between fingers to guess if it is sandy, loamy, or clayey.</li>
              <li><span className="font-semibold">Drainage test:</span> Pour water into a pot and observe how fast it drains.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Professional soil testing</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Farmers can send soil samples to a soil testing lab to check pH and nutrient
              levels. In many regions, government programmes like the Soil Health Card scheme
              help farmers get reports and recommendations at low or no cost.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SoilTypesTestingPage

