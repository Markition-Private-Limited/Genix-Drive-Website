// Flow: Trips (screens 25–29)

import flow4Screen1Img from '../flow4Screen1Image'
import flow4Screen2Img from '../flow4Screen2Image'
import flow4Screen4Img from '../flow4Screen4Image'

export const tripsScreens = [
  {
    id: 25,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Now return to the <strong>Dashboard and scroll down</strong>, you can view your <strong>Recent Trips</strong> section.</p>
        <p>Swipe right to browse through up to five recent trips.</p>
        <br />
        <p>Tap on any trip to view its details</p>
      </>
    ),
    EmulatorContent: flow4Screen1Img,
  },
  {
    id: 26,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Now go back</p>
      </>
    ),
    EmulatorContent: flow4Screen2Img,
  },
  {
    id: 27,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Now tap on <strong>"View All"</strong> in recent trips section to open the complete list of trips you have done.</p>
      </>
    ),
    EmulatorContent: flow4Screen1Img,
  },
  {
    id: 28,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Here is the list of complete trips you have done in the specified date range, you can change the date filter here to see the trips in a specific date range.</p>
        <p>Now simply tap on the first trip to see the trip details</p>
      </>
    ),
    EmulatorContent: flow4Screen4Img,
  },
  {
    id: 29,
    flowName: 'Trips',
    isFlowEnd: true,
    title: 'Trips',
    instruction: (
      <>
        <p>Here, you can view the trip map, total distance covered, driving score, and all events that occurred during the trip.</p>
        <p>You can also tap on the event icons shown on the map to see the exact location where each event occurred.</p>
      </>
    ),
    EmulatorContent: flow4Screen2Img,
  },
]
