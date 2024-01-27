import avatar from '../assets/image.jpg'

const styles = {
  border: '2px solid #121212',
  borderRadius: '900px',
  width: '250px',
  height: '250px',
}

export default function Image() {
  const logo = <img src={avatar} alt="" style={styles}/>
  return logo
}
