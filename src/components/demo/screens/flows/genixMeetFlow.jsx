// Flow: Genix Meet (screens 30–40)

import flow5ScreenMeetNav from '../flow5ScreenMeetNav'
import flow5ScreenUpcoming from '../flow5ScreenUpcoming'
import flow5ScreenInProgress from '../flow5ScreenInProgress'
import flow5ScreenCompleted from '../flow5ScreenCompleted'
import flow5ScreenMeetupDetails from '../flow5ScreenMeetupDetails'
import flow5ScreenParticipants from '../flow5ScreenParticipants'
import flow5ScreenPopup from '../flow5ScreenPopup'
import flow5ScreenInProgressB from '../flow5ScreenInProgressB'
import flow5ScreenChat from '../flow5ScreenChat'
import flow5ScreenMap from '../flow5ScreenMap'
import flow5ScreenRace from '../flow5ScreenRace'

export const genixMeetScreens = [
  {
    id: 30,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Now click on the <strong>Meet</strong> option from the navigation bar at the bottom.</p>
      </>
    ),
    EmulatorContent: flow5ScreenMeetNav,
  },
  {
    id: 31,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>The first screen you see is the <strong>Upcoming Meets</strong> screen.</p>
        <p>Here, you can view all the meets that are scheduled in the future.</p>
        <p>Next, tap on the <strong>"In Progress"</strong> tab at the top.</p>
      </>
    ),
    EmulatorContent: flow5ScreenUpcoming,
  },
  {
    id: 32,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A new screen will appear, showing the list of meets that are currently <strong>in progress</strong>.</p>
        <p>You can scroll through and check which meets are active at the moment.</p>
        <p>Then, tap on the <strong>"Completed"</strong> tab.</p>
      </>
    ),
    EmulatorContent: flow5ScreenInProgress,
  },
  {
    id: 33,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>The screen will now display all the meets that have been <strong>completed</strong>.</p>
        <p>You can review the details of past meets from this list.</p>
        <p>This way, you can easily navigate between <strong>Upcoming</strong>, <strong>In Progress</strong>, and <strong>Completed</strong> meets to stay on top of all your activities.</p>
        <p>Now, tap on <strong>"Create New Meetup."</strong></p>
      </>
    ),
    EmulatorContent: flow5ScreenCompleted,
  },
  {
    id: 34,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>You're now on the <strong>Meetup Details</strong> screen! Here, you can enter everything you need to plan your meetup.</p>
        <p>Start by choosing your location, date, and time. Then, add the friends or family members you'd like to invite.</p>
      </>
    ),
    EmulatorContent: flow5ScreenMeetupDetails,
  },
  {
    id: 35,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Here's a list of people you can invite to your meetup.</p>
        <p>Select your participants and tap <strong>Request</strong> to send out your invitations.</p>
      </>
    ),
    EmulatorContent: flow5ScreenParticipants,
  },
  {
    id: 36,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A toaster will appear confirming that the invitations have been sent, and the participants will be notified on their end.</p>
      </>
    ),
    EmulatorContent: flow5ScreenPopup,
  },
  {
    id: 37,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Now, tap on a meetup to open the <strong>Chat Screen</strong>.</p>
      </>
    ),
    EmulatorContent: flow5ScreenInProgressB,
  },
  {
    id: 38,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Here, you can message participants, share updates, or coordinate during the meetup.</p>
        <p>Next, tap on the <strong>Map</strong> icon.</p>
      </>
    ),
    EmulatorContent: flow5ScreenChat,
  },
  {
    id: 39,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A new screen will appear showing the <strong>real-time locations</strong> of all participants on the map.</p>
        <p>This helps you track everyone's position during the meetup.</p>
        <p>Finally, tap on the <strong>Race</strong> option.</p>
      </>
    ),
    EmulatorContent: flow5ScreenMap,
  },
  {
    id: 40,
    flowName: 'Genix Meet',
    isFlowEnd: true,
    title: 'Genix Meet',
    instruction: (
      <>
        <p>The <strong>Race Screen</strong> will open, displaying the positions of participants in the race or activity.</p>
        <p>You can see who is leading and monitor progress in real-time.</p>
      </>
    ),
    EmulatorContent: flow5ScreenRace,
  },
]
