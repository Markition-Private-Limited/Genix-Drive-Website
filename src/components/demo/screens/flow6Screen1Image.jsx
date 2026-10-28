import flow6screen1Img from '../../../assets/demo/flow6screen1new.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow6Screen1Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow6screen1Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '27.2%', left: '49.2%', width: '45.7%', height: '4.6%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow6Screen1Image;
