import React from 'react';
import Banner from '../../components/banner/banner.jsx';
import Feature from '../../components/feature/feature.jsx';
import iconChat from "../../assets/img/icon-chat.png";
import iconMoney from "../../assets/img/icon-money.png";
import iconSecurity from "../../assets/img/icon-security.png";
import "./home.css"


const Home = () => {
  return (
    <div>
      
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            imageSrc={iconChat}
            altText="Chat icon"
          />

          <Feature
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be!"
            imageSrc={iconMoney}
            altText="Money icon"
          />

          <Feature
            title="Security you can trust"
            content="We use top of the line encryption to make sure your data and money is always safe."
            imageSrc={iconSecurity}
            altText="Security icon"
          />
        </section>
      </main>
     
    </div>
  );
};

export default Home;