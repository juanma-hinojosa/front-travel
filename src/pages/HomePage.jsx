import TotalEntradas from "../Components/Entradas/TotalEntradas"
import Chanchito from '/images/pig.png'

function HomePage() {
  return (
    <section
      style={{
        textAlign: "center"
      }}
    >
      <h2 className="playwrite-at-title" >Nosso Date ♡ <br></br> Rafaela e Juan</h2>
      <figcaption style={{ width: '150px', margin: 'auto' }} >
        <img style={{ width: '100%' }} src={Chanchito} alt="chanchito" />
      </figcaption>
      <TotalEntradas />

      <figcaption style={{ width: '100%', margin: '40px 0' }} >
        <img style={{ width: '100%' }} src='https://i.pinimg.com/originals/b4/38/32/b438329e9282dc29d4992803d1774947.gif' alt="Hello Kitty" />
      </figcaption>
    </section>
  )
}

export default HomePage