import flow6screen1Img from '../../../assets/demo/flow6screen1.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow6Screen1Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow6screen1Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '35.1%', left: '49%', width: '45%', height: '5.1%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow6Screen1Image;
