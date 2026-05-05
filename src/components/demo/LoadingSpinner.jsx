import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className={styles.loaderWrapper}>
    </div>
  );
};

export default LoadingSpinner;
