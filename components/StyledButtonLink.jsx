import PropTypes from 'prop-types';
import Link from 'next/link';
import buttonStyles from './Button.module.css';
import buttonLinkStyles from './ButtonLink.module.css';
import styles from './StyledButtonLink.module.css';

const StyledButtonLink = ({ className = '', ...props }) => {
  return <Link className={`${buttonStyles.button} ${buttonLinkStyles.buttonLink} ${styles.styledButtonLink} ${className}`} {...props} />;
};

StyledButtonLink.propTypes = {
  className: PropTypes.string,
};

export default StyledButtonLink;
