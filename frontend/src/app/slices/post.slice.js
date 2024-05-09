import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deletePostById,
  getPostById,
  getPosts,
  getPostsByUserId,
  likePostById,
  savePost,
  updatePostById,
  savePostWorkout,
  getWorkoutPosts,
  getWorkoutPostById,
  updateWorkoutPostById,
  deleteWorkoutPostById,

  savePostMeal,
  getMealPosts,
  getMealPostById,
  updateMealPostById,
  deleteMealPostById,
  likeMealPostById,
} from "../actions/post.actions";

const getPostByIdFunc = (posts, postId) => {
  const result = posts.filter(function (el) {
    return el.id === postId;
  });

  return result ? result[0] : null; // or undefined
};

const postSlice = createSlice({
  name: "post",
  initialState: {
    selectedPost: null,
    posts: [],
    workoutPosts: [],
    mealPosts: [], // New state for meal posts
  },
  reducers: {
    getPostToShareById: (state, action) => {
      state.selectedPost = getPostByIdFunc(state.posts, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Reducers for regular posts
    builder.addCase(savePost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
      toast.success("Post Added");
    });
    builder.addCase(savePost.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.selectedPost = action.payload;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getPostsByUserId.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPostsByUserId.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updatePostById.fulfilled, (state, action) => {
      state.posts = state.posts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Post Edited");
    });
    builder.addCase(updatePostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(likePostById.fulfilled, (state, action) => {
      state.posts = state.posts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    });
    builder.addCase(likePostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deletePostById.fulfilled, (state, action) => {
      state.posts = state.posts.filter((x) => x.id !== action.payload);
      toast.success("Post Deleted");
    });
    builder.addCase(deletePostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });

    // Reducers for workout posts
    builder.addCase(savePostWorkout.fulfilled, (state, action) => {
      state.workoutPosts = [...state.workoutPosts, action.payload];
      toast.success("Workout Post Added");
    });
    builder.addCase(savePostWorkout.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getWorkoutPostById.fulfilled, (state, action) => {
      state.selectedPost = action.payload;
    });
    builder.addCase(getWorkoutPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getWorkoutPosts.fulfilled, (state, action) => {
      state.workoutPosts = action.payload;
    });
    builder.addCase(getWorkoutPosts.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateWorkoutPostById.fulfilled, (state, action) => {
      state.workoutPosts = state.workoutPosts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Workout Post Edited");
    });
    builder.addCase(updateWorkoutPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteWorkoutPostById.fulfilled, (state, action) => {
      state.workoutPosts = state.workoutPosts.filter((x) => x.id !== action.payload);
      toast.success("Workout Post Deleted");
    });
    builder.addCase(deleteWorkoutPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });

    // Reducers for meal posts
    builder.addCase(savePostMeal.fulfilled, (state, action) => {
      state.mealPosts = [...state.mealPosts, action.payload];
      toast.success("Meal Post Added");
    });
    builder.addCase(savePostMeal.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getMealPostById.fulfilled, (state, action) => {
      state.selectedPost = action.payload;
    });
    builder.addCase(getMealPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(getMealPosts.fulfilled, (state, action) => {
      state.mealPosts = action.payload;
    });
    builder.addCase(getMealPosts.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(updateMealPostById.fulfilled, (state, action) => {
      state.mealPosts = state.mealPosts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      toast.success("Meal Post Edited");
    });
    builder.addCase(updateMealPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(deleteMealPostById.fulfilled, (state, action) => {
      state.mealPosts = state.mealPosts.filter((x) => x.id !== action.payload);
      toast.success("Meal Post Deleted");
    });
    builder.addCase(deleteMealPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
    builder.addCase(likeMealPostById.fulfilled, (state, action) => {
      state.mealPosts = state.mealPosts.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    });
    builder.addCase(likeMealPostById.rejected, (state, action) => {
      toast.error("Something went wrong");
    });
  },
});

export const { getPostToShareById } = postSlice.actions;

export default postSlice.reducer;
