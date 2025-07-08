
import { Icon } from '@iconify/react';
import './NavItem.css';

export default function NavItem(prop) {
    //change to arrow function
    function scrollToSelector(selector, offset) {
      const element = document.querySelector(selector);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        prop.closeNav()
      }
    }
    return (
        <div className="nav-item" data-active={prop.isActive? "true" : "false"}
        onClick={() => {
          scrollToSelector(prop.scrollToSelector, -100)
          }}>
          <div className="nav-item-icon-container">
            <Icon icon={prop.icon} width={24} className='nav-item-icon' />
          </div>
          <div className="nav-item-text">
            <p>{prop.title}</p>
            <p>{prop.subtitle}</p>
          </div>
        </div>
    )
}