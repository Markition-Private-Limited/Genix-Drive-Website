import flow6screen2Img from '../../../assets/demo/flow6screen2.webp';
import BaseScreenImage from './BaseScreenImage';

function flow6Screen2Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow6screen2Img} scrollTop={0}>
            {/* No hotspot for the final screen */}
        </BaseScreenImage>
    );
}

export default flow6Screen2Image;
