import flow3screen2Img from '../../../assets/demo/flow3screen2.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow3Screen2Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow3screen2Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '73.3%', left: '4%', width: '92%', height: '6%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow3Screen2Image;
