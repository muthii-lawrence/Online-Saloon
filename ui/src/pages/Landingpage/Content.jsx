import React from "react";
import { Card } from "antd";

import { MdCheckCircle } from "react-icons/md";

export const Content = ({ filter }) => {
  const cardData = [
    {
      id: 1,
      title: "Lawrence Murage",
      description:
        "Save 100% of your cash by choosing the Water-gift free water since our bottles are free to the public",
      status: "verified",
    },
    {
      id: 2,
      title: "Murage Lawrence",
      description:
        "Ten cents from each beverage is donated to charity to help and eradicate Global Goal number 1",
      status: "unverified",
    },
    {
      id: 3,
      title: "Lawrence",
      description:
        "Hair Dressing, Beauty Therapy, Facial Therapy, Massage Therapy, Nails Tech",
      status: "verified",
    },
    {
      id: 4,
      title: "Murage",
      description: "Lawrence Murage has just ordered for your massage services",
      status: "unverified",
    },
  ];

  const filteredData =
    filter === "all"
      ? cardData
      : cardData.filter((item) => item.status === filter);

  return (
    <>
      <div className="w-[100%] ">
        {" "}
        <p className="font-bold px-3">Trends</p>
        <div className="flex flex-wrap px-2 items-center justify-center md:justify-start gap-2 py-2">
          <div className="md:w-[20%] w-[48%] h0px] border border-pink-200 rounded h-fit bg-white ">
            <img
              src="/hair2.jpeg"
              className="w- h-[150px] flex object-center object-cover w-full rounded"
              alt=""
            />
            {/* Newset Hairstyle in town */}
          </div>{" "}
          <div className="md:w-[20%] w-[48%] h0px] border border-pink-200 rounded h-fit bg-white ">
            <img
              src="/Hair.jpeg"
              className="w- h-[150px] flex object-center object-cover w-full rounded"
              alt=""
            />
            {/* Newset Hairstyle in town */}
          </div>
          <div className="md:w-[20%] w-[48%] h0px] border border-pink-200 rounded h-fit bg-white ">
            <img
              src="/Nails.jpeg"
              className="w- h-[150px] flex object-center object-cover w-full rounded"
              alt=""
            />
            {/* Newset Nails in town */}
          </div>{" "}
          <div className="md:w-[20%] w-[48%] h0px] border border-pink-200 rounded h-fit bg-white ">
            <img
              src="/Facial.jpeg"
              className="w- h-[150px] flex object-center object-cover w-full rounded"
              alt=""
            />
            {/* Newset Facial in town */}
          </div>
        </div>
        <hr />
      </div>

      <div className="grid md:grid-cols-3 mt-10 md:mt-1 grid-cols-2 px-1 w-full overflow-x-hidden items-center justify-center gap-3">
        {filteredData.map((item) => (
          <a href="/id" key={item.id}>
            <div className="gap-my-">
              <div className="fle border-2 border-pink-300 rounded px-2 py-1 bg-white overflow-hidden">
                <div className="flex flex-col items-center text-start">
                  <img
                    className="md:w-[30%] w-[50%] rounded-full h-fit"
                    src="/Hair.jpeg"
                    alt={item.title}
                  />
                </div>
                <div className="py-2">
                  <h1 className="flex items-center font-extrabold text-[17px] text-pink-500 gap-1">
                    {item.title}

                    <p className=" py-2">
                      <MdCheckCircle
                        className={`${
                          item.status === "verified"
                            ? "text-blue-500 "
                            : "text-transparent"
                        }`}
                      />{" "}
                    </p>
                  </h1>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>{" "}
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
