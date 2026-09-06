---
title: "How to Add a Latest Posts Slider in Blogger Using CSS & JavaScript"
date: 2026-06-21
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaEuOfyBrs7maBNfXA14vo1MunU-hIS4jPHaR_lDHaplUYidlDUL-SakOPUYBbxTqsc1b2fNUaNzmLrl7UbgyCKheN9RIIdx4Bey7Iah-mCvclZaNcmJ7Y30Tq2cqmEr9iWEBFVZ1uPNGwS066VasSiufp6C7xGI7ncYhZsgO1-UqpM9x7RXXe4Pyvvrck/s1600-rw/latest-posts-slider.webp"
categories: ["Blogger"]
tags: ["Blogger","Codes","Web","How To","Post Slider","CSS","JavaScript","HTML","Widgets"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaEuOfyBrs7maBNfXA14vo1MunU-hIS4jPHaR_lDHaplUYidlDUL-SakOPUYBbxTqsc1b2fNUaNzmLrl7UbgyCKheN9RIIdx4Bey7Iah-mCvclZaNcmJ7Y30Tq2cqmEr9iWEBFVZ1uPNGwS066VasSiufp6C7xGI7ncYhZsgO1-UqpM9x7RXXe4Pyvvrck/s1600-rw/latest-posts-slider.webp)

The latest posts slider is one of the **best ways to make your Blogger website more intractive**. Instead of displaying a simple list or grid of posts, the slider presents them in a visually appealing format that **helps you to attract visitors to your website**. Along with making your website more intractive it also **improves user engagement and content discovery**, especially when your website page is too long.

In this guide, you will learn how to add a latest posts slider to your Blogger website just using pure CSS and JavaScript. This also **auto-fetches posts from your Blogger website**, which means you don't need to do any manual editing. Since it was built with lightweight and pure code, it was **easy to customise and implement in most of the Blogger templates**.

Whether you run a tech blog, personal website, news portal, tutorial platform, or any other niche website, **this post slider will suit to showcase your website's latest posts more professionally**. It was useful to any bloggers who want to improve their Blogger website's user experience and website presentation. So without wasting much time, let's check how this post slider works and how to add it to your Blogger website.

## Features of This Latest Posts Slider

*   Automatically fetches the latest posts from your Blogger feed
*   Modern and Responsive design
*   Autoplay slideshow functionality
*   Previous and next navigation arrows
*   Navigation dots
*   Smooth animations
*   Pure CSS and JavaScript implementation
*   Easy to customise
*   Skeleton loading
*   Automatic image fallback
*   Lightweight and performance-friendly

## Latest Posts Slider Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/06/posts-slider.html)

**Useful Guides for you:**

*   [How to Create a Modern About Page in Blogger with Live Stats & Recent Posts](/2026/06/modern-blogger-about-page.html)
*   [How to Add Eye Care Mode in Your Website Using Pure CSS & JavaScript](/2026/05/eye-care-mode-css-javascript.html)
*   [How to Create a Modern YouTube Video Playlist Player Using Pure JavaScript](/2026/06/modern-youtube-video-player.html)

## How to Add The Latest Posts Slider to Your Blogger Website

1.  First of all, go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the "**Theme**" option from the sidebar
3.  Click the **drop-down icon** near the "**Customise**" button
4.  Click the "**Edit HTML**" option from the drop-down menu

### Adding Post Slider CSS

6.  Find `]]></b:skin>` Then paste the following CSS just above it

