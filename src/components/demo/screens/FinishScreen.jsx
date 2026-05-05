 import { useNavigate } from 'react-router-dom';
import logoImg from '../../../assets/demo/logo.webp';
import styles from './FinishScreen.module.css';

function FinishScreen() {
    const navigate = useNavigate();

    const handleSignup = () => {
        window.open('https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en', '_blank');
    };

    return (
        <div className={styles.finishScreenWrapper}>
            <div className={styles.content}>
                <img src={logoImg} alt="GenixDrive Logo" className={styles.logo} />
                <button className={styles.signupButton} onClick={handleSignup}>
                    DOWNLOAD NOW
                </button>
            </div>
        </div>
    );
}

export default FinishScreen;
