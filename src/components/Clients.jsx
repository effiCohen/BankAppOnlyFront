import React from 'react'
import { clients } from '../constants'
import styles from '../style'
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4` }>
<div className={`${styles.flexCenter} flex-wrap w-full`}>
{clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5  rounded-full hover:-translate-y-6 transition ease-in transition-duration: 200ms`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
</div>
    </section>
  )
}

export default Clients