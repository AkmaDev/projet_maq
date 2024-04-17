"use client"
import ImgCustom from "@/components/ImgCustom";
import { mesIcones, mesImages} from "@/constants";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    router.push(selectedOption); // Navigates to the selected option's value
  };

  return (
    <main className="relative flex flex-col items-center justify-between p-6 md:p-24 lg:p-12 ">
      <section className=" flex flex-col gap-8 sm:flex-row max-w-screen-xl sm:mx-auto sm:mb-12 sm:py-5">
        <div className="text-left sm:py-6">
          <h1 className=" py-4 sm:py-8 font-extrabold sm:text-5xl text-4xl lg:text-6xl">Hello!!! We Are Creative Digital Agency.</h1>
          <p className=" pb-5 sm:pb-8 sm:font-semibold sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisi eget ante vestibulum, nec hendrerit arcu consequat. Nullam tempor orci nec velit consequat, ut facilisis leo consectetur. </p>
          <Link href={"#"} className="bg-yellow-400 p-3 sm:p-4 font-semibold text-sm rounded-sm sm:rounded-none"> SEND MESSAGE </Link>
        </div>
        <div className="h-36 w-54 sm:w-full sm:h-auto px-6 sm:mx-6 bg-slate-300 rounded-sm"></div>
      </section>
      <section id="work" className="my-20 flex flex-col w-full">
        <h1 className="font-extrabold text-4xl lg:text-7xl sm:text-5xl">WORK SHOWCASE.</h1>
        <div>
                <div className="hidden sm:flex my-7 sm:my-14 lg:my-20 sm:pl-3 text-sm font-bold gap-4 ">
                <Link href="#" className=" py-1 px-5 pb-2 bg-yellow-400 "> ALL </Link>
                <Link href="#" className=" py-1 px-5 pb-2 hover:text-yellow-500 text-center"> BRANDING </Link>
                <Link href="#" className=" py-1 px-5 pb-2 hover:text-yellow-500 text-center"> ILLUSTRATION </Link>
                <Link href="#" className=" py-1 px-5 pb-2 hover:text-yellow-500 text-center"> WEB </Link>
                </div>
                <div className="my-7 sm:my-14 lg:my-20 sm:pl-3 flex text-sm font-bold gap-4 ">
                <select className="sm:hidden flex py-1 px-5 pb-2 bg-slate-200 focus:outline-none" onChange={(e) => window.location.href = e.target.value}>
                  <option value="#" selected>ALL</option>
                  <option value="#">BRANDING</option>
                  <option value="#">ILLUSTRATION</option>
                  <option value="#">WEB</option>
                </select>
                </div>
            
            <div className="grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4 sm:m-4 my-4 sm:gap-2">
                <div className="flex bg-yellow-400 flex-col justify-center items-center lg:h-72 sm:h-56 h-32">
                    <h3 className="font-extrabold lg:text-4xl text-xs sm:text-3xl mb-5">ARTWORK</h3>
                    <p className="font-semibold text-xs sm:text-xl">BRANDING</p>
                </div>
                <div className="bg-slate-300 text-center row-span-2"></div>
                <div className="bg-slate-300 text-center"></div>
                <div className="bg-slate-300 text-center row-span-2"></div>
                <div className="bg-slate-300 text-center row-span-2"></div>
                <div className="bg-slate-300 text-center row-span-1"></div>
            </div>
            <div className="flex justify-center">
                <Link href={"#"} className="lg:mt-10 mt-2 sm:mt-5 bg-yellow-400 p-4 font-bold text-sm sm:px-14 rounded-lg sm:rounded-none"> SHOW ME MORE </Link>
            </div>
        </div>
      </section>
      <section id="" className="bg-slate-20 sm:p-20 pl-2 sm:pl-0">
        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-12 sm:gap-20 pointer-events-none select-none opacity-20 lg:p-0">{mesImages.map((monImage) =>(<ImgCustom image={monImage} key={monImage.src}/>))}</div>
      </section>
      <section id="about-us" className="my-20 flex flex-col w-full">
      <h1 className="font-extrabold text-4xl lg:text-7xl sm:text-5xl">ABOUT US.</h1>
      <p className="w-80 sm:mt-14 mb-8 mt-5 sm:mb-0 font-semibold lg:w-2/4 ">Lorem ipsum dolor sit amet, consectete adipiscing elit. Fusce euismod nisi eget vestibulum, nec hendrerit consequatec. </p>

      <div className="sm:grid flex flex-col gap-10 sm:grid-cols-3 sm:gap-4 lg:py-14 sm:py-9">
  
        <div className="flex bg-slate-300 flex-col justify-end h-56 lg:h-72 sm:h-80 " >
            <div className="bg-yellow-400 p-3 rounded-sm lg:p-6 sm:p-4 mr-28 flex flex-col justify-start">
                <h3 className="font-bold">Luke Skywalker</h3>
                <p className="text-white pt-1 text-sm">Web Designer</p>
            </div>
        </div>

        <div className="flex bg-slate-300 flex-col justify-end h-56 lg:h-72 sm:h-80">
            <div className="bg-yellow-400 p-3 rounded-sm lg:p-6 sm:p-4 mr-28 flex flex-col justify-start ">
                <h3 className="font-bold">Luke Skywalker</h3>
                <p className="text-white pt-1 text-sm">Web Designer</p>
            </div>
        </div>
        <div className="pt-8 flex h-56 text-center sm:h-80 lg:px-20 bg-slate-300 flex-col lg:pt-6 lg:h-auto lg:text-normal text-sm sm:p-8">
                <h3 className=" font-bold text-lg sm:font-bold pt-10">Litte About Us</h3>
                <p className="sm:text-sm sm:py-7 py-4 sm:px-0 px-2 font-semibold lg:h-auto lg:w-auto sm:w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisi eget.</p>
                <p className="sm:pt-2 sm:text-sm font-semibold">Read More</p>
        </div>
      </div>
      </section>
      <section id="blog" className="sm:my-20 flex flex-col w-full">
      <h1 className="font-extrabold text-4xl lg:text-7xl sm:text-5xl">OUR BLOG.</h1>
      <p className="w-80 sm:w-auto pb-6 pt-6 sm:pt-0 px-2 sm:my-10 font-semibold">Lorem ipsum dolor sit amet, consectet adipiscing elit. Fusce euismod nisi eget <br />vestibulum, nec hendrerit arcu conseq.</p>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-10 sm:gap-28">

      <div className="sm:flex-col sm:flex grid-cols-2  gap-4 sm:m-2 sm:my-4">
        <div className="flex bg-yellow-400 justify-center items-center font-extrabold text-2xl lg:text-4xl sm:text-xl h-80"> READ MORE</div>
        <div className="flex text-xs sm:text-lg flex-col lg:p-0 sm:pl-5 pl-1">
          <h3 className="font-bold pt-5">SUPER BLOG ARTICLE</h3>
          <p className=" py-5 font-semibold lg:w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce euismod.</p>
          <p className="text-sm font-semibold">20 may 2020</p>
        </div>
      </div>

      <div className="sm:flex-col sm:flex grid-cols-2  gap-4 sm:m-2 sm:my-4">
        <div className="flex bg-slate-300 justify-center items-center font-extrabold lg:text-4xl sm:text-xl h-80"></div>
        <div className="flex text-xs sm:text-lg flex-col sm:pl-5 pl-1 lg:p-0">
          <h3 className="font-bold pt-5">SUPER BLOG ARTICLE</h3>
          <p className=" py-5 font-semibold lg:w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce euismod.</p>
          <p className="text-sm font-semibold">20 may 2020</p>
        </div>
      </div>

      <div className="sm:flex-col sm:flex grid-cols-2  gap-4 sm:m-2 sm:my-4 pl-1">
        <div className="flex bg-slate-300 justify-center items-center font-extrabold lg:text-4xl sm:text-xl h-80"></div>
        <div className="flex text-xs sm:text-lg flex-col lg:p-0 sm:pl-5 pl-1">
          <h3 className="font-bold pt-5">SUPER BLOG ARTICLE</h3>
          <p className=" py-5 font-semibold lg:w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce euismod.</p>
          <p className="text-sm font-semibold">20 may 2020</p>
        </div>
      </div>

      </div>
      </section>



      <section id="contact-us" className="my-20 flex flex-col w-full">


      <div className="hidden sm:block">
      <h1 className="font-extrabold text-2xl lg:text-7xl sm:text-5xl">CONTACT US.</h1>
              <p className=" pb-8 my-10 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisi eget ante <br />vestibulum, nec hendrerit arcu consequat.</p>
              <div className="flex justify-between">
            <form action="#" className="space-y-8 sm:w-80">
              <div>
                  <label for="email" class="block mb-2 text-sm font-semibold ">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-slate-100 border border-gray-200 focus:outline-none text-sm rounded-lg  block w-full p-2.5 " placeholder="name@gmail.com" required/>
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-semibold  ">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm  bg-slate-100 rounded-lg border border-gray-200 focus:outline-none shadow-sm" placeholder="Let us know how we can help you" required/>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-semibold ">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm bg-slate-100 rounded-lg shadow-sm border border-gray-200 focus:outline-none" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="lg:mt-10 mt-2 sm:mt-5 bg-yellow-400 p-4 font-bold text-sm sm:px-14 rounded-lg sm:rounded-none">Send message</button>
          </form>
                
                  <div className="bg-slate-200 w-2/4"></div>
              </div>
      </div>
      




        <div class="sm:hidden py-8 lg:py-16 px-2 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold ">CONTACT US</h2>
          <p class="mb-8 lg:mb-16 sm:text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisi eget ante vestibulum, nec hendrerit arcu consequat.</p>
          <form action="#" class="space-y-8">
              <div>
                  <label for="email" class="block mb-2 text-sm font-semibold ">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-slate-100 border border-gray-200 focus:outline-none text-sm rounded-lg  block w-full p-2.5 " placeholder="name@gmail.com" required/>
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-semibold  ">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm  bg-slate-100 rounded-lg border border-gray-200 focus:outline-none shadow-sm" placeholder="Let us know how we can help you" required/>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-semibold ">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm bg-slate-100 rounded-lg shadow-sm border border-gray-200 focus:outline-none" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center bg-yellow-400 rounded-lg ">Send Message</button>
          </form>
      </div>
    </section>
      <section id="" className="flex flex-col pt-10 text-xs sm:text-lg">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-24 ">
            <div className="flex flex-col justify-center items-center">
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0755 1.24162C10.4158 0.416631 11.5842 0.416631 11.9245 1.24162L13.9694 6.20014C14.2507 6.88227 14.8848 7.3541 15.619 7.42766L20.796 7.94636C21.6527 8.03219 22.0077 9.08845 21.3767 9.67424L17.3747 13.3897C16.8594 13.8681 16.6332 14.582 16.7789 15.2699L17.9307 20.7069C18.1132 21.5686 17.1733 22.2283 16.425 21.7638L12.0548 19.051C11.4088 18.6499 10.5912 18.6499 9.94518 19.051L5.57504 21.7638C4.82673 22.2283 3.88681 21.5686 4.06934 20.7069L5.22109 15.2699C5.36681 14.582 5.14058 13.8681 4.62527 13.3897L0.62328 9.67424C-0.00768149 9.08845 0.347297 8.03219 1.20397 7.94636L6.38103 7.42766C7.11522 7.3541 7.74926 6.88227 8.03058 6.20014L10.0755 1.24162Z" fill="#FF6452"/>
              </svg>
              <p  className="py-4 text-xs text-center sm:text-lg">1211 Awesome Avenue,<br />NY USD</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0755 1.24162C10.4158 0.416631 11.5842 0.416631 11.9245 1.24162L13.9694 6.20014C14.2507 6.88227 14.8848 7.3541 15.619 7.42766L20.796 7.94636C21.6527 8.03219 22.0077 9.08845 21.3767 9.67424L17.3747 13.3897C16.8594 13.8681 16.6332 14.582 16.7789 15.2699L17.9307 20.7069C18.1132 21.5686 17.1733 22.2283 16.425 21.7638L12.0548 19.051C11.4088 18.6499 10.5912 18.6499 9.94518 19.051L5.57504 21.7638C4.82673 22.2283 3.88681 21.5686 4.06934 20.7069L5.22109 15.2699C5.36681 14.582 5.14058 13.8681 4.62527 13.3897L0.62328 9.67424C-0.00768149 9.08845 0.347297 8.03219 1.20397 7.94636L6.38103 7.42766C7.11522 7.3541 7.74926 6.88227 8.03058 6.20014L10.0755 1.24162Z" fill="#FF6452"/>
              </svg>
              <p className="py-4 text-xs sm:text-lg">+00 123-456-78,<br />+00 123-456-78</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0755 1.24162C10.4158 0.416631 11.5842 0.416631 11.9245 1.24162L13.9694 6.20014C14.2507 6.88227 14.8848 7.3541 15.619 7.42766L20.796 7.94636C21.6527 8.03219 22.0077 9.08845 21.3767 9.67424L17.3747 13.3897C16.8594 13.8681 16.6332 14.582 16.7789 15.2699L17.9307 20.7069C18.1132 21.5686 17.1733 22.2283 16.425 21.7638L12.0548 19.051C11.4088 18.6499 10.5912 18.6499 9.94518 19.051L5.57504 21.7638C4.82673 22.2283 3.88681 21.5686 4.06934 20.7069L5.22109 15.2699C5.36681 14.582 5.14058 13.8681 4.62527 13.3897L0.62328 9.67424C-0.00768149 9.08845 0.347297 8.03219 1.20397 7.94636L6.38103 7.42766C7.11522 7.3541 7.74926 6.88227 8.03058 6.20014L10.0755 1.24162Z" fill="#FF6452"/>
              </svg>
              <p className="py-4 text-xs sm:text-lg">mint@mintmail.com</p>
            </div>
        </div>

        <div className="sm:pl-6 my-20 flex justify-center gap-10">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5648 1.00458L14.7875 1C11.6674 1 9.65099 3.12509 9.65099 6.41423V8.91055H6.85857C6.61728 8.91055 6.42188 9.1115 6.42188 9.35937V12.9763C6.42188 13.2241 6.6175 13.4249 6.85857 13.4249H9.65099V22.5514C9.65099 22.7993 9.84639 23 10.0877 23H13.731C13.9723 23 14.1677 22.799 14.1677 22.5514V13.4249H17.4327C17.674 13.4249 17.8694 13.2241 17.8694 12.9763L17.8707 9.35937C17.8707 9.24036 17.8246 9.12638 17.7428 9.04215C17.661 8.95793 17.5496 8.91055 17.4338 8.91055H14.1677V6.79439C14.1677 5.77727 14.4036 5.26094 15.6935 5.26094L17.5643 5.26025C17.8054 5.26025 18.0008 5.0593 18.0008 4.81166V1.45317C18.0008 1.20576 17.8056 1.00504 17.5648 1.00458Z" fill="black"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 5.77624C21.7271 6.10418 20.8978 6.32658 20.0264 6.42587C20.9161 5.91571 21.5972 5.10654 21.92 4.1453C21.0854 4.61774 20.1642 4.96079 19.1826 5.14675C18.3966 4.34385 17.2785 3.84375 16.0384 3.84375C13.6593 3.84375 11.7303 5.69081 11.7303 7.9676C11.7303 8.29051 11.7683 8.6059 11.8418 8.90748C8.26201 8.73532 5.08768 7.09308 2.96314 4.59763C2.59176 5.20579 2.38049 5.91443 2.38049 6.67088C2.38049 8.10205 3.14161 9.36484 4.2964 10.1036C3.5904 10.081 2.92639 9.89507 2.34508 9.58596V9.63748C2.34508 11.6353 3.83056 13.3027 5.80024 13.6822C5.43936 13.7752 5.05882 13.8267 4.66514 13.8267C4.38696 13.8267 4.11794 13.8003 3.85417 13.75C4.40267 15.3898 5.99315 16.5822 7.87756 16.6149C6.40388 17.7206 4.54573 18.3778 2.52749 18.3778C2.17976 18.3778 1.83724 18.3576 1.5 18.3212C3.40671 19.4935 5.67036 20.1771 8.10327 20.1771C16.028 20.1771 20.3597 13.892 20.3597 8.44132L20.3453 7.90731C21.1917 7.32928 21.9239 6.60303 22.5 5.77624Z" fill="black"/>
          </svg>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12.0011 6.70312C9.07747 6.70312 6.70703 9.07357 6.70703 11.9972C6.70703 14.9209 9.07747 17.2914 12.0011 17.2914C14.9248 17.2914 17.2953 14.9209 17.2953 11.9972C17.2953 9.07357 14.9248 6.70312 12.0011 6.70312ZM12.0011 15.3061C10.1773 15.3061 8.69233 13.8211 8.69233 11.9972C8.69233 10.1721 10.1773 8.68842 12.0011 8.68842C13.825 8.68842 15.31 10.1721 15.31 11.9972C15.31 13.8211 13.825 15.3061 12.0011 15.3061ZM18.3953 6.307C18.3953 6.69661 18.0794 7.01244 17.6898 7.01244C17.3002 7.01244 16.9844 6.69661 16.9844 6.307C16.9844 5.9174 17.3002 5.60156 17.6898 5.60156C18.0794 5.60156 18.3953 5.9174 18.3953 6.307Z" fill="black"/>
          </svg>
        </div>

      </section>
    </main>
  );
}

export default Home;




