import { useOutside } from '../../../../hooks/useOutside'
import styles from './description.module.scss'
import cn from 'classnames'
import parser from 'html-react-parser'

const DescriptionButton = ({ description }) => {
  const { isShow, setIsShow, ref } = useOutside(false)

  return (
    <div className={styles.parent} ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={cn({
          [styles.active]: isShow
        })}
      >
        <span>моя история</span>
      </button>
      {isShow && <article>{parser(description)}</article>}
    </div>
  )
}

export default DescriptionButton
