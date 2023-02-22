import Contactarea from '@/components/Contactarea'
import Contactsbanner from '@/components/Contactsbanner'
import Locationcover from '@/components/Locationcover'
import Maparea from '@/components/Maparea'
import Head from 'next/head'
import React from 'react'

function contact() {

  return (
    <div>
      <Head>
        <title>Contact Us | The Reveal</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contactsbanner/>
      <Contactarea/>
      {/* <Maparea/> */}
      <Locationcover/>
    </div>
  )
}

export default contact