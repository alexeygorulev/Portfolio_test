import Image from 'next/image';
import { APP_URL } from '../../../constant';
import DescriptionButton from './description-button/descriptionButton';
import Email from './email-button/email';
import styles from './AboutMe.module.scss'

const AboutMe = ({ me }) => {
  return (
    <div className={styles.me}>
      <div className={styles.image_wrapper}>
        <Image
          src={`${APP_URL}${me.avatar}`}
          width={190}
          height={190}
          className={styles.image}
          alt={me.siteName}
          quality={20}
        />

      </div>
      <div className={styles.heading}>
        <span>Alexey</span>
      </div>
      <Email />
      <DescriptionButton description={me.description} />
    </div>
  );
}

export default AboutMe;
