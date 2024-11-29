## Problem Statement

-> create a music app on which user can create a room and with the room id everyone can join the room and add the music of their choice to the playlist of the room.

-> only the user with admin access can start and pause the music.

-> the app should be responsive and should work on all devices.

-> the app should be secure and should not allow the unauthorized access to the room.

-> the users can upvote or downvote the song in the playlist.

-> once the song is finished that song cannot be played again for next 20 minutes.

-> the songs get suffled based on the upvotes and downvotes.

-> the user with admin access can also remove the song from the playlist. or if 90% of users in the room downvote the song then the song will be removed from the playlist.

## Tech Stack

- [ ] FRONTEND : Nextjs14
- [ ] BACKEND : FIRESTORE + NEXTJS API ROUTES -> connected to SPOTIFY API and YOUTUBE API
- [ ] STYLING : TAILWIND CSS + SHADCNUI
- [ ] AUTHENTICATION : CLERK AUTH
- [ ] REALTIME : FIREBASE REALTIME DATABASE
- [ ] HOSTING : VERCEL
- [ ] DEPLOYMENT : CI/CD PIPELINE GITHUB ACTIONS

## Features

- [ ] Create Room
- [ ] Join Room
- [ ] Add Song to Room Playlist
- [ ] Upvote/Downvote Song in Room Playlist song
- [ ] Admin can Start/Pause/Skip/Remove Song from Playlist
- [ ] Responsive Design
- [ ] Secure Authentication and Authorization
- [ ] Realtime Collaboration
- [ ] Efficient Server-Side Rendering (SSR)
- [ ] Optimized Image Handling
- [ ] Error Handling and User Feedback
- [ ] Testing and Debugging
- [ ] SHUFFLING -> based on the upvotes and downvotes
- [ ] RESTRICTING SONG PLAY -> once the song is finished that song cannot be played again for next 20 minutes.
