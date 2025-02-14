import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pride Amsterdam 2025';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(90deg, #FF1B6B, #FF8E25, #FFC107, #45D9A1, #2196F3, #D434FE)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          PRIDE AMSTERDAM 2025
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Celebrate Love & Diversity 🌈
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}