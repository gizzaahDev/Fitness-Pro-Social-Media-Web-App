import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTAPI } from "../apis/post.api";

// Existing async thunks for regular posts
export const savePost = createAsyncThunk("post/savePost", async (data) => {
  const response = await POSTAPI.savePost(data);
  return response.data;
});

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const response = await POSTAPI.getPosts();
  return response.data;
});

export const getPostById = createAsyncThunk("post/getPostById", async (id) => {
  const response = await POSTAPI.getPostById(id);
  return response.data;
});

export const getPostsByUserId = createAsyncThunk(
  "post/getPostsByUserId",
  async (id) => {
    const response = await POSTAPI.getPostsByUserId(id);
    return response.data;
  }
);

export const updatePostById = createAsyncThunk(
  "post/updatePostById",
  async (data) => {
    const response = await POSTAPI.updatePostById(data.id, data);
    return response.data;
  }
);

export const likePostById = createAsyncThunk(
  "post/likePostById",
  async (data) => {
    const response = await POSTAPI.likePostById(data.id, data);
    return response.data;
  }
);

export const deletePostById = createAsyncThunk(
  "post/deletePostById",
  async (id) => {
    const response = await POSTAPI.deletePostById(id);
    return id;
  }
);

// New async thunks for workout posts
export const savePostWorkout = createAsyncThunk("post/savePostWorkout", async (data) => {
  const response = await POSTAPI.savePostWorkout(data);
  return response.data;
});

export const getWorkoutPosts = createAsyncThunk("post/getWorkoutPosts", async () => {
  const response = await POSTAPI.getWorkoutPosts();
  return response.data;
});

export const getWorkoutPostById = createAsyncThunk("post/getWorkoutPostById", async (id) => {
  const response = await POSTAPI.getWorkoutPostById(id);
  return response.data;
});

export const updateWorkoutPostById = createAsyncThunk("post/updateWorkoutPostById", async (data) => {
  const response = await POSTAPI.updateWorkoutPostById(data.id, data);
  return response.data;
});

export const deleteWorkoutPostById = createAsyncThunk("post/deleteWorkoutPostById", async (id) => {
  await POSTAPI.deleteWorkoutPostById(id);
  return id;
});

export const likeWorkoutPostById = createAsyncThunk(
  "post/likeWorkoutPostById",
  async (data) => {
    const response = await POSTAPI.likeWorkoutPostById(data.id, data);
    return response.data;
  }
);

// New async thunks for meal posts
export const savePostMeal = createAsyncThunk("post/savePostMeal", async (data) => {
  const response = await POSTAPI.savePostMeal(data);
  return response.data;
});

export const getMealPosts = createAsyncThunk("post/getMealPosts", async () => {
  const response = await POSTAPI.getMealPosts();
  return response.data;
});

export const getMealPostById = createAsyncThunk("post/getMealPostById", async (id) => {
  const response = await POSTAPI.getMealPostById(id);
  return response.data;
});

export const updateMealPostById = createAsyncThunk("post/updateMealPostById", async (data) => {
  const response = await POSTAPI.updateMealPostById(data.id, data);
  return response.data;
});

export const deleteMealPostById = createAsyncThunk("post/deleteMealPostById", async (id) => {
  await POSTAPI.deleteMealPostById(id);
  return id;
});

export const likeMealPostById = createAsyncThunk(
  "post/likeMealPostById",
  async (data) => {
    const response = await POSTAPI.likeMealPostById(data.id, data);
    return response.data;
  }
);
