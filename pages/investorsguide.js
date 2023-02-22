import InvestmentPlan from '@/components/InvestmentPlan'
import InvestorsGuideBanner from '@/components/InvestorsGuideBanner'
import Purchase from '@/components/Purchase'
import Head from 'next/head'
import React from 'react'

function investorsguide() {
  return (
    <div>
      <Head>
        <title>Investors Guide | The Reveal</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InvestorsGuideBanner/>
      <InvestmentPlan/>
      <Purchase/>
    </div>
  )
}

export default investorsguide
