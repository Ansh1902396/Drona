import React from 'react'

interface CheckeredBackgroundProps {
  children: React.ReactNode
}

export default function CheckeredBackground({ children }: CheckeredBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}