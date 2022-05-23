import ProgressBar from './ProgressBar';

const Skill = ({ name, level }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between text-lg md:text-xl">
        <h4 className="text-gray-700">{name}</h4>
        <h5 className="text-gray-500">{level}%</h5>
      </div>
      <ProgressBar progress={level} />
    </div>
  );
};

export default Skill;
