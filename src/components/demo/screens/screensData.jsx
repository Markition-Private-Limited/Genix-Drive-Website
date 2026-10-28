// screensData — assembles all demo flows in order
//
// Each flow lives in its own file under ./flows/
//   dashboardFlow.jsx   -> Ali Jawad
//   genixMeetFlow.jsx   -> Intern
//   markTripsFlow       -> inside dashboardFlow.jsx (other dev)
//   connectionsFlow.jsx -> unassigned
//   addPoiFlow.jsx      -> unassigned
//   tripsFlow.jsx       -> unassigned
//   rewardsFlow.jsx     -> unassigned
//   finishFlow.jsx      -> unassigned

import { dashboardScreens, markTripsScreens } from './flows/dashboardFlow'
import { connectionsScreens } from './flows/connectionsFlow'
import { addAPlaceScreens } from './flows/addAPlaceFlow'
import { tripsScreens } from './flows/tripsFlow'
import { genixMeetScreens } from './flows/genixMeetFlow'
import { rewardsScreens } from './flows/rewardsFlow'
import { finishScreens } from './flows/finishFlow'

export const screens = [
  ...dashboardScreens,
  ...connectionsScreens,
  ...addAPlaceScreens,
  ...tripsScreens,
  ...genixMeetScreens,
  ...rewardsScreens,
  ...finishScreens,
  ...markTripsScreens,
]
