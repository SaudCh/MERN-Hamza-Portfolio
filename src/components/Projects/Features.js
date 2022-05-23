import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const Features = ({ features }) => {
  return (
    <div className="mt-10 rounded-md border border-gray-500">
      <h3 className="text-primary col-span-2 border-b border-gray-400 p-2 text-center font-bold">
        Features
      </h3>

      <Tab.Group
        as="div"
        className="flex w-full flex-col flex-wrap pb-4 sm:w-auto sm:flex-row sm:flex-nowrap sm:py-4"
      >
        <Tab.List className="mb-4 flex w-full flex-row flex-wrap sm:mb-0 sm:w-1/6 sm:flex-col md:min-w-max">
          {features.map((feature) => (
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex-1 border border-gray-400 px-4 py-1 transition duration-150 sm:w-full sm:rounded-r-xl sm:border-l-0 lg:py-2  
               ${
                 selected
                   ? 'border-gray-600 bg-gray-600 text-white'
                   : 'bg-white text-gray-900 hover:bg-gray-100'
               }
              `}
                >
                  {feature.title}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="flex-1 px-8 text-sm lg:px-16 xl:px-28">
          {features.map((feature) => (
            <Tab.Panel>
              <p>{feature.description}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Features;
