import flow5screen12Img from '../../../assets/demo/flow5screen12.webp';
import BaseScreenImage from './BaseScreenImage';

function flow5Screen12Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen12Img} scrollTop={0}>
            {/* No hotspot for the final screen */}
        </BaseScreenImage>
    );
}

export default flow5Screen12Image;
