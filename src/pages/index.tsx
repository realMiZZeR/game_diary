import Image, { StaticImageData } from 'next/image';
import { FC, useState, useEffect } from 'react';
import signature from '@/images/minecraft_signature.png';
import backImage from '@/images/minecraft_background.png';
import styles from '@/styles/modules/home.module.scss';
import HomeGuest from '@/components/HomeGuest';
import HomeAuth from '@/components/HomeAuth';
import Signature from '@/components/Signature';
import TextLogo from '@/components/TextLogo';
import Head from 'next/head';

const Home: FC = () => {
  type gameType = {
    title: string,
    signature: StaticImageData | string,
    backImage: StaticImageData | string,
  }

  const fetchedGame: gameType = {
    title: 'Minecraft',
    signature: signature,
    backImage: backImage
  }

  const [game, setGame] = useState<gameType>({
    title: '',
    signature: '',
    backImage: ''
  });

  const randomize = () => {
    setGame(fetchedGame);
  }

  useEffect(() => {
    randomize();
  }, []);

  let auth = true;

  return (
    <article className={styles.wrapper}>
      <Head>
        <title>Главная</title>
      </Head>
      <Signature title={game.title} imageSrc={game.signature} />
      <div className={styles.content}>
        <TextLogo />
        {auth ? <HomeGuest /> : <HomeAuth /> }
      </div>
      
      <picture className={styles.backgroundImage}>
        <Image src={game.backImage} alt="" />
      </picture>
    </article>
  )
}

export default Home;