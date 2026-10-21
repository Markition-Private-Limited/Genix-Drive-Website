// OWNER: Ali Jawad
// Flow: Dashboard (screens 1–10) + Mark Trips sub-flow (screens 45–47)

import flow1Screen1Img from '../flow1Screen1Image' // image: flow1screen1.jpg
import flow1Screen2Img from '../flow1Screen2Image'
import flow1Screen3Img from '../flow1Screen3Image'
import flow1Screen4Img from '../flow1Screen4Image'
import flow1Screen6Img from '../flow1Screen6Image'
import flow1aScreen1Img from '../flow1aScreen1Image'
import flow1aScreen2Img from '../flow1aScreen2Image'
import flow1Screen6bImg from '../flow1Screen6bImage'
import flow1Screen6cImg from '../flow1Screen6cImage'
import flow1Screen6dImg from '../flow1Screen6dImage'
import flow1Screen6eImg from '../flow1Screen6eImage'
import flow1Screen6fImg from '../flow1Screen6fImage'

export const dashboardScreens = [
  {
    id: 1,
    flowName: 'Dashboard',
    title: 'Dashboard',
    instruction: (
      <>
        <p>This is your dashboard, where you can view your driving score and see how safely you're driving. Your score is based on how you drive, when you drive, and how much you drive.</p>
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
        <p>Now, click on the <strong>score</strong> displayed on the dashboard.</p>
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
        <p>Now, tap on the <strong>first insight</strong> on your dashboard.</p>
      </>
    ),
    EmulatorContent: flow1Screen6Img,
  },
  {
    id: 6.5,
    flowName: 'Dashboard',
    title: 'Drive Distance',
    instruction: (
      <>
        <p>Great! The next screen has appeared. It shows your driving score and rating for the selected period.</p>
        <p>Now, go back to the previous screen and click on the next pie chart. The Driving Time screen will appear.</p>
      </>
    ),
    EmulatorContent: flow1Screen6bImg,
  },
  {
    id: 6.55,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Tap on the next pie chart to open the <strong>Driving Time</strong> screen.</p>
      </>
    ),
    EmulatorContent: flow1Screen6fImg,
  },
  {
    id: 6.6,
    flowName: 'Dashboard',
    title: 'Drive Time',
    instruction: (
      <>
        <p>Look at the charts — they show your driving time compared with the average driving time of all Genix Drive users, along with your driving time by hour.</p>
        <p>Next, return to the main insights screen and scroll to the <strong>Driving Events</strong> section. The Driving Events section will appear.</p>
      </>
    ),
    EmulatorContent: flow1Screen6cImg,
  },
  {
    id: 6.7,
    flowName: 'Dashboard',
    title: 'Driving insights',
    instruction: (
      <>
        <p>Next, return to the main insights screen and scroll to the <strong>Driving Events</strong> section.</p>
        <p>The Driving Events section will appear.</p>
      </>
    ),
    EmulatorContent: flow1Screen6dImg,
  },
  {
    id: 6.8,
    flowName: 'Dashboard',
    isFlowEnd: true,
    title: 'Driving insights',
    instruction: (
      <>
        <p>Now, look at the chart — it shows the distribution of driving events during the selected period.</p>
        <p>The chart breaks down your driving events by type.</p>
      </>
    ),
    EmulatorContent: flow1Screen6eImg,
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
