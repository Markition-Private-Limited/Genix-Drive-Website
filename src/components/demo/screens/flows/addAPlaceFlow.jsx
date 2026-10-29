// Flow: Add a Place (screens 25–30)

import flow8Screen1Img from '../flow8Screen1Image';
import flow8Screen1ScrolledImg from '../flow8Screen1ScrolledImage';
import flow8Screen5Img from '../flow8Screen5Image';
import flow8Screen6Img from '../flow8Screen6Image';

export const addAPlaceScreens = [
  {
    id: 25,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>With Places, you can save and keep track of locations that matter to you, like home, school, or work.</p>
        <br />
        <p>To get started, tap <strong>Places</strong> at the bottom of the screen.</p>
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
        <p>Now, let's add your first place! Tap <strong>Add a New Place</strong> to get started.</p>
      </>
    ),
    EmulatorContent: flow8Screen1ScrolledImg,
  },
  {
    id: 27,
    flowName: 'Add a Place',
    title: 'Places',
    instruction: (
      <>
        <p>Here, you can select your location, set a radius, name your place, and customize when you'd like to receive alerts. Once you're happy with your settings, tap <strong>Save</strong> at the bottom to add your place!</p>
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
