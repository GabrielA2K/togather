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
          <p className='nav-title'>To<span>Gather</span></p>
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
            icon="mingcute:home-4-fill"
            isActive={prop.section === 'hero' ? true : false}
            scrollToSelector="section#hero"
            closeNav={collapseNav}
          />
          <NavItem 
            title="Why we built ToGather"
            subtitle="Our vision, mision, & core values"
            icon="mingcute:heart-hand-fill"
            isActive={prop.section === 'purpose' ? true : false}
            scrollToSelector="section#purpose"
            closeNav={collapseNav}
          />
          <NavItem 
            title="Our Activities"
            subtitle="Explore our activities"
            icon="mingcute:compass-fill"
            isActive={prop.section === 'activities' ? true : false}
            scrollToSelector="section#activities"
            closeNav={collapseNav}
          />
          <NavItem 
            title="How we make a Difference"
            subtitle="Learn how we can make a difference"
            icon="mingcute:hand-heart-fill"
            isActive={false}
          />
          <NavItem 
            title="Request a Demo"
            subtitle="Learn more about the features we offer"
            icon="mingcute:mail-open-fill"
            isActive={false}
          />
          <NavItem 
            title="Members & Partners"
            subtitle="Meet our community and partners"
            icon="mingcute:group-fill"
            isActive={false}
          />
        </div>
      </nav>
    )

}