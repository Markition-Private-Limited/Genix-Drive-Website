// Flow: Add a POI / Places (screens 18–24)

import flow3Screen1Img from '../flow3Screen1Image'
import flow3Screen2Img from '../flow3Screen2Image'
import flow3Screen3Img from '../flow3Screen3Image'
import flow3Screen4Img from '../flow3Screen4Image'
import flow3Screen5Img from '../flow3Screen5Image'
import flow3Screen6Img from '../flow3Screen6Image'
import flow3Screen7Img from '../flow3Screen7Image'

export const addPoiScreens = [
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
        <p>Next, enter the name of the place and select an icon to represent it on the map.</p>
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
]
