// Copy this file to config.js and paste the Client ID from your GitHub OAuth App.
// See README / spec §8 for the one-time setup steps.
//
// IMPORTANT: Enable "Device Flow" on the OAuth App settings page. The client
// secret is NOT needed — this extension authenticates as a public client.

export const GITHUB_CLIENT_ID = "Ov23liREPLACE_ME_WITH_YOUR_CLIENT_ID";

// OAuth scopes requested during Device Flow. `repo` gives read+write access
// to private and public repos, which is required so users can push backups
// to either visibility.
export const GITHUB_SCOPES = "repo";
