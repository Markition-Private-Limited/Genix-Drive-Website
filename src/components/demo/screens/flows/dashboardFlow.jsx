// OWNER: Ali Jawad
// Flow: Dashboard (screens 1–10) + Mark Trips sub-flow (screens 45–47)

import flow1Screen1Img from '../flow1Screen1Image' // image: flow1screen1.jpg
import flow1Screen2Img from '../flow1Screen2Image'
import flow1Screen3Img from '../flow1Screen3Image'
import flow1Screen4Img from '../flow1Screen4Image'
import flow1Screen6Img from '../flow1Screen6Image'
import flow1Screen8Img from '../flow1Screen8Image'
import flow1Screen10Img from '../flow1Screen10Image'
import flow1aScreen1Img from '../flow1aScreen1Image'
import flow1aScreen2Img from '../flow1aScreen2Image'

export const dashboardScreens = [
  {
    id: 1,
    flowName: 'Dashboard',
    title: 'Dashboard',
    instruction: (
      <>
        <p>This is your dashboard, where you can view your driving score and see how safely you're driving. Your score is based on how you drive, when you drive, and how much you drive</p>
        <p>By default, a 7-day filter is applied.</p>
        <p>Now, look at the ribbon at the top of the screen and tap on <strong>30 days</strong> to see the statistics for the last 30 days.</p>
        <p>Or tap on the <strong>Mark Trips</strong> section to review recorded trips.</p>
      </>
    ),
    EmulatorContent: flow1Screen1Img,
  },
  {
    id: 2,
    flowName: 'Dashboard',
    title: 'Dashboard',
    instruction: (
      <>
        <p>Great! Now tap on <strong>365 days</strong> to view the data for the entire year.</p>
      </>
    ),
    EmulatorContent: flow1Screen2Img,
  },
  {
    id: 3,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Notice how the dashboard statistics change as you select different filters.</p>
        <p>Now, click on the <strong>score</strong> displayed on the dashboard</p>
      </>
    ),
    EmulatorContent: flow1Screen3Img,
  },
  {
    id: 4,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Here, you can also use the filter at the top to select <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong>.</p>
        <p>Look at the graph — it shows your driving score over the selected period.</p>
      </>
    ),
    EmulatorContent: flow1Screen4Img,
  },
  {
    id: 5,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Here, you can also use the filter at the top to select <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong>.</p>
        <p>Look at the graph — it shows your driving score over the selected period.</p>
      </>
    ),
    EmulatorContent: flow1Screen4Img,
  },
  {
    id: 6,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Now, tap on the <strong>first insight</strong> on your dashboard</p>
      </>
    ),
    EmulatorContent: flow1Screen6Img,
  },
  {
    id: 7,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Next, click on the <strong>stats</strong> located beside the first pie chart. <br />The new screen will appear.</p>
      </>
    ),
    EmulatorContent: flow1Screen4Img,
  },
  {
    id: 8,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Now, look at the graph — it shows the <strong>distance covered by a number of drivers</strong> over a selected period.</p>
        <p>Next, at the top of the screen, select <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong> to view data for different time periods.</p>
        <p>Notice the <strong>peak in the graph</strong> — this shows the distance that the most drivers have covered.</p>
        <ul>
          <li>The <strong>dotted line</strong> shows where you fall compared to other drivers.</li>
          <li>Above the graph, you'll also see numeric values that indicate <strong>how much you have traveled vs other users</strong>.</li>
        </ul>
        <p>Now, go back to the <strong>main insight screen</strong>.</p>
      </>
    ),
    EmulatorContent: flow1Screen8Img,
  },
  {
    id: 9,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Next, click on the <strong>last pie chart</strong> on the dashboard. <br />The events screen will appear.</p>
      </>
    ),
    EmulatorContent: flow1Screen4Img,
  },
  {
    id: 10,
    flowName: 'Dashboard',
    isFlowEnd: true,
    title: 'Driving insights',
    instruction: (
      <>
        <p>Now, look at the chart — it shows the <strong>number of events</strong> during the period you select.</p>
        <ul>
          <li>At the top, choose <strong>7 days</strong>, <strong>30 days</strong>, or <strong>365 days</strong> to see data for different time periods.</li>
          <li>The chart also compares your events with the <strong>average of other users</strong> so you can see how you're performing</li>
        </ul>
      </>
    ),
    EmulatorContent: flow1Screen10Img,
  },
]

export const markTripsScreens = [
  {
    id: 45,
    flowName: 'Mark Trips',
    isHiddenFlow: true,
    title: 'Mark Trips',
    instruction: (
      <>
        <p>For each trip, you have two options: <strong>Mark as Driven</strong> or <strong>Not Driven</strong>.</p>
        <p>Tap <strong>Mark as Driven</strong> to confirm the trip and move it to your Trips history.</p>
      </>
    ),
    EmulatorContent: flow1aScreen1Img,
    customPrev: 0,
  },
  {
    id: 46,
    flowName: 'Mark Trips',
    isHiddenFlow: true,
    title: 'Mark Trips',
    instruction: (
      <>
        <p>Now tap <strong>Not Driven by me</strong> if this trip wasn't driven by you.</p>
      </>
    ),
    EmulatorContent: flow1aScreen2Img,
    customNext: 0,
  },
]
