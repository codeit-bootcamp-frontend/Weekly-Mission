import Image from 'next/image';
import PropTypes from 'prop-types';
import spinnerImg from '@/public/spinner.svg';
import styles from './Spinner.module.css';

const Spinner = ({ className = '' }) => {
  return (
    <Image
      className={`${styles.spinner} ${className}`}
      src={spinnerImg}
      width={45}
      height={45}
      alt="로딩 중...."
    />
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
