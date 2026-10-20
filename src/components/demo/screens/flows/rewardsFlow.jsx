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
        <p>On opening the <strong>Rewards</strong> section, the first screen displays all the <strong>Available Rewards</strong> that you can claim.</p>
        <br />
        <p>Swipe or scroll through the list to see the variety of rewards you can earn.</p>
        <br />
        <p>Next, tap on the <strong>Purchased Rewards</strong> tab.</p>
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
