import { useState } from 'react';
import SubscribeImage from '../../assets/subscribe.webp';
import Button from '../common/Button';

const SubscribeSection = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (phone.length === 11) {
      //
      console.log(phone);
    } else {
      setError(true);
    }
  };

  return (
    <section className="my-12 md:my-20 bg-secondary-color p-0 md:max-h-[555px] overflow-hidden text-white">
      <div className="flex flex-col md:flex-row gap-4 md:gap-11 h-full">
        <div className="w-full md:w-1/2">
          <img
            src={SubscribeImage}
            alt=""
            className="h-[300px] md:h-[555px] w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12">
          <h4 className="text-3xl font-medium mb-4">Subscirbe</h4>
          <p className="font-secondary text-lg lg:pr-4 xl:pr-52">
            Subscibe with your phone number to get the latest news and sales
            about our products.
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="max-w-[500px] mt-12"
          >
            <div>
              <input
                type="tel"
                name="phone"
                className="bg-transparent border-0 border-b w-full leading-10 duration-500"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Button
              classname="w-full mt-6 bg-white !text-black"
              text="Subscribe Now"
              type="submit"
            />
            {error && (
              <p className="font-secondary text-red-500 mt-4">
                Please Enter a valid bangladeshi 11 digit phone number!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
