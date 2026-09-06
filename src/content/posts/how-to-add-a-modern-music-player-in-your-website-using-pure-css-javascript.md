---
title: "How to Add a Modern Music Player in Your Website Using Pure CSS & JavaScript"
date: 2026-06-01
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifl9poHX57N5VQ8pO-1J8H9DvPu-qhlqJTJi33wP6oLjvfvwg0gyW2En0MNLHLB85eYsE3kAHFyxSkvVgYlt1X4ieAZb1Jpph4ul1LuuJ9GGTfPCWXr4EJlRACNjiTmzom3JNPpakHwiWHaTLT2FbCl2ck3bqBrw0oLHW7lUjNw2moVLI3HnccAne5NH5i/s1600-rw/modern-music-player.webp"
categories: ["Codes"]
tags: ["Codes","Common","How To","Music Player","Web","CSS","JavaScript","HTML","CSS Components","JavaScript Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifl9poHX57N5VQ8pO-1J8H9DvPu-qhlqJTJi33wP6oLjvfvwg0gyW2En0MNLHLB85eYsE3kAHFyxSkvVgYlt1X4ieAZb1Jpph4ul1LuuJ9GGTfPCWXr4EJlRACNjiTmzom3JNPpakHwiWHaTLT2FbCl2ck3bqBrw0oLHW7lUjNw2moVLI3HnccAne5NH5i/s1600-rw/modern-music-player.webp)

If you are running a blog or music streaming website, adding a modern and advanced-level music player is **one of the best ways to make your website more interactive for users and to improve the browsing experience**. Instead of relying on third-party widgets, many developers like to go with pure coding, which gives full control over the element.

In this guide, you will learn to add a modern music player to your website using pure CSS and JavaScript. The player includes **features such as multiple songs, a previous/next button, a replay button, and an up-next song view**. Everything will remain **lightweight and performance-friendly** as this music player doesn't rely on any external libraries.

Since the design and functionality of this music player use pure code, **you can easily customise** colours, animations, layouts, controls and other stuff according to your requirements. **Interactive elements play a major role in bringing users to the website**, and one of the interactive elements is a music player. So without wasting much time, let's check how it works and how to add this music player to your website.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Features of Music Player

*   Built with pure CSS and JavaScript
*   Modern and responsive design
*   Multiple songs support
*   Songs list display
*   Active song highlighting
*   Play and pause controls
*   Previous and next track navigation
*   Repeat mode support
*   Song progress bar
*   Song duration display
*   Smooth animations and transitions
*   No external libraries usage
*   Lightweight and performance-friendly
*   Easy to customise

## Music Player Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/05/music-player.html)

**Useful Guides for you:**

*   [How to Add Smart Health Reminder Toast Notifications in Website Using JavaScript](/2026/05/smart-health-toast.html)
*   [How to Add Eye Care Mode in Your Website Using Pure CSS & JavaScript](/2026/05/eye-care-mode-css-javascript.html)
*   [How to make a Keyless Domain License System using Blogger](/2026/04/keyless-license-system.html)

## How to Add This Music Player to Your Website

1.  Go to your webpage HTML file (example: index.html). If you are using Blogger, go to your [Blogger dashboard](https://www.blogger.com), then click the "**Theme**" option, then click the **drop-down menu** next to the "**Customise**" button, then click the "**Edit HTML**" option.

### Adding CSS for Music Player

3.  Find the `</head>` tag, paste the following CSS just above it and wrap it inside `<style></style>`. If you are using Blogger, then paste the following CSS just above. `]]></b:skin>`.

```
/* Music Player Styles (Source: www.coshix.in) */
.chxPlayer{display:grid;grid-template-columns:1fr .85fr;gap:24px;width:100%;max-width:1400px;margin:auto}
.chxNow,.chxQueue{background:rgba(255,255,255,.78);backdrop-filter:blur(22px);border:1px solid #e4e4e4;border-radius:6px;padding:22px}
.chxCover{position:relative;border-radius:6px;overflow:hidden;aspect-ratio:16/9;margin-bottom:20px}
.chxCover img{width:100%;height:100%;object-fit:cover;display:block}
.chxGlow{position:absolute;inset:auto 0 0 0;height:120px;background:linear-gradient(to top,rgba(0,0,0,.7),transparent)}
.chxInfo{text-align:center}
.chxInfo h2{font-size:34px;font-weight:800}
.chxInfo p{margin-top:6px;color:#666}
.chxSeekWrap{display:flex;align-items:center;gap:14px;margin-top:32px}
.chxSeekWrap span{font-size:13px;color:#666;min-width:38px}
.chxSeek{position:relative;flex:1;height:20px;display:flex;align-items:center;cursor:pointer}
.chxSeek:before{content:'';position:absolute;left:0;right:0;top:50%;height:4px;background:#e4e4e4;border-radius:999px;transform:translateY(-50%)}
.chxProgress{position:absolute;left:0;top:50%;height:4px;background:#2400d7;border-radius:999px;transform:translateY(-50%);box-shadow:0 0 10px rgba(36,0,215,.3)}
.chxProgress:after{content:'';position:absolute;right:-7px;top:50%;width:14px;height:14px;border-radius:50%;background:#2400d7;transform:translateY(-50%);box-shadow:0 0 0 4px rgba(36,0,215,.15)}
.chxControls{display:flex;justify-content:center;align-items:center;gap:18px;margin-top:32px}
.chxControls button{width:58px;height:58px;border:none;border-radius:50%;background:#fff;border:1px solid #e4e4e4;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.25s;color:#111}
.chxControls button:hover{transform:translateY(-2px) scale(1.04)}
.chxControls button.active{background:#eef2ff;color:#2400d7;border-color:#2400d7}
.chxControls button.orange{background:#fff4e6;color:#d78300;border-color:#d78300}
.chxControls svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.chxPlay{width:82px!important;height:82px!important;background:linear-gradient(135deg,#5b6dff,#7485ff)!important;color:#fff!important;border:none!important;box-shadow:0 10px 30px rgba(91,109,255,.3);position:relative}
.chxPlay svg{width:34px;height:34px;fill:#fff!important;stroke:none!important}
.chxPlay.loading::before{content:'';position:absolute;top:50%;left:50%;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:50%;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;animation:spin 0.8s linear infinite;z-index:5}
.chxPlay.loading svg{opacity:0}
@keyframes spin{to{transform:rotate(360deg)}}
.chxVolume{display:flex;align-items:center;gap:12px;margin-top:28px}
.chxVolume svg{width:22px;height:22px;fill:none;stroke:#111;stroke-width:2}
.chxVolume input{width:100%;accent-color:#2400d7}
.chxHead{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.chxHead h3{font-size:22px;font-weight:600}
.chxHead span{font-size:13px;color:#666}
.chxList{display:flex;flex-direction:column;gap:14px;max-height:720px;overflow:auto}
.chxSong{display:flex;align-items:center;gap:14px;padding:12px;border-radius:6px;cursor:pointer;transition:.25s;border:1px solid transparent}
.chxSong:hover{background:#f8f9ff}
.chxSong.active{border-color:#2400d7;background:#eef2ff}
.chxSong img{width:66px;height:66px;border-radius:6px;object-fit:cover}
.chxMeta{flex:1;min-width:0}
.chxMeta h4{font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.chxMeta p{margin-top:5px;font-size:14px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.chxSong span{font-size:13px;color:#666}
.loadMoreBtn{width:100%;height:52px;border:none;border-radius:30px;background:#2400d7;color:#fff;font-size:15px;cursor:pointer;transition:.25s}
.loadMoreBtn:hover{opacity:.9;transform:translateY(-2px)}
@media(max-width:900px){
.chxPlayer{display:block}
.chxNow,.chxQueue{padding:10px}
.chxInfo h2{font-size:28px}
.chxControls{gap:12px}
.chxControls button{width:50px;height:50px}
.chxPlay{width:66px!important;height:66px!important}
.chxNow{margin-bottom:15px}
.chxCover{aspect-ratio:16/9;max-height:260px}
  }

/* Dark Mode (Remove if not using) */
.dark-mode .chxNow,.dark-mode .chxQueue{background:rgba(15,15,15,.72);backdrop-filter:blur(22px);border-color:#2f2f2f;color:#f1f1f1}
.dark-mode .chxInfo p,.dark-mode .chxHead span,.dark-mode .chxSeekWrap span,.dark-mode .chxMeta p,.dark-mode .chxSong span{color:#a9a9a9}
.dark-mode .chxSeek:before{background:#333}
.dark-mode .chxControls button{background:#1f1f1f;border-color:#333;color:#f1f1f1}
.dark-mode .chxControls button.active{background:#1c2147;border-color:#5b6dff;color:#8ea0ff}
.dark-mode .chxControls button.orange{background:#3b2b12;border-color:#d78300;color:#ffb648}
.dark-mode .chxVolume svg{stroke:#f1f1f1}
.dark-mode .chxSong:hover{background:#232323}
.dark-mode .chxSong.active{background:#1c2147;border-color:#5b6dff}
.dark-mode .loadMoreBtn{background:#5b6dff}
.dark-mode .loadMoreBtn:hover{opacity:.9}
.dark-mode .chxList::-webkit-scrollbar{width:8px}
.dark-mode .chxList::-webkit-scrollbar-track{background:#1f1f1f}
.dark-mode .chxList::-webkit-scrollbar-thumb{background:#444;border-radius:20px}
.dark-mode .chxList::-webkit-scrollbar-thumb:hover{background:#555}
.dark-mode .chxMeta h4,.dark-mode .chxHead h3,.dark-mode .chxInfo h2{color:#fff}
```

### Adding the main code of the Music Player

6.  If you are using Blogger, save the HTML and open the post or page where you want to display the music player. Then switch to **HTML view** and paste the following code. If you are using a normal website, paste the following code anywhere inside the `<body></body>` tag where you want the player to appear.

```
<!--[ Music Player by www.coshix.in ]-->
<div class="chxPlayer">

<div class="chxNow">
<div class="chxCover">
<img id="cover" src="https://linkstorage.linkfire.com/medialinks/images/10754678-3b5a-403e-88d8-6dd57f8895e7/artwork-440x440.jpg" alt="">
<div class="chxGlow"></div>
</div>
<div class="chxInfo">
<h2 id="title">Album 1</h2>
<p id="artist">Artist_Name_1</p>
</div>
<audio id="audio"></audio>
<div class="chxSeekWrap">
<span id="current">0:00</span>
<div class="chxSeek" id="seekBar">
<div class="chxProgress"></div>
</div>
<span id="duration">0:00</span>
</div>
<div class="chxControls">
<button id="shuffleBtn">
<svg viewBox="0 0 24 24"><path d="M17 3h4v4M4 20l7-7M21 3l-7 7M4 4l5 5M16 16l5 5"/></svg>
</button>
<button id="prevBtn">
<svg viewBox="0 0 24 24"><path d="M18 18 9 12l9-6v12ZM6 6v12"/></svg>
</button>
<button class="chxPlay" id="playBtn">
<svg id="playIcon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
</button>
<button id="nextBtn">
<svg viewBox="0 0 24 24"><path d="m6 18 9-6-9-6v12Zm12-12v12"/></svg>
</button>
<button id="repeatBtn">
<svg viewBox="0 0 24 24"><path d="m17 1 4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4m14-2v2a4 4 0 0 1-4 4H3"/></svg>
</button>
</div>
<div class="chxVolume">
<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4V5z"/></svg>
<input type="range" min="0" max="1" step="0.01" value="1" id="volume">
</div>
</div>

<div class="chxQueue">
<div class="chxHead">
<h3>Up Next</h3>
<span id="songCount"></span>
</div>
<div class="chxList" id="playlist"></div>
</div>

</div>

<script>const songs = [{
    title: "Album 1",
    artist: "Artist_Name_1",
    src: "music_link_1quot;,
    cover: "img_link_1",
    duration: "2:18"
}, {
    title: "Album 2",
    artist: "Artist_Name_2",
    src: "music_link_2",
    cover: "img_link_2",
    duration: "2:58"
}
],/* Risky editing area */audio=document.getElementById("audio"),cover=document.getElementById("cover"),title=document.getElementById("title"),artist=document.getElementById("artist"),playBtn=document.getElementById("playBtn"),playIcon=document.getElementById("playIcon"),prevBtn=document.getElementById("prevBtn"),nextBtn=document.getElementById("nextBtn"),progress=document.querySelector(".chxProgress"),seekBar=document.getElementById("seekBar"),current=document.getElementById("current"),duration=document.getElementById("duration"),playlist=document.getElementById("playlist"),songCount=document.getElementById("songCount"),volume=document.getElementById("volume"),repeatBtn=document.getElementById("repeatBtn"),shuffleBtn=document.getElementById("shuffleBtn");let index=0,isPlaying=!1,isRepeat=!1,isShuffle=!1,visibleSongs=5,isLoading=!1;function setLoadingState(loading){isLoading=loading;if(loading){playBtn.classList.add("loading");}else{playBtn.classList.remove("loading");}}function updateActiveHighlight(){document.querySelectorAll(".chxSong").forEach((song,idx)=>{if(idx===index){song.classList.add("active");}else{song.classList.remove("active");}});}function loadSong(t){let o=songs[t];title.textContent=o.title,artist.textContent=o.artist,cover.src=o.cover,audio.src=o.src;renderPlaylist();if(isPlaying){setLoadingState(true);audio.load();if(audio.readyState>=2){setLoadingState(false);playSong();}else{audio.addEventListener('canplay',function onCanPlay(){setLoadingState(false);playSong();audio.removeEventListener('canplay',onCanPlay);},{once:true});}}}function playSong(){audio.play().then(()=>{isPlaying=!0,playIcon.innerHTML='<rect x="6" y="5" width="4" height="14" rx="1.5"/><rect x="14" y="5" width="4" height="14" rx="1.5"/>';setLoadingState(false);updateActiveHighlight();}).catch(e=>{console.warn("Playback error:",e);setLoadingState(false);isPlaying=false;playIcon.innerHTML='<path d="M8 5v14l11-7z"/>';});}function pauseSong(){audio.pause(),isPlaying=!1,playIcon.innerHTML='<path d="M8 5v14l11-7z"/>';setLoadingState(false);}function nextSong(){if(isLoading&&audio.src){audio.pause();audio.removeEventListener('canplay',()=>{});setLoadingState(false);}index=isShuffle?Math.floor(Math.random()*songs.length):(index+1)%songs.length,loadSong(index);if(isPlaying){setLoadingState(true);audio.addEventListener('canplay',function onReady(){if(isPlaying){playSong();}setLoadingState(false);audio.removeEventListener('canplay',onReady);},{once:true});audio.load();if(audio.readyState>=2){setLoadingState(false);playSong();}}else{updateActiveHighlight();}}function prevSong(){if(isLoading&&audio.src){audio.pause();audio.removeEventListener('canplay',()=>{});setLoadingState(false);}index=(index-1+songs.length)%songs.length,loadSong(index);if(isPlaying){setLoadingState(true);audio.addEventListener('canplay',function onReady(){if(isPlaying){playSong();}setLoadingState(false);audio.removeEventListener('canplay',onReady);},{once:true});audio.load();if(audio.readyState>=2){setLoadingState(false);playSong();}}else{updateActiveHighlight();}}function formatTime(t){let o=Math.floor(t/60),e=Math.floor(t%60);return`${o}:${e<10?"0"+e:e}`;}function renderPlaylist(){playlist.innerHTML="";let displaySongs=songs.slice(0,visibleSongs);displaySongs.forEach((t,o)=>{let activeClass=o===index?"active":"";playlist.innerHTML+=`<div class="chxSong ${activeClass}" data-index="${o}" onclick="selectSong(${o})"><img src="${t.cover}"><div class="chxMeta"><h4>${t.title}</h4><p>${t.artist}</p></div><span>${t.duration}</span></div>`;});if(songs.length>5&&visibleSongs<songs.length){playlist.innerHTML+='<button class="loadMoreBtn" onclick="loadMoreSongs()">Load More</button>';}songCount.textContent=`${songs.length} Songs`;}function loadMoreSongs(){visibleSongs+=5,renderPlaylist();}function selectSong(t){if(isLoading){audio.pause();audio.removeEventListener('canplay',()=>{});setLoadingState(false);}index=t;loadSong(index);renderPlaylist();if(isPlaying){setLoadingState(true);audio.addEventListener('canplay',function onReady(){if(isPlaying){playSong();}setLoadingState(false);audio.removeEventListener('canplay',onReady);},{once:true});audio.load();if(audio.readyState>=2){setLoadingState(false);playSong();}}else{updateActiveHighlight();}}playBtn.onclick=()=>{if(isLoading){return;}isPlaying?pauseSong():(setLoadingState(true),playSong());};nextBtn.onclick=nextSong,prevBtn.onclick=prevSong,volume.oninput=t=>audio.volume=t.target.value,audio.addEventListener("timeupdate",()=>{if(audio.duration){let t=audio.currentTime/audio.duration*100;progress.style.width=t+"%",current.textContent=formatTime(audio.currentTime),duration.textContent=formatTime(audio.duration)}}),seekBar.addEventListener("click",t=>{let o=seekBar.getBoundingClientRect(),e=(t.clientX-o.left)/o.width;audio.currentTime=e*audio.duration}),audio.addEventListener("ended",()=>{isRepeat?(audio.currentTime=0,playSong()):nextSong()}),repeatBtn.onclick=()=>{isRepeat=!isRepeat,repeatBtn.classList.toggle("active",isRepeat)},shuffleBtn.onclick=()=>{isShuffle=!isShuffle,shuffleBtn.classList.toggle("active",isShuffle),shuffleBtn.classList.toggle("orange",isShuffle)};audio.addEventListener('waiting',()=>{if(isPlaying){setLoadingState(true);}});audio.addEventListener('playing',()=>{setLoadingState(false);});audio.addEventListener('canplay',()=>{if(isPlaying){setLoadingState(false);}});audio.addEventListener('error',(e)=>{console.warn("Audio loading error",e);setLoadingState(false);if(isPlaying){isPlaying=false;playIcon.innerHTML='<path d="M8 5v14l11-7z"/>';}});loadSong(index),renderPlaylist();</script>
```

**Note:** Don't forget to edit the blue background highlighted important sections to make it function properly.

### To Add More Songs

10.  To add a new song, simply copy an existing song object and paste it below the last song. Then replace the title, artist name, music file URL, cover image URL, and duration with your own values.
**Example:**

```
{
title:"My New Song",
artist:"Artist Name",
src:"music_link_3",
cover:"img_link_3",
duration:"3:45"
}
```

**Important:** Add a comma after every song block except the last one in JavaScript.  
  
**Example:**

```
{
title:"Album 1",
artist:"Artist 1",
src:"music_link_1",
cover:"img_link_1",
duration:"2:18"
},

{
title:"Album 2",
artist:"Artist 2",
src:"music_link_2",
cover:"img_link_2",
duration:"2:58"
}
```

14.  After all is done, save the changes.

## How This Music Player Works

This Music Player **uses** the **HTML5 audio element with CSS and JavaScript** to control music playback and user interaction. The song's information, like album name, artist name, album image, audio file URL and duration, is stored in a JavaScript array. When the user selects a song, the player automatically loads it.

  

JavaScript handles all playback functions that include play, pause, previous, next, shuffle, volume control and playlist navigation. JavaScript also track the current playback position and updates the music progress bar in real time, and yes, when users click anywhere in the music progress bar, the song skips to that specific part.

  

With the help of CSS and JavaScript, it also highlights the currently playing song in the "**Up Next**" section. Since everything was made using pure CSS and JavaScript, it was lightweight, performance-friendly and easy to modify according to your requirements.

## FAQ (Frequently Asked Questions)

Does this music player work on mobile devices?

Yes, the music player is fully responsive and works on both desktop and mobile devices.

Can I add my own songs?

Yes, simply replace the sample song information inside the songs array with your own audio links, cover images, titles, and artist names.

What audio formats are supported?

The player supports most audio formats supported by the browser, such as MP3, WAV, and OGG.

Does this work in Blogger?

Yes, this music player can be added to Blogger posts, pages, and templates.

## Conclusion

Adding a music player to your website is **one of the best ways to make your website more attractive and engaging to its visitors**. By using a music player **built with pure CSS and JavaScript** instead of a music player that relies on third-party libraries, you get full control over the code of the music player and make it **easy to modify** as your requirements change.

  

Features like shuffle mode, repeat mode, song navigation, progress tracking, etc., **provide a professional listening experience to the visitors**. Whether you need a simple music player or build a feature-rich music interface, you can easily modify the code to suit your needs. By implementing this music player, you can give a **convenient way for visitors to enjoy music while browsing your website**.

  

As t**his player has a responsive design**, it ensures the **player looks good and works smoothly across every device**. I hope this guide helped you to implement a modern and feature-rich music player on your website. If you have any doubts related to the implementation of this music player, please feel free to drop a comment below about it. Thanks for visiting, have a nice day!