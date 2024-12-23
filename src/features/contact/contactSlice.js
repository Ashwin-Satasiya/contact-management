import { createSlice } from "@reduxjs/toolkit";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("contacts");
  return data ? JSON.parse(data) : [];
};

const initialState = {
  value: getDataFromLocalStorage(),
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.value) || []);
    },
    editContact: (state, action) => {},
    deleteContact: (state, action) => {},
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
