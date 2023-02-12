import Image, { StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';
import styles from '@/styles/modules/signature.module.scss';

type signatureProps = {
  title: string,
  imageSrc: StaticImageData | string,
}

const Signature: FC<signatureProps> = ({ title, imageSrc }) => {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {/* todo title glitch */}
        {title}
      </h2>
      <Image className={styles.image} src={imageSrc} alt="Signature" />
  </div>
  );
}

export default Signature;