/**
 * Screens data - Add your app screens here
 * Each screen has: title, instruction (JSX/text), and EmulatorContent component
 */

import flow1Screen1Img from './flow1Screen1Image'
import flow1Screen2Img from './flow1Screen2Image'
import flow1Screen3Img from './flow1Screen3Image'
import flow1Screen4Img from './flow1Screen4Image'
import flow1Screen6Img from './flow1Screen6Image'
import flow1Screen8Img from './flow1Screen8Image'
import flow1Screen10Img from './flow1Screen10Image'
import flow2Screen1Img from './flow2Screen1Image'
import flow2Screen2Img from './flow2Screen2Image'
import flow2Screen3Img from './flow2Screen3Image'
import flow2Screen4Img from './flow2Screen4Image'
import flow2Screen5Img from './flow2Screen5Image'
import flow2Screen6Img from './flow2Screen6Image'
import flow3Screen1Img from './flow3Screen1Image'
import flow3Screen2Img from './flow3Screen2Image'
import flow3Screen3Img from './flow3Screen3Image'
import flow3Screen4Img from './flow3Screen4Image'
import flow3Screen5Img from './flow3Screen5Image'
import flow3Screen6Img from './flow3Screen6Image'
import flow3Screen7Img from './flow3Screen7Image'
import flow4Screen1Img from './flow4Screen1Image'
import flow4Screen2Img from './flow4Screen2Image'
import flow4Screen4Img from './flow4Screen4Image'
import FinishScreen from './FinishScreen'
import flow5Screen1Img from './flow5Screen1Image'
import flow5Screen2Img from './flow5Screen2Image'
import flow5Screen3Img from './flow5Screen3Image'
import flow5Screen4Img from './flow5Screen4Image'
import flow5Screen5Img from './flow5Screen5Image'
import flow5Screen6Img from './flow5Screen6Image'
import flow5Screen7Img from './flow5Screen7Image'
import flow5Screen8Img from './flow5Screen8Image'
import flow5Screen9Img from './flow5Screen9Image'
import flow5Screen10Img from './flow5Screen10Image'
import flow5Screen11Img from './flow5Screen11Image'
import flow5Screen12Img from './flow5Screen12Image'
import flow6Screen1Img from './flow6Screen1Image'
import flow6Screen2Img from './flow6Screen2Image'

