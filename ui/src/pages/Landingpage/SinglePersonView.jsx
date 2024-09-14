import { Card } from "antd";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export const SinglePersonView = () => {
  return (
    <div className="mt-20 md:max-w-[70%] p-2 mx-auto bg-pink-50">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:col-span-">
          <Slider {...sliderSettings}>
            <div className="">
              <img
                src="/Nails.jpeg"
                alt="Nails"
                className="w-full h-[300px] cursor-zoom-in object-cover"
              />
            </div>
            <div className="">
              <img
                src="/Hair.jpeg"
                alt="Hair"
                className="w-full h-[300px] object-cover object-top"
              />
            </div>
          </Slider>
        </div>

        <div className=" grid md:grid-cols-2">
          <div className="flex flex-col items-center">
            <img
              src="/hair2.jpeg"
              alt="Profile"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="mt-4">
              <p className="text-center">[id.name]</p>
              <p className="text-center">
                Nairobi <br />
                <span className="p-4 flex text-start">
                  Located in Miayan Mall first floor Stall 17
                </span>
              </p>
            </div>
          </div>{" "}
          <div className="flex md:flex-col flex-row items-centr gap-[15%]">
            <button className=" md:my-0 w-[48%] md:w-full bg-pink-600 border border-pink-900 hover:bg-pink-400 hover:text-black text-white px-3 py-2 font-semibold rounded">
              Message
            </button>
            <button className=" bg-pink-600 w-[48%] md:w-full border border-pink-900 hover:bg-pink-400 hover:text-black text-white px-3 py-2 font-semibold rounded">
              Show Contact
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div className="px-6 max-w-[">
        <p className="px-6 my-4 font-bold flex justify-center">Services</p>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
          {/* Replace with actual services */}
          {Array(16)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="grid grid-cols-2">
                <p>Nails</p> <p>Price: 300</p>
              </div>
            ))}
        </div>
      </div>

      <hr className="text-black my-2" />

      <div className="p-4">
        <p className="font-bold text-[20px] font-serif underline">
          Comments and Feedback
        </p>
        <div className="p-2">
          <Card>
            <p>user.comment</p> <p>picture.[user]</p>
            <p>name.[user]</p>
          </Card>
          <Card>
            <p>user.comment</p> <p>picture.[user]</p>
            <p>name.[user]</p>
          </Card>
          <Card>
            <p>user.comment</p> <p>picture.[user]</p>
            <p>name.[user]</p>
          </Card>
        </div>
        <div className="flex flex-col px-2">
          <p className="text-[16px] font-bold my-2">Add a Comment</p>
          <textarea
            name="message"
            id="message"
            className="my-2 px-2 py-1 md:w-[50%] w-full outline-none border border-rose-400 focus:ring-blue-400"
          ></textarea>
          <button className="flex justify-start w-fit bg-rose-600 text-white px-4 py-1 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
