import flow5screen8Img from '../../../assets/demo/flow5screen8.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen8Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen8Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '75.4%', left: '4%', width: '92%', height: '6.8%', borderRadius: '12px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen8Image;
