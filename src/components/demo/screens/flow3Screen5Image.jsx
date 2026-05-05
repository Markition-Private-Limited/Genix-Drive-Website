import flow3screen5Img from '../../../assets/demo/flow3screen5.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow3Screen5Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow3screen5Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '54%', left: '16%', width: '70%', height: '7.5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow3Screen5Image;
