export default function UIOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="absolute top-10 left-0 right-0 text-center">
        <h1 className="text-7xl md:text-9xl font-bold" style={{fontFamily:'Cinzel', color:'#fbbf24', textShadow:'0 0 40px #00d4ff'}}>
          مجموعة النخبة
        </h1>
        <p className="text-3xl mt-4 text-elite">Elite Group – من بابل إلى بكين</p>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center text-elite">
        <p className="text-xl">نقل البضائع • تأشيرات المستثمرين • حلول الذكاء الاصطناعي</p>
        <p className="mt-4 text-sm opacity-80">info@elitegroup-iq.com | +964 771 234 5678</p>
      </div>
    </div>
  )
}