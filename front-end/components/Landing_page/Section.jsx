import Head from "next/head";

const Section = () => {
  return (
    <>
      <Head>
        <title>Section Page - Shareholder Management System</title>
      </Head>
      <section id="hero" className="bg-slate-100">
    
      <div
       className="container flex flex-col-reverse items-center  px-6 py-10 mx-auto space-y-0 md:space-y-5 md:flex-row w-full '"
      >
       
        <div className="flex flex-col mb-20 items-center space-y-5 md:w-1/2">
          <h1
            className="max-w-md text-5xl font-bold mt-10 text-center md:text-5xl md:text-left"
          >
           Digital Share Management
          </h1>
          <p className="max-w-sm text-center text-red-950 md:text-left">
          Save time, money and be more effective with our share management tool.
          </p>
          
        </div>
        <div className="md:w-1/2 ">
          <img src="/assets/logo/manage.jpg" alt=""  className='rounded-xl hover:scale-110 ease-in duration-300'/>
        </div>
      </div>
    {/* </section>
    ,
    <section id="2" className="bg-slate-100">
       */}
    
      <div
        className="container flex flex-col items-center -mt-10 mx-auto space-y-30 md:space-y-10 md:flex-row "
      >
        

        <div className="md:w-1/2 mt-10 mr-20 ">
          <img src="/assets/logo/plb.jpg" alt=""  className='rounded-xl hover:scale-105 ease-in duration-300'/>
        </div>
        <div className="flex flex-col mb-30 space-y-5 md:w-1/2">
       
       <div className=" flex-col items-center  space-y-6  border-green-500 md:flex rounded-xl hover:scale-105 ease-in duration-300 ">
       <a
           href="#"
           className="hidden p-1  text-white text-center bg-slate-400 hover:bg-purple-600 rounded-full focus:outline-none md:w-1/2 md:block"
           >Reduce the risk of non-compliance</a
         >
           <h1
             className="max-w-md text-5xl font-bold pb-6 text-center md:text-5xl md:text-left"
           >
           Paperless boards
           </h1>
           <p  className="max-w-sm px-3 text-center text-red-700 md:text-left" >
           It’s 2022, time to stop printing and scanning.
           </p>
           <p className="max-w-sm pt-3 text-center text-red-950 md:text-left">
           
 Manage every aspect of your board meetings in our secure cloud platform. Store all your documents, prepare and share your agendas, compile board packs and digitise your minutes, plus much more..
           </p>
           </div>
         </div>
      </div>
    </section>
    </>
  );
};

export default Section;