import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Goth Tribute Store</h1>
        <hr />
        <p className="lead text-center">
        Goth is a music-based subculture that began in the United Kingdom during the early 1980s. It was developed by fans of gothic rock, an offshoot of the post-punk music genre. Post-punk artists who presaged the gothic rock genre and helped develop and shape the subculture include Siouxsie and the Banshees, Bauhaus, the Cure, and Joy Division.

The goth subculture has survived much longer than others of the same era, and has continued to diversify and spread throughout the world. Its imagery and cultural proclivities indicate influences from 19th-century Gothic fiction and from horror films. The scene is centered on music festivals, nightclubs, and organized meetings, especially in Western Europe. The subculture has associated tastes in music, aesthetics, and fashion.

The music preferred by goths includes a number of styles such as gothic rock, death rock, cold wave, dark wave, and ethereal wave.[1] The Gothic fashion style draws influences from punk, new wave, New Romantic fashion[2] and the dressing styles of earlier periods such as the Victorian, Edwardian, and Belle Époque eras. The style most often includes dark (usually solid black) attire, dark makeup, and black hair. 
        </p>        
      </div>
      <Footer />
    </>
  )
}

export default AboutPage