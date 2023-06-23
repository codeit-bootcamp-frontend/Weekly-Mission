import Image from "next/image";

import styles from "../../app/page.module.scss";

interface ISectionInfoWrapper {
  sectionClassName: string;
  paragraph: string;
  imgName: string;
  children: React.ReactNode;
}

const SectionInfoWrapper = ({
  sectionClassName,
  paragraph,
  imgName,
  children,
}: ISectionInfoWrapper) => {
  return (
    <section className={sectionClassName}>
      <h2>{children}</h2>
      <p>{paragraph}</p>
      <div className={styles.imageContainer}>
        <Image
          src={`/assets/${imgName}.png`}
          alt={imgName}
          width={1100}
          height={900}
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default SectionInfoWrapper;
