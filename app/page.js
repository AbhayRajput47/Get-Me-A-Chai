import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center text-white text-center gap-4 items-center h-[50vh]  px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold flex gap-2 text-3xl md:text-5xl justify-center items-center">Get Me a Chai <span><img className="invertImg" src="/tea.gif" width={88} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creaters to fund their Projects.
        </p>
        <p className="text-center md:text-left">A place where your fans can buy you a chai. Unleash the power of your project funded</p>
        <div>
          <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 " src="/man.gif" width={88} alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 " src="/coin.gif" width={88} alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 " src="/group.gif" width={88} alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      {/* <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <video src="/video.mp4" controls></video>
        </div>
      </div> */}
      <div className="text-white container py-14 mx-auto">
  <h2 className="text-3xl text-center font-bold mb-14">
    Learn More About Us
  </h2>

  <div className="px-1 md:px-5 mt-20">
    <p className="p-4 text-gray-200 text-md text-center font-sans">
      <strong>Get Me A Chai</strong> is more than just a platform—it's a movement that empowers developers, creators, and influencers to fuel their ideas through community-driven support. Whether you’re building, designing, writing, or inspiring, this is your space to grow with the help of those who believe in your vision.
    </p>
    
    <p className="p-4 text-gray-200 text-md text-center font-sans">
      Our mission is simple: to enable creators to do what they love without financial roadblocks. We connect you directly with your supporters, letting them contribute through small acts of appreciation—like buying you a chai—that make a big difference in your journey.
    </p>

    <p className="p-4 text-gray-200 text-md text-center font-sans">
      At the heart of everything we do is <strong>community</strong>. We believe that creativity flourishes when supported, and with every contribution, you're not just funding a project—you're shaping someone's dream. Together, we’re building a culture of creativity, passion, and possibility.
    </p>
  </div>
</div>

    </>
  );
}
