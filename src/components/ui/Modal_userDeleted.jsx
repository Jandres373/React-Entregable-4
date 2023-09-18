import React from "react";
import { showModal } from "../../functions/showModal";
import { useDeleteModal, useDeletion, useModal } from "../../global/state";
import Toast_userDeleted from "./Toast_userDeleted";

const Modal_userDeleted = () => {
  const modal = useDeleteModal();
  const deletion = useDeletion()

  const closeModal = () => {
    const body = document.querySelector("body");
    body.setAttribute("style", "overflow-y:scroll");
    showModal(modal);
  };

  const userDeleted = () => {
    const body = document.querySelector("body");
    body.setAttribute("style", "overflow-y:scroll");
    deletion.setConfirmDeletion(true)
    /* deletionToast() */
    }


    const deletionToast = () => {

    }

  return (
    <div
      id="modal_user_created_container"
      className="fixed w-screen h-screen z-40 top-0 bg-white bg-opacity-80 grid items-center justify-center"
    >
      <div className=" relative text-center text-black text-3xl bg-slate-100 w-[700px] h-64 rounded-2xl flex justify-center items-center">
        <p>
          Are you sure you want to delete this user?
          <div id="button_group" >
            <button className="bg-green-500 mt-24 mr-5 px-5 py-1 rounded-2xl shadow-md text-white" onClick={closeModal}>Close</button>
            <button className="bg-red-500 px-5 py-1 rounded-2xl shadow-md text-white" onClick={userDeleted}>
              Delete user
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Modal_userDeleted;
