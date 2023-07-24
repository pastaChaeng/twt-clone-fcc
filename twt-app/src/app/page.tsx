import Link from "next/link";
import {BiHomeCircle, BiUser} from 'react-icons/bi';
import {BsBell, BsBookmark, BsThreeDots, BsTwitter} from 'react-icons/bs';
import {HiOutlineHashtag} from 'react-icons/hi';
import {HiEnvelope} from 'react-icons/hi2';

const NAVIGATION_ITEMS = [
  {
    title:'Twitter',
    icon:BsTwitter
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

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
      {/* left sidebar nav/header*/}
      <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
        <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
      {
        NAVIGATION_ITEMS.map((item)=>(
          <Link 
          className='hover:bg-white/10 text-2xl transition duration-200 flex item-center justify-start w-fit space-x-4 rounded-3xl p-2 px-6'
          href={'/${item.title.toLowerCase()}'} 
          key={item.title}>
            <div>
              <item.icon/>
            </div>
              {
                item.title !== "Twitter" && <div>{item.title}</div>
              }
          </Link>
        ))
      }
      <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">Tweet</button>
      </div>
      <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10
      transition duration-200">
      <div className="rounded-full bg-slate-400 w-8 h-8"></div>
      <div className="text-left text-xs">
      <div className="font-semibold">Lazy Coder</div>
      <div className="">@lazycoderdot</div>
      </div>
      <div>
      <BsThreeDots/>
      </div>
      </button>
      </section>
      <main></main>
      <section></section>
    </div>
    </div>
  )
}

export default Home
