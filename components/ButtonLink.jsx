import PropTypes from 'prop-types';
import Link from 'next/link';
import buttonStyles from './Button.module.css';
import styles from './ButtonLink.module.css';

const ButtonLink = ({ className = '', ...props }) => {
  return <Link className={`${buttonStyles.button} ${styles.buttonLink} ${className}`} {...props} />;
};

ButtonLink.propTypes = {
  className: PropTypes.string,
};

export default ButtonLink;
