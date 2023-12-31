import Link from "next/link";
import {BiUser, BiHomeCircle} from 'react-icons/bi';
import {BsBell, BsBookmark, BsThreeDots, BsDot } from 'react-icons/bs';
import {HiOutlineHashtag} from 'react-icons/hi';
import {HiEnvelope} from 'react-icons/hi2';
import {RiTwitterXLine} from 'react-icons/ri';


const NAVIGATION_ITEMS = [
  {
    title:'Twitter',
    icon:RiTwitterXLine
  },
  {
    title:'Home',
    icon:BiHomeCircle 
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  { 
    title:'Notification',
    icon:BsBell
  },
  {
    title:'Messages',
    icon:HiEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  }

]

const LeftSidebar = () => {
  return (
      <div>
      {/* left sidebar nav/header*/}
      <section className='absolute left-0 w-[275px] flex flex-col items-stretch h-screen px-6'>
        <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
      {
        NAVIGATION_ITEMS.map((item)=>(
          <Link 
          className='hover:bg-white/10 text-2xl transition duration-200 flex item-center justify-start w-fit space-x-4 rounded-3xl p-2 px-6'
          href={'/${item.title.toLowerCase()}'} 
          key={item.title}>
            <div>
              <item.icon className="w-10 h-10"/>
            </div>
              {
                item.title !== "Twitter" && <div>{item.title}</div>
              }
          </Link>
        ))
      }
      <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200 font-bold">Post</button>
      </div>
      <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10
      transition duration-200 w-full justify-between">
      <div className="flex items-center space-x-2">
      <div className="rounded-full bg-slate-400 w-12 h-12"></div>
      <div className="text-left text-sm">
      <div className="font-semibold">Lazy Coder</div>
      <div className="">@lazycoderdot</div>
      </div></div>
      <div>
      <BsThreeDots/>
      </div>
      </button>
      </section>
      <main></main>
      <section></section>
    </div>
  )
}

export default LeftSidebar
