import Home from "../app/components/screens/home/Home";
import axios from 'axios'
import { API_URL } from "../app/components/constant";


export default function Homepage(props) {

  return <Home {...props} />

}

export const getStaticProps = async () => {
  const links = await axios.get(`${API_URL}/links`).then(({data}) => data)
  const me = await axios.get(`${API_URL}/me`).then(({data}) => data)
  return {
    props: {
      links, me
    },
    revalidate: 60,
  }

}
