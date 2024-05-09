import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkoutPosts } from "../../app/actions/post.actions"; // Import the action to fetch workout posts
import PostCard from "../PostWorkoutCard"; // Import your PostCard component

function PostWorkoutCard() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const workoutPosts = useSelector((state) => state.post.workoutPosts);

  useEffect(() => {
    // Fetch workout posts when the component mounts
    dispatch(getWorkoutPosts())
      .then(() => setLoading(false)) // Set loading to false when data is fetched
      .catch(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  return (
    <div>
      <h1>Workout Posts</h1>
      {workoutPosts.length === 0 ? (
        <div>No Posts yet...</div>
      ) : (
        workoutPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

export default PostWorkoutCard;
