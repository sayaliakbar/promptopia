"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const params = useParams();
  const userId = params.id;

  const [posts, setPosts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (userId) fetchPosts();
  }, [userId]);

  const handleEdit = (post) => {
    router.push(`/update-prompt/?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);

        if (response.ok) {
          setPosts(posts.filter((p) => p._id !== post._id));
        }
      } catch (error) {
        console.error("Failed to delete prompt:", error);
      }
    }

    return;
  };

  return (
    <Profile
      userId={userId}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
