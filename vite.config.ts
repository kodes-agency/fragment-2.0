import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import env from 'dotenv'

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "100-35",
            project: "fragment-bg",
            authToken: process.env.SENTRY_AUTH_TOKEN,
        }
    }), sveltekit()]
});