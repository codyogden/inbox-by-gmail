# Inbox by Gmail Archive

This project archived the Inbox by Gmail introduction website. All assets were retrieved on October 25, 2019 from https://www.google.com/inbox/. This repo and the accompanying website are provided to archive the page which no longer exists for research and commentary by user experience, product professionals, and general public interest.

## View Locally

You can run a local server by running `yarn view`.

Finally, you can see the page working at http://localhost:8080

## Change Notes

Some small changes to the original page had to be fulfilled to ensure the site continues working without bugs or other issues.

- Added a `muted` attribute to the `video.logo-video` HTML element to prevent a DOMException error which causes the site to fail to load.
- Replaced the included video player with a simple HTML 5 video modal (`assets/js/video-player.js` and `assets/css/video-player.css`) to preserve the video should the YouTube mirror be deleted.
- Replaced `watch-video` in `assets/js/main.min.js` with `old-watch-video` to prevent it from loading the internal YouTube video modal. Hid the `old-watch-video` element because it is no longer needed.
- Manually replaced any external links to  `href="#"`. Also disabled those links from scrolling to the top. This prevents any confusion that this website is part of Google as users are unable to leave or sign in.
- Removed any tracking or telemetry scripting tags.

One of the font files seems to be corrupted, and at the time of archiving it was not working on the production website in Chrome either. This particular font is used in the archive view when it's accessed on a mobile device.
