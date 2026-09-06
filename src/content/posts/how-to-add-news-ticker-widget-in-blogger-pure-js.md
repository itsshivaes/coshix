---
title: "How to Add News Ticker Widget in Blogger (Pure JS)"
date: 2026-03-26
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWEu4H4khnZOQCO_EIxnFfEHK6lZbqQVH_2NE4D5cV2A5vx0ukeJWoGGFc_ROt9ByiSpSyf2LY0p73UTqDRlCyJjjvCWKRtCXvLVQyt-bGNxEuJe08_vBo2w30zckF-XiYNbx9QszQRMHiWLIMBfpZHAQ6c5ZpNvt_MUwbeBpQDFzcB8RD5xS39VF_0ZE3/s1600-rw/news-ticker-blogger.webp"
categories: ["Blogger"]
tags: ["Blogger","Codes","How To","Web","News Ticker","CSS","JavaScript","HTML","Widgets"]
draft: false
---

[![News Ticker For Blogger](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWEu4H4khnZOQCO_EIxnFfEHK6lZbqQVH_2NE4D5cV2A5vx0ukeJWoGGFc_ROt9ByiSpSyf2LY0p73UTqDRlCyJjjvCWKRtCXvLVQyt-bGNxEuJe08_vBo2w30zckF-XiYNbx9QszQRMHiWLIMBfpZHAQ6c5ZpNvt_MUwbeBpQDFzcB8RD5xS39VF_0ZE3/s1600-rw/news-ticker-blogger.webp)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWEu4H4khnZOQCO_EIxnFfEHK6lZbqQVH_2NE4D5cV2A5vx0ukeJWoGGFc_ROt9ByiSpSyf2LY0p73UTqDRlCyJjjvCWKRtCXvLVQyt-bGNxEuJe08_vBo2w30zckF-XiYNbx9QszQRMHiWLIMBfpZHAQ6c5ZpNvt_MUwbeBpQDFzcB8RD5xS39VF_0ZE3/s1600-rw/news-ticker-blogger.webp)

Adding a news ticker in Blogger is one of the best ways to feature new content, especially when your site is long, and also, if the design is good, then it also makes your website more attractive. In this tutorial, you will understand how to add a modern-style news ticker widget to your Blogger website using pure JavaScript instead of external heavy libraries or plugins.

Most tutorials online may rely on outdated or heavy code, which can affect your website's performance, but here we built it with lightweight CSS, HTML, and JavaScript to avoid slowing down your Blogger website. If you have basic knowledge of HTML, CSS and JavaScript, then you can easily customise it, because we don't use any external libraries or storing main code on a server. Instead of a basic design, we made a modern, smooth interface for this news ticker.

By following this tutorial carefully, you will get a modern and lightweight news ticker with a smooth interface and responsive layout. This ticker is the best option for any long page and news Blogger websites that need a modern style news ticker. Now, let's check how to implement this news ticker widget in your Blogger blog.

## How this News Ticker Works

This news ticker works automatically by loading your content from your website's **JSON** feed. It show latest posts on your website. It also have pause on hover feature that pauses the ticker when you hover on an article in the ticker and continues when your cursor is away from it. It keeps looping, which avoids stopping the news ticker after the content ends.

## Features of this News Ticker

*   Smooth post scroll animation
*   Responsive design
*   No external libraries are used
*   Modern design
*   Post thumbnail view
*   Hover effect
*   Skeleton loading

## Add News Ticker in Blogger

**Warning!** Before following these steps, we recommend that you take a backup of your Blogger template because if any mistake is made in HTML, you can restore the previous version.

1.  First of all, go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the "**Themes**" option from the sidebar
3.  Click the **drop-down icon** near the "**Customize**" option
4.  Click the "**Edit HTML**" option in the drop-down menu

**Useful Guides for you:**

*   [How to Add Table of Contents in Blogger (Automatic TOC Guide)](/2026/03/add-table-of-contents-blogger.html)
*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [How to Add Like and Dislike Button in Blogger Using Firebase](/2026/03/like-and-dislike-feature-blogger.html)

### Adding CSS

7.  Find \]\]>`</b:skin>`
8.  Paste the following CSS just above it

```
/* Post Ticker CSS, Source: www.coshix.in */.coshix-ticker{display:flex;align-items:center;height:45px;padding:0 10px;background:#020617;overflow:hidden;position:relative}.coshix-label{display:flex;align-items:center;gap:5px;flex-shrink:0;background:linear-gradient(135deg,#facc15,#fde047);color:#111;font-size:11px;font-weight:600;padding:4px 12px;border-radius:999px;margin-right:10px}.coshix-label svg{width:14px;height:14px}.coshix-mask{flex:1;overflow:hidden;position:relative}.coshix-mask:before{content:"";position:absolute;left:0;top:0;width:24px;height:100%;background:linear-gradient(to right,#020617,transparent);z-index:2}.coshix-mask:after{content:"";position:absolute;right:0;top:0;width:24px;height:100%;background:linear-gradient(to left,#020617,transparent);z-index:2}.coshix-track{display:flex;gap:14px;white-space:nowrap}.coshix-item{display:flex;align-items:center;gap:8px;height:28px;padding:0 12px;border-radius:14px;background:linear-gradient(135deg,#0f172a,#1e293b);border:1px solid rgba(255,255,255,.08);flex:0 0 auto;cursor:pointer}.coshix-item img,.thumb{width:20px;height:20px;border-radius:6px;flex-shrink:0}.coshix-item span{font-size:12px;color:#f1f5f9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:160px}.coshix-item{transition:transform .25s ease,box-shadow .25s ease}.coshix-item:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.35)}.coshix-item:active{transform:scale(.97)}.skel{border:none}.skel .thumb{background:#1e293b}.skel .line{width:80px;height:6px;border-radius:4px;background:linear-gradient(90deg,#1e293b,#334155,#1e293b);background-size:200% 100%;animation:coshixShimmer 1.2s infinite}@keyframes coshixShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@media(max-width:768px){.coshix-mask:before,.coshix-mask:after{width:8px;opacity:.7}}
```

