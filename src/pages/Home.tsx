import Button from "../components/Button";
import NavBar from '../components/NavBar'
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import ProgressList from "../components/ProgressList";
const Home = () => {
  return (
    <>
    <NavBar/>
    <div className="home-content text-white font-semibold">
      <div className="upload-section w-full flex flex-col items-center bg-gray-900 py-8">
        <div className="m-2 flex flex-col items-center">
        <ArrowUpOnSquareIcon className="w-28 m-4"/>
          <p>Upload your image or drag it over here.</p>
        </div>
          <Button label="Upload"/>
      </div>
      <ProgressList></ProgressList>
    </div>
    </>
    );
}
 
export default Home;