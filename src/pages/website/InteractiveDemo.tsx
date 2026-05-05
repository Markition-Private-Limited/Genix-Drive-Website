import React, { useState, useEffect } from 'react';
import MobileEmulator from '../../components/demo/MobileEmulator';
import TextGuidancePanel from '../../components/demo/TextGuidancePanel';
import { screens } from '../../components/demo/screens/screensData';

// Preload all demo assets
import flow1screen1Img from '../../assets/demo/flow1screen1.webp';
import flow1screen2Img from '../../assets/demo/flow1screen2.webp';
import flow1screen3Img from '../../assets/demo/flow1screen3.webp';
import flow1screen4Img from '../../assets/demo/flow1screen4.webp';
import flow1screen6Img from '../../assets/demo/flow1screen6.webp';
import flow1screen8Img from '../../assets/demo/flow1screen8.webp';
import flow1screen10Img from '../../assets/demo/flow1screen10.webp';
import flow2screen1Img from '../../assets/demo/flow2screen1.webp';
import flow2screen2Img from '../../assets/demo/flow2screen2.webp';
import flow2screen3Img from '../../assets/demo/flow2screen3.webp';
import flow2screen4Img from '../../assets/demo/flow2screen4.webp';
import flow2screen5Img from '../../assets/demo/flow2screen5.webp';
import flow2screen6Img from '../../assets/demo/flow2screen6.webp';
import flow3screen1Img from '../../assets/demo/flow3screen1.webp';
import flow3screen2Img from '../../assets/demo/flow3screen2.webp';
import flow3screen3Img from '../../assets/demo/flow3screen3.webp';
import flow3screen4Img from '../../assets/demo/flow3screen4.webp';
import flow3screen5Img from '../../assets/demo/flow3screen5.webp';
import flow3screen6Img from '../../assets/demo/flow3screen6.webp';
import flow3screen7Img from '../../assets/demo/flow3screen7.webp';
import flow4screen1Img from '../../assets/demo/flow4screen1.webp';
import flow4screen2Img from '../../assets/demo/flow4screen2.webp';
import flow4screen4Img from '../../assets/demo/flow4screen4.webp';
import flow5screen1Img from '../../assets/demo/flow5screen1.webp';
import flow5screen2Img from '../../assets/demo/flow5screen2.webp';
import flow5screen3Img from '../../assets/demo/flow5screen3.webp';
import flow5screen4Img from '../../assets/demo/flow5screen4.webp';
import flow5screen5Img from '../../assets/demo/flow5screen5.webp';
import flow5screen6Img from '../../assets/demo/flow5screen6.webp';
import flow5screen7Img from '../../assets/demo/flow5screen7.webp';
import flow5screen8Img from '../../assets/demo/flow5screen8.webp';
import flow5screen9Img from '../../assets/demo/flow5screen9.webp';
import flow5screen10Img from '../../assets/demo/flow5screen10.webp';
import flow5screen11Img from '../../assets/demo/flow5screen11.webp';
import flow5screen12Img from '../../assets/demo/flow5screen12.webp';
import flow6screen1Img from '../../assets/demo/flow6screen1.webp';
import flow6screen2Img from '../../assets/demo/flow6screen2.webp';
import headerImg from '../../assets/demo/top-header.webp';
import navbarImg from '../../assets/demo/bottom-navbar.webp';

import './InteractiveDemo.css';

function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const currentScreen = screens[currentStep];
  const EmulatorContent = currentScreen.EmulatorContent as React.ComponentType<any>;

  const currentFlowScreens = screens.filter((s: any) => s.flowName === currentScreen.flowName);
  const currentStepInFlow = currentFlowScreens.findIndex((s: any) => s.id === currentScreen.id);
  const lastIndexInFlow = screens.indexOf(currentFlowScreens[currentFlowScreens.length - 1]);

  useEffect(() => {
    const imagesToPreload = [
      flow1screen1Img, flow1screen2Img, flow1screen3Img, flow1screen4Img,
      flow1screen6Img, flow1screen8Img, flow1screen10Img,
      flow2screen1Img, flow2screen2Img, flow2screen3Img, flow2screen4Img,
      flow2screen5Img, flow2screen6Img,
      flow3screen1Img, flow3screen2Img, flow3screen3Img, flow3screen4Img,
      flow3screen5Img, flow3screen6Img, flow3screen7Img,
      flow4screen1Img, flow4screen2Img, flow4screen4Img,
      flow5screen1Img, flow5screen2Img, flow5screen3Img, flow5screen4Img,
      flow5screen5Img, flow5screen6Img, flow5screen7Img, flow5screen8Img,
      flow5screen9Img, flow5screen10Img, flow5screen11Img, flow5screen12Img,
      flow6screen1Img, flow6screen2Img,
      headerImg, navbarImg,
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, lastIndexInFlow));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleNextFlow = () => {
    const nextFlowIndex = screens.findIndex(
      (s: any) => s.flowName !== currentScreen.flowName && screens.indexOf(s) > currentStep
    );
    if (nextFlowIndex !== -1) {
      setCurrentStep(nextFlowIndex);
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <div className="interactive-demo-app">
      <header className="interactive-demo-header">
        <h1 className="interactive-demo-title">See How Our App Works With Interactive Demo</h1>
      </header>

      <main className="interactive-demo-main">
        <div className="interactive-demo-content">
          <section className="interactive-emulator-section">
            <MobileEmulator onNext={handleNext} currentStep={currentStep}>
              <EmulatorContent />
            </MobileEmulator>
          </section>

          <section className="interactive-guidance-section">
            <TextGuidancePanel
              title={currentScreen.title}
              instruction={currentScreen.instruction}
              currentStep={currentStepInFlow}
              totalSteps={currentFlowScreens.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
              flowName={currentScreen.flowName}
              isFlowEnd={currentScreen.isFlowEnd}
              onNextFlow={handleNextFlow}
              globalStep={currentStep}
            />
            <footer className="interactive-demo-footer">
        <button className="interactive-download-btn" onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en","_blank")}>DOWNLOAD APP</button>
      </footer>
          </section>
          
        </div>
      </main>

      
    </div>
  );
}

export default InteractiveDemo;
