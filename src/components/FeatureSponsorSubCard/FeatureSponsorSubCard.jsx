
import './FeatureSponsorSubCard.css';

import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'react-intersection-observer';

export default function FeatureSponsorSubCard(prop) {
    
    return (
        <div className="feature-sponsor donate-subcard">
          <div className="donate-subcard-title">
            <div className="icon-wrapper">
              <Icon icon={prop.icon} width={24} className='title-icon' />
            </div>
            <p className="title">{prop.title}</p>
          </div>
          <p className="body">
            {prop.body}
          </p>
          <button className="feature-sponsor">
            Sponsor this Feature
          </button>
        </div>
    )
}