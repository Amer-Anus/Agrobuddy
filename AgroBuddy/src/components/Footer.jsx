import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="relative py-8 px-6 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-br from-agri-green via-agri-light-green to-agri-dark">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-6">
          <div className="mb-3">
            <span className="text-3xl mb-2 inline-block">🌾</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              AgroBuddy
            </h3>
          </div>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-4 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

