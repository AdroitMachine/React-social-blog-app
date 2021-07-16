import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";
import Post from "./Post";

const ProfilePosts = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get(`/profile/${username}/posts`);
        console.log(response.data);
        setPosts(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("there was a problem");
      }
    }
    fetchPosts();
  }, [username]);

  if (isLoading) return <LoadingDotsIcon/>;
  return (
    <div className="list-group">
      {posts.map((post) => {
        <Post noAuthor={true} post={post} key={post._id}/>
      })}
    </div>
  );
};

export default ProfilePosts;
