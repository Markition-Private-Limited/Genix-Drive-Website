import flow5screen10Img from '../../../assets/demo/flow5screen10.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen10Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen10Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '15.5%', left: '35%', width: '31%', height: '5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen10Image;
