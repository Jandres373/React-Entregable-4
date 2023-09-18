import React from "react";
import { showModal } from "../../functions/showModal";
import { useDrawer, useModal } from "../../global/state";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lottie from "../../assets/animation_lmn2q3oc.json";

const Modal_userCreated = () => {
  const modal = useModal();
  const drawer = useDrawer()

  const closeModal = (seond) => {
    drawer.setIsDrawerOpen(false)
    showModal(modal);
    const body = document.querySelector("body");
    body.setAttribute("style", "overflow-y:scroll");
  };

  return (
    <div
      id="modal_user_created_container"
      className="absolute w-screen h-screen z-40 top-0 transparent grid items-center justify-center"
    >
      <div className=" relative text-center text-white text-3xl bg-green-500 w-[700px] h-64 rounded-2xl flex justify-center items-center">
        <p>
          User has been created!
          <button
            className=" hover:bg-red-600 bg-red-500 rounded-md px-5 py-1 my-2 mx-2 absolute top-0 right-0 z-50"
            onClick={closeModal}
          >
            X
          </button>
        </p>
        <Player
          autoplay
          keepLastFrame
          src={lottie}
          style={{ height: "250px", width: "250px" }}
        >
          <Controls
            visible={false}
          />
        </Player>
      </div>
    </div>
  );
};

export default Modal_userCreated;
