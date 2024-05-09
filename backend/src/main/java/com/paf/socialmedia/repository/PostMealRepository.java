package com.paf.socialmedia.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.paf.socialmedia.document.PostMeal;

import java.util.List;

@Repository
public interface PostMealRepository extends MongoRepository<PostMeal,String> {
    List<PostMeal> findByUserId(String userId);
}
