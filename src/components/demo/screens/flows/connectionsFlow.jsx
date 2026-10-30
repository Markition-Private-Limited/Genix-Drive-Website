// Flow: Connections (screens 11–17)

import flow7Screen1Img from '../flow7Screen1Image';
import flow7Screen2Img from '../flow7Screen2Image';
import flow7Screen3Img from '../flow7Screen3Image';
import flow7Screen4Img from '../flow7Screen4Image';
import flow7Screen5Img from '../flow7Screen5Image';
import flow7Screen6Img from '../flow7Screen6Image';
import flow7Screen7Img from '../flow7Screen7Image';
import flow7Screen1StaticImg from '../flow7Screen1StaticImage';

export const connectionsScreens = [
  {
    id: 11,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Great! You're on the Connections screen now. You can view and manage all your existing connection here</p>
        <br />
        <p>To connect with someone new, tap on the <strong>Add Connections</strong> button</p>
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
        <p>Once selected, a confirmation screen will appear.</p>
        <br />
        <p>Choose what information you'd like this person to share with you, then tap <strong>Send Request</strong> to send your connection request.</p>
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
        <p>Choose what information you'd like this person to share with you, then tap <strong>Send Request</strong> to send your connection request.</p>
      </>
    ),
    EmulatorContent: flow7Screen3Img,
    customNext: 17,
  },
  {
    id: 14,
    flowName: 'Add a Connection',
    title: 'Connections',
    instruction: (
      <>
        <p>Now, go back to the previous screen and tap on <strong>Add Guest</strong>.</p>
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
        <p>Now, tap <strong>Add Guest</strong> to temporarily connect with someone for a duration of your choice.</p>
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
    title: 'Connections',
    instruction: (
      <>
        <p>Choose how long you'd like to stay connected with your guest, then tap <strong>Send Request</strong> to send your invitation.</p>
      </>
    ),
    EmulatorContent: flow7Screen7Img,
  },
  {
    id: 18,
    flowName: 'Add a Connection',
    isFlowEnd: true,
    title: 'Connections',
    instruction: (
      <>
        <p>Once your connection or guest accepts the request, they will appear on the <strong>Map screen</strong>. You will be able to view their live location directly on the map.</p>
      </>
    ),
    EmulatorContent: flow7Screen1StaticImg,
  },
]
