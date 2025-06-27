import React from 'react'
import Dashboard from '@/components/Dashboard'
import { Suspense } from'react'
import Loader from '@/components/Loader'

const DashboardPage = () => {
  return (
    <div>
      <Suspense fallback={<Loader />} >
        <Dashboard />
      </Suspense>
    </div>
  )
}

export default DashboardPage

export const metadata = {
  title: 'Dashboard - Get Me a Chai',
}
