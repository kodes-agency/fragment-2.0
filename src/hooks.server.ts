import {sequence} from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import type { Handle } from '@sveltejs/kit';

Sentry.init({
    dsn: "https://f7fb1b1ade79c4d19165ffbaf77ad872@o4505962711220224.ingest.sentry.io/4505962716856320",
    tracesSampleRate: 1
})

export const handle = sequence(Sentry.sentryHandle(), (async ({ event, resolve }) => {
  const langParam = event.params.lang || "en"
  if(langParam){
    event.locals.locale = langParam
  }
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', langParam)
  });
}) satisfies Handle);

export const handleError = Sentry.handleErrorWithSentry();