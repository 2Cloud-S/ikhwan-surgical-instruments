import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'nki2834w',
    dataset: 'production',
  },
  autoUpdates: true,
  vite: (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: [/^@\//],
        },
      },
    };
  },
});
