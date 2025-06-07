import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/user";

interface FavouritesState {
  items: User[];
}

const initialState: FavouritesState = {
  items: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    favourite: (state, action: PayloadAction<User>) => {
      const exists = state.items.find((u) => u.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    unFavourite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((u) => u.id !== action.payload);
    },
  },
});

export const { favourite, unFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
