import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export const connectToDB = async () => {
  // Enable strict query mode
  mongoose.set("strictQuery", true);

  // Return early if already connected
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Choose the appropriate URI based on the environment
  const mongoURI =
    process.env.NODE_ENV === "development"
      ? process.env.MONGODB_URI
      : process.env.MONGODB_URI_PROD;

  // Validate that we have a MongoDB URI to connect to
  if (!mongoURI) {
    const missingVar =
      process.env.NODE_ENV === "development"
        ? "MONGODB_URI"
        : "MONGODB_URI_PROD";
    throw new Error(`Missing environment variable: ${missingVar}`);
  }

  try {
    // Enable debug mode in development
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      dbName: "share_prompts",
    });

    isConnected = true;
    console.log(`MongoDB connected successfully to ${mongoURI}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};
