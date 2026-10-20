// Flow: Add a Connection (screens 11–17)

import flow2Screen1Img from '../flow2Screen1Image'
import flow2Screen2Img from '../flow2Screen2Image'
import flow2Screen3Img from '../flow2Screen3Image'
import flow2Screen4Img from '../flow2Screen4Image'
import flow2Screen5Img from '../flow2Screen5Image'
import flow2Screen6Img from '../flow2Screen6Image'

export const connectionsScreens = [
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
        <p>In search bar, you can search for a friend.</p>
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
        <p>Once your friend or companion accepts the request, they will appear on the <strong>Map screen</strong>. You will be able to view their live location directly on the map.</p>
      </>
    ),
    EmulatorContent: flow2Screen1Img,
  },
]
