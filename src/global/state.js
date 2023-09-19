import { create } from "zustand";

export const useUser = create((set) => ({
  total_users: 0,
  user_api_data: '',
  id: "$NO_DATA",
  email: "$NO_DATA",
  password: "$NO_DATA",
  first_name: "$NO_DATA",
  last_name: "$NO_DATA",
  birthday: "$NO_DATA",
  image_url: "$NO_DATA",
  setTotal_users: (value)=>set({total_users: value}),
  setUser_api_data: (value)=>set({user_api_data: value}),
  setId: (id) => set({id: id }),
  setEmail: (email) => set({email: email }),
  setPassword: (password) => set({password: password }),
  setFirst_name: (fist_name) => set({fist_name: fist_name }),
  setLast_name: (last_name) => set({last_name: last_name }),
  setBirthday: (birthday) => set({birthday: birthday }),
  setImage_url: (image_url) => set({image_url: image_url }),
}));

export const useShouldUpdate = create((set) => ({
  shouldUpdate: 0,
  setShouldUpdate: (value) =>set({shouldUpdate: value})
}))
export const useDrawer = create((set)=>({
  editElementId: null,
  isDrawerOpen : false,
  drawerAction : 'Create',
  setIsDrawerOpen : (value) => set({isDrawerOpen: value}),
  setDrawerAction: (value) => set({drawerAction: value}),
  setEditElementId: (value) => set({editElementId: value})
}))
export const useModal = create((set)=>({
  isModalOpen: false,
  modalAction: null,
  setIsModalOpen: (value) => set({isModalOpen: value}),
  setModalAction: (value) => set({modalAction: value})
}))

export const useDeleteModal = create((set)=>({
  isModalOpen: false,
  setIsModalOpen: (value) => set({isModalOpen: value})
}))

export const useDeletion = create((set)=>({
  confirmDeletion:'',
  deletionId:'',
  setConfirmDeletion: (value) => set({confirmDeletion: value}),
  setDeletionId: (value) => set({deletionId: value})
}))