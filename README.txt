DIGITAL WEDDING INVITATION - STARTER DEMO

WHAT WORKS NOW
- Responsive wedding invitation page
- Countdown timer (edit date/time in script.js)
- Event schedule and Google Maps search link
- WhatsApp RSVP button (replace phone number)
- Video player placeholder (works after adding your MP4)

WHAT YOU NEED TO CUSTOMISE
1. Open index.html and change names, story, date, timings and venue.
2. Replace the hero and memory placeholders with approved couple photos.
   Easiest: add image files into assets/ and use:
   <img src="assets/couple.jpg" alt="The couple">
3. Add a short MP4 named couple-video.mp4 inside assets/.
4. Change the WhatsApp link phone number in index.html.
5. Change the wedding date in script.js. JavaScript months start at 0
   (December = 11). The countdown uses the visitor's device local time.
6. Optional music: add assets/music.mp3 and insert this inside body:
   <audio controls loop><source src="assets/music.mp3" type="audio/mpeg"></audio>
   Browsers generally block autoplay with sound; let guests press Play.

HOW TO RUN
- Unzip this folder.
- Open index.html in Chrome to preview. No Python installation is needed.
- Spyder is a Python IDE; it is not required for this first static website.
  You can use Spyder later for a Flask backend, admin page or database.
- If you want to edit HTML/CSS comfortably, use a text/code editor.

PUBLISH A FREE DEMO WITH GITHUB PAGES
1. Create/sign in to GitHub.
2. Create a new public repository, for example wedding-invite-demo.
3. Upload index.html, style.css, script.js and the assets folder.
4. In repository Settings > Pages, choose deploy from branch, select main
   and root folder, then Save.
5. Wait for GitHub Pages to publish and copy the public URL.
   Test that URL on another phone/mobile data before sharing.

PRIVACY / CUSTOMER SAFETY
- Get the couple's permission before uploading photos, videos, names or event details.
- Ask whether the invitation should be public or shared only with selected guests.
- Do not publish home addresses, private phone numbers or sensitive details without consent.
- Public GitHub Pages sites can be viewed by anyone with the URL and may be indexed.
- Avoid uploading large videos to GitHub. Use an authorised video host with
  appropriate privacy settings, or a hosting plan that supports media.
- A WhatsApp RSVP link opens a chat; it does not create a private RSVP database.
- Remove customer media after the agreed retention period and keep a backup only
  with the customer's permission.

BUSINESS NOTE
This is a static demo. It has no secure admin login, database, payment gateway,
automated customer form, or private RSVP dashboard yet. Add these only after
validating demand and learning what customers need.
