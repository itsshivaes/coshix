---
title: "How to Add Smart Health Reminder Toast Notifications in Website Using JavaScript"
date: 2026-05-19
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjimwHIRh4s6s_gZaY0YMaLfDd4liBzMUUI4b2QTmyrar_57jwOpTsBz0JrUvq335bvJYT0kHyWykY__yEd-oYF3roTaWpc5iwDCFw7D_SVca7FPswpUHXNt-v9EWeQm0-hJrXInKTcFnWFMi4hPkhV3Fv3bCFg7VVCVLDiMvXyMdo8TFTkdDGW5Zq3CsEV/s1600-rw/smart-health-reminder.webp"
categories: ["Web"]
tags: ["Web","Codes","Common","How To","Toast","CSS","JavaScript","JavaScript Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjimwHIRh4s6s_gZaY0YMaLfDd4liBzMUUI4b2QTmyrar_57jwOpTsBz0JrUvq335bvJYT0kHyWykY__yEd-oYF3roTaWpc5iwDCFw7D_SVca7FPswpUHXNt-v9EWeQm0-hJrXInKTcFnWFMi4hPkhV3Fv3bCFg7VVCVLDiMvXyMdo8TFTkdDGW5Zq3CsEV/s1600-rw/smart-health-reminder.webp)

Adding a smart health reminder toast notification on your website is one of the **best ways to improve user experience and help users avoid long screen sessions**. Several modern websites already use this reminder system to suggest actions like drink water, take a break or reduce continuous screen time. These small reminders provide users with a **more user-friendly and better browsing experience**.

In this guide, you will learn how to add a smart reminder toast notification to your website **just using pure CSS and JavaScript.** It **doesn't rely on any external libraries**, so everything will remain lightweight and easy to integrate. The reminder **displays at certain time intervals with smooth animations**. It reminds users to drink water, take a break and go to bed at a specific time.

Whether you are building a blog, video streaming website, productivity website or any other type of website, **it will suit any type of website**. This is not only a unique feature for your website but also **improves user interaction on your website**. So without wasting much time, let's check how this smart health reminder works and how to implement it on your website.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Features of This Reminder System

*   Uses pure CSS and JavaScript
*   Lightweight code
*   Responsive design
*   Automatic reminder
*   Smooth animation
*   Modern UI
*   Dark mode support

**Useful Guides for you:**

*   [How to Add a Modern Ripple Click Effect Using Pure CSS & JavaScript](/2026/05/css-javascript-ripple-effect.html)
*   [Create a Thumbnail Generator Tool Using HTML, CSS & JavaScript](/2026/05/build-thumbnail-generator-tool.html)
*   [How to make a Keyless Domain License System using Blogger](/2026/04/keyless-license-system.html)

## How to Add Smart Health Reminder to Your Website

1.  Go to your webpage HTML file (example: index.html). If you are using Blogger, go to your [Blogger dashboard](https://www.blogger.com), then click the "**Theme**" option, then click the **drop-down menu** next to the "**Customise**" button, then click the "**Edit HTML**" option.

### Adding CSS to the Webpage

3.  Find the `</head>` tag, then add the following CSS just above it and wrap it inside `<style></style>`. If you are using Blogger, find `]]></b:skin>` , then paste the CSS just above it.

```
/* Smart Health Reminder Toast (www.coshix.in) */.hToast{position:fixed;left:24px;bottom:24px;z-index:999;pointer-events:none}.hToast span{position:relative;display:inline-flex;align-items:center;text-align:left;justify-content:flex-start;gap:8px;background:#323232;color:rgba(255,255,255,.92);font-size:14px;font-family:inherit;line-height:1.5;border-radius:10px;padding:14px 18px;box-shadow:0 10px 40px rgba(149,157,165,.25);opacity:0;transform:translateY(100px);transition:all .25s cubic-bezier(.16,1,.3,1);animation:slideinwards 2.8s cubic-bezier(.16,1,.3,1) forwards;-webkit-animation:slideinwards 2.8s cubic-bezier(.16,1,.3,1) forwards;max-width:320px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}@media screen and (max-width:500px){.hToast{left:16px;right:16px;bottom:16px}.hToast span{font-size:13px;max-width:none}}@keyframes slideinwards{0%{opacity:0;transform:translateY(100px)}15%,85%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(100px);visibility:hidden}}@-webkit-keyframes slideinwards{0%{opacity:0;-webkit-transform:translateY(100px)}15%,85%{opacity:1;-webkit-transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(100px);visibility:hidden}}

   /* Dark mode (Remove if not using) */.dark-mode .hToast span{box-shadow:0 10px 40px rgba(0,0,0,.2)}
```

**Note:** If your theme supports dark mode, then don't forget to replace the marked dark-mode class in the CSS with yours.

### Adding JavaScript to the Webpage

7.  Find the `</body>` tag, paste the following code just above it

```
<!--[ Smart Health Reminder Toast (www.coshix.in) ]-->
    <div class='hToast' id='hToast'/>
    <script>/*<![CDATA[*//* Smart Health Reminder JS (www.coshix.in) */const hToast=(t,i="☕")=>{const s=document.createElement("span");s.innerHTML=`${i}&nbsp;${t}`,document.getElementById("hToast").appendChild(s),setTimeout(()=>s.remove(),5500)},h=new Date().getHours();(h>=23||h<5)&&setTimeout(()=>hToast("It's getting late. Sleep is important for your health.","🌙"),2000),setTimeout(()=>hToast("You've been reading for a while. Take a short break and relax your eyes.","☕"),15*60*1000),document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&(clearTimeout(window.__rt),window.__rt=setTimeout(()=>hToast("Still reading? Stand up, stretch a little and drink water.","💧"),12*60*1000))});/*]]>*/</script>
```

12\*60\*1000 means 12 minutes in JavaScript, and 15\*60\*1000 means 15 minutes.  
**Explanation:**

*   12 = minutes
*   60 = seconds in 1 minute
*   1000 = milliseconds in 1 second

**Examples:**

*   5\*60\*1000 = 5 minutes
*   10\*60\*1000 = 10 minutes
*   30\*60\*1000 = 30 minutes
*   60\*60\*1000 = 1 hour

Simply change the first number to customise the reminder timing.

10.  Now save the HTML

That’s it! You have successfully added smart health reminder toast notifications to your website using pure CSS and JavaScript.

## How This Smart Reminder Works

This smart reminder toast notification works using JavaScript; it displays a toast automatically after a specific time interval. When a user stays on your website for a certain time, it creates a small toast notification and displays it with a smooth animation on your website.

  

JavaScript also checks the current time set on your device to show a bedtime notification at the given time. If the current time matches the given time, it shows a bedtime reminder. In the same way, it shows a reminder to drink water and to take a break according to the minute set in JavaScript.

  

The **CSS handles the design, position, responsiveness and animation of the toast notification,** while JavaScript controls when the toast should appear and disappear. Since it uses pure CSS and JavaScript instead of relying on external libraries, it **doesn't affect your page performance much**.

## FAQ (Frequently Asked Questions)

Does this reminder affect website performance?

No, this smart health reminder uses lightweight CSS and JavaScript

Does this work in Blogger?

Yes, this smart health reminder works perfectly on Blogger websites

Can I change the reminder timing?

Yes, you can easily customize the timing values inside the JavaScript code.

Will this work on all modern browsers?

Yes, the reminder works on most modern browsers, including Chrome, Edge and Firefox.

## Conclusion

Smart Health Reminders are a simple but **effective way to make your website more interactive**. Adding reminders like dehydration, break time, and bedtime helps to **improve the overall browsing experience of the users**. Small features like this not only improve functionality but also provide a good user experiance in your website.

  

Since it is made with pure CSS and JavaScript, it remains **lightweight and easy to customise**. Another advantage of using pure CSS and JavaScript is that **developers can easily modify the code** according to their preference without relying on external libraries. This makes **this reminder more flexible and easier to integrate** into different types of websites.

  

I hope this tutorial helped you to understand how this smart health reminder works and how to add this smart health reminder toast notification to your website. If you are interested in more content like this, please feel free to explore more on [Coshix](https://www.coshix.in). If you have any doubts related to this guide, don't forget to drop a comment below. Thanks for reading. Have a nice day!