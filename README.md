# Promptopia

![Promptopia](https://github.com/user-attachments/assets/4c12686b-2ea4-4217-8aa1-f3aae255bb78)

## 🤖 AI Prompt Sharing Platform

Promptopia is an open-source AI prompting tool designed for the modern world. It allows users to discover, create, and share creative prompts for AI applications like ChatGPT, DALL-E, and more.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Troubleshooting & FAQs](#troubleshooting--faqs)

## ✨ Features

- **Discover AI Prompts**: Browse through a collection of creative prompts shared by the community
- **Create & Share**: Create your own prompts and share them with the world
- **User Profiles**: View profiles of prompt creators and their collections
- **Authentication**: Secure user authentication system with Google OAuth
- **Responsive Design**: Modern UI that works across devices
- **CRUD Operations**: Create, read, update, and delete your prompts

## 🌐 Demo

Visit the live demo: [Promptopia](https://promptopia-rouge-rho.vercel.app/)

## 🛠️ Installation

### ✅ Prerequisites

- Node.js (v14.x or later)
- npm or yarn or pnpm or bun
- MongoDB (local or Atlas)

### 🚀 Setup Instructions

1. 📋 Clone the repository:

```bash
git clone https://github.com/yourusername/promptopia.git
cd promptopia
```

2. 📦 Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. 🔐 Set up environment variables (see [Environment Variables](#environment-variables) section)

4. 🚀 Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key

# Google OAuth
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 🔑 Obtaining Credentials

- **MongoDB URI**: Create a cluster on [MongoDB Atlas](https://www.mongodb.com/atlas/database) and get your connection string
- **Google OAuth credentials**: Create a project in the [Google Developer Console](https://console.developers.google.com/) and set up OAuth credentials

## 📖 Usage

### 🔍 Browse Prompts

The home page displays a feed of prompts shared by users. You can:

- Search for specific prompts using the search bar
- Filter prompts by tags or categories
- Click on any prompt to see more details

### 📝 Creating a Prompt

1. Log in with your Google account
2. Navigate to "Create Prompt" page
3. Fill in the prompt field, add tags, and select visibility options
4. Click "Create" to publish your prompt

### ⚙️ Managing Prompts

- View all your prompts in your profile page
- Edit or delete prompts from your profile
- Share prompts with others using the share button

### 👥 User Profiles

Click on a user's name or avatar to view their profile, which includes:

- Their collection of prompts
- User information
- Follow button (if implemented)

## 📁 Project Structure

```
promptopia/
├── app/                      # Next.js App Router files
│   ├── api/                  # API routes
│   │   ├── auth/             # Authentication API routes
│   │   ├── prompt/           # Prompt API routes
│   │   └── users/            # User API routes
│   ├── create-prompt/        # Create prompt page
│   ├── profile/              # User profile page
│   └── update-prompt/        # Update prompt page
├── components/               # React components
│   ├── Feed.jsx              # Prompt feed component
│   ├── Form.jsx              # Reusable form component
│   ├── Nav.jsx               # Navigation component
│   ├── Profile.jsx           # Profile component
│   └── PromptCard.jsx        # Individual prompt card component
├── models/                   # MongoDB models
│   ├── prompt.js             # Prompt schema
│   └── user.js               # User schema
├── public/                   # Static files
│   └── assets/               # Images and other assets
├── styles/                   # CSS styles
├── utils/                    # Utility functions
├── middleware.js             # Next.js middleware for route protection
├── next.config.js            # Next.js configuration
└── .env                      # Environment variables
```

## 📚 API Documentation

### 🔐 Authentication

- `GET/POST /api/auth/[...nextauth]` - Handle authentication with NextAuth

### 📊 Prompts

- `GET /api/prompt` - Get all prompts
- `POST /api/prompt` - Create a new prompt
- `GET /api/prompt/:id` - Get a specific prompt
- `PATCH /api/prompt/:id` - Update a specific prompt
- `DELETE /api/prompt/:id` - Delete specific prompt

### 👤 Users

- `GET /api/users/:id/posts` - Get all prompts by a specific user

## 💻 Technologies

- **Frontend**:

  - Next.js 13+ (App Router)
  - React
  - TailwindCSS
  - React Hooks

- **Backend**:

  - Next.js API Routes
  - MongoDB (database)
  - NextAuth.js (authentication)

- **Deployment**:
  - Vercel (recommended)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### 📏 Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design
- Write tests for new features

## 👤 Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ❓ Troubleshooting & FAQs

### 💡 Common Issues

**Q: The app shows a white screen**  
A: Make sure you have set up all required environment variables correctly.

**Q: Authentication is not working**  
A: Verify your Google OAuth credentials and NEXTAUTH_SECRET in the .env file.

**Q: How do I reset my password?**  
A: Currently, the app uses OAuth providers for authentication, so password management is handled by those providers.

**Q: Can I use the app offline?**  
A: No, the app requires an internet connection to interact with the database and authentication services.

**Q: How do I reset my database?**  
A: Connect to MongoDB and manually clear collections. For local development, you can delete the local MongoDB data directory.

**Q: My changes aren't showing up**  
A: Run `npm run build && npm start` to ensure you're using the latest build. Clear browser cache or try in incognito mode.

---

Built with ❤️ by Ali Akbar - Feel free to contact me for any questions or feedback!
