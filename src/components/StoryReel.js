import React from 'react';
import './StoryReel.css';
import Story from './Story';
import Image1 from '../image1.jpg';
import Image2 from '../image2.jpg';
import Image3 from '../image3.jpg';
import Image4 from '../image4.jpg';
import Image5 from '../image5.jpeg';
import Image6 from '../image6.jpg';
import Image7 from '../image7.jpg';
import Image8 from '../image8.jpg';
import Image9 from '../image9.jpg';
import Image10 from '../image10.jpg';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image={Image6} profileSrc={Image5} title='Pramurta Sinha' />
            <Story image={Image10} profileSrc={Image4} title='Elon Musk' />
            <Story image={Image8} profileSrc={Image1} title='Jeff Bezos' />
            <Story image={Image7} profileSrc={Image2} title='Bill Gates' />
            <Story image={Image9} profileSrc={Image3} title='Steve Jobs' />
        </div>
    )
}

export default StoryReel;
