import { FC } from 'react';
import styles from '@/styles/modules/guest.module.scss';
import AuthCard from './Auth/AuthCard';
import RegisterCard from './Auth/RegisterCard';

const HomeGuest: FC = () => {

  return (
    <article className={styles.guest}>
      <AuthCard />
      <RegisterCard />
    </article>
  )
}

export default HomeGuest;