// Sanity configuration
// You'll need to replace these with your actual Sanity project details
// Get these from https://sanity.io/manage

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-16', // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: false, // disabled for fresh data during development
};
