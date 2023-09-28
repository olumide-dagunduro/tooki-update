import React from 'react'
import './AboutUsBanner.css'
import Group2 from '../../Assets/group2.jpeg'
import Correct from '../../Assets/correct.jpeg'

const AboutUsBanner = () => {
    return (
        <div className='tooki__aboutusbanner'>
            <div className='tooki__aboutusbanner-container'>
                <h1>About Us</h1>
                <div className='tooki__aboutusbanner-container-details'>
                    <div className='tooki__aboutusbanner-container-details_text img-fluid'>
                        <h2>Our Story</h2>
                        <p>We are your partner in building a vibrant and respectable brand. At our company, we meet the unique needs of each of our clients, no matter what kind of PR requests they have.<br></br><br></br>

                            We take your brand to new heights of relevance and recognition, leveraging the power of compelling storytelling and strategic communication.<br></br><br></br>

                            As a full-service public and media relations agency, we take pride in building long-lasting partnerships with our clients, driving results that drive growth and transformation.<br></br>
                            <br></br>

                            With a team of seasoned PR professionals, creative strategists, and digital experts, we craft tailor-made campaigns that resonate with your target audience and amplify your brand's voice across diverse platforms.
                        </p>
                    </div>
                    <div className='tooki__aboutusbanner-container-details_image'>
                        <img className='img-fluid' src={Correct} alt='group' />
                    </div>
                </div>
                <div className='tooki__aboutusbanner-container-details2'>
                    <p>
                    "At Tooki Media, we understand that each brand is unique, which is why our approach is custom-built to meet your specific goals and aspirations."
                    </p>
                </div>
                <div className='tooki__aboutusbanner-container-details3'>
                    <div className='tooki__aboutusbanner-container-details3_image'>
                        <img className='img-fluid' src={Group2} alt='group' />
                    </div>
                    <div className='tooki__aboutusbanner-container-details3_text img-fluid'>
                        <p>From crafting captivating press releases that captivate journalists and influencers to building authoritative backlinks that enhance your online presence, we leave no stone unturned in elevating your brand to new heights of success.<br></br><br></br>

                            At Tooki Media, we understand that each brand is unique, which is why our approach is custom-built to meet your specific goals and aspirations. Together, we'll define the future of your brand and make an indelible mark on the world.<br></br><br></br>

                            Join us on this exciting journey, and let's make your brand's story an unforgettable tale of success and triumph. <br></br><br></br>
                            - Tooki Media

                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUsBanner