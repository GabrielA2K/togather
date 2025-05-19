import { useState } from "react";
import { Icon } from "@iconify/react";
import NavItem from "../NavItem/NavItem";

import './Nav.css';

export default function Nav(prop) {
    const [navExpanded, setNavExpanded] = useState(false)
    const collapseNav = () => setNavExpanded(false)

    return (
        <nav className="navbar" data-enabled={navExpanded? "true" : "false"}>
          <div className="nav-contents">
            {/* <p className='nav-title'>To<span>Gather</span></p> */}
            <div className="nav-wordmark"></div>
            <div className="nav-menu" onClick={()=>{
              setNavExpanded(!navExpanded)
            }}>
              <Icon icon="mingcute:dots-vertical-fill" width={32} color='#282828' className='nav-open-icon'/>
              <Icon icon="mingcute:close-fill" width={24} color='#282828' className='nav-close-icon'/>
            </div>
          </div>

          <div className="nav-items">
            <NavItem 
              title="Home"
              subtitle="Back to top"
              icon={"mingcute:home-4-"+(prop.section === 'hero' ? 'fill' : 'line')}
              isActive={prop.section === 'hero' ? true : false}
              scrollToSelector="section#hero"
              closeNav={collapseNav}
            />
            <NavItem 
              // title="Why we built ToGather"
              title="About Us"
              subtitle="Our vision, mision, & core values"
              icon={"mingcute:target-"+(prop.section === 'purpose' ? 'fill' : 'line')}
              isActive={prop.section === 'purpose' ? true : false}
              scrollToSelector="section#purpose"
              closeNav={collapseNav}
            />
            <NavItem 
              title="Our Activities"
              subtitle="Explore our activities"
              icon={"mingcute:compass-"+(prop.section === 'activities' ? 'fill' : 'line')}
              isActive={prop.section === 'activities' ? true : false}
              scrollToSelector="section#activities"
              closeNav={collapseNav}
            />
            {/* <NavItem 
              title="Book a Demo"
              subtitle="Learn more about the features we offer"
              icon={"mingcute:mail-open-"+(prop.section === 'demo-card' ? 'fill' : 'line')}
              isActive={prop.section === 'demo-card' ? true : false}
              scrollToSelector="#description42"
              closeNav={collapseNav}
            /> */}
            {/* <NavItem 
              title="Our Impact"
              subtitle="Learn how we can make a difference"
              icon={"mingcute:hand-heart-"+(prop.section === 'impact' ? 'fill' : 'line')}
              isActive={prop.section === 'impact' ? true : false}
              scrollToSelector="section#impact"
              closeNav={collapseNav}
            /> */}
            <NavItem 
              title="Support Us"
              subtitle="Support our mission"
              icon={"mingcute:heart-hand-"+(prop.section === 'donation' ? 'fill' : 'line')}
              isActive={prop.section === 'donation' ? true : false}
              scrollToSelector="section#donation"
              closeNav={collapseNav}
            />
          </div>
          <div className="extra-actions">
            <button onClick={()=>{
              document.querySelector('.modal-overlay').classList.remove('hidden')
            }}>Book a Demo</button>
          </div>
        </nav>
    )

}