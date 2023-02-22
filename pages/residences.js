import Onebedroomcover from '@/components/Onebedroomcover'
import Onebedroomfirst from '@/components/Onebedroomfirst'
import Onebedroomslider from '@/components/Onebedroomslider'
import ResidenceBanner from '@/components/ResidenceBanner'
import ResidencesDisplay from '@/components/ResidencesDisplay'
import ResidenceSecond from '@/components/ResidenceSecond'
import ResidencesFirst from '@/components/ResidencesFirst'
import Studiofirst from '@/components/Studiofirst'
import Studiosecond from '@/components/Studiosecond'
import Head from 'next/head'
import React from 'react'

function residences() {
  return (
    <div>
      <Head>
        <title>Residences | The Reveal</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResidenceBanner/>
      {/* <ResidencesFirst/> */}
      <Onebedroomfirst/>
      <Studiofirst/>
      <Onebedroomslider/>
      {/* <ResidencesDisplay/> */}
      {/* <ResidenceSecond/> */}
      <Onebedroomcover/>
      <Studiosecond/>
    </div>
  )
}

export default residences
