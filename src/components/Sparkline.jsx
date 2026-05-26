export default function Sparkline({ data, color = '#00e5ff', height = 60, animated = true }) {
  const w = 300
  const h = height
  const min = Math.min(...data)
  const max = Math.max(...data)
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / (max - min || 1)) * (h - 10) - 5
    return `${x},${y}`
  })
  const d = `M${pts.join(' L')}`
  const fill = `M${pts[0]} ${pts.slice(1).map((p) => 'L' + p).join(' ')} L${w},${h} L0,${h} Z`
  const gradId = `grad-${color.replace('#', '')}`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#${gradId})`} />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        className={animated ? 'chart-path' : ''}
        style={
          animated
            ? { strokeDasharray: 800, strokeDashoffset: 800, animation: 'chart-draw 2s ease-out forwards' }
            : {}
        }
      />
    </svg>
  )
}