```
/* Post Slider CSS (Source:www.coshix.in) */
.chxslider{position:relative;overflow:hidden;width:100%;margin-bottom:20px;border-radius:6px}
.chxtrack{display:flex;transition:transform .8s cubic-bezier(.25,.46,.45,.94)}
.chxslide{min-width:100%;width:100%;position:relative;flex-shrink:0;overflow:hidden}
.chxslide img{width:100%;height:450px;object-fit:cover;border-radius:6px;display:block;vertical-align:top;-webkit-user-drag:none;user-select:none}
.chxoverlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.45),rgba(0,0,0,.1),transparent 60%);border-radius:8px;pointer-events:none}
.chxcontent{position:absolute;left:24px;right:24px;bottom:24px;color:#fff;pointer-events:none;margin-bottom:20px}
.chxcontent a{pointer-events:auto}
.chxtitle{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-decoration:none;font-size:26px;font-weight:700;line-height:1.4;margin:0;color:#fff}
.chxtitle:hover{text-decoration:underline}
.chxdesc{opacity:.9;line-height:1.6}
.chxarrow{position:absolute;top:50%;transform:translateY(-50%);width:45px;height:45px;border:none;border-radius:50%;background:rgba(255,255,255,.9);backdrop-filter:blur(10px);color:#555;cursor:pointer;opacity:0;transition:.3s;z-index:5;font-size:20px;text-align:center}
.chxslider:hover .chxarrow{opacity:1}
.chxprev{left:15px}
.chxnext{right:15px}
.chxdots{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:6px;z-index:5}
.chxdot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.4);cursor:pointer;transition:.3s}
.chxdot.active{background:#fff;transform:scale(1.1)}
.chx-skeleton{position:relative;height:450px;background:#f0f0f0;border-radius:8px;overflow:hidden}
.chx-skeleton-img{width:100%;height:450px;background:linear-gradient(90deg,#e0e0e0 25%,#f0f0f0 50%,#e0e0e0 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.chx-skeleton-content{position:absolute;left:24px;right:24px;bottom:24px}
.chx-skeleton-title{height:30px;width:70%;background:#ddd;border-radius:4px;margin-bottom:12px}
.chx-skeleton-desc{height:16px;width:50%;background:#ddd;border-radius:4px;margin-bottom:15px}
.chx-skeleton-btn{height:40px;width:120px;background:#ddd;border-radius:6px}

@media(max-width:768px){ .chxslide img{height:180px} .chxoverlay{background:linear-gradient(to top,rgba(0,0,0,.55),rgba(0,0,0,.15),transparent)} .chxcontent{left:12px;right:12px;bottom:12px;margin-bottom:15px} .chxtitle{font-size:14px;font-weight:600;line-height:1.4;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden} .chxdesc,.chxbtn{display:none!important} .chxarrow{width:34px;height:34px;font-size:16px;background:rgba(255,255,255,.9);color:#555} .chxprev{left:10px} .chxnext{right:10px} .chxdots{bottom:8px;gap:4px} .chxdot{width:6px;height:6px} .chx-skeleton{height:180px} .chx-skeleton-img{height:180px} .chx-skeleton-content{left:12px;right:12px;bottom:12px} .chx-skeleton-title{height:16px;width:80%} .chx-skeleton-desc,.chx-skeleton-btn{display:none} }
```

### Adding Post Slider HTML Code

9.  Add the following HTML code anywhere in the HTML where you need to show the slider (**Example**: Paste just below the `</header>` tag)

```
<!--[ Post Slider by www.coshix.in ]-->
<div id='chxpost-slider'>
  <div class="chxslider">
    <div class="chx-skeleton">
      <div class="chx-skeleton-img"></div>
      <div class="chx-skeleton-content">
        <div class="chx-skeleton-title"></div>
        <div class="chx-skeleton-desc"></div>
        <div class="chx-skeleton-btn"></div>
      </div>
    </div>
  </div>
</div>
```

### Adding Post Slider JavaScript

12.  Add the following JavaScript just above the `</body>` tag

