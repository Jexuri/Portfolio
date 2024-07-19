import "./PricingCardStyles.css"

import React from 'react'
const PricingCard = () => {
  return (
    <div className="pricing">
     <div className="card-container">
      <div className="card">
        <h3>- STEVE JOBS-</h3>
        <span className="bar"></span>
        <p className="btc"></p>
        <p>- Your time is limited, so don't waste it living someone else's life. -</p>
        <p>- Don't be trapped by dogma-which is living with the result of other people's thinking. -</p>
        <p>- Don't let the noise of other's opinions drown out your own inner voice.  -</p>
        <p>- Have the courage to follow your heart and intuition,they somehow already know what you truly want to become, everything else is secondary -</p>
        
      </div>
      <div className="card">
      <h3>- MARK ZUCKERBERG -</h3>
        <span className="bar"></span>
        <p className="btc"> </p>
        <p>- The biggest risk is not taking any risk...In a world that is changing really quickly, the only stategy that is guaranteed to fail is not taking risks. -</p>
        <p>- Move fast and break things.Unless you are breaking stuff, you are not moving fast enough. -</p>
        <p>- Ideas don't come fully formed, they only become clear as you work on them. -</p>
        <p>- Finding your purpose isn't enough.The challenge for our generation is creating a world where everyone has a sense of purpose. -</p>
        
    </div>
    <div className="card">
    <h3>- BILL GATES -</h3>
        <span className="bar"></span>
        <p className="btc"></p>
        <p>- Success is a lousy teacher. It seduces smart people into thinking they can't lose. -</p>
        <p>- Your most unhappy customers are your greatest source of learning. -</p>
        <p>- I believe that if you show people the problems and you show them the solutions they will be moved to act. -</p>
        <p>- If can't make it good, at least make it look good. -</p>
        
    </div>
    </div>
    </div>
  )
}

export default PricingCard
