import flow3screen4Img from '../../../assets/demo/flow3screen4.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow3Screen4Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow3screen4Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '23.8%', left: '31%', width: '54.5%', height: '6.3%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow3Screen4Image;
