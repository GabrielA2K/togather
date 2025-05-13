import { useState, useRef, useEffect } from 'react'
import { Icon } from "@iconify/react";
import { useInView } from 'react-intersection-observer';

import Nav from './components/Nav/Nav';
import ValuesCard from './components/ValuesCard/ValuesCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import TextTag from './components/TextTag/TextTag';

import { CoreValues } from './information/CoreValues';
import { OurActivities } from './information/OurActivities';

import PeopleHero from './assets/images/community_2.png'
import LetterBlocks from './assets/images/letterblocks.png'
import './App.css'

function App() {

  const [curSection, setSection] = useState('');
  const [curValue, setValue] = useState(0);

  const [heroRef, heroInView] = useInView({threshold: 0.3});
  const [purposeRef, purposeInView] = useInView({threshold: 0.3});
  const [activitiesRef, activitiesInView] = useInView({threshold: 0.3});

  const [missionRef, missionInView] = useInView({threshold: 0.2});
  const [visionRef, visionInView] = useInView({threshold: 0.2});
  const [demoRef, demoInView] = useInView({threshold: 0.2});
  const [gatherRef, gatherInView] = useInView({threshold: 1});


  useEffect(() => {
    setSection((prev) => {
      switch(true) {
        case heroInView:
          return 'hero';
        case purposeInView:
          return 'purpose';
        case activitiesInView:
          return 'activities';
        default:
          return prev;
      }
    })
  }, 
  [
    heroInView,
    purposeInView, 
    activitiesInView
  ]);


  const setCurrentValue = (value) => {
    setValue(value)
  }

  const valuesCardMap = 
    CoreValues.map((value, index) => {
      return (
        <ValuesCard
          key={index}
          id={index}
          title={value.title}
          color={value.color}
          description={value.description}
          setCurrentValue={setCurrentValue}
        />
      )
    })

  const ourActivitiesMap = 
    OurActivities.map((act, index) => {
      return (
        <ActivityCard
          key={index}
          id={index}
          title={act.title}
          description={act.description}
          color={act.color}
          icon={act.icon}
          subcontent={act.subcontent}
        />
      )
    })

  const valuesBlockScrollMap = 
    CoreValues.map((value, key) => {
      return (
        <p key={key} className={'text-block block'+key+" "+(curValue === key ? ' focused' : '')} style={{'--color': value.color}}
          onClick={()=>{
            document.querySelector('.values-card.block'+key).scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            })
          }}
        >{value.title.charAt(0)}</p>
      )
    })

  return (
    <>
      {/* Viewport Background Gradient Blur */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <div className="blob b4"></div>

      {/* Web Content */}
      <Nav section={curSection}/>

      {/* Hero Section */}
      <section id='hero' ref={heroRef} className={'hero'+(heroInView ? ' inview' : '')}>
        <p className='hero-title'>ToGather</p>
        <p className='hero-subtitle'><span style={{color: "#2294FF"}}>Bring</span> <span style={{color: "#8058F8"}}>People</span> <span style={{color: "#FD5959"}}>Together.</span> <span style={{color: "#FFB81F"}}>Build Something</span> <span style={{color: "#56E07B"}}>Bigger.</span></p>
        <img src={PeopleHero} alt="Cartoon image of group of people." srcSet="" className='hero-illustration' />
        <p>
          A non-profit dedicated to empowering communities, your donation helps support programs that heal, empower, and unite.
        </p>
        <br/>
        <button className='hero-primary'>Support Us</button>
        <button className='hero-secondary'>About Us</button>
      </section>


      {/* Mision, Vision, Core Values Section */}
      <section id='purpose' ref={purposeRef} className={'purpose'+(purposeInView ? ' inview' : '')}>

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
        
        <div ref={missionRef} className={"icon-card mission "+(missionInView?' visible':'')} style={{'--color': '#2294FF'}}>
          <div className="icon-card-icon">
            <Icon icon="mingcute:target-line" width={24} color='#FFFFFF'/>
          </div>
          <div className="icon-card-text">
            <p className="title">Mission</p>
            <p className='secondary'>To support charities and other community interest organisations, particularly those within faith communities, educational institutions, and local community groups, by delivering a bespoke digital platform that streamlines operations, enhances communication, and fosters meaningful collaboration.</p>
          </div>
        </div>

        <div ref={visionRef} className={"icon-card vision "+(visionInView?' visible':'')} style={{'--color': '#FFB81F'}}>
          <div className="icon-card-icon">
            <Icon icon="mingcute:bulb-line" width={24} color='#FFFFFF'/>
          </div>
          <div className="icon-card-text">
            <p className="title">Vision</p>
            <p className='secondary'>To build thriving, connected communities by providing inclusive, secure, and purpose-driven digital engagement platforms that empower faith-based, educational, and local organisations to collaborate, grow, and serve more effectively.</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <TextTag 
          text="Our Principles"
          color="#2294FF" centered={true}
        />

        <p className="title">Our Core Values</p>
        <div ref={gatherRef} className={"gather-container"+(gatherInView?' visible':'')}>
        {
          CoreValues.map((value, key) => {
            return (
              <p key={key} className={'gather-blocks block'+key} style={{'--color': value.color, '--delay': key*100+'ms'}}
                onClick={()=>{
                  document.querySelector('.values-card.block'+key).scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest'
                  })
                }}
              >{value.title.charAt(0)}</p>
            )
          })
        }
        </div>
        
        {/* <img src={LetterBlocks} alt="" srcSet="" className='purpose-illustration' onClick={()=>{
          
        }}/> */}
        <p className="f-center">Our mission, vision, and values guide everything we do.</p>
        <br />
        <br />

        <div className="scrollable-x no-scrollbar">
          {valuesCardMap}
          
        </div>
        <div className="values-navigator">
          {valuesBlockScrollMap}
        </div>



      </section>
      <br />
      <br />




      <section id='activities' ref={activitiesRef} className={'activities'+(activitiesInView ? ' inview' : '')}>

        <TextTag 
          text="What We Do"
          color="#FF2C68" centered={true}
        />

        <p className="title">
          Our Activities
        </p>

        <p className="f-center">
          We help communities transition to digital-first solutions that strengthen connection, improve communication, and support better organization.
        </p>
        {/* <img src={PeopleHero} alt="" srcSet="" className='hero-illustration' /> */}
        <br />
        <br />
        {ourActivitiesMap}
        <br />
        <div ref={demoRef} className={"demo-card from-left"+(demoInView?' visible':'')} style={{'--color': '#40A3FF'}}>
          <Icon icon={'mingcute:calendar-time-add-line'} width={56} color='#40A3FF' />
          <p className="demo-title">Book a Demo With Us</p>
          <p className="demo-subtitle">Schedule a personalised demonstration of our platform and services.</p>
          <button className='demo-book'>Book Your Demo</button>
        </div>
        
      </section>

    </>
  )
}

export default App
