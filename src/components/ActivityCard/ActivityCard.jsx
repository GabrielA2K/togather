import { Icon } from '@iconify/react/dist/iconify.js';
import { useInView } from 'react-intersection-observer';

import './ActivityCard.css';

export default function ActivityCard(prop) {
  

    const [valueRef, valueInView] = useInView({threshold: 0.2});

    const subcontentMap =
        prop.subcontent.map((item, index) => {
            return (
                <div className="activity-subcontent-container" key={index}>
                    <div className="icon-container">
                        <Icon icon={item.icon} width={18} color='var(--color)' />
                    </div>
                    <p id={'description'+prop.id+index}>{item.text}</p>
                </div>
            )
        })




    return (
        <div ref={valueRef} key={prop.id} className={"activities-card from-left"+(valueInView?' visible':'')} style={{'--color': prop.color}}>
          <header>
            <div className="activity-title-container">
              <div className="icon-container">
                <Icon icon={prop.icon} width={24} color='#ffffff' />
              </div>
              <p className="activity-title">{prop.title}</p>
            </div>
            <p className="activity-description">{prop.description}</p>
          </header>

          <main>
            {subcontentMap}
          </main>
        </div>
    )
}