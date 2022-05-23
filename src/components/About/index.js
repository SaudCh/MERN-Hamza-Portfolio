import Skill from './Skill';

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto my-12 grid scroll-p-5 grid-cols-1 gap-10 py-6 px-8 sm:px-12 lg:grid-cols-2"
    >
      <div className="">
        <h3 className="text-primary col-span-2 text-center text-xl font-bold md:text-left">
          Who am I?
        </h3>
        <p className="mt-6 text-justify text-lg text-gray-700 md:text-left">
          I'm Hamza, a professional MERN Stack Web Developer having 2 years
          experience into designing cross-platform web application using HTML,
          CSS, Bootstrap, Nodejs, ExpressJs, MongoDb, Redux.I can convert your
          idea into a desired Web app. I'll develop your Website from scratch to
          end. Top quality work and Well Organized Neat and Clean Source Code
          Quick Response and timely updates. Good communication skills 100%
          Transparency and customer satisfaction.
        
        </p>
      </div>
      <div>
        <Skill name="HTML/CSS" level={95} />
        <Skill name="JavaScript" level={90} />
        <Skill name="React" level={90} />
        <Skill name="Node/Express" level={85} />
        <Skill name="MongoDB" level={85} />
        <Skill name="MySQL" level={85} />
      </div>
    </section>
  );
};

export default About;
