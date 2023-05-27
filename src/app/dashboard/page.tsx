'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Dashboard() {
    const route= useRouter()
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div>Hello, Dashboard from World.</div>
    <button onClick={()=>route.push('/dashboard/address')}>Get Address</button>
    </main>
    </>
  )
}
