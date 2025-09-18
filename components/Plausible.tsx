'use client'
import Script from 'next/script'

export default function Plausible() {
  return (
    <Script
      defer
      data-domain="your-domain.com" // TODO: replace with your domain
      src="https://plausible.io/js/script.js"
    />
  )
}
