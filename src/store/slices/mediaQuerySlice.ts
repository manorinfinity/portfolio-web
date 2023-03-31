import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MediaQuery {
  mobile: boolean,
  tablet: boolean,
  desktop: boolean,
  xldisplay: boolean,
}

const initialState: MediaQuery = {
    mobile: false,
    tablet: false,
    desktop: true,
    xldisplay: false,
}

export const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState,
  reducers: {
    update: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = mediaQuerySlice.actions

export default mediaQuerySlice.reducer