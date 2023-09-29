import React, { useState } from 'react';
import './Faq.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Faq = () => {
  const faqData = [
    {
      title: ' How do I make payment?',
      text: 'You can pay via credit card on the checkout page via Paystack, PayPal or direct bank deposit. Credit card information is verified and secured by flutterwave.',
      id: 1,
    },
    {
      title: 'How is my payment information secured?',
      text: 'For credit cards, we use PayPal & Paystack as the payment processor. PayPal & Paystack are reputable in the payment process industry and is certified to be in the top 3 in Africa and around the world.We not do store your payment information on our servers. All information is sent to PayPal & Paystack, which is then encrypted. More information on PayPal & Paystacks security practices can be found on their website. Third-party information on PayPal & Paystack can be found on their Wikipedia page.',
      id: 2,
    },
    {
      title: 'Can I put the "As Seen On" logos on my website, social media pages or new book / ebook?',
      text: 'Yes! Once you have been published you can put your “As Seen On” badge anywhere you like - on the cover of your ebook, paperback book, social media channels or website. We have had clients even add it on their sponsored Ad content!',
      id: 3,
    },
    {
      title: 'What is the delivery timeline for publishing my article?',
      text: '4 days if you provide us the article and we publish it, or 7 days if you tell us to write the article then publish it. This includes time for revisions if any.',
      id: 4,
    },
    {
      title: 'Do you offer reselling/private labelling as a service?',
      text: 'Yes we do. Please contact us for more details.',
      id: 5,
    },
    {
      title: 'Will my press release get published on the main website of FOX, NBC, etc?',
      text: 'Your content will not be published on the main website (e.g., fox.com), which is reserved for national headline news. However, it will be featured on local affiliates like FOX 28, FOX 43, etc., which are the official sites for respective TV stations. These local sites, akin to local newspapers, are part of the FOX news network and offer valuable exposure in specific cities.',
      id: 6,
    },
    {
      title: ' Are my published press release backlinks follow or nofollow?',
      text: 'Following Googles best practice guidelines, we utilize nofollow backlinks for press releases. This is not to be confused with the DOFOLLOW backlinks we offer on our backlinks buying service. Leading SEO experts concur that nofollow backlinks can positively impact SEO. A quick Google search reveals numerous results supporting this claim, including case studies conducted by experts. Our satisfied customers have reported improved SEO rankings after being featured, as evidenced in our reviews.',
      id: 7,
    },
    {
      title: 'How long will my article stay live on the news sites?',
      text: 'As with any news announcement, your article has a "shelf life" - the news gets "old". The time it stays on a website is determined by each news site, and Brand Featured does not remove your press release at any time unless it violates our terms of service. Some news sites remove them after 2 years, some after 90 days. Some host them indefinitely. The fact that you have been featured will always be true and you can proudly claim that as long as you like.',
      id: 8,
    },
    {
      title: ' How long does it take for my article to appear live online?',
      text: 'Less than 5 days, upon submission or completion of your written article.',
      id: 9,
    },
    {
      title: 'Can I make revisions after my PR has been published?',
      text: 'Unfortunately no, once your artidcle has been released it is in the hands of each news site that has published it.',
      id: 10,
    },
    {
      title: 'Will my published article be a blog article or a press release?',
      text: 'Since we are publishing to our news network, they will be categorized as press releases',
      id: 11,
    },
    {
      title: 'What do you need from me to write my article?',
      text: 'Your website, the topic you want to write an article about, and 2-3 quotes that best describe your business. We"ll do the research to form your article with just that information..',
      id: 12,
    },
    {
      title: 'Will you write the article or do I need to?',
      text: 'It"s your choice: the Basic package is lower priced but you need to write the article that we"ll publish. While the Pro and Unlimited packages have the article professionally written for you.',
      id: 13,
    },
    {
      title: 'Will the article you write about my business be unique?',
      text: 'Yes, our professional writing staff will first research your business, then write a custom article highlighting your business in the best light, with links back to your site.',
      id: 14,
    },
    {
      title: 'Will I get to check the article before it"s published?',
      text: 'Yes, after we write the article we can go through up to 2 rounds of revisions before it"s published for the Pro package, or unlimited revisions for the Unlimited package.',
      id: 15,
    },
    {
      title: 'What topic should my article be about?',
      text: 'It can be just a general announcement of your business, talking about the features and benefits. Or it can be any newsworthy topic, for example about a new product you just launched.',
      id: 16,
    },
    {
      title: 'Can I have images, videos or URLs in my article?',
      text: 'You can include 1 image (optional), which can be your logo or a featured image. These must be uploaded separately to your article.',
      id: 17,
    },
    {
      title: ' How many words should my article be?',
      text: 'If we write it, it will have a 200 word body, a headline, and subheadline. If you want to provide the article, it must be between 200-500 words.',
      id: 18,
    },
    {
      title: 'Will you rewrite my article if I"m not happy with it?',
      text: 'We try to get it right the first time, but if revisions are needed our Pro package includes 2 free revisions and our Unlimited package has unlimited revisions.',
      id: 19,
    }
  ];

  const [data, setData] = useState(faqData);

  const openAnswer = (id) => {
    setData(prevState =>
      prevState.map(faq =>
        faq.id === id ? { ...faq, on: !faq.on } : faq
      )
    );
  };

  return (
    <div className='tooki__faq'>
      <div className='tooki__faq-container'>
        <h1>FAQs</h1>
        {data.map(item => (
          <div className='tooki__faq-container-div' key={item.id}>
            <div className='tooki__faq-container-div_item-faq'>
              <h3 style={{ color: item.on ? 'bisque' : 'black' }}>{item.title}</h3>
              <p className={item.on ? 'tooki__faq-container-div_item-faq-p_active' : 'tooki__faq-container-div_item-faq-p'}>
                {item.text} 
              </p>
            </div>
            <div className='tooki__faq-container-div_item-icon'>
              <MdKeyboardArrowDown onClick={() => openAnswer(item.id)}  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;