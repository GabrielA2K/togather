
import { Icon } from '@iconify/react';
import './NavItem.css';

export default function NavItem(prop) {
    
    return (
        <div className="nav-item" data-active={prop.isActive? "true" : "false"}>
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