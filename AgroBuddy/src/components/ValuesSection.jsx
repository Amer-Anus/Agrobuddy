import React from 'react'
import { useTranslation } from 'react-i18next'

const ValuesSection = () => {
  const { t } = useTranslation()

  const values = [
    {
      id: 'dataDriven',
      icon: '📊',
    },
    {
      id: 'monsoon',
      icon: '🌧️',
    },
    {
      id: 'farmer',
      icon: '👨‍🌾',
    },
    {
      id: 'sustainable',
      icon: '🌱',
    },
  ]

  return (
    <section
      id="values"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-green-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-agri-green uppercase tracking-wider mb-4">
            {t('values.sectionLabel')}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-agri-dark mb-6">
            {t('values.sectionTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('values.sectionDescription')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] border border-green-100/50"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-agri-green/10 to-agri-light-green/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-agri-dark mb-3">
                    {t(`values.${value.id}_title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t(`values.${value.id}_desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

