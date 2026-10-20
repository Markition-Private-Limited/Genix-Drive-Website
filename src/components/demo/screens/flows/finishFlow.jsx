// Flow: Finish screen (screen 44)

import FinishScreen from '../FinishScreen'

export const finishScreens = [
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
  },
]
