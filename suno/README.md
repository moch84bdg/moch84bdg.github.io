# Suno Player

An unofficial, single-file web player for public [Suno](https://suno.com) playlists.
Paste a playlist link and listen in the browser — no account, no build step, no dependencies.

## Run it

```bash
npm start
# → http://localhost:3000
```

Or directly:

```bash
PORT=4173 node server.js
```

Requires Node.js 18 or newer (uses the built-in `fetch`).

## How it works

- `server.js` serves `index.html` and proxies Suno's playlist API. The browser can't
  call Suno directly because its API doesn't send CORS headers.
- Suno's newer audio files are AES-128-CTR encrypted and delivered as `m4a`/Opus.
  The server asks Suno's rights endpoint for the wrapped key and IV, unwraps them
  with AES-256-GCM, and decrypts the audio on the fly.
- Audio is streamed through `/api/audio/<clipId>` with HTTP Range support, so seeking
  works without downloading whole tracks first. Nothing is written to disk.
- Playlists, clips and keys are cached in memory for a few minutes.

## Features

- Playlists are curated by an admin (see below). The home page shows the admin's
  playlists: a new visitor picks one, a returning visitor gets their last-played
  playlist back automatically.
- Search tracks, including lyrics and prompts, and view details, tags, model and comments for each song.
- Queue drawer, shuffle, repeat one/all, playback speed, volume, mute.
- Keyboard shortcuts: `Space` play/pause, `←`/`→` seek, `N`/`P` next/previous,
  `M` mute, `S` shuffle, `R` repeat, `Q` queue.
- Remembers your last playlist and position in `localStorage`.
- Saves imported playlists, individual songs, and combined URL collections in the library.
- Responsive layout and Media Session integration (lock-screen controls).

## Admin

Playlist management lives at `/nugaduhna` and is protected by a PIN
(default `170884`, override with `ADMIN_PIN`):

```bash
ADMIN_PIN="your-pin" npm start
# → http://localhost:3000/nugaduhna
```

Admin features:

- Add, edit and delete playlists.
- Add songs to a playlist by pasting a Suno song URL (`https://suno.com/song/<id>`);
  the server fetches title, artist, cover and audio. Manual entries are also possible.
- Edit the app name, tagline, hero title/subtitle, eyebrow and footer shown on the
  public player.

Data is stored server-side in `config.json`, `playlists.json` and `comments.json`.
Visitors can comment on each song; leaving a name is optional.

## Private playlists

Public playlists work out of the box. For private ones, give the server a Suno
session token:

```bash
SUNO_TOKEN="your-suno-bearer-token" npm start
```

The token is only used server-side and is never sent to the browser.

## Notes

- This is an unofficial project and is not affiliated with Suno.
- Suno can change its API or encryption at any time; playback may break if it does.
- Please respect Suno's terms of service and the rights of the artists.
