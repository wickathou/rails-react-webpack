import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: 'Welcome to the app! Click the button to fetch a random greeting.',
  loading: false,
  error: '',
}

const greetingUrl = 'http://127.0.0.1:3000';

export const fetchGreeting = createAsyncThunk(
  'greetings/get',
  async (_, thunkAPI) => {
    try {
      const greetingFetched = await fetch(greetingUrl, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
      })
      const res = await greetingFetched.json()
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);



const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting(state) {
      state.greeting = 'Welcome again!';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload.text
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
})

export const { setGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;