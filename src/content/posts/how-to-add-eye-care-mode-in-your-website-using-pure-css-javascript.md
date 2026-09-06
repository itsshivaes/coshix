---
title: "How to Add Eye Care Mode in Your Website Using Pure CSS & JavaScript"
date: 2026-05-24
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhld-FqwuP3CQXXTTIOfQc8smKgUnmVyGWVfkTxRDXq39NPohvdBDXLhVnBbJLsbAfBZ-Nr5n75DieiGLlu8CJmYG3ElfH7D-8qmWv3f08cWB3VRg0VIROkeqkDzcsNiDhZtEOCAori5TO6ofdIWzshpFKnz39XdEJTxkzH_NxXm-M0muOJuTMV8AcYBfY/s1600-rw/eye-care-mode.webp"
categories: ["Codes"]
tags: ["Codes","Common","How To","Web","Eye Care Mode","CSS","JavaScript","HTML","CSS Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhld-FqwuP3CQXXTTIOfQc8smKgUnmVyGWVfkTxRDXq39NPohvdBDXLhVnBbJLsbAfBZ-Nr5n75DieiGLlu8CJmYG3ElfH7D-8qmWv3f08cWB3VRg0VIROkeqkDzcsNiDhZtEOCAori5TO6ofdIWzshpFKnz39XdEJTxkzH_NxXm-M0muOJuTMV8AcYBfY/s1600-rw/eye-care-mode.webp) Many users spend so much time reading articles, browsing websites or studying online in front of the screen. **Spending so much time in front of the screen is not good because it can cause problems like eye strain or discomfort**. To avoid these issues and to keep users engaged, and to create a more relaxed viewing experience on the website, several modern websites already use eye care or eye comfort mode to improve their user experience.

  

In this guide, you will learn how to create a modern eye care mode on your website using pure CSS and JavaScript. **Eye care mode reduces blue light using warm colour** while still maintaining readability and UI of the website. **This eye care mode doesn't rely on any external libraries**, so the entire system is **lightweight and performance-friendly**. 

  

Whether you are making a blog, portfolio, video streaming or another website, this feature is **good for every type of website**. Eye care mode **helps to improve user comfort and their browsing experience**. By following this tutorial carefully, you can also implement eye care mode in your website. So without wasting much time, let's check how it works and how to add it to your website.

  
Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Eye Care Mode Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/05/eye-care-mode.html)

## Features of Eye Care Mode

*   Made using pure CSS and JavaScript
*   Lightweight and performance-friendly
*   Smooth animation
*   Dark mode support
*   Responsive design
*   Floating toggle button
*   Automatically saves user preferences
*   No external libraries usage
*   Modern design
*   Simple one-click enable and disable
*   All modern browsers support

**Useful Guides for you:**

*   [How to Add Smart Health Reminder Toast Notifications in Website Using JavaScript](/2026/05/smart-health-toast.html)
*   [Create a Thumbnail Generator Tool Using HTML, CSS & JavaScript](/2026/05/build-thumbnail-generator-tool.html)
*   [How to make a Keyless Domain License System using Blogger](/2026/04/keyless-license-system.html)

## How to Add Eye Care Mode to Your Website

