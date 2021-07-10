import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LoadingDotsIcon from "./LoadingDotsIcon";

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
  }, []);

  if (isLoading) return <LoadingDotsIcon/>;
  return (
    <div className="list-group">
      {posts.map((post) => {
        const date = new Date(post.createdDate);
        const dateFormatted = `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`;
        return (
          <Link
            key={post._id}
            to={`/post/${post._id}`}
            className="list-group-item list-group-item-action"
          >
            <img className="avatar-tiny" src={post.author.avatar} />{" "}
            <strong>{post.title}</strong>{" "}
            <span className="text-muted small">on {dateFormatted} </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfilePosts;
