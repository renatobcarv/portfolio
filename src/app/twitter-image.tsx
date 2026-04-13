import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Renato B. Carvalho | Revenue Engineer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#020202',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            background: '#050505',
            width: 400,
            height: 400,
            borderRadius: 100,
            border: '2px solid rgba(255,255,255,0.05)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="400"
            height="400"
            style={{
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <rect x="160" y="130" width="56" height="252" rx="12" fill="#FFFFFF" />
            <path
              d="M 180 155 h 110 c 60 0 84 30 84 66 c 0 36 -24 66 -84 66 h -110"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="56"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M 240 280 L 330 382"
              stroke="#10B981"
              strokeWidth="56"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
