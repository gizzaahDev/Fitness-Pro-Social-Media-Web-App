import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const POSTAPI = {
    savePost: (data) => axios.post(`${BASE_URL}/api/posts`, data),
    
    getPosts: () => axios.get(`${BASE_URL}/api/posts`),
    getPostById: (id) => axios.get(`${BASE_URL}/api/posts/${id}`),
    getPostsByUserId: (id) => axios.get(`${BASE_URL}/api/posts/user/${id}`),
    updatePostById: (id, data) => axios.put(`${BASE_URL}/api/posts/${id}`, data),
    likePostById: (id, data) => axios.put(`${BASE_URL}/api/posts/like/${id}`, data),
    deletePostById: (id) => axios.delete(`${BASE_URL}/api/posts/${id}`),
    // New methods for workout posts
    savePostWorkout: (data) => axios.post(`${BASE_URL}/api/posts/workout`, data),
    getWorkoutPosts: () => axios.get(`${BASE_URL}/api/posts/workout`), // Get all workout posts
    getWorkoutPostById: (id) => axios.get(`${BASE_URL}/api/posts/workout/${id}`), // Get workout post by ID
    updateWorkoutPostById: (id, data) => axios.put(`${BASE_URL}/api/posts/workout/${id}`, data), // Update workout post by ID
    deleteWorkoutPostById: (id) => axios.delete(`${BASE_URL}/api/posts/workout/${id}`), // Delete workout post by ID
    likeWorkoutPostById: (id, data) => axios.put(`${BASE_URL}/api/posts/workout/like/${id}`, data),

// New methods for meal posts
    savePostMeal: (data) => axios.post(`${BASE_URL}/api/posts/meal`, data),
    getMealPosts: () => axios.get(`${BASE_URL}/api/posts/meal`), // Get all workout posts
    getMealPostById: (id) => axios.get(`${BASE_URL}/api/posts/meal/${id}`), // Get workout post by ID
    updateMealPostById: (id, data) => axios.put(`${BASE_URL}/api/posts/meal/${id}`, data), // Update workout post by ID
    deleteMealPostById: (id) => axios.delete(`${BASE_URL}/api/posts/meal/${id}`), // Delete workout post by ID
    likeMealPostById: (id, data) => axios.put(`${BASE_URL}/api/posts/meal/like/${id}`, data),
};
