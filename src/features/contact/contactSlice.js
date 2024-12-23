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
    editContact: (state, action) => {
      const index = state.value.findIndex(
        (data) => data.id === action.payload.id
      );

      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...action.payload };
      }
      localStorage.setItem("contacts", JSON.stringify(state.value) || []);
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter((data) => data.id !== action.payload);
      localStorage.setItem("contacts", JSON.stringify(state.value) || []);
    },
    searchContact: (state, action) => {
      state.value = state.value.filter(
        (data) =>
          data.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          data.email.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, editContact, deleteContact, searchContact } =
  contactSlice.actions;

export default contactSlice.reducer;
