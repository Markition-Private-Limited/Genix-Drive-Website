// Flow: Trips (screens 25–30)

import flow4ScreenDashA from '../flow4ScreenDashA'
import flow4ScreenDashB from '../flow4ScreenDashB'
import flow4ScreenTripDetails1 from '../flow4ScreenTripDetails1'
import flow4ScreenDashC from '../flow4ScreenDashC'
import flow4ScreenTripLog from '../flow4ScreenTripLog'
import flow4ScreenTripDetails2 from '../flow4ScreenTripDetails2'

export const tripsScreens = [
  {
    id: 25,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Here's your <strong>Recent Trips</strong> section, where you can view your latest journeys at a glance.</p>
        <br />
        <p>Tap on the highlighted trip to explore its details.</p>
      </>
    ),
    EmulatorContent: flow4ScreenDashA,
  },
  {
    id: 27,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Here, you can view the trip map, total distance covered, driving score, and all events that occurred during the trip.</p>
        <br />
        <p>You can also tap on the event icons shown on the map to see the exact location where each event occurred. Tap on the back button to return to the dashboard.</p>
      </>
    ),
    EmulatorContent: flow4ScreenTripDetails1,
  },
  {
    id: 28,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Now tap on <strong>"View All"</strong> in the recent trips section to open the complete list of trips you have done.</p>
      </>
    ),
    EmulatorContent: flow4ScreenDashC,
  },
  {
    id: 29,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Here is the list of complete trips you have done in the specified date range. You can change the date filter here to see the trips in a specific date range.</p>
        <p>Now simply tap on the first trip to see the trip details.</p>
      </>
    ),
    EmulatorContent: flow4ScreenTripLog,
  },
  {
    id: 30,
    flowName: 'Trips',
    isFlowEnd: true,
    title: 'Trips',
    instruction: (
      <>
        <p>You're back on the Trip Details screen! Here, you can review your route, driving score, distance, average speed, and driving events recorded throughout your journey.</p>
        <br />
        <p>Now, tap the <strong>Back</strong> arrow to return to your Dashboard.</p>
      </>
    ),
    EmulatorContent: flow4ScreenTripDetails2,
  },
]