### Adding HTML

11.  Find `<body>`
12.  Paste the following code just below it

```
<!-- Post ticker by www.coshix.in -->
 <div class='coshix-ticker'><div class='coshix-label'>
 <svg fill='currentColor' viewBox='0 0 24 24'><path d='M13 2L3 14h7l-1 8 10-12h-7l1-8z'/></svg>
 <span>Latest</span></div>
 <div class='coshix-mask'><div class='coshix-track' id='coshix-track'><div class='coshix-item skel'><div class='thumb'/><div class='line'/></div><div class='coshix-item skel'><div class='thumb'/><div class='line'/></div><div class='coshix-item skel'><div class='thumb'/><div class='line'/></div></div></div></div>
```

### Adding JavaScript

15.  Find `</body>`
16.  Paste the following JS just above it

```
<script>/*<![CDATA[*//* ----
  Modern Post Ticker
  Created by: www.coshix.in
  Source code: https://www.coshix.in/2026/03/modern-news-ticker-blogger.html
---- */
const TZ_URL="https://www.coshix.in",TZ_COUNT=8,TZ_SPEED=.7;
/* Don't edit */
function coshixTicker(d){let t=document.getElementById("coshix-track"),w=t.parentElement,p=d.feed.entry||[],h="",x=0,running=!0;p.forEach(e=>{let T=e.title.$t,i=e.media$thumbnail?e.media$thumbnail.url:"https://placehold.co/40x40?text=No+Image",l=e.link.find(x=>x.rel==="alternate").href;h+=`<div class="coshix-item" onclick="window.open('${l}','_blank')"><img alt="Thumbnail" src="${i}" width="20" height="20" onerror="this.onerror=null;this.src='https://placehold.co/40x40'"><span>${T}</span></div>`});t.innerHTML=h+h;function loop(){running&&(x+=TZ_SPEED,t.style.transform=`translateX(${-x}px)`,x>=t.scrollWidth/2&&(x=0)),requestAnimationFrame(loop)}w.addEventListener("mouseenter",()=>running=!1);w.addEventListener("mouseleave",()=>running=!0);w.addEventListener("touchstart",()=>running=!1,{passive:!0});w.addEventListener("touchend",()=>running=!0);loop()}var s=document.createElement("script");s.src=TZ_URL+"/feeds/posts/default?alt=json-in-script&max-results="+TZ_COUNT+"&callback=coshixTicker",document.body.appendChild(s);
/* ]]> */</script>
```

18.  Make sure you replace URL with your blog URL and make other desired changes in JavaScript

### Saving Changes

20.  Click to save changes made in HTML

## News Ticker Output Preview

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/03/ticker-demo.html)

## FAQ

How does this News Ticker work?

It fetches posts from the URL provided in JS and show certain number of posts as mentioned in JavaScript in a scroll layout.

Does this News Ticker rely on external libraries?

No, it was made using lightweight JavaScript, CSS and HTML to avoid performance related issue.

Does this News Ticker have a responsive design?

Yes, this news ticker have responsive and modern design that shows the news ticker properly on every device.

Can we control the scrolling speed of the News Ticker?

Yes, you can control the scrolling of the News Ticker by changing `TZ_SPEED=.7` it in JavaScript.

## Conclusion

One of the best ways to make your Blogger blog more active and engaging is adding news ticker to your Blogger blog. A scrolling ticker helps visitors to explore the latest posts on your blog, even from the article page. It also improve overall interface of your blog. This news ticker is the best option especailly for long pages or any frequent updates such as job websites and news websites.

  

In this article, we shared a news ticker widget for Blogger made using pure JavaScript instead of using heavy external libaries which made this ticker lightweight and easy to manage. As it's made using pure JavaScript, you can control the number of posts to be shown, ticker posts scroll speed and feed URL easily, and also, if you have some coding knowledge, you can modify more.

  

Hope this tutorial helped you to add a modern and beautiful news ticker to your Blogger blog. If you have any doubts related to the implementation of this news ticker, then don't forget to drop a comment down below. Also, don't forget to share with your friends who are running their website on Blogger because it may be useful to them too. If you like to table of content in your website, then don't forget to checkout Automatic [Table of Contents guide](/2026/03/add-table-of-contents-blogger.html). Thanks for reading this article.