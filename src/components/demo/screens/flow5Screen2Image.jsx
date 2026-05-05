import flow5screen2Img from '../../../assets/demo/flow5screen2.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen2Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen2Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '67.5%', left: '3%', width: '93%', height: '5.5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen2Image;
