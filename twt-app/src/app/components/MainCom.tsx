import LeftSidebar from './LeftSidebar.tsx';
import {BsDot, BsChat, BsThreeDots} from 'react-icons/bs';
import {AiOutlineRetweet, AiOutlineHeart,} from 'react-icons/ai';
import {IoShareOutline, IoStatsChartSharp} from 'react-icons/io5';

const MainCom = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black ">
      <div className="max-w-screen-xl w-full h-full flex relative">
       {/* left sidebar nav */}
        <LeftSidebar />
        <main className="ml-[275px] flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] 
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
                className="border-b-[0.5px] border-gray-600 py-4 px-6 flex space-x-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"/>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex items-center w-full justify-between">
                    <div className="flex items-center space-x-1 w-full">
                    <div className="font-bold">Lazy Coder</div>
                      <div className="text-gray-500">@lazycoderdot</div>
                      <div className="text-gray-500"><BsDot/></div>
                      <div className="text-gray-500">1 hour ago</div>
                    </div> 
                    <div className="flex items-center space-x-1 "><BsThreeDots/></div> 
                    </div>  
                    <div className="text-white text-base">Ako ay may lobo lumipad sa langit di ko na nakita pumutok na 
                    pala hayzz..</div>
                        <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                    <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                      <div className="rounded-full hover:bg-pink-700 transition duration-200 p-2 cursor-pointer"><BsChat className="hover:bg-pink-700"/></div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer"><AiOutlineRetweet/></div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer"><AiOutlineHeart/></div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer"><IoStatsChartSharp/></div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer"><IoShareOutline/></div>
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

export default MainCom;