export const screens = [
  {
    id: 1,
    flowName: 'Dashboard',
    title: 'Dashboard',
    instruction: (
      <>
        <p>Now that you're logged in, your dashboard appears.</p>
        <p>Here is your driving score to tell you how good you have been driving!</p>
        <p>By default, a 7-day filter is applied.</p>
        <p>Now, look at the ribbon at the top of the screen.</p>
        <p>Tap on <strong>30 days</strong> to see the statistics for the last 30 days.</p>
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
        <p>Look at the graph — it shows your score over the selected period compared to the <strong>average score of other users</strong>.</p>
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
        <p>Now click on the <strong>first pie chart</strong> on your dashboard</p>
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
        <p>Great! The next screen has appeared.</p>
        <p>Now, look at the chart — it shows your driving hours divided into <strong>peak</strong>, <strong>off-peak</strong>, and <strong>night hours</strong>.</p>
        <p>You can select different range of days from the ribbon on top.</p>
        <br />
        <p>Now, go back to the previous screen.</p>
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
  {
    id: 11,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>The user clicks on the dashboard and then clicks on connections to add family members</p>
        <br />
        <p>Now, tap on the <strong>Companion</strong> tab located at the bottom of the screen.</p>
      </>
    ),
    EmulatorContent: flow2Screen1Img,
  },
  {
    id: 12,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>A new screen will appear, displaying the list of your existing connections.</p>
        <p>In search bar you can search for a companion.</p>
        <ul>
          <li>Type the name in the search bar and select the desired companion from the results.</li>
        </ul>
      </>
    ),
    EmulatorContent: flow2Screen2Img,
  },
  {
    id: 13,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Once selected, a confirmation screen will appear.</p>
        <p>Tap to <strong>send the request</strong>, and your companion request will be sent.</p>
      </>
    ),
    EmulatorContent: flow2Screen3Img,
  },
  {
    id: 14,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Now, go back to the previous screen and tap on the <strong>Friends</strong> tab.</p>
      </>
    ),
    EmulatorContent: flow2Screen4Img,
  },
  {
    id: 15,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>The screen will display the list of your friends.</p>
        <p>in search bar, you can search for a friend.</p>
        <ul>
          <li>Enter the name in the search bar and select the friend from the results.</li>
        </ul>

      </>
    ),
    EmulatorContent: flow2Screen5Img,
  },
  {
    id: 16,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Finally, a confirmation screen will appear.</p>
        <p>Tap to <strong>send the request</strong>, and your friend request will be sent successfully.</p>
        <br />
        <p>Once your friend or companion accepts the request, they will appear on the <strong>Map screen</strong>.You will be able to view their live location directly on the map.</p>
      </>
    ),
    EmulatorContent: flow2Screen6Img,
  },
  {
    id: 17,
    flowName: 'Add a Connection',
    isFlowEnd: true,
    title: 'Connections',
    instruction: (
      <>
        <p>Once your friend or companion accepts the request, they will appear on the <strong>Map screen</strong>.You will be able to view their live location directly on the map.</p>
      </>
    ),
    EmulatorContent: flow2Screen1Img,
  },
  {
    id: 18,
    flowName: 'Add a POI',
    title: 'Places',
    instruction: (
      <>
        <p>Now, click on the top left icon on the screen to go to the menu</p>
      </>
    ),
    EmulatorContent: flow3Screen1Img,
  },
  {
    id: 19,
    flowName: 'Add a POI',
    title: 'Places',
    instruction: (
      <>
        <p>Now, select the Places section.</p>
      </>
    ),
    EmulatorContent: flow3Screen2Img,
  },
  {
    id: 20,
    flowName: 'Add a POI',
    title: 'Places',
    instruction: (
      <>
        <p>Tap on any place from the list, and it will open the map view for that location, showing it with a pin icon.</p>
        <p>From here, tap Add a Place to add a new location. You can search for a location and set the radius for your place.</p>
      </>
    ),
    EmulatorContent: flow3Screen3Img,
  },
  {
    id: 21,
    flowName: 'Add a POI',
    title: 'Places',
    instruction: (
      <>
        <p>After tapping Add Place from the location screen, a popup will appear asking for the details needed to create a place</p>
        <p>First, add the companion you want associated with this Place.</p>
      </>
    ),
    EmulatorContent: flow3Screen4Img,
  },
  {
    id: 22,
    flowName: 'Add a POI',
    title: 'Places',
    instruction: (
      <>
        <p>Next, enter the name of the place  and select an icon to represent it on the map.</p>
      </>
    ),
    EmulatorContent: flow3Screen5Img,
  },
  {
    id: 23,
    flowName: 'Add a POI',
    title: 'Places',
    instruction: (
      <>
        <p>Then, choose the type of activity for the Place — Exit, Enter, or Both — to track when your companion interacts with this location.</p>
        <p>Finally, tap Confirm.</p>
      </>
    ),
    EmulatorContent: flow3Screen6Img,
  },
  {
    id: 24,
    flowName: 'Add a POI',
    isFlowEnd: true,
    title: 'Places',
    instruction: (
      <>
        <p>The map will display your new Place with the selected icon, showing its exact location.</p>
      </>
    ),
    EmulatorContent: flow3Screen7Img,
  },
  {
    id: 25,
    flowName: 'Trips',
    title: 'Trips',
    instruction: (
      <>
        <p>Now return  to the <strong>Dashboard and scroll down</strong>, you can view your <strong>Recent Trips</strong> section.</p>
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
        <p>Now tap on <strong>“View All”</strong> in recent trips section to open the complete list of trips you have done.</p>
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
  {
    id: 30,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Now click on <strong>top left icon</strong> on your screen to open <strong>Menu</strong></p>
      </>
    ),
    EmulatorContent: flow5Screen1Img,
  },
  {
    id: 31,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Now, open the <strong>Meets</strong> section from your menu.</p>
      </>
    ),
    EmulatorContent: flow5Screen2Img,
  },
  {
    id: 32,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>The first screen you see is the <strong>Upcoming Meets</strong> screen.</p>
        <p>Here, you can view all the meets that are scheduled in the future.</p>
        <p>Next, tap on the <strong>“In Progress”</strong> tab at the top.</p>
      </>
    ),
    EmulatorContent: flow5Screen3Img,
  },
  {
    id: 33,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A new screen will appear, showing the list of meets that are currently <strong>in progress</strong>.</p>
        <ul>
          <li>You can scroll through and check which meets are active at the moment.</li>
        </ul>
        <p>Then, tap on the <strong>“Completed”</strong> tab.</p>
      </>
    ),
    EmulatorContent: flow5Screen4Img,
  },
  {
    id: 34,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>The screen will now display all the meets that have been <strong>completed</strong>.</p>
        <ul>
          <li>You can review the details of past meets from this list.</li>
        </ul>
        <p>This way, you can easily navigate between <strong>Upcoming</strong>, <strong>In Progress</strong>, and <strong>Completed meets</strong> to stay on top of all your activities.</p>
        <br />
        <p>Now, tap on <strong>“Create New Meetup.”</strong></p>
      </>
    ),
    EmulatorContent: flow5Screen5Img,
  },
  {
    id: 35,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A new screen will appear with a list of <strong>details required</strong> to set up your meetup.</p>
        <br />
        <p>Next, tap on <strong>“Select Location”</strong>.</p>
      </>
    ),
    EmulatorContent: flow5Screen6Img,
  },
  {
    id: 36,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>You’ll be taken to a screen where you can <strong>choose the meetup location</strong> by dragging on the map to your desired spot.</p>
        <p>After selecting the location, tap on <strong>“Select Participants”</strong>.</p>
      </>
    ),
    EmulatorContent: flow5Screen7Img,
  },
  {
    id: 37,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A new screen will appear, showing a <strong>list of potential participants</strong> you can invite to the meetup.</p>
        <p>Once you’ve selected the participants, tap <strong>“Send Invite”</strong>.</p>
      </>
    ),
    EmulatorContent: flow5Screen8Img,
  },
  {
    id: 38,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A popup will appear confirming that the <strong>invitations have been sent</strong>, and the participants will be notified on their end</p>
      </>
    ),
    EmulatorContent: flow5Screen9Img,
  },
  {
    id: 39,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>Now, from Step 4 (In-Progress Meets), tap on a meetup to open the <strong>Chat Screen</strong>.</p>
        <p>Here, you can message participants, share updates, or coordinate during the meetup.</p>
        <br />
        <p>Next, tap on the <strong>Map</strong> icon.</p>
      </>
    ),
    EmulatorContent: flow5Screen10Img,
  },
  {
    id: 40,
    flowName: 'Genix Meet',
    title: 'Genix Meet',
    instruction: (
      <>
        <p>A new screen will appear showing the real-time locations of all participants on the map. This helps you track everyone’s position during the meetup.</p>
        <br />
        <p>Finally, tap on the <strong>Race</strong> option.</p>
      </>
    ),
    EmulatorContent: flow5Screen11Img,
  },
  {
    id: 41,
    flowName: 'Genix Meet',
    isFlowEnd: true,
    title: 'Genix Meet',
    instruction: (
      <>
        <p>The <strong>Race Screen</strong> will open, displaying the positions of participants in the race or activity. You can see who is leading and monitor progress in real-time.</p>
      </>
    ),
    EmulatorContent: flow5Screen12Img,
  },
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
  {
    id: 44,
    flowName: 'Finish',
    title: 'Demo Completed',
    instruction: (
      <>
        <p>Congratulations!</p>
        <p>You have successfully explored all the interactive flows and understood how the GenixDrive app works.</p>
        <br />
        <p>You are now ready to take the next step. Please click the <strong>DOWNLOAD NOW</strong> button inside the emulator to create your account and get started.</p>
      </>
    ),
    EmulatorContent: FinishScreen,
  }
]
