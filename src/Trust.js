
import AppHeaderBar from './component/AppHeaderBar';
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
      </section>
      <section className='container'>
        <Testimonial />
      </section>
      <section className='container'>
        <Issues />
      </section>
    </div>
  );
}

export default Trust;
