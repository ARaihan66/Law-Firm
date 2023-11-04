import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Example - you can use any HTTP library

// Client comment data fetching
export const fetchCommentData = createAsyncThunk(
  "data/fetchCommentData",
  async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/comment/get");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// FAQ data fetching
export const fetchFaqData = createAsyncThunk("data/fetchFaqData", async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/faq/get");
    return response.data;
  } catch (error) {
    throw error;
  }
});


// Practice area data fetching
export const fetchPracticeAreaData = createAsyncThunk("data/fetchPracticeAreaData", async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/practice/get");
      return response.data;
    } catch (error) {
      throw error;
    }
  });

// Practice area data fetching
export const fetchAdvocateData = createAsyncThunk("data/fetchAdvocateData", async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/advocate/get");
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Slice to manage data state
const dataSlice = createSlice({
  name: "data",
  initialState: {
    commentData: [],
    faqData: [],
    practiceAreaData:[],
    advocateData:[],
    loading: false,
    error: null,
  },
  reducers: {
    // Additional reducers can be added if needed
  },
  extraReducers: {
    [fetchCommentData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCommentData.fulfilled]: (state, action) => {
      state.loading = false;
      state.commentData = action.payload;
    },
    [fetchCommentData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchFaqData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchFaqData.fulfilled]: (state, action) => {
      state.loading = false;
      state.faqData = action.payload;
    },
    [fetchFaqData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [fetchPracticeAreaData.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchPracticeAreaData.fulfilled]: (state, action) => {
        state.loading = false;
        state.practiceAreaData = action.payload;
      },
      [fetchPracticeAreaData.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },

      [fetchAdvocateData.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchAdvocateData.fulfilled]: (state, action) => {
        state.loading = false;
        state.advocateData = action.payload;
      },
      [fetchAdvocateData.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
  },
});

export default dataSlice.reducer;
