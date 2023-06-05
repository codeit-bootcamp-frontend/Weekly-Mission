import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';
import spinnerImg from '@/public/spinner.svg';

const Spinner = ({ className = '' }) => {
  return (
    <div className={styles.loading}>
      <Image
        fill
        className={`${styles.spinner} ${className}`}
        src={spinnerImg}
        alt="로딩 중...."
      />
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
