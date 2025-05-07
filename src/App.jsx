import { useState, useRef, useEffect } from 'react'
import { Icon } from "@iconify/react";
import { useInView } from 'react-intersection-observer';

import Nav from './components/Nav/Nav';
import ValuesCard from './components/ValuesCard/ValuesCard';
import ActivityCard from './components/ActivityCard/ActivityCard';
import TextTag from './components/TextTag/TextTag';

import { CoreValues } from './information/CoreValues';

import PeopleHero from './assets/images/community_2.png'
import LetterBlocks from './assets/images/letterblocks.png'
import './App.css'

function App() {

  const [curSection, setSection] = useState('');
  const [curValue, setValue] = useState(0);

  const [heroRef, heroInView] = useInView({threshold: 0.3});
  const [purposeRef, purposeInView] = useInView({threshold: 0.3});
  const [activitiesRef, activitiesInView] = useInView({threshold: 0.3});

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
    CoreValues.map((value, key) => {
      return (
        <ValuesCard
          id={key}
          title={value.title}
          color={value.color}
          description={value.description}
          setCurrentValue={setCurrentValue}
        />
      )
    })

  const valuesBlockScrollMap = 
    CoreValues.map((value, key) => {
      return (
        <p className={'text-block block'+key+" "+(curValue === key ? ' focused' : '')} style={{'--color': value.color}}
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
          {valuesCardMap}
          
        </div>
        <div className="values-navigator">
          {valuesBlockScrollMap}
        </div>



      </section>




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
        <ActivityCard
          color="#40A3FF"
          icon='mingcute:mortarboard-fill'
          title='Empowering Schools through Digitalization'
          description='We empower schools through digitalization, connecting the organization seamlessly.'
          subcontent={[
            {
              icon: 'mingcute:group-2-line',
              text: 'Subgroup creation for students, events, or classes'
            },
            {
              icon: 'mingcute:comment-2-line',
              text: 'Seamless parent-teacher communication'
            },
            {
              icon: 'mingcute:camcorder-line',
              text: 'Video conferencing features for meetings'
            }
          ]}
        />

        <ActivityCard
          color="#A186F3"
          icon='mingcute:badge-fill'
          title='Modernizing Local Institutions'
          description='We support local institutions in embracing digital tools to simplify everyday processes.'
          subcontent={[
            {
              icon: 'mingcute:badge-line',
              text: 'Digital student IDs'
            },
            {
              icon: 'mingcute:calendar-line',
              text: 'Personalized event calendars'
            },
            {
              icon: 'mingcute:notification-line',
              text: 'Class schedules and updates'
            }
          ]}
        />
        
        <ActivityCard
          color="#66E086"
          icon='mingcute:group-3-fill'
          title='Supporting Societies & Organizations'
          description='We help groups and societies manage events and prioritize goals.'
          subcontent={[
            {
              icon: 'mingcute:calendar-line',
              text: 'Digital event creation and management'
            },
            {
              icon: 'mingcute:group-2-line',
              text: 'Collaborative calendar planning'
            },
            {
              icon: 'mingcute:message-2-line',
              text: 'Group messaging features'
            }
          ]}
        />

        <ActivityCard
          color="#FD5959"
          icon='mingcute:plugin-2-fill'
          title='Connecting Local Communities'
          description='We enable municipalities to stay connected and informed.'
          subcontent={[
            {
              icon: 'mingcute:horn-line',
              text: 'Centralized announcements'
            },
            {
              icon: 'mingcute:idcard-line',
              text: 'Digital ID issuance'
            },
            {
              icon: 'mingcute:heart-hand-line',
              text: 'Requesting assistance and engaging residents'
            }
          ]}
        />

        <ActivityCard
          color="#FFB760"
          icon='mingcute:plugin-2-fill'
          title='Custom Solutions for Faith Communities'
          description='We work with faith-based groups to create digital platforms that support outreach and organization.'
          subcontent={[
            {
              icon: 'mingcute:calendar-line',
              text: 'Event scheduling'
            },
            {
              icon: 'mingcute:horn-line',
              text: 'Announcements and livestreams'
            },
            {
              icon: 'mingcute:heart-hand-line',
              text: 'Community support features'
            }
          ]}
        />
        
      </section>

    </>
  )
}

export default App
