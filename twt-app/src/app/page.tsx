import LeftSidebar from "./components/LeftSidebar";
import MainCom  from "./components/MainCom";
import { BsSearch } from "react-icons/bs"; 
const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative border-4">
      <LeftSidebar />
      <MainCom/>
      <section className="border-4 flex flex-col items-stretch h-screen px-6">
        <div>
        <div className="relative w-full h-full bg-white/20 rounded-full">
          <label htmlFor="searchBox" className="absolute top-0 left-0 h-full flex items-center justify-center">
            <BsSearch className="w-5 h-5 text-gray-500"/>
            </label>
          <input type="text" placeholder="Search" id="searchBox"
          className=" outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-8 "/>
        </div>
        </div>
        <div></div>
        <div></div>
      </section>
      </div>
    </div>
  )
}

export default Home
