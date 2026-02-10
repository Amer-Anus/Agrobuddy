import React from 'react'
import Footer from '../components/Footer'

const LearnAgricultureBasicsPage = () => {
  return (
    <div className="min-h-screen bg-agri-bg">
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wide">
            Learn Agriculture
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Basics of Agriculture
          </h1>
          <p className="mt-3 text-gray-600">
            This section is written for school and college students. No prior knowledge is
            required – just curiosity.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">What is agriculture?</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Agriculture is the practice of growing crops and raising animals to produce
              food, fibre, and other products we use every day. It connects soil, water,
              plants, animals, climate, technology, and people.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Why is agriculture important?</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>It provides food for people and animals.</li>
              <li>It gives raw materials for industries (cotton, sugarcane, oilseeds, etc.).</li>
              <li>It supports jobs for millions of people, especially in rural areas.</li>
              <li>It is closely linked with the environment and climate.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Types of agriculture</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              <li><span className="font-semibold">Subsistence farming:</span> Small farmers grow mainly for their own family.</li>
              <li><span className="font-semibold">Commercial farming:</span> Crops are grown mainly to sell in the market.</li>
              <li><span className="font-semibold">Organic farming:</span> Uses natural inputs, avoids most chemicals.</li>
              <li><span className="font-semibold">Protected cultivation:</span> Growing crops in greenhouses or polyhouses.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Did you know?</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              In many countries, agriculture supports more than half of all jobs. Modern
              agriculture now uses sensors, satellites, mobile apps, and AI – just like
              AgroBuddy – to help farmers make better decisions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default LearnAgricultureBasicsPage

