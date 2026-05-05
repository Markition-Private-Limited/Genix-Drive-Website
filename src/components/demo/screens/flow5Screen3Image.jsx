import flow5screen3Img from '../../../assets/demo/flow5screen3.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen3Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen3Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '22%', left: '34%', width: '31%', height: '5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen3Image;
