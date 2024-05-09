import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMealPosts } from "../../app/actions/post.actions"; // Import the action to fetch meal posts
import MealCard from "../PostMealCard"; // Import your MealCard component

function MealPosts() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // State to track loading status
  const mealPosts = useSelector((state) => state.post.mealPosts);

  useEffect(() => {

    dispatch(getMealPosts())
      .then(() => setLoading(false)) 
      .catch(() => setLoading(false)); 
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Meal Posts</h1>
      {mealPosts.length === 0 ? ( 
        <div>No Posts yet...</div>
      ) : (
        mealPosts.map((post) => (
          <MealCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

export default MealPosts;
