import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const langs = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const current = langs.find((l) => l.code === i18n.language) || langs[0]

  const handleSelect = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm text-gray-700 hover:text-agri-green hover:bg-agri-bg"
      >
        <span className="font-medium">{current.label}</span>
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg ring-1 ring-black/10 overflow-hidden z-50">
          {langs.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => handleSelect(l.code)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-agri-bg text-gray-700 ${i18n.language === l.code ? 'font-semibold' : ''}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSelector
