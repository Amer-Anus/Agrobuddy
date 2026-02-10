import React from 'react'
import Footer from '../components/Footer'

const ModernFarmingTechniquesPage = () => {
  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Modern Farming Techniques
          </h1>
          <p className="mt-3 text-gray-600">
            See how technology is changing farming and making it smarter and more sustainable.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Examples of modern techniques</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Drip irrigation:</span> Delivers water directly to plant roots, saving water.</li>
              <li><span className="font-semibold">Sprinkler systems:</span> Spray water like rain, useful for many crops.</li>
              <li><span className="font-semibold">Soil and weather sensors:</span> Measure moisture, temperature, and other factors in real time.</li>
              <li><span className="font-semibold">Drones and satellites:</span> Capture images of fields to detect stress, pests, or poor growth.</li>
              <li><span className="font-semibold">Mobile apps and AI:</span> Help farmers get advice, price information, and crop recommendations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Why modern techniques matter</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              With climate change and limited resources, farmers need to grow more using less
              water, land, and chemicals. Modern techniques help improve yields, protect the
              environment, and reduce risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Video idea for classroom</h2>
            <div className="aspect-video w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-500 text-sm">
              You can embed a short YouTube video here explaining smart farming or precision
              agriculture for students.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ModernFarmingTechniquesPage

