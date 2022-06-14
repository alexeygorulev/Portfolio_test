import Circles from '../../UI/circle/Circles';
import MetaTitle from '../../UI/MetaTitle';
import AboutMe from './aboutMe/aboutMe';
import Grid from './grid/Grid';
import styles from './Home.module.scss'
import RecentVidios from './recent-vidios/RecentVidios';



const Home = ({links, me}) => {
  return <section className={styles.section}>
    <MetaTitle title='все полезные ссылки тут' />
    <div className={styles.container}>
      <AboutMe me={me} />
      <RecentVidios />
      <Grid links={links} />
    </div>
    <Circles />
  </section>
}




export default Home;
