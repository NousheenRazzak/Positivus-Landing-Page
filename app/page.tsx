import Image from "next/image";
import Main from "./public/main.png";
import Amazon from "./public/amazon.png";
import Dribble from "./public/dribbble.png";
import Hubspot from "./public/hubspot.png";
import Notion from "./public/notion.png";
import SEO from "./public/seo.png";
import PPC from "./public/ppc.png";
import SMM from "./public/smm.png";
import Email from "./public/email.png";
import Content from "./public/content.png";
import Analytics from "./public/analytics.png";
import Proposal from "./public/proposal.png";
import John from "./public/john.png";
import Jane from "./public/jane.png";
import Michael from "./public/michael.png";
import Contact from "./public/contact.png";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center font-serif font-semi-bold">

      {/* Main Section*/}
      <section className="w-3/5 flex mt-20">
        {/* Left Side */}
        <div className="w-2/4 flex items-center">
          <div>
          <h1 className="text-6xl leading-tight">Navigating the 
          <br />
          digital landscape
          <br />
          for success
          </h1>
          <p className="leading-relaxed text-xl mt-5 mr-10">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="border-solid border-2 border-black rounded-md py-4 px-6 bg-black text-white text-base font-medium mt-5">Book a Consultation</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/4">
          <Image src={Main} width={600} height={500} alt="Main Image" />
        </div>
      </section>

      {/* Client Section */}
      <section className="w-3/5 my-32">
        <div className="flex justify-between h-12">
          <Image src={Amazon} width={150} height={150} alt="Amazon Logo"/>
          <Image src={Dribble} width={150} height={150} alt="Dribbble Logo"/>
          <Image src={Hubspot} width={150} height={150} alt="Hubspot Logo"/>
          <Image src={Notion} width={150} height={150} alt="Notion Logo"/>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-3/5 mb-10">
        <div className="flex items-center">
        <h2 className="text-5xl font-mono font-semibold px-1 py-1 mr-10 rounded-md bg-lime-400">Services</h2>
        <p className="text-xl">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-10 my-10">
          <div className="border-black border rounded-3xl h-72 bg-[#f3f3f3] flex justify-between shadow-md shadow-black">
            <div className="flex flex-col justify-between my-12 px-10">
              <h3 className="text-3xl font-mono font-medium">Search Engine
                <br />
                Optimization
              </h3>
              <button className="border rounded-md border-black py-2">Learn More</button>
            </div>
            <div className="flex items-center">
              <Image src={SEO} width={300} height={300} alt="Search Engine Optimization"/>
            </div>
          </div>
          <div className="border-black border rounded-3xl bg-[#b9ff66] flex justify-between shadow-md shadow-black">
          <div className="flex flex-col justify-between my-12 px-10">
              <h3 className="text-3xl font-mono font-medium">Pay-Per-Click
                <br />
                Advertising
              </h3>
              <button className="border rounded-md px-8 py-2 border-black">Learn More</button>
            </div>
            <div className="flex items-center">
              <Image src={PPC} width={300} height={300} alt="Pay Per Click"/>
            </div>
          </div>
          <div className="border-black border rounded-3xl bg-[#191a23] flex justify-between text-white shadow-md shadow-black">
          <div className="flex flex-col justify-between my-12 px-10">
              <h3 className="text-3xl font-mono font-medium">Social Media
                <br />
                Marketing
              </h3>
              <button className="border rounded-md px-8 py-2 border-white">Learn More</button>
            </div>
            <div  className="flex items-center">
              <Image src={SMM} width={300} height={300} alt="Social Media Marketing"/>
            </div>
          </div>
          <div className="border-black border rounded-3xl bg-[#f3f3f3] flex justify-between shadow-md shadow-black">
          <div className="flex flex-col justify-between my-12 px-10">
              <h3 className="text-3xl font-mono font-medium">Email
                <br />
                Marketing
              </h3>
              <button className="border rounded-md px-8 py-2 border-black">Learn More</button>
            </div>
            <div className="flex items-center">
              <Image src={Email} width={300} height={300} alt="Email Marketing"/>
            </div>
          </div>
          <div className="border-black border rounded-3xl bg-[#b9ff66] flex justify-between shadow-md shadow-black">
          <div className="flex flex-col justify-between my-12 px-10">
              <h3 className="text-3xl font-mono font-medium">Content
                <br />
                Creation
              </h3>
              <button className="border rounded-md px-8 py-2 border-black">Learn More</button>
            </div>
            <div className="flex items-center">
              <Image src={Content} width={270} height={300} alt="Content Creation" />
            </div>
          </div>
          <div className="border-black border rounded-3xl bg-[#191a23] flex justify-between text-white shadow-md shadow-black">
          <div className="flex flex-col justify-between my-12 px-10">
              <h3 className="text-3xl font-mono font-medium">Tracking and
                <br />
                Analytics
              </h3>
              <button className="border rounded-md px-8 py-2 border-white">Learn More</button>
            </div>
            <div className="flex items-center">
              <Image src={Analytics} width={300} height={300} alt="Analytics"/>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="w-3/5 h-96 bg-[#f3f3f3] rounded-3xl flex justify-between px-10 my-10">
        <div className="w-2/5 flex flex-col justify-between py-14">
          <h3 className="text-3xl font-mono font-semibold">Let's make things happen</h3>
          <p className="text-lg">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button className="border-solid border-2 border-black rounded-md py-4 px-6 bg-black text-white text-base font-medium mt-5">Get your free proposal</button>
        </div>
        <div className="w-2/5 -mt-5">
          <Image src={Proposal} width={400} height={400} alt="Proposal Illustration"/>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="w-3/5 my-10">
        <div className="flex items-center">
        <h2 className="text-5xl font-mono font-semibold px-1 py-1 rounded-md bg-lime-400">Case Studies</h2>
        <p className="text-xl ml-8">Explore Real-Life Examples of Our Proven Digital Marketing Success through us.</p>
        </div>
      </section>

      <section className="w-3/5 h-72 bg-slate-950 rounded-3xl grid grid-cols-3 px-10 mb-10 font-mono">
        <div className="px-10 border-r-2 my-10">
          <p className="text-white text-lg">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <button className="text-lime-400 text-xl mt-5">Learn More</button>
        </div>
        <div className="px-10 border-r-2 my-10">
          <p className="text-white text-lg">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords increase in organic traffic.</p>
          <button className="text-lime-400 text-xl mt-5">Learn More</button>
        </div>
        <div className="px-10 my-10">
          <p className="text-white text-lg">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <button className="text-lime-400 text-xl mt-5">Learn More</button>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-3/5 my-10">
        <div className="flex items-center">
        <h2 className="text-5xl font-mono font-semibold px-1 py-1 rounded-md bg-lime-400">Team</h2>
        <p className="text-xl ml-8">Explore Real-Life Examples of Our Proven Digital Marketing Success through us.</p>
        </div>
      </section>

      <section className="w-3/5 grid grid-cols-3 gap-5 mb-10">
        <div className="border border-black rounded-3xl p-8 shadow-md shadow-black">
          <div className="flex justify-between items-center border-b-2 border-black pb-5">
            <Image src={John} width={100} height={100} alt="John"/>
            <p className="font-semibold text-xl">Founder
            <br />
            John Smith</p>
          </div>
          <div className="pt-5">
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </div>
        <div className="border border-black rounded-3xl p-8 shadow-md shadow-black">
          <div className="flex justify-between items-center border-b-2 border-black pb-5">
            <Image src={Jane} width={100} height={100} alt="Jane"/>
            <p className="font-semibold text-xl">Director
            <br />
            Jane Doe</p>
          </div>
          <div className="pt-5">
            <p>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
          </div>
        </div>
        <div className="border border-black rounded-3xl p-8 shadow-md shadow-black">
          <div className="flex justify-between items-center border-b-2 border-black pb-5">
            <Image src={Michael} width={100} height={100} alt="Michael"/>
            <p className="font-semibold text-xl">SEO Specialist
            <br />
            Michael Brown</p>
          </div>
          <div className="pt-5">
            <p>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
          </div>
        </div>
      </section>
      <div className="w-3/5 flex justify-end">
        <button className="border-solid border-2 border-black rounded-md py-4 px-10 bg-black text-white text-base font-medium">See all team</button>
      </div>

      {/* Contact Section */}
      <section className="w-3/5 my-10">
        <div className="flex items-center">
        <h2 className="text-5xl font-mono font-semibold px-1 py-1 rounded-md bg-lime-400">Contact</h2>
        <p className="text-xl ml-8">Connect with Us: Let's Discuss Your Digital Marketing Needs.</p>
        </div>
      </section>

      <section className="w-3/5 bg-[#f3f3f3] rounded-3xl flex justify-between px-10 mb-10">
        <div className="w-3/5 flex flex-col justify-between py-14">
          <label>Name</label>
          <input type="text" placeholder="Name" className="border border-black rounded-md p-2 mb-5"></input>
          <label>Email</label>
          <input type="text" placeholder="Email" className="border border-black rounded-md p-2 mb-5"></input>
          <label>Message</label>
          <input type="text-area" placeholder="Message" className="border border-black rounded-md px-2 pt-2 pb-40 mb-5"></input>
          <button className="border-solid border-2 border-black rounded-md py-4 px-6 bg-black text-white text-base font-medium mt-5">Contact Us</button>
        </div>
        <div className="w-2/5 flex items-center">
          <Image src={Contact} width={600} height={600} alt="Contact Illustration"/>
        </div>
      </section>
    </main>
    </>
  );
}
