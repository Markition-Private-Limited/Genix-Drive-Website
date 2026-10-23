// Flow: Connections (screens 11–17)

import flow7Screen1Img from '../flow7Screen1Image';
import flow7Screen2Img from '../flow7Screen2Image';
import flow7Screen3Img from '../flow7Screen3Image';
import flow7Screen4Img from '../flow7Screen4Image';
import flow7Screen5Img from '../flow7Screen5Image';
import flow7Screen6Img from '../flow7Screen6Image';
import flow7Screen7Img from '../flow7Screen7Image';

export const connectionsScreens = [
  {
    id: 11,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>The user clicks on the Connections tab to manage connections and guests.</p>
        <br />
        <p>Now, tap on the <strong>Connections</strong> tab to view your existing connections.</p>
      </>
    ),
    EmulatorContent: flow7Screen1Img,
  },
  {
    id: 12,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>A new screen will appear where you can search for people to connect with.</p>
        <br />
        <p>Use the search bar to find people already on Genix Drive, or look through your phone contacts to invite friends who haven't joined yet.</p>
      </>
    ),
    EmulatorContent: flow7Screen2Img,
  },
  {
    id: 13,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Once selected, a confirmation screen will appear.</p>
        <br />
        <p>Choose the permissions you'd like to share, then tap <strong>Send Request</strong> to send your connection request.</p>
      </>
    ),
    EmulatorContent: flow7Screen3Img,
  },
  {
    id: 14,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Now, go back to the previous screen and tap on the <strong>Guests</strong> tab.</p>
      </>
    ),
    EmulatorContent: flow7Screen4Img,
  },
  {
    id: 15,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>A new screen will appear where you can search for people to add as guests.</p>
        <br />
        <p>Use the search bar to find existing Genix Drive users, or browse your phone contacts to invite people who haven't joined yet.</p>
      </>
    ),
    EmulatorContent: flow7Screen5Img,
  },
  {
    id: 16,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Use the search bar to find existing Genix Drive users, or browse your phone contacts to invite people who haven't joined yet.</p>
      </>
    ),
    EmulatorContent: flow7Screen6Img,
  },
  {
    id: 17,
    flowName: 'Add a Connection',
    isFlowEnd: true,
    title: 'Connections',
    instruction: (
      <>
        <p>Finally, a confirmation screen will appear.</p>
        <br />
        <p>Tap to send the request, and your guest request will be sent successfully.</p>
        <br />
        <p>Once your connection or guest accepts the request, they will appear on the <strong>Map screen</strong>. You will be able to view their live location directly on the map.</p>
      </>
    ),
    EmulatorContent: flow7Screen7Img,
  },
]
