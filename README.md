# Promptopia

![Promptopia Logo](public/assets/images/logo.svg)

## AI Prompt Sharing Platform

Promptopia is an open-source AI prompting tool designed for the modern world. It allows users to discover, create, and share creative prompts for AI applications like ChatGPT, DALL-E, and more.

## Table of Contents

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

## Features

- **Discover AI Prompts**: Browse through a collection of creative prompts shared by the community
- **Create & Share**: Create your own prompts and share them with the world
- **User Profiles**: View profiles of prompt creators and their collections
- **Authentication**: Secure user authentication system
- **Responsive Design**: Modern UI that works across devices
- **CRUD Operations**: Create, read, update, and delete your prompts

## Demo

Visit the live demo: [Promptopia](https://promptopia-demo.vercel.app) (Note: Replace with actual demo link when available)

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn or pnpm or bun
- MongoDB (local or Atlas)

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/promptopia.git
cd promptopia
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables (see [Environment Variables](#environment-variables) section)

4. Run the development server:

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

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# OAuth Providers (choose the ones you need)
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

## Usage

### Browse Prompts

The home page displays a feed of prompts shared by users. You can:

- Search for specific prompts using the search bar
- Filter prompts by tags or categories
- Click on any prompt to see more details

### Create a Prompt

1. Login to your account
2. Click on "Create Prompt" in the navigation bar
3. Fill in the prompt details including the prompt text, tags, and whether it's public or private
4. Click "Submit" to publish your prompt

### User Profiles

Click on a user's name or avatar to view their profile, which includes:

- Their collection of prompts
- User information
- Follow button (if implemented)

## Project Structure

```
promptopia/
├── app/                  # Next.js App Router files
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── prompt/       # Prompt CRUD endpoints
│   │   └── users/        # User-related endpoints
│   ├── create-prompt/    # Create prompt page
│   ├── profile/          # User profile pages
│   ├── update-prompt/    # Update prompt page
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/           # React components
├── models/               # MongoDB schema models
├── public/               # Static assets
│   └── assets/           # Images and other assets
├── styles/               # CSS files
│   └── globals.css       # Global styles
├── utils/                # Utility functions
├── .env                  # Environment variables (not in repo)
└── next.config.js        # Next.js configuration
```

## API Documentation

### Authentication

- `POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoint

### Prompts

- `GET /api/prompt` - Get all prompts
- `POST /api/prompt/new` - Create a new prompt
- `GET /api/prompt/[id]` - Get specific prompt
- `PATCH /api/prompt/[id]` - Update specific prompt
- `DELETE /api/prompt/[id]` - Delete specific prompt

### Users

- `GET /api/users/[id]/posts` - Get all prompts by a specific user

## Technologies

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

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design
- Write tests for new features

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Troubleshooting & FAQs

### Common Issues

**Q: The app shows a white screen**  
A: Make sure you have set up all required environment variables correctly.

**Q: Authentication is not working**  
A: Verify your OAuth credentials and NEXTAUTH_SECRET in the .env file.

**Q: How do I reset my password?**  
A: Currently, the app uses OAuth providers for authentication, so password management is handled by those providers.

**Q: Can I use the app offline?**  
A: No, the app requires an internet connection to interact with the database and authentication services.

---

Built with ❤️ by Ali Akbar - Feel free to contact me for any questions or feedback!
