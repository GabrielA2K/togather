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
import News1 from './assets/images/news1-poster.png'
import TopSectionMobile from './assets/images/top-section-mobile.svg'
import BottomSectionMobile from './assets/images/bottom-section-mobile.svg'
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

      <section id='impact' className={'impact'}>

        <TextTag 
          text="Our Impact"
          color="#FFB760" centered={true}
        />

        <p className="title">
          How We Make A Difference
        </p>

        <p className="f-center">
          At To Gather, we empower communities through long-term support made possible by our donors, volunteers, and partners helping them grow, connect, and embrace new opportunities.
        </p>
        <div className="news-container scrollable-x no-scrollbar">
          <div className="card-news" style={{'--color': '#57CE77'}}>
            <div className="news-header">
              <div className="title-container">
                <Icon icon="mingcute:love-line" width={24} color='#FFFFFF' className='title-icon' />
                <p className="title">One Year of A2K: A Journey of Digital Empowerment and Growth</p>
              </div>
              <p className="description">
                We expanded our core team with passionate full-time staff committed to our shared vision.
              </p>
            </div>
            <div className="news-body">
              {/* <div className="news-poster" style={{'backgroundImage': 'url('+News1+')'}}>
              </div> */}
              <img src={'https://a2kgroup.org/images/News/A2K-Group-PH-first-year-anniversary.png'} alt="" />
              <div className="news-content">
                <p className="news-heading">
                  A2K Group’s Journey of Impact:
                </p>
                <p className="news-preview">
                  From a Vision to a Movement: How One Year of Digital Empowerment Sparked Growth, Innovation, and Community Impact
                </p>
                <button className="news-expand">
                  Read more
                  <Icon icon="mingcute:arrow-right-line" width={16} className='expand-icon' />
                </button>
              </div>
              
            </div>
            <p className="news-date">
              October 9, 2024
            </p>
          </div>



          <div className="card-news" style={{'--color': '#FFB760'}}>
            <div className="news-header">
              <div className="title-container">
                <Icon icon="mingcute:celebrate-line" width={24} color='#FFFFFF' className='title-icon' />
                <p className="title">Celebrating Growth and New Beginnings</p>
              </div>
              <p className="description">
              A heartfelt celebration for our OJT graduates from Holy Cross College and Don Honorio Ventura State University as they embark on their next chapter.
              </p>
            </div>
            <div className="news-body">
              {/* <div className="news-poster" style={{'backgroundImage': 'url('+News1+')'}}>
              </div> */}
              <img src={'https://a2kgroup.org/images/News/OJT%20Graduates.jpg'} alt="" />
              <div className="news-content">
                <p className="news-heading">
                  Honouring Our OJT Graduates
                </p>
                <p className="news-preview">
                  Today, we celebrated the OJT graduates from Holy Cross College and DHVSU, despite the rainy weather, marking the start of their promising careers.
                </p>
                <button className="news-expand">
                  Read more
                  <Icon icon="mingcute:arrow-right-line" width={16} className='expand-icon' />
                </button>
              </div>
              
            </div>
            <p className="news-date">
              August 2, 2024
            </p>
          </div>
        </div>
          
        
      </section>





      <section id='donation' className={'impact'}>

        <TextTag 
          text="Support Us"
          color="#40A3FF" centered={true}
        />

        <p className="title">
          Donations and Sponsorships
        </p>

        <p className="f-center">
          Support our platform through various donation and sponsorship opportunities
        </p>
        <div className="donation-tabs scrollable-x no-scrollbar">
          <div className="donation-tab active">Community Fund</div>
          <div className="donation-tab">Feature Sponsorship</div>
          <div className="donation-tab">Membership Packages</div>
          <div className="donation-tab">Donor & Sponsor Program</div>
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        
      </section>

    </>
  )
}

export default App
