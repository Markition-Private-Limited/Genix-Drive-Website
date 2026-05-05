import flow3screen7Img from '../../../assets/demo/flow3screen7.webp';
import BaseScreenImage from './BaseScreenImage';

function flow3Screen7Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow3screen7Img} scrollTop={0}>
            {/* No hotspot for the final screen */}
        </BaseScreenImage>
    );
}

export default flow3Screen7Image;
