import PropTypes from 'prop-types';
import styles from './SortButton.module.css';

const SortButton = ({ fill = false, children = '' }) => {
  return (
    <button type="button" className={`${styles.button}  ${fill ? styles.filled : ''}`}>{children}</button>
  );
};

SortButton.propTypes = {
  fill: PropTypes.bool,
  children: PropTypes.node,
};

export default SortButton;
