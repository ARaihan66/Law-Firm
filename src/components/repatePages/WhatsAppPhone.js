import React from "react";
import phone from "../../assets/Phone (2).png";
import Whatsapp from "../../assets/whatsApp.png";

const WhatsAppPhone = () => {
  return (
    <div className="fixed bottom-10">
      <div>
        <div className="block md:hidden">
          <a href="tel:+8801704843884" target="blank" alt="phone">
            <div>
              <img
                src={phone}
                alt=""
                srcset=""
                className="w-[50px] h-[50px] bg-white rounded-full"
              />
            </div>
          </a>
        </div>
        <div>
          <a
            href="http://wa.me/+8801704843884"
            target="blank"
            rel="noopener noreferrer"
            alt="whatsApp"
          >
            <div>
              <img
                src={Whatsapp}
                alt=""
                srcset=""
                className="w-[50px] h-[50px] mt-2"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPhone;
