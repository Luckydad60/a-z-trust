
import AppHeaderBar from './component/AppHeaderBar';
import Cards from './component/Cards';
import Hero from './component/Hero';
import Issues from './component/Issues';
import Testimonial from './component/Testimonial';
import './Trust.css';

function Trust() {
  
  return (
    <div className='trust'>
        <AppHeaderBar />
      <section className='container'>
        <Hero />
        <Testimonial />
      </section>
      <section className='container'>
        <Issues />
      </section>
      <section className='container'>
        <h2 style={{ textAlign:"center", fontSize: "34px"}}>Stay private and secure</h2>
        <p style={{ textAlign:"center", fontSize: "20px", padding: "20px 40px"}}>Rest easy knowing that our privacy and security measures keep you in control of your data and digital
         assets, while also keeping them safe.
         </p>
        <Cards />
      </section>
      <footer>
        <p>&copy; 2025 Trust wallet. All Rights Reserved.</p>
    </footer>
    </div>
  );
}

export default Trust;
