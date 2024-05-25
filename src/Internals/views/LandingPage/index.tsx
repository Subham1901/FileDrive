import React from "react";
import Modal from "../../../components/Modal";

const LandingPage = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  function closeModal() {
    setShowModal((prev: boolean) => !prev);
  }

  return (
    <section className="bg-white h-screen dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          FileDrive
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          A secure storage for your files!
        </p>
        <div className="">
          <p className="text-white text-2xl">Register your account today!</p>
          <button
            onClick={() => setShowModal(true)}
            className="text-white bg-slate-500 border-none p-3 rounded-lg m-8"
          >
            Signup/Login
          </button>
          <div className="flex md:flex-row md:justify-center items-center">
            <div className="text-center m-2 p-2">
              <img
                className="h-24 md:h-72 object-cover"
                src="https://cdn-icons-png.freepik.com/512/9033/9033133.png"
                alt="Supports any type of file"
              />
              <p className="text-white text-md">Supports any type of file</p>
            </div>
            <div className="text-center m-2">
              <img
                className="h-24 md:h-72 object-cover"
                src="https://cdn-icons-png.flaticon.com/512/9423/9423093.png"
                alt="Cloud storage"
              />
              <p className="text-white text-md">Cloud storage</p>
            </div>
            <div className="text-center m-2">
              <img
                className="h-24 md:h-72 object-cover"
                src="https://cdn-icons-png.freepik.com/512/5442/5442202.png"
                alt="Send/Receive files"
              />
              <p className="text-white text-md">Send/Receive files</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        children={<p>Banda</p>}
        closeModal={closeModal}
        modalTitle="Registration"
        showModal={showModal}
      />
    </section>
  );
};

export default LandingPage;
