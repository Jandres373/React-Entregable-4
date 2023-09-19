import React, { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { HiTrash } from "react-icons/hi";
import { showModal } from "../functions/showModal";
import {
  useDeleteModal,
  useDeletion,
  useDrawer,
  useModal,
  useShouldUpdate,
  useUser,
} from "../global/state";
import { apiControl } from "../functions/crud";
import Modal_userInteraction from "./Modal_userInteraction";

const Users_userCard = ({ index, user }) => {
  const deleteModal = useDeleteModal();
  const deletion = useDeletion();
  const shouldUpdate = useShouldUpdate();
  const modal = useModal();
  const drawer = useDrawer();
  const apiUser= useUser()

  useEffect(() => {
    const deleteFromDB = () => {
      const url = "https://users-crud.academlo.tech/users/";
      if (deletion.confirmDeletion && user.id === deletion.deletionId) {
        apiControl.delete(url + deletion.deletionId + "/").then((res) => {
          shouldUpdate.setShouldUpdate(shouldUpdate.shouldUpdate - 1);
          deleteModal.setIsModalOpen(false);
        });
        deletion.setConfirmDeletion(false);
      }
    };
    deleteFromDB();
  }, [deletion.confirmDeletion]);

  function handleDelete(id) {
    showModal(deleteModal);
    const body = document.querySelector("body");
    body.setAttribute("style", "overflow:hidden");
    deletion.setDeletionId(id);
  }

  function editUser(id) {
    drawer.setEditElementId(id);
    drawer.setDrawerAction("Edit");
    drawer.setIsDrawerOpen(true);
    apiUser.setUser_api_data(user)
  }

  return (
    <div className="indicator">
      {index === user?.data?.lenght - 2 && (
        <span className="indicator-item badge badge-success p-3 font-bold text-md ">
          newest
        </span>
      )}

      <div className="grid place-items-center ">
        <div
          id="user_card"
          className="w-[350px] md:w-[500px] h-96 rounded-2xl flex justify-between overflow-hidden shadow-lg bg-white "
        >
          <div id="card_image" className="w-[45%] ">
            <img src={user.image_url} />
          </div>
          <div id="card_text" className="w-[50%] py-5 pr-5">
            <h2 className="card-title ">User ID {user.id}</h2>
            <hr />
            <div
              id="card_user_info_and_buttons"
              className="flex flex-col justify-between h-full pb-5 "
            >
              <div id="card_user_info">
                <p className="text-gray-400 mt-5 ">
                  Email: <br />{" "}
                  <span className="font-bold text-black ml-5">
                    {user.email}
                  </span>
                </p>
                <p className="text-gray-400">
                  Password: <br />{" "}
                  <span className="font-bold text-black ml-5">
                    {"********"}
                  </span>
                </p>
                <p className="text-gray-400">
                  First name: <br />{" "}
                  <span className="font-bold text-black ml-5">
                    {user.first_name}
                  </span>
                </p>
                <p className="text-gray-400">
                  Last name: <br />{" "}
                  <span className="font-bold text-black ml-5">
                    {user.last_name}
                  </span>
                </p>
                <p className="text-gray-400 ">
                  Birthday: <br />{" "}
                  <span className="font-bold text-black ml-5">
                    {user.birthday}
                  </span>
                </p>
              </div>
              <div className="card-actions justify-end"></div>
              <div
                id="card_buttons_container"
                className="flex gap-1 justify-end"
              >
                
                  <Modal_userInteraction
                  editUser={editUser}
                  userId={user.id}
                  className="max-w-5 bg-red-50"
                  text={
                    <div className="btn btn-primary  flex justify-center items-center w-fit h-fit  rounded-lg" onClick={() => editUser(user.id)}><CiEdit
                    className="text-2xl"
                    /></div> 
                  }
                />
               

                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(user.id)}
                >
                  <HiTrash className="text-3xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users_userCard;