```
<script>/*<![CDATA[*//* Post Slider JS (Source:www.coshix.in) */
const sliderConfig = {
  blogUrl: location.origin,
  maxPosts: 6,
  autoPlaySpeed: 5000
};

/* Risky edit area */!function(){"use strict";const e=document.getElementById("chxpost-slider");fetch(sliderConfig.blogUrl+"/feeds/posts/default?alt=json&max-results="+sliderConfig.maxPosts).then((t=>t.json())).then((t=>{const n=t.feed.entry||[];let o="";n.forEach((t=>{const n=t.title.$t,l=t.link.find((e=>"alternate"===e.rel)).href;let a="https://placehold.co/1200x675/e5e7eb/4b5563?text="+encodeURIComponent(n);t.media$thumbnail&&(a=t.media$thumbnail.url.replace(/\/s\d+[^/]*\//,"/s1600/"));o+='<div class="chxslide"><img loading="lazy" src="'+a+'" alt="'+n+'" decoding="async" fetchpriority="low"><div class="chxoverlay"></div><div class="chxcontent"><a href="'+l+'" class="chxtitle">'+n+'</a></div></div>'})),e.innerHTML='<div class="chxslider" id="chxSlider"><div class="chxtrack" id="chxTrack">'+o+'</div><button class="chxarrow chxprev" id="chxPrev" aria-label="Previous slide">❮</button><button class="chxarrow chxnext" id="chxNext" aria-label="Next slide">❯</button><div class="chxdots" id="chxDots"></div></div>';const r=document.getElementById("chxTrack"),c=document.querySelectorAll(".chxslide"),l=c.length,a=document.getElementById("chxDots"),i=document.getElementById("chxPrev"),u=document.getElementById("chxNext"),d=document.getElementById("chxSlider");let p=0,m=!1,g=null,h=!1;for(let e=0;e<l;e++){const t=document.createElement("span");t.className="chxdot"+(0===e?" active":""),t.dataset.index=e,t.addEventListener("click",(()=>v(e))),a.appendChild(t)}const s=document.querySelectorAll(".chxdot");function v(e,t=!0){if(m||e===p)return;m=!0,p=e,r.style.transition=t?"transform .8s cubic-bezier(.25,.46,.45,.94)":"none",r.style.transform="translateX(-"+100*p+"%)",s.forEach(((e,t)=>{e.classList.toggle("active",t===p)})),setTimeout((()=>{m=!1}),800)}function f(){h||(h=!0,v((p+1)%l),setTimeout((()=>{h=!1}),900))}function b(){h||(h=!0,v((p-1+l)%l),setTimeout((()=>{h=!1}),900))}function w(e){e?clearInterval(g):(clearInterval(g),g=setInterval(f,sliderConfig.autoPlaySpeed))}let y=0,k=0;d.addEventListener("touchstart",(e=>{y=e.touches[0].clientX}),{passive:!0}),d.addEventListener("touchend",(e=>{k=e.changedTouches[0].clientX;const t=y-k;Math.abs(t)>50&&(t>0?f():b())}),{passive:!0});let E=null;u.addEventListener("click",(e=>{e.preventDefault(),f(),w(!0),clearTimeout(E),E=setTimeout((()=>{w(!1)}),1e4)})),i.addEventListener("click",(e=>{e.preventDefault(),b(),w(!0),clearTimeout(E),E=setTimeout((()=>{w(!1)}),1e4)})),document.addEventListener("keydown",(e=>{"ArrowRight"===e.key?(e.preventDefault(),f()):"ArrowLeft"===e.key&&(e.preventDefault(),b())})),d.addEventListener("mouseenter",(()=>{w(!0)})),d.addEventListener("mouseleave",(()=>{w(!1)})),d.addEventListener("focusin",(()=>{w(!0)})),d.addEventListener("focusout",(()=>{w(!1)})),g=setInterval(f,sliderConfig.autoPlaySpeed)})).catch((t=>{console.error("Slider error:",t),e.innerHTML='<div style="padding:20px;text-align:center;color:#666;">Failed to load posts</div>'}))}();
/*]]>*/</script>
```

14.  Click to save changes made in HTML

**Success:** Now you have successfully implemented the latest posts slider in your Blogger website.

## How This Latest Posts Slider Works

This latest posts slider automatically fetches posts from your Blogger JSON feed and displays beautifully in a full-width carousel. Each slide shows the post title, thumbnail, action button, etc., which help the visitors to easily access your content on your website.

  

The slider was also designed by keeping performance in mind, so it doesn't use any heavy external libraries. It shows the skeleton loading animation until posts have been fetched to avoid layout shifts. Navigation arrows and pagination dots allow visitors to move between posts easily. Also, it has autoplay functionality, which means it slides to another post after a certain amount of time, which is set in JavaScript.

  

The CSS make it look good, like giving proper layouts, colours, border radius, animations, etc. Using CSS, we also ensured it was responsive, which means the post slider looks good and clean across different screen sizes.

## FAQ (Frequently Asked Questions)

Does this Latest Posts Slider work on all Blogger templates?

Yes. The slider is built using HTML, CSS, and JavaScript, making it compatible with most Blogger templates.

Is the slider mobile-friendly?

Yes. The slider is fully responsive and automatically adjusts its layout for mobile phones, tablets, and desktop devices.

Can I change the number of posts shown?

Yes. You can modify the JavaScript settings to increase or decrease the number of latest posts displayed in the slider.

Does the slider support autoplay?

Yes. The slider includes autoplay functionality, allowing slides to change automatically after a specified interval.

## Conclusion

The latest posts slider is a valuable widget for any Blogger-based website because it encourages visitors to explore recently published articles on your website. Instead of searching through your website pages, it easily helps to pick the required article directly. The post slider is also the **best way to make your website more engaging and attractive to visitors**.

  

Another advantage of using a **post slider made with pure CSS and JS** is that it would be easy to customise, so **you can easily customise the code as per your website requirements and to match your website design**. Since the slider automatically updates posts by recently added posts, it **doesn't require any manual content update** from your side.

  

This post slider can **help you increase page views, reduce bounce rates and keep users engaged** for a longer time on your website. I hope this tutorial helps you to implement the latest posts slider on your Blogger website. If you have any doubts related to this guide, don't forget to drop a comment about it below. If you like this guide, don't forget to explore more guides like this on [this website.](/) Thanks for visiting and have a nice day!