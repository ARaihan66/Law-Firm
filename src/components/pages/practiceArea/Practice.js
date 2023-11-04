import React, { useState, useEffect } from "react";
import "./practice.css";
import OnePractice from "./OnePractice";
import PracticeSolution from "./practiceSolution/PracticeSolution";
import ExpertLawer from "./expertLawer/ExpertLawer";
import { useDispatch, useSelector } from "react-redux";
import { fetchPracticeAreaData } from "../../../feature/dataSlice";
const Practice = () => {
  const { practiceAreaData } = useSelector((state) => state.storeData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPracticeAreaData());
  }, [dispatch]);

  //const practiceAreas = [
  //  {
  //    name: "Portfolio Management",
  //    details:
  //      "Portfolio management refers to the management of an individual's or organization's investment portfolio.Explain the importance of diversification, risk management, and long-term financial planning in portfolio management.Provide information about the services your law firm offers in this area, such as investment advice, asset allocation, and wealth preservation.",
  //  },

  //  {
  //    name: "Income Tax Consultancy",
  //    details:
  //      "Income tax consultancy involves helping individuals and businesses navigate the complexities of the tax code to minimize their tax liability.Discuss your team's expertise in tax planning, compliance, and tax dispute resolution.Offer information on the specific services you provide, such as tax preparation, tax optimization strategies, and IRS dispute resolution.",
  //  },

  //  {
  //    name: "Customs Consultancy:",
  //    details:
  //      "Customs consultancy assists businesses in understanding and complying with customs regulations, import/export laws, and trade compliance.Describe your firm's experience in customs law and how you can help clients navigate international trade laws and regulations.Highlight your services related to import/export compliance, tariff classification, and customs audits",
  //  },

  //  {
  //    name: "VAT Consultancy",
  //    details:
  //      "Value Added Tax (VAT) consultancy involves advising businesses on VAT-related issues, such as registration, compliance, and reclaiming VAT.Explain your expertise in VAT regulations and how you can help businesses with VAT registration, compliance, and VAT recovery.Provide information on VAT-related services, such as VAT planning, VAT refund claims, and representation during VAT audits.",
  //  },

  //  {
  //    name: "Books of Accounts Preparation",
  //    details:
  //      "Preparing books of accounts is a crucial aspect of financial management for any business or organization. Properly maintained books of accounts provide a clear and accurate picture of the financial health of the entity.Properly prepared books of accounts are essential for decision-making, financial planning, and reporting to stakeholders. If you're not familiar with accounting practices, it's advisable to seek the help of a professional accountant or bookkeeper to ensure your books are maintained accurately and in compliance with accounting standards and regulations.",
  //  },

  //  {
  //    name: "Joint Venture Work From Local to Foreign",
  //    details:
  //      "Expanding a local joint venture into a foreign market entails thorough market research, selection of a reliable local partner, adherence to foreign legal and regulatory requirements, a well-structured joint venture agreement, sound financial planning, and culturally-sensitive market entry strategies. Success hinges on adapting to local conditions, risk management, and ongoing monitoring, with preparedness for crisis management and exit strategies if needed.",
  //  },

  //  {
  //    name: "Fund Management With Banking,Finance,Insurance",
  //    details:
  //      "Fund management with banking, finance, and insurance represents a holistic approach to financial well-being. Banking institutions provide the foundation for fund storage and transactional needs. Financial services and advisors assist clients in investment decisions to maximize returns. Insurance companies offer protection against unforeseen events. Together, this ecosystem helps individuals and businesses safeguard and grow their financial resources, ensuring financial security and growth in an integrated manner.",
  //  },

  //  {
  //    name: "Marketing Agreements & Corporate Correspondence",
  //    details:
  //      "Marketing agreements define the terms of marketing collaborations, while corporate correspondence encompasses various written communications in a business. These agreements facilitate partnerships, delineate responsibilities, and ensure legal compliance, supporting effective marketing. Corporate correspondence, which includes emails, reports, and letters, plays a crucial role in maintaining internal and external communications, contributing to efficient business operations and professional relationships.",
  //  },

  //  {
  //    name: "Company Affairs With Register of Joint Stock Related Works",
  //    details:
  //      "Company affairs, particularly in the context of joint stock companies, involve a range of administrative and regulatory responsibilities. One key aspect is maintaining the Register of Joint Stock, which is a comprehensive record of a company's shareholders and their ownership details. This register is essential for tracking ownership changes, issuing dividends, and ensuring compliance with corporate laws. Managing company affairs in connection with the Register of Joint Stock includes tasks such as updating shareholder information, conducting shareholder meetings, issuing shares, and complying with relevant legal requirements. Accurate record-keeping in this area is crucial for transparency, legal compliance, and the smooth operation of joint stock companies.",
  //  },

  //  {
  //    name: "Parents",
  //    details:
  //      "Parents play a foundational role in the lives of their children, providing love, care, guidance, and support. They are responsible for nurturing and shaping the development of their offspring, instilling values, and offering protection. Parental roles vary but often encompass providing for basic needs, offering emotional and educational support, and being a source of stability and encouragement throughout a child's life. The relationship between parents and children is vital for personal growth and social development, and it often has a profound and lasting impact on individuals.",
  //  },

  //  {
  //    name: "Trade Mark Registration ",
  //    details:
  //      "Trademark registration is a vital step for businesses and individuals looking to safeguard their unique brand identities. It involves conducting a thorough search to ensure the chosen mark is distinct and not already in use. Once cleared, the trademark application is submitted to the appropriate government authority. Upon registration, which is often valid for a specific period, the trademark holder gains the exclusive right to use and protect their mark, ensuring that it remains a valuable asset and a critical component of their business strategy. This protection helps build brand recognition and maintain a competitive edge in the market.",
  //  },

  //  {
  //    name: "Copyright",
  //    details:
  //      "Copyright is a legal protection granted to the creators of original works, such as literary, artistic, musical, and intellectual creations. It grants creators exclusive rights to reproduce, distribute, display, and adapt their work. Copyright is automatically conferred upon the creation of a work, but it's advisable to register it with the relevant government authority, such as the U.S. Copyright Office, to assert and enforce those rights more effectively. Copyright safeguards the interests of creators and encourages the production of diverse and innovative content while providing the legal framework to protect against unauthorized use or reproduction of their work. Copyright typically lasts for the creator's lifetime plus 50 to 70 years, depending on the jurisdiction. ",
  //  },

  //  {
  //    name: "Trade Investment",
  //    details:
  //      "Trade investment, often known as foreign direct investment (FDI), involves allocating financial resources from one country into assets or projects in another. It serves purposes such as market expansion, resource acquisition, and diversification. Businesses and governments invest in foreign countries to access new markets, resources, and opportunities, fostering economic growth and technological transfer. Factors like economic stability, regulations, and market potential influence these cross-border investments, which play a significant role in the global economy.",
  //  },
  //];

  const [visibleLetters, setVisibleLetters] = useState(0);
  const slogan =
    "Our progress with yesterday's experience, today's reality and tomorrow's plan.";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prevVisibleLetters) => prevVisibleLetters + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="practice-back relative practice-content">
        <div
          className="absolute z-20 top-5 left-2 p-2  md:top-1/3 md:left-20 md:w-[500px] 
          lg:top-1/3 lg:left-28 lg:w-[850px]"
        >
          <h1 className="text-amber-500 text-3xl mt-1 font-bold md:text-5xl lg:text-5xl lg:font-medium uppercase">
            {slogan.slice(0, visibleLetters)}
            {visibleLetters === slogan.length && (
              <span className="text-transparent">_</span>
            )}
          </h1>
        </div>
        <div className="absolute z-10 top-0 h-[100%] w-full bg-black/70"></div>
      </div>
      <div className="p-10 mx-auto my-0  lg:w-[1200px]">
        <div className="mt-20">
          <h1 className="text-3xl text-center mt-4 font-bold md:font-bold lg:font-bold text-navyblue uppercase">
            OUR PRACTICE AREA
          </h1>
          <p className="text-gray-800 my-10 text-justify">
            Mustafizur Rahman & Associates is one of the Intellectual Property
            Law Firm in Bangladesh provides full intellectual property service,
            specifically, in the field of IP protection, enforcement relating to
            Patent, Trademark, Copyrights and other intellectual property
            rights. It is our commitment to good values that makes Mustafizur
            Rahman & Associates a reliable and professional intellectual
            property service provider. We have a group of professional team
            members who have extensive experiences and knowledge in field of
            intellectual property. We’re proud that our law firm offers world
            class legal services for a nationwide affordable pricing! our
            service is premium, but our pricing is budget friendly and
            reasonable. With us you’ll never feel like the lawyers are just
            robbers in suits, besides, we win 80% of all cases. So, with us,
            your chances of winning are as high as they possibly can be! We
            believe that quality should be affordable but not overcharged.
          </p>
         {practiceAreaData && practiceAreaData.data &&  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-y-28 md:mt-20">
            {practiceAreaData.data.map((practiceArea, i) => (
              <OnePractice key={i} practiceArea={practiceArea} />
            ))}
          </div>}
        </div>
      </div>
      <PracticeSolution />
      <ExpertLawer />
    </div>
  );
};

export default Practice;
