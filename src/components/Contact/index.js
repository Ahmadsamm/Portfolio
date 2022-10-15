import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
  
    useEffect(() => {
        const setTime = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(setTime)
      }, [])
  
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_Alsamman', 'Alsamman_template', form.current, 'V9XF8Aa4l8zvY5jQW')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }
  
    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in Web Developing opportunities - especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-map">
            Ahmad Al Samman
             <br />
            Weißenseer Weg 3 <br />
            Reinbek 21465 <br />
            
            Germany,<br />
            <br />
            <span>Ahmadalsamman.de@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[53.515144, 10.235613]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[53.515144, 10.235613]}>
                <Popup> Ahmad lives here, come over for a cup of coffee : </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
  
  export default Contact