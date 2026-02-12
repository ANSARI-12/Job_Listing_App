# Job Listing App

A React-based job listing application built with Vite, featuring job search, filtering by location and type, and a responsive design.

## Features

- Search jobs by title
- Filter jobs by location (All, Remote, On-site, Hybrid)
- Filter jobs by type (All, Internship, Full-time)
- Responsive grid layout for job cards
- Built with React and Vite for fast development

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd job-listing-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

This app is deployed on Vercel. You can view the live version here: [Vercel Deploy Link](https://your-vercel-deploy-link.vercel.app)

To deploy your own version:

1. Push your code to a Git repository (e.g., GitHub).
2. Connect your repository to Vercel.
3. Vercel will automatically build and deploy your app.

## Technologies Used

- React
- Vite
- Tailwind CSS (for styling)
- ESLint (for code linting)

## Project Structure

```
job-listing-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Filters.jsx
│   │   └── JobCard.jsx
│   ├── data/
│   │   └── jobs.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.
