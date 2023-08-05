import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>Welcome to the page
      <p><Link href='/'>Home</Link></p>
      <p><Link href='/about'>About</Link></p>
      <p><Link href='/about/team'>Team</Link></p>
    </div>
  )
}

export default HomePage
