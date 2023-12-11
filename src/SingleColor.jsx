import React, { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const SingleColor = ({ rgb, code, i }) => {
  // console.log(rgb)
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);
  return (
    <>
      <div className="col-lg-3">
        <div
          style={{
            background: `rgb(${rgb})`,
          }}
          className="p-1 my-1 card"
        >
          {copied ? (
            <IoCheckmarkDone size={30} color={i > 10 ? "white" : "black"} />
          ) : (
            <MdContentCopy
              size={30}
              color={i > 10 ? "white" : "black"}
              onClick={() => {
                navigator.clipboard.writeText(`#${code}`);
                setCopied(true);
              }}
              cursor="pointer"
            />
          )}
          <h4 className={`p-5 text-center ${i > 10 && "text-white"}`}>
            #{code}
          </h4>
        </div>
      </div>
    </>
  );
};

export default SingleColor;
