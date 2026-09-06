---
title: "How to Add an Article Star Rating System in Blogger Using Firebase & JavaScript"
date: 2026-07-22
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ8tpKgZZ46PhjTNlQQ6PJ6FyRLZ9mgwnsHTsb4wqt1A4Yos-4JceSXOHD618mQeDrv4z2F-8TLlkOMehEh6Xyq8p_zZKNQMDHw7JrxDnzEGUSuJyLyEGFjNwoF_8tJ1cedPIjpd80qvnAKKvBEG3_Ibi2hSvzk8zyzrloNRBCMLSGsWXkx3ENq0elomnA/s1600-rw/article-rating-blogger-coshix.webp"
categories: ["Blogger"]
tags: ["Blogger","Codes","How To","HTML","CSS","JavaScript","Firebase","JavaScript Components","Widgets","Article Rating"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ8tpKgZZ46PhjTNlQQ6PJ6FyRLZ9mgwnsHTsb4wqt1A4Yos-4JceSXOHD618mQeDrv4z2F-8TLlkOMehEh6Xyq8p_zZKNQMDHw7JrxDnzEGUSuJyLyEGFjNwoF_8tJ1cedPIjpd80qvnAKKvBEG3_Ibi2hSvzk8zyzrloNRBCMLSGsWXkx3ENq0elomnA/s1600-rw/article-rating-blogger-coshix.webp)

Adding an article rating system to your Blogger website is **one of the best ways to encourage user interaction and to collect feedback on your website's content**. Instead of relying only on the comment section on your Blogger website, the article rating **allows users to quickly share their opinion about your article** with a single click. This also helps you identify the most user-liked content on your website.

In this guide, we are going to share with you how to add an article rating system to your Blogger website **with the help of Firebase**. As this article rating widget was made with the help of Firebase, it **can update user ratings in real time**. The **code is clean and fully customizable**, allowing you to modify its design and functions according to your website's requirements.

Whether you are running a tech blog, tutorial website, online store, personal blog or any other type of website, adding an article rating system to your website may **help you improve user participation and provide useful insights into your content**. So, without wasting much time, let's check how it works and how to add this article rating system to your Blogger website.

## Features of This Article Rating System

*   Real-time rating update
*   Responsive design
*   5-star rating system
*   Unique rating for every post
*   Modern loading animation
*   Lazy loading
*   Fully customisable
*   Hover effects
*   One vote per visitor using local storage
*   Cloud-based data storage
*   Dark mode support

## Article Rating System Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/07/firebase-article-rating.html)

**Useful Guides for you:**

*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [How to Add Eye Care Mode in Your Website Using Pure CSS & JavaScript](/2026/05/eye-care-mode-css-javascript.html)
*   [How to Create a Modern YouTube Video Playlist Player Using Pure JavaScript](/2026/06/modern-youtube-video-player.html)

## How To Add This Article Rating To Your Blogger Website

### Configure Firebase for the Article Rating System

