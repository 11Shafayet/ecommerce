import {
  BlogSection,
  Header,
  PopularProdcuts,
  SubscribeSection,
  Testimonial,
  WhyChooseUs,
} from '../components';

const Home = () => {
  return (
    <>
      <Header />
      <PopularProdcuts />
      <SubscribeSection />
      <WhyChooseUs />
      <Testimonial />
      <BlogSection />
    </>
  );
};

export default Home;
