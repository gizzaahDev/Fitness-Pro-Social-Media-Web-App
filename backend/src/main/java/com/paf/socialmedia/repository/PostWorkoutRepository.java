package com.paf.socialmedia.repository;


import com.paf.socialmedia.document.PostWorkout;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostWorkoutRepository extends MongoRepository<PostWorkout,String> {
    List<PostWorkout> findByUserId(String userId);
}
