import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SingleItem from '../SingleItem';
import Loader from '../Loader';

const PopularProducts = () => {
  const axiosPublic = useAxiosPublic();
  const { language } = useAuth();

  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosPublic
        .get(`/api/v1/allproducts`)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  return (
    <section className="py-20 md:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="font-secondary text-lg capitalize">
            {language === 'en' ? 'Popular Products' : 'আমাদের জনপ্রিয় প্রডাক্ট'}
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold uppercase accent-color">
            {language === 'en' ? 'Trending Now' : 'চলমান প্রডাক্ট'}
          </h2>
        </div>

        {/* products */}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {data.slice(0, 4).map((product) => (
              <SingleItem key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularProducts;
