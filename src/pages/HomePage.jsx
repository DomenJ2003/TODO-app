import { useState, useEffect } from "react";
import Card from "../components/Card";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_BASE } from "../utils";
import {
  GET_POSTS_FAILURE,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from "../actions/types";

function HomePage() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_POSTS_START });
    axios
      .get(API_BASE + "posts")
      .then(function (response) {
        console.log(response);
        dispatch({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
      })
      .catch((err) => {
        alert("napaka");
        dispatch({ type: GET_POSTS_FAILURE });
      });
  }, []);

  return (
    <>
      <div className="row">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
