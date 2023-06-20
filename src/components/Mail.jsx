import React, { useRef } from "react";
import Clipboard from "clipboard";

const Mail = () => {
  const copyButtonRef = useRef(null);

  const handleCopyClick = () => {
    // Use the clipboard package to copy the text to the clipboard
    const clipboard = new Clipboard(copyButtonRef.current, {
      text: () => "krishnakhanikarkhanikar.com",
    });
  };

  return (
    <div className="w-full h-full border-[0.63px] border-dashed border-[#B2B1B2] flex justify-center items-center px-[13.8px] py-[11.29px]">
      <div className="h-auto  flex items-center">
        {/* circle */}
        <div className="mr-[16.31px]">
          <div className="h-[28.23px] w-[28.23px] md:w-[45px] md:h-[45px] bg-[#F4B74773] rounded-full relative">
            <div className="h-[19px] w-[19px] md:h-[30.29px] md:w-[30.29px] border-[0.54px] border-[#F4B747] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"></div>
            <div className="h-[10.86px] w-[10.86px] md:h-[17.31px] md:w-[17.31px]  bg-[#F4B747] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"></div>
          </div>
        </div>

        {/* mail */}
        <h1 className="font-light font-GT_America_Trial text-sm md:text-[22px] leading-[26.4px] text-[#86939F] mr-[51.15px]">
          krishnakhanikarkhanikar.com
        </h1>

        {/* paste */}
        <button
          ref={copyButtonRef}
          onClick={() => handleCopyClick()}
          className="w-[32.7px] h-[32.7px] md:h-[52.13px] md:w-[52.13px] rounded-[2.1px] flex justify-center items-center bg-[#B2B1B224]"
        >
          <img src="icons/paste.svg" alt="" loading="lazy"/>
        </button>
      </div>
    </div>
  );
};

export default Mail;
