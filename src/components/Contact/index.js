import LocationIcon from '../icons/LocationIcon';
import MailIcon from '../icons/MailIcon';
import UserIcon from '../icons/UserIcon';
import Form from './Form';

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto my-12 grid grid-cols-1 gap-8 py-6 px-8 sm:px-12 lg:grid-cols-2"
    >
      <h3 className="text-primary order-1 text-center  text-xl font-bold lg:col-span-2">
        Get in Touch
      </h3>
      <div className="order-3 lg:order-2">
        <p className="text-justify text-lg text-gray-700 md:text-left">
          I believe that a happy customer is a regular customer and that is why
          I always give you the best possible service for your website
          requirements.
        </p>

        <div className="mt-6 space-y-3 px-6">
          <div className="flex items-center gap-3">
            <UserIcon className="text-primary h-7 w-7" />
            <p className="text-lg text-gray-700">Hamza Shahbaz</p>
          </div>
          <div className="flex items-center gap-3">
            <LocationIcon className="text-primary h-7 w-7" />
            <p className="text-lg text-gray-700">Lahore, Pakistan</p>
          </div>
          <div className="flex items-center gap-3">
            <MailIcon className="text-primary h-7 w-7" />
            <p className="text-lg text-gray-700">hamzashahbaz506@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="order-2 lg:order-3">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
