import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloaderWrapper}>
        <Oval
          height={80}
          width={80}
          color="#24cca7"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#24cca7"
          strokeWidth={5}
          strokeWidthSecondary={5}
        />
      </div>
    </div>
  );
};
