"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(submitting);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(e);
    setIsSubmitting(false);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleFormSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor={type === "Create" ? "write-prompt" : "edit-prompt"}>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
        </label>

        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          name={type === "Create" ? "write-prompt" : "edit-prompt"}
          id={type === "Create" ? "write-prompt" : "edit-prompt"}
          placeholder="Write your prompt here..."
          required
          className="form_textarea"
        ></textarea>

        <label htmlFor={type === "Create" ? "write-tags" : "edit-tags"}>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span>(#product, #webdevelopment, #idea)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            name={type === "Create" ? "write-tags" : "edit-tags"}
            id={type === "Create" ? "write-tags" : "edit-tags"}
            placeholder="#tags"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-500 text-sm"
            disabled={isSubmitting}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {isSubmitting ? <span className="">Editing...</span> : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
