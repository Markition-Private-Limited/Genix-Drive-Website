import flow5screen11Img from '../../../assets/demo/flow5screen11.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen11Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen11Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '15.5%', left: '63.8%', width: '30%', height: '5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen11Image;
