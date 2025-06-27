
"use client"
import React, { useState, useRef, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Search from './Search'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4  items-center md:h-16 flex-col md:flex-row'>
      <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center">
        <img className='invertImg' src="tea.gif" width={44} alt="" />
        <span className='text-xl md:text-base'>Get Me A Chai!</span>
      </Link>

      <div className='relative' ref={dropdownRef}>
          <Search/>
        {session && (
          <>
            <button 
              onClick={toggleDropdown}
              className="text-white mx-2 bg-gradient-to-br from-blue-900 to-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {/* Welcome {session.user.email} */}
              <span className="hidden md:inline">Welcome&nbsp;</span> {" "}<span className="">{" "}{session.user.name}</span>
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {showDropdown && (
              <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    
                    <Link href={`/${session.user.name || session.user.email?.split('@')[0] || 'profile'}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
                    
                  </li>
                  <li>
                    <button  onClick={() => signOut({ callbackUrl: "/login" })} className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
        
        {!session && (
          <Link href={"/login"}>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar