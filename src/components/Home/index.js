import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'm', 'm', 'a', 'n', ',']
    const jobArray = ['W','e','b',' ','D','e','v','e','l', 'o','p','e','r', '.']

    useEffect(() => {
        
      const setTime =  setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000) 

        return () => clearTimeout(setTime)
    }, [])

    return (
        <>
          <div className="container home-page">
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}> </span>
                <span className={`${letterClass} _16`}>A</span>
                <span className={`${letterClass} _17`}>l</span>
                <img
                  src={LogoTitle}
                  alt="JavaScript Developer Name, Web Developer Name"
                />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={22}
                />
              </h1>
              <h2>Front and Back End Developer / JavaScript Expert / Servicetechnicker</h2>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
            <Logo />
          </div>
    
          <Loader type="pacman" />
        </>
      )
    }
    

export default Home
