import { CSSProperties, FC } from 'react';
import styles from '@/styles/modules/logo.module.scss';


const TextLogo: FC = () => {

  const repeat = (word:string, count: number) => {

    let output: Array<string> = [];

    for(let i = 0; i < count; i++) {
      output[i] = word;
    }

    return output.map((item, index) => {

      let styles: CSSProperties = {};
      if(index !== 0) {
        let opacity =  0.6 - 0.1 * index;
        styles = {left: 0, top: `${index * 20}px`, opacity, animationDelay: `${index - index * 0.7}s` }
      }

      return (
        <span style={styles}>{item}</span>
      );
    });
  }

  return (
    <h1 className={styles.wrapper}>
      <span className={styles.diary}>Дн<strong>е</strong>вник</span>
      <span className={styles.gamer}>
        {repeat('геймера', 4)}
      </span>
    </h1>
  );
}

export default TextLogo;