import flow3screen3Img from '../../../assets/demo/flow3screen3.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow3Screen3Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow3screen3Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '81.5%', left: '51%', width: '44%', height: '6.4%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow3Screen3Image;
