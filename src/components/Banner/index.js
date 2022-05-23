import { forwardRef } from 'react';
import hamzaImg from '../../assets/images/hamza.png';
import ArrowDownIcon from '../icons/ArrowDownIcon';

const Banner = forwardRef(({}, ref) => {
  return (
    <section
      ref={ref}
      className="flex min-h-[75vh] bg-gradient-to-r from-[#404040] to-[#010101]"
    >
      <div className="container mx-auto mt-10 flex flex-col items-center justify-evenly gap-10 px-6 md:flex-row md:gap-0">
        <div className="flex items-end self-center md:self-end ">
          <div className="mt-10 h-60 w-60 overflow-hidden rounded-full border-4 border-gray-200/70 md:mt-0 md:h-auto md:w-auto md:overscroll-none md:rounded-none md:border-0 ">
            <img
              src={hamzaImg}
              alt="Hamza"
              className="h-full w-full object-none object-[46%,24%]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold text-gray-50">
            My name is <span className="text-primary md:block">Hamza</span>
            <span className="mt-2 block md:mt-0">
              and I am a{' '}
              <span className="text-primary whitespace-nowrap">
                Web developer
              </span>
            </span>
          </h1>

          <a
            href="#contact"
            className="bg-secondary my-6 flex items-center justify-center gap-3 rounded-full px-14 py-3 text-center text-xl font-bold text-gray-50 "
          >
            Hire me <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  );
});

export default Banner;
