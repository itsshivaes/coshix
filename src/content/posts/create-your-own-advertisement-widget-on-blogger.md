---
title: Create your own advertisement widget on Blogger
slug: ''
date: 2026-09-16
description: Add a cool custom ad widget on Blogger where you can implement your own campaigns with clickable urls. Best for affiliate advertising.
authors:
  - Saim-Rahmani
  - shiva-e-s
image: ''
categories:
  - Blogger
  - Widgets
tags: []
draft: false
---

Learn to Build a responsive advertising widget for Blogger using HTML & CSS. Follow this step-by-step guide create custom ad banners without plugins.

![Create a Smart Advertisement Widget for Blogger with Close Button & Animation | SR7Themes ©](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG6m8apJvZL4qG4W2Mwtlm9pxAbOf7qWJgwkqw70xqGXci0UZ50H5CrASK3HZ9PestV5-NiutVPxlh9fy9-ewjIiD3WrumJZuKySZp3k6MYiKGIvK9xKne3TTAQlMi3sri-LTayzFSVA0nXQ2aHr6DSGP3f7ZSfAvbxNU9p9wm9GMBsYtef0IAaDd0HwI/s1672/1000012407.png)

Hi there today we had came with a new exciting widget we made for custom websites and blogger, The new Smart Advertisement widget with close option. This widget is made with pure HTML, CSS and JavaScript and is very easy to add to your website.

The main purpose of this advertisement widget is that you can promote your own ads or partnership ads in your site which can enchance the quality of your site. In this widgets you can add multiple banner images with clickable urls which will redirect to the target ad urls and this widget contains no **jQuery**, **and is Lightweight Responsive** and **Optimized.**

Before going to the tutorial let's know a little more about this widget.

***

## Why Use This Advertisement Widget?

1. **Promote Your Products:** Showcase your premium themes, templates, tools, or digital products with an attractive rotating advertisement widget.
2. **Increase Visibility:** Display announcements, featured posts, affiliate banners, Telegram channels, YouTube videos, or special offers in a professional way.
3. **Fully Responsive:** The widget automatically adapts to desktops, tablets, and mobile devices for a consistent experience.
4. **Easy to Customize:** Simply replace the image URLs and destination links in the HTML—no JavaScript editing required.
5. **Lightweight & Fast:** Built using pure HTML, CSS, and JavaScript without any external libraries, helping keep your Blogger site fast.
6. **Modern Features:** Includes automatic ad rotation, a close button, dark mode compatibility, and a clean UI that blends with most Blogger themes.

## Features

This smart advertisement widget is designed to be simple, lightweight, and easy to use on any Blogger website.

It includes everything you need to display promotional banners without relying on third-party libraries or complicated setup. Whether you're promoting your own products, affiliate offers, Telegram channels, or important announcements, the widget provides a clean and professional way to grab visitors' attention while blending seamlessly with modern Blogger themes.

## Watch a Demo

