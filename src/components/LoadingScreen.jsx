import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const i = setInterval(() => setProgress(p => p >= 100 ? 100 : p + 1), 40)
    setTimeout(() => clearInterval(i), 4500)
  }, [])

  if (progress >= 100) return null
  return (
    <div className="fixed inset-0 bg-obsidian z-50 flex flex-col items-center justify-center">
      <h1 className="text-8xl text-gold mb-12" style={{fontFamily:'Cinzel'}}>مجموعة النخبة</h1>
      <div className="w-96 h-4 bg-gray-900 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-elite to-gold transition-all duration-300" style={{width: `${progress}%`}} />
      </div>
      <p className="mt-8 text-2xl text-elite">إقلاع السفينة نحو الطريق الحريري الجديد...</p>
    </div>
  )
}