1.  Go to your [Firebase Console](https://console.firebase.google.com)
2.  Click the "**Create a Project**" option
3.  Name your project as you like
4.  Click the "**Continue**" button
5.  Uncheck the "**Google Analytics**" option
6.  Click the "**Create Project**" button
7.  Click the gear icon near "**Project Overview**" in the sidebar
8.  Scroll down to the "**Your Apps**" section
9.  Choose "**Web**"
10.  Name your web app as you like
11.  Click "**Register App**"
12.  Now you get something like the one given below; copy and save it somewhere.

```
const firebaseConfig = {
  apiKey: "AIzaSyDUMMY_API_KEY_123456789",
  authDomain: "example-app.firebaseapp.com",
  databaseURL: "https://example-app-default-rtdb.firebaseio.com",
  projectId: "example-app",
  storageBucket: "example-app.appspot.com",
  messagingSenderId: "123456789000",
  appId: "1:123456789000:web:abcdef1234567890abcd",
  measurementId: "G-ABCDEFG123"
};
```

14.  Click the "**Build**" option in the sidebar
15.  Click the "**Realtime Database**" option in the sidebar
16.  Click "**Create database**" 
17.  Go to the "**Rules**" Tab
18.  Remove the old rules and paste the following rules

```
{
  "rules": {
    "ratings": {
      "$postId": {
        ".read": true,
        ".write": "newData.hasChildren(['total','count'])",
        "total": { ".validate": "newData.isNumber()" },
        "count": { ".validate": "newData.isNumber()" },
        "users": {
          "$uid": {
            ".write": "newData.isNumber() && newData.val() >= 1 && newData.val() <= 5",
            ".validate": "newData.isNumber() && newData.val() >= 1 && newData.val() <= 5"
          }
        }
      }
    }
  }
}
```

20.  Click the "**Publish**" button

### Add the Article Rating System to Your Blogger Website

1.  Go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the "**Themes**" option from the sidebar
3.  Click the drop-down icon near the "**Customise**" button
4.  Click the "**Edit HTML**" option from the drop-down menu

#### Adding CSS of Article Rating System

6.  Find the `]]></b:skin>` in the HTML
7.  Paste the following CSS just above it

```
/* Article Rating CSS (Source: www.coshix.in) */
.rating-container{margin:30px 0 10px;padding:16px 20px;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.04);display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;font-family:inherit;min-height:70px;justify-content:center}
.rating-loader{width:30px;height:30px;border:3px solid #ddd;border-top-color:#f5b342;border-radius:50%;animation:.8s linear infinite spin}
@keyframes spin{to{transform:rotate(360deg)}}
.rating-stars{display:flex;gap:6px;cursor:pointer}
.rating-star{width:32px;height:32px;display:block;touch-action:manipulation}
.rating-star svg{width:100%;height:100%;transition:fill .15s;fill:#ccc}
.dark-mode .rating-star.active svg,.dark-mode .rating-star.hover svg,.dark-mode.rating-star.active svg,.dark-mode.rating-star.hover svg,.rating-star.active svg,.rating-star.hover svg{fill:#f5b342}
.rating-star.disabled{cursor:default}
.rating-info{display:flex;align-items:baseline;gap:8px;font-size:15px;color:#333}
.rating-average{font-weight:700;color:#222}
.rating-count{opacity:.7}
.rating-message{font-size:13px;opacity:.8;margin-left:auto;white-space:nowrap}
@media(max-width:600px){.rating-container{flex-direction:column;align-items:stretch;gap:10px;padding:14px;min-height:80px}.rating-stars{gap:8px;justify-content:center}.rating-star{width:40px;height:40px}.rating-info{justify-content:center;font-size:14px}.rating-message{margin-left:0;text-align:center;white-space:normal;font-size:12px}}
.dark-mode .rating-container,.dark-mode.rating-container{background:#1e1e1e;border-color:#444;box-shadow:0 2px 8px rgba(255,255,255,.06)}
.dark-mode .rating-info,.dark-mode.rating-info{color:#ccc}
.dark-mode .rating-average,.dark-mode.rating-average{color:#eee}
.dark-mode .rating-count,.dark-mode.rating-count{color:#999}
.dark-mode .rating-message,.dark-mode.rating-message{color:#aaa}
.dark-mode .rating-star svg,.dark-mode.rating-star svg{fill:#555}
.dark-mode .rating-loader,.dark-mode.rating-loader{border-color:#f5b342 #444 #444}
```

If your theme supports dark mode, then don't forget to replace `dark-mode` with your theme's dark mode class.

#### Adding lazy.js for Performance Optimisation

11.  Find `</head>`, paste the following [Fineshop Design's lazy.js](https://fineshopdesign.com/2023/04/lazyloading-javascript.html) just above it

```
<script>/*<![CDATA[*//*@fineshopdesign/lazy.js*/ window.lazy=window.lazy||new Promise(e=>{const t="IS_LAZIED",n="true",o=["scroll","click"],i=["keydown","mouseover","touchmove","touchstart"],r=o.concat(i);function a(){try{return localStorage.getItem(t)===n}catch(e){return!0}}function l(e=!0){try{e?localStorage.setItem(t,n):localStorage.removeItem(t)}catch(e){}}function d(t){l(!0),e({type:t.type.toLowerCase()}),r.forEach(e=>window.removeEventListener(e,d))}if(a())e({type:"local"});else if(0!==document.documentElement.scrollTop||document.body&&0!==document.body.scrollTop)d({type:"scroll"});else{const e=()=>{window.removeEventListener("load",e),i.forEach(e=>window.addEventListener(e,d))};window.addEventListener("load",e),o.forEach(e=>window.addEventListener(e,d))}}); /*]]>*/</script>
```

#### Adding HTML of Article Rating System

14.  Find `<data:post.body/>`, paste the following HTML code just below it or anywhere where you want to show the article rating.

```
<b:if cond='data:view.isPost'>
<!--[ Article Rating (Source: www.coshix.in) ]-->
<div class="rating-container" data-postid="auto">
  <div class="rating-loader"></div>
</div>
</b:if>
```

#### Adding JavaScript of Article Rating System

17.  Find the `</body>`, paste the following code just above it

```
<b:if cond='data:view.isPost'>
<script>/*<![CDATA[*/
  /* ----
  Firebase Article Rating
  Created by: www.coshix.in
  Source code: https://www.coshix.in/2026/07/blogger-firebase-article-rating.html
---- */
  window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
/* Risky edit section */!function(){var t=document.querySelector(".rating-container");if(t){var e,n,a=(e=window.location.pathname,(n=e.match(/\/(\d{4})\/(\d{2})\/([^\/]+)\.html/))?n[1]+n[2]+"_"+n[3].replace(/[^a-zA-Z0-9]/g,""):(n=e.match(/\/(\d+)(?:\/|\?|$)/))?n[1]:"post_"+e.replace(/[^a-zA-Z0-9]/g,"_").substring(0,20));a&&(t.dataset.postid=a,void 0!==window.lazy&&"function"==typeof window.lazy.then?window.lazy.then(r).catch(function(){r()}):r())}function i(){var e=t.querySelector(".rating-loader");e&&e.remove()}function o(){var e=window.FIREBASE_CONFIG||window.PU&&window.PU.fb&&window.PU.fb.cf;if(!e)return console.warn("Rating: Firebase config missing."),i(),void(t.innerHTML='<p style="color:#999;font-size:14px;">Rating unavailable.</p>');if("undefined"!=typeof firebase&&firebase.initializeApp)try{for(var n=firebase.initializeApp(e,"rating-app"),r=firebase.database(n).ref("ratings/"+a),s="",c=1;c<=5;c++)s+='<span class="rating-star" data-value="'+c+'"><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span>';t.innerHTML='<div class="rating-stars" id="stars-'+a+'">'+s+'</div><div class="rating-info"><span class="rating-average" id="avg-'+a+'">0.0</span><span class="rating-count" id="count-'+a+'">(0 votes)</span></div><div class="rating-message" id="msg-'+a+'"></div>';var l=document.querySelectorAll("#stars-"+a+" .rating-star"),u=document.getElementById("avg-"+a),d=document.getElementById("count-"+a),f=document.getElementById("msg-"+a),v="rating_user_"+a,g=localStorage.getItem(v);g||(g="user_"+Date.now()+"_"+Math.random().toString(36).substr(2,6),localStorage.setItem(v,g));var p=null,m=null;function w(t){var e=(p=t||{total:0,count:0,users:{}}).count>0?p.total/p.count:0;u.textContent=e.toFixed(1),d.textContent="("+p.count+" vote"+(1!==p.count?"s":"")+")",m=p.users&&p.users[g]?p.users[g]:null,l.forEach(function(t){var e=parseInt(t.dataset.value,10);t.classList.toggle("active",null!==m&&e<=m)}),f.textContent=null!==m?"You rated "+m+" stars":p.count>0?"Average rating":"Be the first to rate!"}l.forEach(function(t){t.addEventListener("click",function(){!function(t){if(m!==t){var e=m;r.transaction(function(n){if(null===n)return{total:0,count:0,users:{}};var a=n.total||0,i=n.count||0,o=n.users||{};return null!==e?a=a-e+t:(a+=t,i+=1),o[g]=t,{total:a,count:i,users:o}},function(e,n,a){if(e)return console.warn("Rating error:",e),void(f.textContent="Error saving rating.");n&&(w(a.val()),f.textContent="You rated "+t+" stars")},!1)}}(parseInt(this.dataset.value,10))}),t.addEventListener("mouseenter",function(){var t=parseInt(this.dataset.value,10);l.forEach(function(e){var n=parseInt(e.dataset.value,10);e.classList.toggle("hover",n<=t)})}),t.addEventListener("mouseleave",function(){l.forEach(function(t){t.classList.remove("hover")})})}),r.on("value",function(t){w(t.val())}),r.once("value").then(function(t){w(t.val())})}catch(h){console.warn("Rating init error:",h),i(),t.innerHTML='<p style="color:#999;font-size:14px;">Rating unavailable.</p>'}else setTimeout(o,200)}function r(){if("undefined"!=typeof firebase&&firebase.initializeApp)o();else{var t=document.createElement("script");t.src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",t.onload=function(){var t=document.createElement("script");t.src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js",t.onload=o,document.head.appendChild(t)},document.head.appendChild(t)}}}();
/*]]>*/</script>
</b:if>
```

Don't forget to replace the blue colour-highlighted sections in JS with the info which have been [we saved before](#dummy-data).

20.  Save the HTML

## How This Article Rating System Works

This Article Rating System uses Firebase Realtime Database for storing and managing ratings for every blog post. Each post is separated by its unique post ID, which ensure rating is stored separately for each post. When a user opens a post, the widget retrieves rating data from Firebase, calculates the score and displays the total number of ratings.

  

When a user rates the post, their rating is instantly stored to Firebase without requiring a page refresh. As it stores data in Firebase Realtime Database, it shows the same rating for every visitor who is viewing the same article. To avoid duplicate votes in the same browser, it stores a unique user identifier in local storage. 

  

This article rating system was built using lightweight HTML, CSS and vanilla JavaScript, which makes it fast and easy to integrate into Blogger. Its CSS  handles its layout, responsiveness, animations, hover effects, colours, borders and other design factors. Since it doesn't include any obfuscated code, it was also easy to customise as per your requirements.

## FAQ (Frequently Asked Questions)

Do I need a Firebase account to use this rating system?

Yes. You need a Firebase project with Realtime Database enabled to store and retrieve article ratings.

Does every article have its own rating?

Yes. The script automatically generates a unique post ID from each article's URL

Can visitors change their rating later?

Yes. If a visitor rates an article again from the same browser, the system updates their previous rating instead of creating a duplicate vote.

Is this rating widget responsive?

Yes. The layout is fully responsive and works smoothly on desktops, tablets, and mobile devices.

## Conclusion

**A well-designed article rating system helps you to collect valuable feedback about your content from users who were not ready to comment**. Or who want to share their opinion quickly. Even small widgets like this **help to improve user engagement and help visitors feel that there feedbacks are valuable to you**, which makes your website feel more user-focused.

  

As your blog grows, **the rating becomes a valuable source for visitors to choose your content**. It **helps the visitors to identify most rated articles on your website** and also **helps you understand what topics readers enjoy on your website**. An article rating system is useful for both new and returning visitors of your website in several ways.

  

After the implementation of the article rating system on your Blogger website, visitors can rate your content without much effort, while **you can collect valuable insights into your content's performance**. Hope this tutorial helps you to implement an article rating system on your Blogger website. If you have any doubts related to this guide, don't forget to drop a comment below about it. Thanks for reading and have a nice day!