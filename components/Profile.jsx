import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";

const Profile = ({ userId, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession();

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {userId === session?.user.id ? "My" : "User"} Profile
        </span>
      </h1>
      <p className="desc text-left">
        {userId === session?.user.id
          ? "Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
          : "Welcome to this user's profile page. Explore their exceptional prompts and get inspired by their creativity"}
      </p>
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
