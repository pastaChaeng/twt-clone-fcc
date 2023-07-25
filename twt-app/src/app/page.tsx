import LeftSidebar from "./components/LeftSidebar";
import {BsDot, BsChat} from 'react-icons/bs';
import {AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-xl w-full h-full flex relative">
       {/* left sidebar nav */}
        <LeftSidebar />
        <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] 
        border-r-[0.5px] border-gray-600">
        <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
        <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
          <div className="flex flex-col w-full h-full">
              <input 
              type="text" 
              className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none" 
              placeholder="What's happening?"/>
            </div>
            <div className="w-full justify-between items-center flex">
            <div></div>
              <div className="w-full max-w-[100px]">
                <button className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70
                 transition duration-200 font-bold">Tweet</button>
              </div>
              </div>
        </div>
          <div className="flex flex-col">
            
            {
              Array.from({length:5}).map((_,i)=>(
                <div 
                key={i} 
                className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"/>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-1">
                    <div className="font-bold">Lazy Coder</div>
                      <div>@lazycoderdot</div>
                      <div><BsDot/></div>
                      <div>1 hour ago</div>
                    </div>
                    <div className="text-white text-sm">Ako ay may lobo lumipad sa langit di ko na nakita pumutok na 
                    pala hayzz..</div>
                        <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl "></div>
                    <div className="flex items-center space-x-2 w-full">
                      <div><BsChat/></div>
                      <div><AiOutlineRetweet/></div>
                      <div><AiOutlineHeart/></div>
                      <div>S</div>
                      <div>SH</div>
                    </div>
                  </div>
                </div>
              ))
            }
         
       
          </div>
   
        </main>
        {/* left sidebar nav */}
      </div>
    </div>
  );
};

export default Home;
