
import './CommunityFundSubCard.css';

import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'react-intersection-observer';

export default function CommunityFundSubCard(prop) {
    
    return (
        <div className="community-fund donate-subcard">
          <div className="donate-subcard-title">
            <div className="icon-wrapper">
              <Icon icon={prop.icon} width={24} className='title-icon' />
            </div>
            <p className="title">{prop.title}</p>
          </div>
          <p className="body">
            {prop.body}
          </p>
        </div>
    )
}