import React, { useEffect, useState } from "react";
import Modal_userInteraction from "./Modal_userInteraction";
import Input_inputGrout from "./ui/Input_inputGrout";
import Users_userCard from "./Users_userCard";
import {
  useUser,
  useShouldUpdate,
  useModal,
  useDeleteModal,
  useDrawer,
} from "../global/state";
import { apiControl } from "../functions/crud";
import Modal_userCreated from "./ui/Modal_userCreated";
import Modal_userDeleted from "./ui/Modal_userDeleted";
import useInterval from "../hooks/useInterval";
import LottieEmpty from "./LottieEmpty";

const Home_screen = () => {
  const [response, setResponse] = useState(null);
  const shouldUpdate = useShouldUpdate();
  const modal = useModal();
  const deleteModal = useDeleteModal();
  const dots = useInterval(500, 3);
  const drawer = useDrawer();
  const user = useUser();

  useEffect(() => {
    apiControl
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setResponse(resp));
  }, [shouldUpdate.shouldUpdate]);

  const openDrawer = () => {
    drawer.setIsDrawerOpen(true);
  };

  return (
    <section id="home_screen" className="w-full  min-h-screen">
      <div
        id="control_pannel"
        className="w-full flex  py-20 md:py-20  px-4 md:px-40"
      >
        <h1 className="w-full font-bold text-5xl">Users</h1>
        <div id="modal_container" onClick={openDrawer}>
          <Modal_userInteraction text={<div className="btn btn-primary  flex justify-center items-center w-fit h-fit  rounded-lg">Create User</div>} />
        </div>
      </div>
      <div
        id="input_group_container"
        className="w-full flex justify-center items-center mb-20 px-4 md:px-40 "
      >
        <Input_inputGrout />
      </div>
      {/* users display area */}
      {modal.isModalOpen && <Modal_userCreated />}
      {deleteModal.isModalOpen && <Modal_userDeleted />}
      <div
        id="users_display_area"
        className="w-full flex justify-center items-center "
      >
        <div className="flex flex-wrap justify-center gap-10 mb-9">
          {response ? (
            response.data.map((user, index) => (
              <Users_userCard key={index} index={index} user={user} />
            ))
          ) : (
            <>
              <div className="mockup-code my-52">
                <pre data-prefix=">" className="text-warning">
                  <code>Fetching data from the API;</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code>This could take some minutes;</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code>Please wait;</code>
                </pre>
                <pre data-prefix="$" className="text-success">
                  <code>data loading{Array(dots).fill(".")}</code>
                </pre>
              </div>
              <div className="toast toast-top toast-start"></div>
            </>
          )}
          {response?.data && response.data.length < 1 &&  <LottieEmpty response={response} />}
        </div>
        {}
      </div>
      {/* modal to create new user  */}
    </section>
  );
};

export default Home_screen;