Close [![Advertisement](https://blogger.googleusercontent.com/img/a/AVvXsEjEuN53sm_9NDr1JRjubrr_MOCiIAd7TlFRTXWGhz2PkJ6ZwbL3ooOD82aZObthsjkvTbMxuBJ-ZFVPgH6nLkAdNojHmbzRterTWrxtg19mfV7DzrHpgj6EjT2gL1H-6QLbpw3IETFbZybO9sHh-_h75qvJdrSfU1vCIJnWbLBnsYKI4s7gDgW7X6vaMGU=s1254)](https://draft.blogger.com/blog/post/edit/9204175013926440964/2651565306356228283?hl=en#)Advertisement

***

The advertisement widget with Ad close feature with clean modern ui is shown above.

## Tutorial

Before adding the widget to your Blogger website, make sure you have separated the HTML, CSS, and JavaScript files correctly. This keeps your blog organized, improves loading performance, and allows you to use the same widget on multiple posts without duplicating the CSS or JavaScript.

The setup only takes a few minutes. Simply paste each code into its correct location in your Blogger theme and post editor. Once everything is in place, you can customize the advertisement images and links directly from the HTML whenever you create a new post or page.

**Warning!** Modifing the codes and selling or providing codes on your site without permission is strictly prohibited. Legal Actions will be taken if found so.

1. Copy the **HTML** code and paste it into your Blogger post, page, or an HTML/JavaScript gadget where you want the advertisement widget to appear.
2. Open your Blogger theme, click **Edit HTML**, and paste the **CSS** code just before the `</b:skin>` tag.
3. Paste the **JavaScript** code just before the closing `</body>` tag in your Blogger theme, then save the changes.
4. Customize the widget by replacing the `data-image` and `data-link` values in the HTML with your own advertisement images and destination links.
5. Preview your blog to ensure everything works correctly, then publish or update your post to display the rotating advertisement widget.

```plain
<!--
==================================================
SR7 Smart Advertisement Widget
Only edit the images & links below.
==================================================
-->

<div class="sr7-ad-widget"
     id="sr7AdWidget"

     data-image1="image_url_here.png;
     data-link1="ad_url_here"

     data-image2="image_url_here.png"
     data-link2="ad_url_here"

     data-image3="ad_image_url_here.png"
     data-link3="ad_url_here">

  <button class="sr7-ad-close" id="sr7CloseAd" aria-label="Close Ad">
    <svg class="line" viewBox="0 0 24 24">
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"></path>
      <path d="M9.16998 14.83L14.83 9.17004"></path>
      <path d="M14.83 14.83L9.16998 9.17004"></path>
    </svg>
    <span class="sr7-close-tip">Close</span>
  </button>

  <a id="sr7AdLink"
     href="#"
     target="_blank"
     rel="nofollow sponsored">

    <img id="sr7AdImage"
         src=""
         alt="Advertisement">

  </a>

  <span class="sr7-ad-tag">Advertisement</span>

</div>
```

## CSS code

And now paste the CSS code which manages the styling of the advertisement widget. Just before the `</b:skin>`tag.

```plain

.sr7-ad-widget{
  position:relative;
  width:100%;
  max-width:450px;
  aspect-ratio:1/1;
  margin:20px auto;
  overflow:hidden;
  border-radius:18px;
  border:1px solid #e6edf3;
  background:#fff;
  box-shadow:0 10px 25px rgba(0,0,0,.06);
}

.sr7-ad-widget img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}

.sr7-ad-tag{
  position:absolute;
  top:12px;
  left:12px;
  font-size:10px;
  font-weight:600;
  padding:4px 7px;
  border-radius:20px;
  background:rgba(255,255,255,.96);
  color:#57717d;
  border:1px solid rgba(0,0,0,.08);
  z-index:20;
}

.sr7-ad-close{
  position:absolute;
  top:12px;
  right:12px;
  width:30px;
  height:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0;
  margin:0;
  border:none;
  border-radius:50%;
  background:rgba(255,255,255,.96);
  cursor:pointer;
  z-index:9999;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.sr7-ad-close svg{
  width:18px;
  height:18px;
  display:block;
}

.sr7-ad-close:hover{
  opacity:1;
}

.sr7-close-tip{
  position:absolute;
  right:46px;
  top:50%;
  transform:translateY(-50%);
  background:#111;
  color:#fff;
  font-size:11px;
  padding:5px 8px;
  border-radius:6px;
  white-space:nowrap;
  opacity:0;
  visibility:hidden;
  transition:.2s ease;
  pointer-events:none;
}

.sr7-ad-close:hover .sr7-close-tip{
  opacity:1;
  visibility:visible;
}

.drK .sr7-ad-widget{
  background:#161b1f;
  border-color:#293038;
}

.drK .sr7-ad-tag,
.drK .sr7-ad-close{
  background:#1f262d;
  color:#d7e0e6;
}

.drK .sr7-close-tip{
  background:#2b343b;
  color:#fff;
}

.sr7-ad-closed{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size:14px;
  font-weight:600;
  color:#57717d;
  background:rgba(255,255,255,.95);
  padding:10px 16px;
  border-radius:8px;
  border:1px solid #e6edf3;
  z-index:50;
}

.drK .sr7-ad-closed{
  background:#1f262d;
  color:#d7e0e6;
  border-color:#293038;
}
```

**Warning!** Modifing the codes and selling or uploading on your site is strictly prohibited. Legal Actions will be taken if found so.

## Javascript Code

Now we Paste the JavaScript code just before the closing `</body>` tag in your Blogger theme, as it is the main functioning part of the widget and then save the changes.

```plain
<script>
document.addEventListener("DOMContentLoaded",function(){const adWidget=document.getElementById("sr7AdWidget");if(!adWidget)return;const adImage=document.getElementById("sr7AdImage"),adLink=document.getElementById("sr7AdLink"),closeBtn=document.getElementById("sr7CloseAd"),sr7Ads=[{image:adWidget.dataset.image1,url:adWidget.dataset.link1},{image:adWidget.dataset.image2,url:adWidget.dataset.link2},{image:adWidget.dataset.image3,url:adWidget.dataset.link3}].filter(ad=>ad.image);if(!sr7Ads.length)return;let currentAd=0;function loadAd(index){adImage.src=sr7Ads[index].image;adLink.href=sr7Ads[index].url||"#";}loadAd(currentAd);if(sr7Ads.length>1){setInterval(function(){currentAd++;if(currentAd>=sr7Ads.length)currentAd=0;loadAd(currentAd);},5000);}closeBtn.addEventListener("click",function(){const existingMsg=adWidget.querySelector(".sr7-ad-closed");if(existingMsg){existingMsg.remove();adImage.style.display="";adLink.style.display="";}else{adImage.style.display="none";adLink.style.display="none";const closedMsg=document.createElement("div");closedMsg.className="sr7-ad-closed";closedMsg.textContent="Ad closed";adWidget.appendChild(closedMsg);}});});
</script>
```

Related Posts

## Common Mistakes to Avoid

While installing this smart advertisement widget for Blogger, a few small mistakes can prevent it from working correctly. Most issues happen because the HTML, CSS, or JavaScript is pasted into the wrong location or the image and link URLs are entered incorrectly. Taking a minute to double-check each step can save you a lot of troubleshooting later.

Before publishing your post, make sure the HTML is added to the post or page, the CSS is placed before the `</b:skin>` tag, and the JavaScript is added before the closing `</body>` tag. Also, verify that every image URL is publicly accessible and that all advertisement links begin with `https://`. Following these simple checks will help your advertisement widget display and rotate smoothly on both desktop and mobile devices.

**Info!** The widget works on modern browsers such as Chrome, Edge, Firefox, Safari, and most Android browsers because it uses standard HTML, CSS, and JavaScript.

## FAQ (Frequently Asked Questions)

Can I use this advertisement widget on any Blogger theme?

How do I change the advertisement images and links?

Can I add more than three advertisements?

Why are my advertisement images not showing?

## Conclusion

Creating a smart advertisement widget for Blogger is a simple way to promote your own products, affiliate offers, featured posts, or announcements without relying on third-party plugins. Since this widget is built with pure HTML, CSS, and JavaScript, it loads quickly, works on both desktop and mobile devices, and can be customized to match almost any Blogger theme.

I hope this tutorial helped you set up the widget successfully. If you'd like to add more features such as click tracking, animation effects, additional advertisement slots, or advanced customization options, feel free to experiment with the code. Don't forget to explore more Blogger tutorials on [SR7Themes](https://draft.blogger.com/blog/post/edit/9204175013926440964/2651565306356228283?hl=en#) for similar widgets, templates, and useful web development guides. Share your valuable comments

Copyright (c)
www.sr7themes.eu.org and www.coshix.in
