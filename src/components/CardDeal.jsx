import React from 'react'
import styles, {layout} from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
 <section className={`${layout.section}`}>
<div className={`${layout.sectionInfo}`}>
<h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/> in few easy step</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Veritatis beatae optio ipsa sint laudantium nihil 
   rem sit ducimus odit repellendus, ipsum voluptates?</p>
   <Button styles="mt-10"/>
</div>
<div className={`${layout.sectionImg}`}>
<img src="https://uploads-ssl.webflow.com/615d67c97853134828739d2b/63cd4296d805d5f3c3fd7938_home-benefits_extraction-p-800.png" alt="card" className="w-[100%] h-[100%]" />
</div>
 </section>
  )
}

export default CardDeal