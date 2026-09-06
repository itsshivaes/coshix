---
title: "How to Create a Modern YouTube Video Playlist Player Using Pure JavaScript"
date: 2026-06-08
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7DxM4lMLARtg6vK1KOnzl9mJ83ZiE6vbQJyDTDJrJHwi7QFMmm5nV4A30XtiXlZVUZdSe4myO67JoeeieLMdwPu18IGZ_pxvZ99-IWKNGgWQxDdgc2Rq9hWvSbTVr-avwqBVwNbCJDN7SKqAgmNbQp028CTVG-FYZ5YDfg1qel_WeZBvZcJ9b1oo7EjIJ/s1600-rw/yt-video-player.webp"
categories: ["Web"]
tags: ["Web","Codes","Common","How To","YouTube Video Playlist Player","CSS","JavaScript","HTML","CSS Components","JavaScript Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7DxM4lMLARtg6vK1KOnzl9mJ83ZiE6vbQJyDTDJrJHwi7QFMmm5nV4A30XtiXlZVUZdSe4myO67JoeeieLMdwPu18IGZ_pxvZ99-IWKNGgWQxDdgc2Rq9hWvSbTVr-avwqBVwNbCJDN7SKqAgmNbQp028CTVG-FYZ5YDfg1qel_WeZBvZcJ9b1oo7EjIJ/s1600-rw/yt-video-player.webp)

Adding video content to your website is one of the **best ways to make it more engaging for users**. Embedding YouTube videos on websites is a common practise across blogs, educational websites, news websites, and entertainment websites. Adding a **YouTube player with a playlist section is one of the cleaner ways to add multiple YouTube videos to your website**.

In this guide, you will learn how to create a **modern YouTube playlist player using pure CSS and JavaScript**, which means it does not rely on any external frameworks. This player includes features like YouTube Thumbnail, playlist navigation, search function, play-next controls, etc. As it uses pure CSS and JavaScript, **everything will remain lightweight and performance-friendly**.

Whether you are running an entertainment website or any other type of website, this player helps you to embed multiple YouTube videos more efficiently. By following this guide carefully, you will learn to add a modern YouTube video playlist player to your website. So, without wasting much time, let's check how it works and how to implement it in your website.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Features of This YouTube Video Playlist Player

*   Built using Pure CSS and JavaScript
*   Auto YouTube Video Thumbnail preview
*   Video controls
*   Custom video titles
*   Live search within the playlist
*   Copy video link function
*   Active video highlight
*   Modern and responsive design
*   Modern loading animation
*   Playlist video count display
*   Dark mode support
*   Smooth animation

## Modern YouTube Video Playlist Player Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/06/modern-yt-player.html)

**Useful Guides for you:**

*   [How to Add a Modern Music Player in Your Website Using Pure CSS & JavaScript](/2026/05/modern-music-player.html)
*   [How to Add Eye Care Mode in Your Website Using Pure CSS & JavaScript](/2026/05/eye-care-mode-css-javascript.html)
*   [How to make a Keyless Domain License System using Blogger](/2026/04/keyless-license-system.html)

## How to Add This Modern YouTube Video Playlist Player to Your Website

1.  Go to your webpage HTML file (example: index.html). If you are using Blogger, go to your [Blogger dashboard](https://www.blogger.com), then click the "**Theme**" option, then click the **drop-down menu** next to the "**Customise**" button, then click the "**Edit HTML**" option.

### Adding CSS for YouTube Video Playlist Player

3.  Find the `</head>` tag, paste the following CSS just above it and wrap it inside `<style></style>`. If you are using Blogger, then paste the following CSS just above. `]]></b:skin>`.

```
/* CSS For Modern YT Player (source:www.coshix.in) */
.ytPlayer{
  --bg:#f5f7fb;
  --card:#fff;
  --text:#111827;
  --primary:#6750a4;
  --border:#e2e2e2;
  --active:#ede7ff;
  --active-hover:#e3dbff;
}
/* Dark mode start (Remove if not using)*/  
.dark-mode .ytPlayer{
--bg:#0f1117;
--card:#181c24;
--text:#f3f4f6;
--primary:#8b6cff;
--border:#2a2f3a;
--active:rgba(139,108,255,.18);
--active-hover:rgba(139,108,255,.28);
}
/* Dark mode end */
.ytPlayer{display:grid;grid-template-columns:2fr 1fr;gap:24px;max-width:1300px;margin:auto}
.playerArea,.playlistArea{background:var(--card);border-radius:6px;overflow:hidden;border:1px solid var(--border);box-shadow:0 8px 30px rgba(0,0,0,.08)}
.playerArea{position:relative}
#player{width:100%;aspect-ratio:16/9;border:none;display:block}
.controls{display:flex;gap:40px;padding:16px;flex-wrap:wrap;justify-content:center}
.controls button{border:none;background:var(--primary);color:#fff;padding:12px 18px;border-radius:100px;cursor:pointer;transition:.3s}
.controls button:hover{transform:translateY(-2px)}
.playlistHeader{padding:18px;border-bottom:1px solid var(--border)}
#search{width:100%;padding:12px;border-radius:6px;box-sizing:border-box;border:1px solid var(--border);outline:none;color:#3f3e3e}
#count{display:block;margin-top:10px;font-size:13px;opacity:.7}
.playlist{max-height:600px;overflow:auto}
.videoItem{display:flex;gap:12px;padding:12px;cursor:pointer;transition:.3s;border-bottom:1px solid var(--border)}
.videoItem:hover{background:var(--active-hover)}
.videoItem.active{background:var(--active)}
.videoItem img{width:120px;height:68px;object-fit:cover;border-radius:6px;flex-shrink:0}
.videoTitle{font-size:14px;font-weight:600;line-height:1.4}
.videoCover{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:6px 6px 0 0;cursor:pointer}
.videoCover img{width:100%;height:100%;object-fit:cover;display:block}
.videoCover::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.1))}
.playBtn{display:flex;align-items:center;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;border:none;border-radius:50%;background:#6750a4;color:#fff;font-size:30px;cursor:pointer;z-index:2;transition:.3s}
.playBtn:hover{transform:translate(-50%,-50%) scale(1.1)}
.playBtn svg{width:36px;height:36px;stroke:#fff;fill:none;stroke-width:1.5}
.ChxVBtn{display:flex;align-items:center;justify-content:center;gap:8px}
.ChxVBtn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}
.videoInfo{position:absolute;left:24px;bottom:24px;z-index:2;color:#fff}
.nowPlaying{display:inline-block;padding:4px 10px;border-radius:50px;background:#6750a4;font-size:12px;margin-bottom:10px}
.videoInfo h2{color:#fff!important;margin:0;font-size:24px}
.hide{opacity:0;visibility:hidden}
.loader{position:absolute;inset:0;background:rgba(255,255,255,.9);display:flex;justify-content:center;align-items:center;z-index:5;transition:.4s}
.loader.hide{opacity:0;visibility:hidden}
.loaderCircle{width:48px;height:48px;border:4px solid #ddd;border-top-color:var(--primary);border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
/* Responsive */
@media(max-width:900px){
.ytPlayer{grid-template-columns:1fr;gap:16px}
.playerArea,.playlistArea{border-radius:6px}
.videoCover{border-radius:6px 6px 0 0}
.videoCover::after{pointer-events:none}
.playBtn{width:60px;height:60px}
.playBtn svg{width:28px;height:28px}
.videoInfo{left:12px;right:12px;bottom:2px}
.nowPlaying{font-size:11px;padding:4px 8px;margin-bottom:8px}
.videoInfo h2{font-size:18px;line-height:1.3;margin:0}
.controls{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px}
.controls button{width:100%;margin:0;padding:12px 10px;font-size:14px}
.videoItem{gap:10px;padding:10px}
.videoItem img{width:80px;height:48px;border-radius:4px}
.videoTitle{font-size:13px;line-height:1.4}
.playlist{max-height:400px}
.playlistHeader{padding:14px}
#search{padding:10px;font-size:14px}
#count{font-size:12px;margin-top:8px}
.controls button,.playBtn,.videoItem{-webkit-tap-highlight-color:transparent;touch-action:manipulation}
.playBtn{z-index:10}
.videoInfo{pointer-events:none}
.controls{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px}
#prevBtn{order:1}#nextBtn{order:2}#copyBtn{order:3;grid-column:1/-1;max-width:180px;margin:auto}
.loader{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:20;padding-bottom:140px}
.loaderCircle{width:40px;height:40px;border-width:3px}
}
```

### Main Code for YouTube Video Playlist Player

6.  If you are using Blogger, save the HTML and open the post or page where you want to display the YouTube video playlist player. Then switch to **HTML view** and paste the following code. If you are using a normal website, paste the following code anywhere inside the `<body></body>` tag where you want the player to appear.

```
<!--[ Modern YT Player (Source:www.coshix.in) ]-->
<div class="ytPlayer">
<!-- Player Area -->
<div class="playerArea">

  <div class="videoCover" id="videoCover">
    <!-- Video Thumbnail -->
    <img id="coverImg" alt="Thumbnail">
   <!-- Video Play Button -->
    <button class="playBtn" id="playBtn" aria-label="Play Video">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14"/><path d="M4.93 4.93c-3.91 3.91-3.91 10.24 0 14.14"/><path d="M8.7 21.41c1.07.37 2.18.55 3.3.55s2.23-.17 3.3-.55"/><path d="M8.7 2.59c1.07-.37 2.18-.55 3.3-.55s2.23.18 3.3.55"/><path d="M8.74 10.33c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89"/></svg>
</button>
   <!-- Video Info -->
    <div class="videoInfo">
      <span class="nowPlaying">NOW PLAYING</span>
      <h2 id="currentTitle"></h2>
    </div>
  </div>
  <!-- Loader -->
  <div class="loader hide" id="loader">
    <div class="loaderCircle"></div>
  </div>
  <!-- YT iframe -->
  <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen id=player referrerpolicy=strict-origin-when-cross-origin style=display:none width=100%></iframe>
  <!-- Controls -->
  <div class="controls">
    <button id="prevBtn" class="ChxVBtn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.27 7.39 16.42 5c1.7-.98 3.83.24 3.83 2.21v9.57c0 1.96-2.13 3.19-3.83 2.21l-4.15-2.39-4.15-2.4c-1.7-.98-1.7-3.43 0-4.41"/><path d="M3.76 18.18V17"/><path d="M3.76 14V5.82"/></svg>
<span>Previous</span>
</button>
    <button id="copyBtn" class="ChxVBtn">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12.9C2 9.4 3.4 8 6.9 8h4.2C14.6 8 16 9.4 16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1"/><path d="M22 11.1c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9"/></svg>
<span>Copy Link</span>
</button>
    <button id="nextBtn" class="ChxVBtn">
<span>Next</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.73 7.38982 7.57999 4.99981C5.87999 4.01981 3.75 5.2398 3.75 7.2098V16.7798C3.75 18.7398 5.87999 19.9698 7.57999 18.9898L11.73 16.5998 15.88 14.1998C17.58 13.2198 17.58 10.7698 15.88 9.78981"/><path d="M20.2402 18.18V17"/><path d="M20.2402 14.0003V5.82031"/></svg>
</button>
  </div>

</div>
<!-- Playlist Area start -->
  <div class="playlistArea">
    <!-- Header Area (Search, Video Count)-->
    <div class="playlistHeader">
      <input type="text" id="search" placeholder="Search videos...">
      <span id="count"></span>
    </div>
    <!-- Playlist View -->
    <div class="playlist" id="playlist"></div>
  </div>
<!-- Playlist Area end -->
</div>
<script>//JS for Modern YT Player (Source:www.coshix.in)
const videos = [
{
id:"Video_1_ID",
title:"Video 1 title"
},
{
id:"Video_2_ID",
title:"Video 2 title"
},
{
id:"Video_3_ID",
title:"Video 3 title"
}
];
/* Risky edit section */const player=document.getElementById("player"),playlist=document.getElementById("playlist"),search=document.getElementById("search"),loader=document.getElementById("loader");let current=0;function loadVideo(e){current=e;const t=videos[e];document.getElementById("coverImg").src=`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`,document.getElementById("currentTitle").textContent=t.title,document.querySelectorAll(".videoItem").forEach((t,n)=>{t.classList.toggle("active",n===e)}),player.src&&(player.src=`https://www.youtube.com/embed/${t.id}?autoplay=1&rel=0&modestbranding=0`)}function renderPlaylist(e=""){playlist.innerHTML="",videos.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())).forEach(e=>{const t=videos.findIndex(t=>t.id===e.id);playlist.insertAdjacentHTML("beforeend",`\n<div class="videoItem"\nonclick="loadVideo(${t})">\n\n<img\nloading="lazy"\nsrc="https://img.youtube.com/vi/${e.id}/mqdefault.jpg"\nalt="${e.title}">\n\n<div>\n<div class="videoTitle">\n${e.title}\n</div>\n</div>\n\n</div>\n`)}),document.getElementById("count").textContent=`${videos.length} Videos`}document.getElementById("prevBtn").onclick=()=>{current=(current-1+videos.length)%videos.length,loadVideo(current)},document.getElementById("nextBtn").onclick=()=>{current=(current+1)%videos.length,loadVideo(current)},document.getElementById("copyBtn").onclick=()=>{navigator.clipboard.writeText(`https://youtu.be/${videos[current].id}`),alert("Video link copied!")},search.addEventListener("input",e=>{renderPlaylist(e.target.value)}),renderPlaylist(),loadVideo(0),document.getElementById("playBtn").onclick=()=>{loader.classList.remove("hide"),player.src=`https://www.youtube.com/embed/${videos[current].id}?autoplay=1&rel=0&modestbranding=1`,document.getElementById("videoCover").style.display="none",player.style.display="block",setTimeout(()=>{loader.classList.add("hide")},1e3)};
</script>
```

**Note:** Don't forget to edit the blue background highlighted important sections to make it function properly.

### Adding More Videos to The Playlist

10.  To add more videos to the playlist, copy an existing array block in JavaScript, add a comma after the existing array block, paste the copied block just below the existing array block after the comma, then replace the **video ID** and **video title** with yours.

**Example:**  
  
**Before:**

```
{
id:"Video_1_ID",
title:"Video 1 title"
},
{
id:"Video_2_ID",
title:"Video 2 title"
}
```

**After:**

```
{
id:"Video_1_ID",
title:"Video 1 title"
},
{
id:"Video_2_ID",
title:"Video 2 title"
},
{
id:"Video_3_ID",
title:"Video 3 title"
}
```

## How to Get YouTube Video ID

1.  Go to the YouTube video that you need to embed in your website
2.  Click the video share button
3.  Click the "**Copy link**" option
4.  Paste the copied link somewhere in your device (eg, Notepad)
5.  Observe the link, in the link after the `https://youtu.be/` and before the `?` is the video ID.

![Find Video ID](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjk-WhyphenhyphenngcHLVHz-GNQS5DuKa8xpe9flsI5ibD2iyf2i48k1FAVZcAQzV8XbylBrIwTQrRXnL3Ik_u5ps3lDQlpgl68gVCR3b9LaWG2rkoHsqwxIxyNtHpG7uxbbR39idjS10l7BYByybvcU8wTq6quITXb2IMSdkmTmqF22QO9iiDH2ellp3wJAEFf02JF/s1600-rw/yt-video-id.webp)

## How This Modern YouTube Playlist Player Works

This YouTube playlist player works by storing video information in a JavaScript array, where each video contains a YouTube video ID and a video title. When the user switches the video from the playlist, the JavaScript automatically update the playing video without the need for a page refresh, which creates a smooth and interactive experience for users.

  

This player includes a dynamic playlist, which automatically displays a video list by reading stored information in the array. It provides functionality like next, previous and copy link. It also highlights the currently playing video in the playlist. Users can browse videos and search for videos quickly, and can also switch between videos with a single click.

  

The CSS provide style to this player, which includes its layout, colours, responsiveness, animation, corner radius, etc. Since it was built with pure CSS and JavaScript without using external libraries, the player remains performance-friendly and easy to modify according to your requirements.

## FAQ (Frequently Asked Questions)

Does this YouTube playlist player work on mobile devices?

Yes, the player is fully responsive and works properly on both desktop and mobile devices.

Can I add my own YouTube videos?

Yes, simply replace the sample video IDs and titles inside the JavaScript videos array with your own YouTube videos.

Does this player support video search?

Yes, users can search for videos using the built-in search box.

Does this player support dark mode?

Yes, the player includes dark mode styles.

## Conclusion

A custom YouTube video playlist player can **make videos easier to organise, browse and manage directly from the website instead of embedding multiple videos one by one**. The main approach of it creates a centralised viewing experience where visitors can quickly switch between videos easily and well-organised.

  

One of the biggest advantages of this YouTube playlist video player is that it is **easy to modify according to your requirements**, as there are **no encrypted scripts**. New videos can be added to a playlist within seconds by editing JavaScript. The **built-in search function improves the usability** by helping visitors to easily find the video they are looking for from the playlist.

  

Whether you are making a custom HTML template, video gallery or any other HTML projects, **you can easily adopt design and functionality to suit your needs**. I hope this tutorial helps you to implement a modern YouTube video playlist player on your website. If you have any doubts related to this guide, don't forget to drop a comment below. If you like tutorials like this, please feel free to explore [this website](/). Thanks for visiting, and have a nice day!