import flow5screen6Img from '../../../assets/demo/flow5screen6.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen6Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen6Img} scrollTop="bottom">
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '87%', left: '4%', width: '92%', height: '6.7%', borderRadius: '12px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen6Image;
