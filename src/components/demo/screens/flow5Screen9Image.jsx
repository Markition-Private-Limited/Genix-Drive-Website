import flow5screen9Img from '../../../assets/demo/flow5screen9.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen9Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen9Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '55.6%', left: '9.7%', width: '80.5%', height: '6.8%', borderRadius: '12px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen9Image;
