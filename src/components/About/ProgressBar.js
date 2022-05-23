const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-3 h-1.5 w-full bg-gray-400">
      <div className="bg-primary h-full" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
