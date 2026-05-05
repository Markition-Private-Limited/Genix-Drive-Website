import flow5screen7Img from '../../../assets/demo/flow5screen7.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen7Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen7Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '75.4%', left: '4%', width: '92%', height: '6.8%', borderRadius: '12px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen7Image;