1.  Go to your webpage HTML file (example: index.html). If you are using Blogger, go to your [Blogger dashboard](https://www.blogger.com), then click the "**Theme**" option, then click the **drop-down menu** next to the "**Customise**" button, then click the "**Edit HTML**" option.

### Adding CSS to the Webpage

3.  Find the `</head>` tag, paste the following CSS just above it and wrap it inside `<style></style>`. If you are using Blogger, then paste the following CSS just above `]]></b:skin>`.

```
/* Eye Care Mode Style */.ecmBtn{position:fixed;left:28px;bottom:45px;width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 4px 14px rgba(0,0,0,.08);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:99999;transition:.2s;-webkit-tap-highlight-color:transparent;user-select:none}.ecmBtn svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.7;color:#5f6368}.ecmLayer{position:fixed;inset:0;background:rgba(255,235,170,.18);opacity:0;pointer-events:none;z-index:99998;transition:.25s}.ecm .ecmLayer{opacity:1}.ecm .ecmBtn{background:#ece4c7}.ecm .ecmBtn svg{color:#8a6b00}@media(max-width:768px){.ecmBtn{width:40px;height:40px;left:17px;bottom:26px}}
  
  /* Dark Mode (Remove if not using) */.dark-mode .ecmLayer{background:rgba(255,170,70,.08)}.dark-mode .ecmBtn{background:#1f1f1f;border-color:rgba(255,255,255,.08)}.dark-mode .ecmBtn svg{color:#d7d7d7}.dark-mode.ecm .ecmBtn{background:#2d2617}.dark-mode.ecm .ecmBtn svg{color:#f0d98a}
```

**Note:** If your theme supports dark mode, then don't forget to replace dark-mode with your theme's dark mode class name.

### Adding Main Code to Webpage

7.  Find the `</body>` tag, paste the following code just above it

```
<!--[ Eye Care Mode (www.coshix.in) ]-->
    <div class='ecmLayer'/>
    <div class='ecmBtn' id='ecmBtn'>
        <svg viewBox='0 0 24 24'><path d='M12 5C7 5 3.73 8.11 2 12c1.73 3.89 5 7 10 7s8.27-3.11 10-7c-1.73-3.89-5-7-10-7Z'/><circle cx='12' cy='12' r='3'/></svg>
    </div>
    <script>/*<![CDATA[*//* Eye Care Mode JS (www.coshix.in) */(()=>{let e=document.documentElement,t=document.getElementById("ecmBtn"),o="eyeComfort";localStorage.getItem(o)=="on"&&e.classList.add("ecm"),t.onclick=()=>{let t=e.classList.toggle("ecm");localStorage.setItem(o,t?"on":"off")}})();/*]]>*/</script>
```

9.  Save the HTML

## How This Eye Care Mode Works

This eye care mode works by **adding a soft, warm colour overlay to the webpage using CSS and JavaScript**. When users click the floating eye care mode toggle button, JavaScript automatically adds a custom class to the HTML, which enables the eye care mode.

  

The **CSS handles the visual appearance of the eye care mode**, which includes a warm coloured overlay, animation, toggle button, responsive design and dark mode. The **overlay uses soft opacity and a warm tone to reduce visual strain**.

  

**JavaScript handles toggle functionality and saves user preferences using local storage**, so if the user enabled eye care mode once, it will still remain enabled on the next visit. As this eye care mode is built with pure CSS and JavaScript and doesn't rely on external libraries, **your website will remain faster**.

## FAQ (Frequently Asked Questions)

Does this eye care mode work on mobile devices?

Yes, this eye care mode works properly on both desktop and mobile devices.

Can I customise the eye care color?

Yes, you can easily change the overlay color and opacity values inside the CSS.

Does this work in Blogger?

Yes, this eye care mode works perfectly in Blogger.

Does the eye care setting stay the same after a page refresh?

Yes, the script uses localStorage to save the user’s preference automatically.

## Conclusion

Adding an eye care mode toggle to your website is one of the most effective ways to improve users' comfort during long browsing sessions on your website. **Features like eye care mode help to create a more relaxing reading experience for visitors**. Adding features like this not only makes your website feel modern but also **shows good attention to user experience and accessibility**.

  

One of the biggest advantages of using this eye care mode code is that **it is lightweight and customisable**, as it doesn't rely on any external libraries. Since it is completely made using pure CSS and JavaScript, the **developers can easily modify** the design, position, animation, working, etc. So you have **full control over the code of this eye care mode**.

  

The usage of pure and lightweight code makes it the **best option to implement eye care mode without affecting your webpage speed**. I hope this guide helps you to implement eye care mode on your website. If you have any doubts related to this guide, don't forget to drop a comment below. If you need more content like this, don't forget to explore more on [Coshix](https://www.coshix.in). Thanks for reading this guide. Have a nice day.