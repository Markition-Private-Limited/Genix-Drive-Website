// Flow: Add a Place (screens 25–30)

import flow8Screen1Img from '../flow8Screen1Image';
import flow8Screen2Img from '../flow8Screen2Image';
import flow8Screen3Img from '../flow8Screen3Image';
import flow8Screen4Img from '../flow8Screen4Image';
import flow8Screen5Img from '../flow8Screen5Image';
import flow8Screen6Img from '../flow8Screen6Image';

export const addAPlaceScreens = [
  {
    id: 25,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>Tap <strong>Add a Place</strong> at the bottom of the screen to get started.</p>
      </>
    ),
    EmulatorContent: flow8Screen1Img,
  },
  {
    id: 26,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>After tapping Add Place from the connection screen, a popup will appear asking for the details needed to create a place.</p>
      </>
    ),
    EmulatorContent: flow8Screen2Img,
  },
  {
    id: 27,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>Search for your desired location and set the radius to define the area.</p>
      </>
    ),
    EmulatorContent: flow8Screen3Img,
  },
  {
    id: 28,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>Next, enter the name of the place and select an icon to represent it on the map.</p>
      </>
    ),
    EmulatorContent: flow8Screen4Img,
  },
  {
    id: 29,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>Then, choose when you'd like to be notified — Enter, Exit, or Both — whenever your connection visits or leaves the place.</p>
        <br />
        <p>Under Alert Preferences, select <strong>Anytime</strong> to receive alerts whenever the activity occurs, or choose specific days and times to receive notifications only during your preferred hours.</p>
        <br />
        <p>Once you're done, tap <strong>Save</strong>.</p>
      </>
    ),
    EmulatorContent: flow8Screen5Img,
  },
  {
    id: 30,
    flowName: 'Add a Place',
    isFlowEnd: true,
    title: 'Places',
    instruction: (
      <>
        <p>Once you've added a place, it will appear in your list. Simply tap on it to view its location on the map, marked with a pin.</p>
      </>
    ),
    EmulatorContent: flow8Screen6Img,
  },
]
