import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import serviceOne from '../../assets/icon-4.webp';
import serviceTwo from '../../assets/icon-1.webp';
import serviceThree from '../../assets/icon-2.webp';
import serviceFour from '../../assets/icon-3.webp';

const WhyChooseUs = () => {
  const { language } = useAuth();

  const serviceData = [
    {
      img: serviceOne,
      title: 'BIG DISCOUNTS',
      desc: 'Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis Orci Viverra, Cursus Justo.',
    },
    {
      img: serviceTwo,
      title: 'FAST SHIPPING',
      desc: 'Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis Orci Viverra, Cursus Justo.',
    },
    {
      img: serviceThree,
      title: 'SECURE PAYMENTS',
      desc: 'Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis Orci Viverra, Cursus Justo.',
    },
    {
      img: serviceFour,
      title: 'ORDER TRACKING',
      desc: 'Integer Euismod Blandit Nunc Sit Amet Sollicitudin. Fusce Quis Orci Viverra, Cursus Justo.',
    },
  ];

  const Card = ({ service }) => {
    const { img, title, desc } = service;
    return (
      <div className="flex flex-col gap-y-4 md:px-4">
        <img src={img} alt={title} className="max-w-[80px]" />
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="text-base font-secondary opacity-75">{desc}</p>
      </div>
    );
  };

  Card.propTypes = {
    service: PropTypes.object,
  };

  return (
    <section className="py-20 md:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="font-secondary text-lg capitalize">
            {language === 'en' ? 'Best In Business' : 'সবার সেরা'}
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold uppercase accent-color">
            {language === 'en' ? 'WHY CHOOSE US' : 'আমাদের সেবাসমূহ'}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-8">
          {serviceData.map((service, i) => (
            <Card service={service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
