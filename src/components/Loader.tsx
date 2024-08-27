import '../Loader.css';

type LoaderProps = {
  text?: string;
};
const Loader: React.FC<LoaderProps> = (props) => {
  const { text = 'Loading...' } = props;
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="pt-20">{text}</div>
      <div id="loader">
        <div className="ls-particles ls-part-1"></div>
        <div className="ls-particles ls-part-2"></div>
        <div className="ls-particles ls-part-3"></div>
        <div className="ls-particles ls-part-4"></div>
        <div className="ls-particles ls-part-5"></div>
        <div className="lightsaber ls-left ls-green"></div>
        <div className="lightsaber ls-right ls-red"></div>
      </div>
    </div>
  );
};
export default Loader;
