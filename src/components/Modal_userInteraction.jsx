import { useForm } from "react-hook-form";
import AcademloLogo from "../assets/logo.png";
import { printDataInScreen } from "../functions/printDataInScreen";
import { useDrawer, useModal, useShouldUpdate, useUser } from "../global/state";
import { apiControl } from "../functions/crud";
import { showModal } from "../functions/showModal";
import { useState } from "react";

const Modal_userInteraction = ({ text }) => {
  const user = useUser();
  const shouldUpdate = useShouldUpdate();
  const modal = useModal();
  const drawer = useDrawer();
  const [drawerStatus, setDrawerStatus] = useState(false)
  /* Uso del hook RHF */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  
  const onSubmit = (data) => {
    console.log("me estoy ejecutando en el onsubmit");
    console.log(drawer.drawerAction)
    const url = "https://users-crud.academlo.tech/users/";

    drawer.drawerAction === "Create" &&
      apiControl.post(url, data).then((resp) => {
        shouldUpdate.setShouldUpdate(shouldUpdate.shouldUpdate + 1);
        printDataInScreen(resp.data, user);
        showModal(modal);
        const body = document.querySelector("body");
        body.setAttribute("style", "overflow:hidden");
      });

    drawer.drawerAction === "Edit" &&
      apiControl.patch(url + drawer.editElementId + "/", data).then((res) => {
        shouldUpdate.setShouldUpdate(shouldUpdate.shouldUpdate + 1);
        shouldUpdate.setShouldUpdate(shouldUpdate.shouldUpdate - 1);
        drawer.setIsDrawerOpen(false);
      });
  };

  const closeDrawer = () => {
    drawer.setIsDrawerOpen(false);
    console.log(drawer.isDrawerOpen)
    console.log(shouldUpdate.shouldUpdate)
    drawer.setDrawerAction("Create");
  };
  /* Render */
  return (
    <div className="drawer drawer-end z-10">
      <input
        id="my-drawer"
        type="checkbox"
        checked={drawer.isDrawerOpen}
        className="drawer-toggle"
      />
      <div className="flex justify-end">
      <div className="drawer-content flex justify-center items-center w-fit h-fit  rounded-sm ">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          {text}
        </label>
      </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-slate-200 text-base-content">
          {/* Sidebar content here */}
          <h3 className="text-lg font-bold">{drawer.drawerAction} user</h3>
          {/* Form */}
          <p>Please fill the form before proceeding.</p>
         
          {/* ___ */}
          <form onSubmit={handleSubmit(onSubmit)} className="px-5 my-16">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="User's email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />{" "}
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              type="password"
              placeholder="User's Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />{" "}
            <label htmlFor="last_name">User's first name</label>
            <input
              id="first_name"
              type="text"
              placeholder="User's first name"
              className="input input-bordered w-full max-w-xs"
              {...register("first_name")}
            />{" "}
            <label htmlFor="last_name">User's last name</label>
            <input
              id="last_name"
              type="text"
              placeholder="User's last name"
              className="input input-bordered w-full max-w-xs"
              {...register("last_name")}
            />{" "}
            <label htmlFor="birthday">User's birthday</label>
            <input
              id="birthday"
              type="date"
              placeholder="User's birthday"
              className="input input-bordered w-full max-w-xs"
              {...register("birthday")}
            />{" "}
            <label htmlFor="url">User's profile picture</label>
            <div id="combo_input_select_container" className="flex ">
              <input
                id="url"
                type="text"
                placeholder="Url of profile pic"
                className="input input-bordered w-[80%] max-w-xs"
                {...register("image_url")}
              />
              <select
                className="select select-bordered w-[20%] max-w-xs"
                {...register("image_url")}
              >
                <option disabled selected>
                  Or select a preloaded one.
                </option>
                <option
                  value={
                    "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=740&t=st=1694905024~exp=1694905624~hmac=542b3fb1aecf0a5c14b7b4e5e9e14fed27982a7cf81c257fcf23dde3f5c866f8"
                  }
                >
                  Hombre1
                </option>
                <option
                  value={
                    "https://cdn.pixabay.com/photo/2023/03/14/22/11/mahabalipuram-7853259_1280.jpg"
                  }
                >
                  Batman
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full max-w-xs mt-5"
            >
              {drawer.drawerAction}
            </button>
            <button
              type="button"
              disabled={shouldUpdate.shouldUpdate<=0 ? true : false}
              className="btn btn-error w-full max-w-xs mt-5"
              onClick={closeDrawer}
            >
              Close
            </button>
          </form>
          {shouldUpdate.shouldUpdate<=0 && <p className="text-red-500">*If there are no users, you won't be able to close this window until you add at least one.</p>}
          <img src={AcademloLogo} alt="Academlo Logo" className="px-20" />
        </ul>
      </div>
    </div>
  );
};
export default Modal_userInteraction;
