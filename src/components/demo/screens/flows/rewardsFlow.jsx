// Flow: Rewards (screens 42–43)

import flow6Screen1Img from '../flow6Screen1Image'
import flow6Screen2Img from '../flow6Screen2Image'

export const rewardsScreens = [
  {
    id: 42,
    flowName: 'Rewards',
    title: 'Rewards',
    instruction: (
      <>
        <p>Welcome to Rewards! Explore exciting offers and discounts available to claim with the points you earned.</p>
        <br />
        <p>Scroll through to discover the available rewards.</p>
        <br />
        <p>Next, tap the <strong>Redeemed</strong> tab to view previously redeemed rewards.</p>
      </>
    ),
    EmulatorContent: flow6Screen1Img,
  },
  {
    id: 43,
    flowName: 'Rewards',
    isFlowEnd: true,
    title: 'Rewards',
    instruction: (
      <>
        <p>This screen shows all the <strong>rewards you have already claimed or purchased</strong>, so you can keep track of your collection.</p>
      </>
    ),
    EmulatorContent: flow6Screen2Img,
  },
]
