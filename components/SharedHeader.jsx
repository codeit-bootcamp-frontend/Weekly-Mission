import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './SharedHeader.module.css';

const SharedHeader = ({ ownerImage, ownerName, folderName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        <Image
          fill
          src={ownerImage}
          alt="Folder Owner"
        />
      </div>
      <p className={styles.headerName}>{ownerName}</p>
      <h2 className={styles.headerFolder}>{folderName}</h2>
    </div>
  );
};

SharedHeader.propTypes = {
  ownerImage: PropTypes.string,
  ownerName: PropTypes.string,
  folderName: PropTypes.string,
};

export default SharedHeader;
