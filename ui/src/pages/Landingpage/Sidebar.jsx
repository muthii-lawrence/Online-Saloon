import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocationPopUp from "./LocationPopUp";
import { IoArrowRedo } from "react-icons/io5";
import { Modal, Button } from "antd";
import {
  MdOutlineRadioButtonUnchecked,
  MdDoubleArrow,
  MdOutlineRadioButtonChecked,
} from "react-icons/md";

const Sidebar = ({ onFilterChange }) => {
  const [locationPopUp, setLocationPopUp] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = [
    "Beauty Therapy",
    "Massage Therapy",
    "Facial Therapy",
    "Hair Styling",
    "Nail Art",
    "Skin Care",
    "Makeup Artistry",
    "Spa Treatments",
    "Laser Hair Removal",
    "Body Treatments",
  ];

  const showCategoriesModal = () => {
    setModalData(categories); // Set the categories to be shown in the modal
    setModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false); // Hide the modal
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Update the selected filter state
    onFilterChange(filter); // Notify the parent component to filter the content
  };
  const handlePriceChange = () => {
    setSelectedPrice();
  };

  const showLocationPopUp = () => {
    setLocationPopUp(true);
  };

  const closeLocationPopUp = () => {
    setLocationPopUp(false);
  };

  return (
    <div>
      <div className="font-bold font-serif text-[20px] bg-[#da1b9e] px-4 py-2 border border-pink-600 text-white">
        Categories
      </div>
      <div className="bg-pink-50 border border-pink-300 px-4 py-2">
        <p className="text-gray-800">Beauty Therapy | 3</p>
        <p className="text-gray-600">Massage Therapy | 4</p>
        <p className="text-gray-400">Facial Therapy | 1</p>
        <p className="text-gray-300">Hair Styling | 2</p>
        <p>
          <span
            onClick={showCategoriesModal}
            className="flex items-center cursor-pointer justify-center pt-3 hover hover:text-blue-600"
          >
            Show all | {categories.length}
          </span>
        </p>
      </div>
      <div
        onClick={showLocationPopUp}
        className="bg-pink-50 border border-pink-300 px-4 my-1 flex justify-between py-1"
      >
        <div className="cursor-pointer">
          <p className="font-bold">Location</p>
          <p className="flex items-center gap-2">
            Nairobi{" "}
            <span>
              <MdDoubleArrow />
            </span>{" "}
            CBD
          </p>
        </div>
        <div>
          <Link>
            <IoArrowRedo className=" w-[35px] h-[35px] flex items-center justify-center pt-3 text-pink-500 hover hover:text-blue-600 text-[20px]" />
          </Link>
        </div>
      </div>
      <div className="bg-pink-50 border border-pink-300 px-4 py-2 my-1">
        <p className="font-bold py-2">Price Range</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="outline-none bg-white border border-pink-300 text-black px-2 py-1 w-[40%]"
            placeholder="min"
          />
          <input
            type="text"
            className="outline-none bg-white border border-pink-300 text-black px-2 py-1 w-[40%]"
            placeholder="max"
          />
        </div>
        <p className="text-neutral-800">Nails</p>
        <p className="text-neutral-600">Facial</p>
        <p className="text-neutral-400">Massage</p>
        <Link>
          <div className="flex items-center gap-4 pt-3">
            <p className="flex items-center md:px-4 hover hover:text-blue-600">
              Show all
            </p>
            <p>&gt;</p>
          </div>
        </Link>
      </div>
      <div className="bg-pink-50 border border-pink-300 px-4 py-2 my-1">
        <p className="font-bold py-1">Discounted</p>
        <div className="flex items-center gap-2 cursor-pointer">
          <MdOutlineRadioButtonChecked className="text-pink-500" />
          <p className="">Show all</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <MdOutlineRadioButtonUnchecked />{" "}
          <p onClick={handlePriceChange} className="">
            Discounted
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <MdOutlineRadioButtonUnchecked />
          <p onClick={handlePriceChange} className="">
            Undiscounted
          </p>
        </div>
      </div>
      <div className="bg-pink-50 border border-pink-300 px-4 py-2 my-1">
        <p className="font-bold py-1">Verified</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleFilterChange("all")}
        >
          {selectedFilter === "all" ? (
            <MdOutlineRadioButtonChecked className="text-pink-500" />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
          <p>Show all</p>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleFilterChange("verified")}
        >
          {selectedFilter === "verified" ? (
            <MdOutlineRadioButtonChecked className="text-pink-500" />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
          <p>Verified</p>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleFilterChange("unverified")}
        >
          {selectedFilter === "unverified" ? (
            <MdOutlineRadioButtonChecked className="text-pink-500" />
          ) : (
            <MdOutlineRadioButtonUnchecked />
          )}
          <p>Unverified</p>
        </div>
      </div>
      {locationPopUp && <LocationPopUp onClose={closeLocationPopUp} />}
      <Modal
        title="All Categories"
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <div>
          {modalData.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: "pointer", margin: "8px 0", color: "#007bff" }}
            >
              {category}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;

