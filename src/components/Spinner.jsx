import { Hourglass } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#f8f9fa", "#ff6b6b"]}
        />
      <Link to="/">Home</Link>
      </div>
    </>
  );
};
export default Spinner;
