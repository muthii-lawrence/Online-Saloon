// import React, { useState, useEffect } from "react";
// import { IoMdClose } from "react-icons/io";

// const AllCategories = ({ onClose }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const showModal = (message) => {
//     setModalMessage(message);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div className=" z-10 overflow-hidden fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded-sm">
//         <h2 className="text-2xl md:text-start text-center font-bold mb-4 py-2">
//           Choose Your Location
//         </h2>
//         <form action="" id="subs" method="post">
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               County
//             </label>
//             <select
//               required
//               id="country"
//               name="data[country]"
//               className="p-2 mt-1 w-full text-sm focus:border-blue-400 focus:outline-none focus border border-gray-300"
//             >
//               <option value="" className="font-poppins">
//                 Select
//               </option>
//               <option></option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-800 text-sm font-bold mb-2"
//               htmlFor="phone"
//             >
//               Cities
//             </label>
//             <select
//               required
//               id="country"
//               name="data[country]"
//               className="p-2 mt-1 w-full text-sm focus:border-blue-400 focus:outline-none focus border border-gray-300"
//             >
//               <option value="" className="font-poppins">
//                 Select
//               </option>
//               <option></option>
//             </select>
//           </div>
//           <button
//             value="Submit"
//             id="Submit"
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md
//             hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </form>
//         {modalVisible && (
//           <div className="fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white border border-gray-300 z-50">
//             <p>{modalMessage}</p>
//             <button
//               onClick={closeModal}
//               className="bg-blue-500 border-2 border-[#868484] text-white p-2 rounded mt-4"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </div>
//       <button
//         className="absolute md:top-1/4 top-20 text-[30px] md:text-[40px] right-[27px] md:right-1/4 border border-white p-1 text-white bg-none "
//         onClick={onClose}
//       >
//         <IoMdClose />
//       </button>
//     </div>
//   );
// };

// export default AllCategories;

import React, { useState } from "react";
import { Table, Modal, Button } from "antd";

const Learners = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const showModal = (learner) => {
    setModalData(learner);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
    setIsModalVisible(false);
  };

  const rows = [
    {
      title: "Action",
      render: (key, record) => (
        <Button type="link" onClick={() => showModal(record)}>
          <p>show more </p>
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      learnerProfile: "Alex Mwangi",
    },
  ];

  return (
    <div>
      <div className="align-items-right mt-20"></div>

      <Modal
        title="Learner Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {modalData && (
          <div layout="vertical" initialValues={modalData} onFinish={() => {}}>
            <div>my message</div>
          </div>
        )}
      </Modal>
      <div>
        <Table columns={rows} dataSource={data} style={{ marginTop: "16px" }} />
      </div>
    </div>
  );
};

export default Learners;
