import { cloneElement } from 'react'
import './MobileEmulator.css'

function MobileEmulator({ children, onNext, currentStep }) {
  const contentWithProps = cloneElement(children, { onNext, currentStep })

  return (
    <div className="mobile-emulator-wrapper">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="phone-screen-content">
            {contentWithProps}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileEmulator
