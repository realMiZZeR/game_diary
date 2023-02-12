import { FC } from 'react';
import styles from '@/styles/modules/previewCard.module.scss';


type previewCardProps = {
  clickHandler: Function
}

const PreviewCard: FC<previewCardProps> = ({ clickHandler }) => {

  return (
    <div className={styles.wrapper}>

    </div>
  );
}

export default PreviewCard;