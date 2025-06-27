import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

const Username = ({ params }) => {
  return (
    <>
     <Suspense fallback={<Loader />} >
      <PaymentPage username={params.username}/>
      </Suspense>
    </>
  );
};

export default Username;

// Dynamic metadata
export async function generateMetadata( {params} ) { 
  return {
    title: `Support ${params.username} | Get Me A Chai`,
  }
}