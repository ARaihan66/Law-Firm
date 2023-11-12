import React from "react";
import "./introduce.css";
import mustafizur from "../../../../assets/mustafizur.png";
const Introduce = () => {
  return (
    <div className="mt-20 mb-[100px]">
      <div className="flex justify-center flex-wrap px-8 md:flex-wrap md:px-8">
        {/*<div className='lg:w-[600px]'>
          <h1 className='text-3xl font-bold md:font-bold lg:font-bold text-navyblue uppercase'>
            Introduces skilled lawyers to help for all your legal needs
          </h1>
          <div className='introduce-skild mt-10'>
            <p className='p-4 font-semibold text-slate-500'>
              Proident culpa officia deserunt mollit animd laborum perspicia
              natus error voluptatem qui acusantium dolore laudan.
            </p>
          </div>
        </div>*/}

        <div className="lg:w-[600px] flex justify-center items-center h-screen">
          <div className="">
            <img
              src={mustafizur}
              alt="Owner Of this firm"
              className="rounded-full w-23 h-23 object-cover bg-gray-200"
            />

            <p className="mt-10 font-semibold text-navyblue text-2xl text-center">
              ADVOCATE MOSTAFIJUR RAHAMAN (RASHED)
            </p>
            <h3 className="mt-4 text-center text-xl">FOUNDER & CEO</h3>
            <p className="mt-4 text-center text-xl">
              MUSTAFIZUR RAHMAN & ASSOCIATES
            </p>
            <p className="mt-4 text-center">YOUR TOTAL BUSINESS SOLUTION</p>
          </div>
        </div>

        <div className="md:mt-10 lg:w-[600px] lg:ml-10">
          <p className="md:mt-10 font-semibold text-navyblue text-xl">
            ABOUT MOSTAFIJUR RAHAMAN
          </p>
          <p className="hcolor text-justify mt-2">
            Mostafizur Rahman, affectionately known as Rashed, is a
            distinguished Bangladeshi lawyer whose passion for justice and
            unwavering commitment to the legal field have left an indelible mark
            on the legal landscape in Bangladesh. With a sharp legal mind and an
            unyielding dedication to the principles of law, Rashed has firmly
            established himself as a prominent figure in the country's legal
            community. Rashed's legal journey has been characterized by a
            profound sense of duty toward safeguarding individual rights and
            ensuring a fair and just society. His remarkable ability to dissect
            intricate legal matters and provide pragmatic guidance to his
            clients in a language they can comprehend has earned him a stellar
            reputation as a trusted legal advisor. His advocacy skills, combined
            with his deep understanding of the nuances of the legal system, make
            him a sought-after counsel for those navigating the complexities of
            Bangladeshi law. Beyond his legal prowess, Rashed is a paragon of
            integrity and ethical conduct. He not only champions the interests
            of his clients with unwavering dedication but also works tirelessly
            to promote the integrity and equity of the legal system as a whole.
            As Rashed embarks on the endeavor to create a website, it is evident
            that his dedication to making legal knowledge and resources
            accessible to all will find a new platform. His website promises to
            be a valuable resource for individuals seeking legal information,
            guidance, and representation. With Rashed at the helm, the legal
            community in Bangladesh can look forward to a digital space that
            mirrors the principles of justice, fairness, and the pursuit of
            truth that have defined his legal career. His initiative in
            launching a website is poised to contribute significantly to the
            legal landscape in Bangladesh, further establishing Rashed's legacy
            as a respected advocate for the rule of law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
