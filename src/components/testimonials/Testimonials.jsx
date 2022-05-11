import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/maggie.png'
import AVTR2 from '../../assets/rajwinder.png'
import AVTR3 from '../../assets/paulo.png'
import AVTR4 from '../../assets/sergio.png'

// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Maggie Demarch',
    review: 'Glauber is always there for us when we have a technical question or a problem in our system. Whenever' + 
    'I get a question that involve computers and acronyms I have to call Glauber! He is reliable, trustworthy and he' + 
    ' nice guy to be around! '
  },
  {
    avatar: AVTR2,
    name: 'Rajwinder Kohar',
    review: 'I rarely come across real talents who stand out like Glauber. I had the pleasure of working and studying ' +
    'with Glauber for one year at Louis Riel Arts and Technology Center, collaborating on several project teams. Glauber' + 
    ' has ability to handle multiple projects . No matter how tense a day is , Glauber meet with everyone with a smile. ' + 
    'I m very happy that he followed his passion continue and got successful . As a team member or a leader in my all school' + 
    ' projects , Glauber earns my highest recommendation.'
  },  
  {
    avatar: AVTR3,
    name: 'Paulo Oliveira',
    review: 'Glauber studied with me at the Pathway to the Brigham Young University. He is very smart and really knows' + 
    ' how to work in groups. We both have a bachelor in Accounting. He is determined to achieve his goals and is a very' + 
    ' honest person. '
  },
  {
    avatar: AVTR4,
    name: 'Sergio Diaz',
    review: 'Glauber is a very talented and creative professional capable of succeeding in any project or challenge.'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>      
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination. Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction:false,
      }}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (              
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>          
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
          )
          })
        }
      </Swiper> 

    </section>
  )
}

export default Testimonials