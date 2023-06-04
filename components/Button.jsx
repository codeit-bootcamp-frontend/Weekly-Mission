import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ className = '', as, ...props }) => {
  return (
    <button type="button" className={`${styles.button} ${className}`} {...props} />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
};

export default Button;
