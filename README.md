# Inbox by Gmail Archive

This project archived the Inbox by Gmail introduction website. All assets were retrieved on October 25, 2019 from https://www.google.com/inbox/?hl=en-GB

## View

You can run a local server by running `yarn view`.

Finally, you can see the page working at http://localhost:8080

## Alteration Notes

- Replaced the included video player with a simple HTML 5 video modal (`assets/js/video-player.js` and `assets/css/video-player.css`)
- Replaced `watch-video` in `assets/js/main.min.js` with `old-watch-video` to prevent it from loading the internal YouTube video modal.
- Manually replaced any external links to  `href="#"`, and also disabled those links from scrolling to the top.
- Removed any tracking or telemetry scripting tags.

One of the font files seems to be corrupted, and at the time of archiving it was not working on the production website in Chrome either. This particular font is used in the archive view when it's accessed on a mobile device.
