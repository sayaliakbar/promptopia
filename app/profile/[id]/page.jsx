"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import PromptCard from "@/components/PromptCard";
import SkeletonCard from "@/components/SkeletonCard";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/users/${id}/posts`);
        const data = await response.json();

        setPosts(data);
        setUser(data?.[0].creator);
      } catch (error) {
        console.log("Error fetching user posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {id === session?.user.id
            ? "My Profile"
            : `${user.username}'s Profile`}
        </span>
      </h1>
      <p className="desc text-left">
        {id === session?.user.id
          ? "Welcome to your personalized profile page. View and manage your prompts."
          : `Explore ${user.username}'s collection of AI prompts and creative ideas.`}
      </p>

      {isLoading ? (
        <div className="mt-16 prompt_layout">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SkeletonCard key={item} />
          ))}
        </div>
      ) : (
        <div className="mt-16 prompt_layout">
          {posts.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit(post)}
              handleDelete={() => handleDelete(post)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyProfile;
