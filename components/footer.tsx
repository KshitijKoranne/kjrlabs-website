import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className='min-h-[10em] bg-black flex flex-col justify-center items-center text-white border-t border-white border-opacity-10'>
      <Image 
        src='/assets/letter-k.png'
        width={40}
        height={40}
        alt='KJR Labs logo'
        className='invert'
      />
      <div className='inline-flex space-x-6 mt-6 mb-4'>
        <Link href='/terms'>
          <a className='hover:text-gray-300 transition-colors'>Terms & Conditions</a>
        </Link>
        <Link href='/privacy'>
          <a className='hover:text-gray-300 transition-colors'>Privacy Policy</a>
        </Link>
      </div>
      <div className='text-sm text-gray-400'>© 2025 KJR Labs. All rights reserved.</div>
    </footer>
  )
}

export default Footer
