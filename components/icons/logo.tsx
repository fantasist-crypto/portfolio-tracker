import type { SVGAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function LogoIcon({
  className = '',
  ...props
}: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="-0.0024901072029024363 0.017517901957035065 349.03497314453125 348.9949645996094"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge('h-6 w-6', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id="a13c4fd8b-b886-419a-9464-2e9457293c80"
          x1="56.63"
          y1="108.42"
          x2="241.15"
          y2="292.94"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#efb160"></stop>
          <stop offset="1" stopColor="#a07440"></stop>
        </linearGradient>
        <linearGradient
          id="b65b440d0-3192-4655-8b60-4151f162a9c5"
          x1="108.42"
          y1="56.63"
          x2="292.94"
          y2="241.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#efb160"></stop>
          <stop offset="1" stopColor="#a07440"></stop>
        </linearGradient>
        <linearGradient
          id="c36e8a037-d729-4660-82a4-d88ae8e78112"
          x1="22.58"
          y1="119.67"
          x2="241.01"
          y2="338.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#666"></stop>
          <stop offset="1" stopColor="#1a1a1a"></stop>
        </linearGradient>
        <linearGradient
          id="df910547e-0c19-4c54-80d8-9f6c73752d3f"
          x1="119.67"
          y1="22.58"
          x2="338.1"
          y2="241.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#666"></stop>
          <stop offset="1" stopColor="#1a1a1a"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M179.28 190.57l-.09-.08-20.73-20.73a8 8 0 0 0-11.22.08L118.05 199a8 8 0 0 0 0 11.31l96.53 96.52a8 8 0 0 0 11.3 0l29.19-29.2a8 8 0 0 0 0-11.3z"
          fill="url(#a13c4fd8b-b886-419a-9464-2e9457293c80)"
        ></path>
        <path
          d="M233.33 144.35a8 8 0 0 0-2.33-5.65l-96.54-96.53a8 8 0 0 0-11.3 0L94 71.36a8 8 0 0 0 0 11.31l75.81 75.8.08.07 20.72 20.73a8 8 0 0 0 11.22-.08L231 150a8 8 0 0 0 2.33-5.65z"
          fill="url(#b65b440d0-3192-4655-8b60-4151f162a9c5)"
        ></path>
        <path
          d="M203.28 318.17l-96.53-96.53a24 24 0 0 1 0-33.91l29.19-29.19a23.88 23.88 0 0 1 6.63-4.67L82.66 94a23.89 23.89 0 0 1-5.23-7.85L7.76 155.78a26.49 26.49 0 0 0 0 37.47l148 148a26.49 26.49 0 0 0 37.47 0l17.87-17.87a23.9 23.9 0 0 1-7.82-5.21z"
          fill="url(#c36e8a037-d729-4660-82a4-d88ae8e78112)"
        ></path>
        <path
          d="M341.27 155.78l-148-148a26.49 26.49 0 0 0-37.47 0l-17.89 17.85a24.08 24.08 0 0 1 7.85 5.24l96.53 96.53a24 24 0 0 1 0 33.9l-29.2 29.19a23.83 23.83 0 0 1-6.62 4.67l59.9 59.91a23.82 23.82 0 0 1 5.24 7.85l69.66-69.67a26.49 26.49 0 0 0 0-37.47z"
          fill="url(#df910547e-0c19-4c54-80d8-9f6c73752d3f)"
        ></path>
      </g>
    </svg>
  )
}
