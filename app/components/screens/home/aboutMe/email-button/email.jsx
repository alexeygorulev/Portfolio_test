import styles from './email.module.scss'
import Image from 'next/image'
import { APP_URL } from '../../../../constant';


const Email = () => {
  return <div className={styles.button}>
    <a
      href="mailto:alexeygorulev@gmail.com"
      target="_blank"
      rel="noreferrer"
      title='alexeygorulev@gmail.com'
    >
      <span>
        <Image
          src={`${APP_URL}/icons/email.svg`}
          alt=''
          height={18}
          width={18}
        />
      </span>
      <span>Email</span>
    </a>

  </div>
}

export default Email;
