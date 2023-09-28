import React from 'react'
import './ClientSay.css'
const ClientSay = () => {
  return (
    <div className='tooki__clientsay'>
        <div className='tooki__clientsay-container'>
            <h3>Get seen on 200+ sites with millions of visitors</h3>
            <p>Take advantage of our growing network of news sites that often rank high on Google and receive,<br></br> steady traffic. Getting published on these sites will increase your own brand's authority.</p>
            <div className='tooki__clientsay-container_stats '>
                <div className='stats1'>
                    <h2>10000+</h2>
                    <p>quality domains</p>
                </div>
                <div className='stats2'>
                    <h2>1000+</h2>
                    <p>happy customers</p>
                </div>
                <div className='stats3'>
                    <h2>20+</h2>
                    <p>expert employees</p>
                </div>
                <div className='stats4'>
                    <h2>20+</h2>
                    <p>content creators</p>
                </div>
            </div>
            <button className='tooki__clientsay-container_button'>
                See All News Sites
            </button>
        </div>
    </div>
  )
}

export default ClientSay