import React from 'react'
import hero from '../../assets/hero.jpg'
export const Home = () => {
  return (
    <div className='home'>
      <h1 className='heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat sit molestiae iusto facilis laudantium rem! Inventore perspiciatis unde placeat pariatur dignissimos ad minima autem accusantium, itaque veritatis, expedita quae?</h1>
      <div className='hero-section'>
        <img src={hero} alt="hero-image" className='hero-image'/>
      </div>
      <div className='para'>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
      </div>
    </div>
  )
}
