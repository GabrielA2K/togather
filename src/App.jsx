import { useState, useRef } from 'react'
import { Icon } from "@iconify/react";
import { useInView } from 'react-intersection-observer';

import Nav from './components/Nav/Nav';
import ValuesCard from './components/ValuesCard/ValuesCard';
import TextTag from './components/TextTag/TextTag';

import { CoreValues } from './information/CoreValues';

import PeopleHero from './assets/images/community_2.png'
import LetterBlocks from './assets/images/letterblocks.png'
import './App.css'

function App() {


  return (
    <>
      {/* Viewport Background Gradient Blur */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <div className="blob b4"></div>

      {/* Web Content */}
      <Nav />

      {/* Hero Section */}
      <section className='hero'>
        <p className='hero-title'>ToGather</p>
        <p className='hero-subtitle'><span style={{color: "#2294FF"}}>Bring</span> <span style={{color: "#8058F8"}}>People</span> <span style={{color: "#FD5959"}}>Together.</span> <span style={{color: "#FFB81F"}}>Build Something</span> <span style={{color: "#56E07B"}}>Bigger.</span></p>
        <img src={PeopleHero} alt="" srcSet="" className='hero-illustration' />
        <p>
          A non-profit dedicated to empowering communities, your donation helps support programs that heal, empower, and unite.
        </p>
        <br/>
        <button className='hero-primary'>Support Us</button>
        <button className='hero-secondary'>About Us</button>
      </section>


      {/* Mision, Vision, Core Values Section */}
      <section className='purpose'>

        <TextTag 
          text="Our Purpose"
          color="#8058F8" centered={true}
        />

        <p className="title">
          Why We Built ToGather
        </p>

        <p className="f-center">
          Our mission, vision, and values guide everything we do.
        </p>

        <br />
        <br />
        
        <div className="icon-card" style={{'--color': '#2294FF'}}>
          <div className="icon-card-icon">
            <Icon icon="mingcute:target-line" width={24} color='#FFFFFF'/>
          </div>
          <div className="icon-card-text">
            <p className="title">Mission</p>
            <p className='secondary'>To support charities and other community interest organisations, particularly those within faith communities, educational institutions, and local community groups, by delivering a bespoke digital platform that streamlines operations, enhances communication, and fosters meaningful collaboration.</p>
          </div>
        </div>

        <div className="icon-card" style={{'--color': '#FFB81F'}}>
          <div className="icon-card-icon">
            <Icon icon="mingcute:bulb-line" width={24} color='#FFFFFF'/>
          </div>
          <div className="icon-card-text">
            <p className="title">Vision</p>
            <p className='secondary'>To build thriving, connected communities by providing inclusive, secure, and purpose-driven digital engagement platforms that empower faith-based, educational, and local organisations to collaborate, grow, and serve more effectively.</p>
          </div>
        </div>
        <br />


        <TextTag 
          text="Our Purpose"
          color="#2294FF" centered={true}
        />

        <p className="title">Our Core Values</p>
        <img src={LetterBlocks} alt="" srcSet="" className='purpose-illustration' onClick={()=>{
          
        }}/>
        <p className="f-center">Our mission, vision, and values guide everything we do.</p>
        <br />
        <br />

        <div className="scrollable-x no-scrollbar">
          {CoreValues.map((value, key) => {

            
            return (
              <ValuesCard
                id={key}
                title={value.title}
                color={value.color}
                description={value.description}
              />
            )
          })}
          
        </div>
        <div className="values-navigator">
          {CoreValues.map((value, key) => {
            return (
              <p className={'text-block block'+key} style={{'--color': value.color}}>{value.title.charAt(0)}</p>
            )
          })}
          
        </div>



      </section>

    </>
  )
}

export default App
