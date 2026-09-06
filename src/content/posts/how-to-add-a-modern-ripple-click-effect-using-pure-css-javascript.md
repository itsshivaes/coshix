---
title: "How to Add a Modern Ripple Click Effect Using Pure CSS & JavaScript"
date: 2026-05-13
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijF9SMUef8zSBfV8suiOp5Csdm9PlR0hwZJESvHg9nDGKDsrnJ0xPwBwvMJR4ZZo4Lk86fC7uqye2bNdaQLTYCbpLMFfzG0En1AnSpGDe-CVgzwirxJ38JP5O2qrY9TsARqaFnAqO7R76LUOoUPPEL5lIb5v7KEy4xhihtPewRJWwarzNX1O20yMKRY6me/s1600-rw/ripple-click-effect.webp"
categories: ["Common"]
tags: ["Common","Codes","How To","Web","Ripple effect","CSS","JavaScript","CSS Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijF9SMUef8zSBfV8suiOp5Csdm9PlR0hwZJESvHg9nDGKDsrnJ0xPwBwvMJR4ZZo4Lk86fC7uqye2bNdaQLTYCbpLMFfzG0En1AnSpGDe-CVgzwirxJ38JP5O2qrY9TsARqaFnAqO7R76LUOoUPPEL5lIb5v7KEy4xhihtPewRJWwarzNX1O20yMKRY6me/s1600-rw/ripple-click-effect.webp)

Adding a ripple effect to your website is one of the best ways to **make your website feel modern and attractive** to its users. Nowadays, Many popular websites use ripple click effect in their website to provide their users with visual feedback when users click links, buttons or other elements in the website. **A well-made ripple click effect can improve user experience** by providing smoother animation and a modern design.

From this tutorial, you will learn how to add a modern ripple click effect to your website **just using pure CSS and JavaScript**. In this tutorial, we will learn to add both the body and the button ripple effect with smooth animation, modern design and with dark mode support to your website. As this ripple click effect **uses only pure CSS and lightweight JavaScript instead of relying on external libraries**, it also doesn't affect your webpage's speed.

Whether you are building a personal blog, a modern Blogger template, a portfolio website or any other type of website, this ripple effect **can provide a modern and professional touch to your website**. Just by following the steps provided below, you can also add a ripple click effect to your website easily. So without wasting much time, let's check how it works and how we can implement this on your website.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Live Ripple Effect Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/05/ripple-effect.html)

## Features of This Ripple Effect

*   Uses Pure CSS and JavaScript
*   No external libraries used
*   Added dark mode support
*   Smooth Animation
*   Very lightweight codes

**Useful Guides for you:**

*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [Create a Thumbnail Generator Tool Using HTML, CSS & JavaScript](/2026/05/build-thumbnail-generator-tool.html)
*   [How to make a Keyless Domain License System using Blogger](/2026/04/keyless-license-system.html)

## How to Add This Ripple Effect to Your Website

1.  Go to your webpage HTML file (example: index.html). If you are using Blogger, go to your [Blogger dashboard](https://www.blogger.com), then click the "**Theme**" option, then click the **drop-down menu** next to the "**Customise**" button, then click the "**Edit HTML**" option.
2.  Add the following CSS just above the `</head>` tag and wrap it inside `<style></style>`. If you are using **Blogger**, paste the CSS just above `]]></b:skin>`.

#### Body Ripple Effect CSS

```
/* Body Ripple Effect (www.coshix.in) */.rpL{position:fixed;left:0;top:0;width:10px;height:10px;border-radius:50%;pointer-events:none;z-index:999999;transform:translate(-50%,-50%) scale(0);opacity:0;background:radial-gradient(circle,rgba(79,70,229,.62) 0%,rgba(37,99,235,.42) 36%,rgba(0,0,0,.12) 58%,transparent 78%);box-shadow:0 0 14px rgba(79,70,229,.32),0 0 24px rgba(37,99,235,.18);mix-blend-mode:multiply;will-change:transform,opacity}.rpL:after{content:"";position:absolute;inset:-1px;border-radius:50%;border:1.2px solid rgba(79,70,229,.4)}.rpL.a{animation:rA .42s cubic-bezier(.22,1,.36,1)}@keyframes rA{0%{opacity:1;transform:translate(-50%,-50%) scale(.2)}100%{opacity:0;transform:translate(-50%,-50%) scale(5.5)}}
  
  /* Dark mode (Remove if not using) */.dark-mode .rpL{background:radial-gradient(circle,rgba(255,255,255,.82) 0%,rgba(147,197,253,.42) 34%,rgba(255,255,255,.12) 56%,transparent 78%);box-shadow:0 0 16px rgba(255,255,255,.22),0 0 26px rgba(147,197,253,.14);mix-blend-mode:screen}.dark-mode .rpL:after{border-color:rgba(255,255,255,.32)}
```

**Note:** If your theme supports dark mode, then don't forget to replace the marked dark-mode class in the CSS with yours.

#### Button Ripple Effect CSS

```
/* Ripple Button (www.coshix.in) */.rpLb{margin-top:10px;margin-bottom:10px;position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;border:0;border-radius:30px;background:linear-gradient(135deg,#6366f1,#3b82f6);color:#fff;font-size:14px;cursor:pointer;-webkit-tap-highlight-color:transparent;box-shadow:0 10px 24px rgba(79,70,229,.22),inset 0 1px rgba(255,255,255,.18);transition:transform .16s cubic-bezier(.22,1,.36,1),box-shadow .22s ease}.rpLb:active{transform:scale(.985);box-shadow:0 5px 16px rgba(79,70,229,.18)}.br{position:absolute;left:0;top:0;width:14px;height:14px;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%) scale(0);opacity:0;background:radial-gradient(circle,rgba(255,255,255,.92) 0%,rgba(255,255,255,.38) 40%,rgba(255,255,255,.1) 60%,transparent 78%);mix-blend-mode:screen;will-change:transform,opacity}.br.a{animation:bA .55s cubic-bezier(.22,1,.36,1)}@keyframes bA{0%{opacity:.95;transform:translate(-50%,-50%) scale(.2)}100%{opacity:0;transform:translate(-50%,-50%) scale(8.5)}}
```

8.  Paste the following JavaScript just above the `</body>` tag

#### Body Ripple Effect JavaScript

```
<script>/*<![CDATA[*//* Body Ripple Effect JS (www.coshix.in) */addEventListener("pointerdown",e=>{if(e.target.closest(".rpLb"))return;const r=document.createElement("div");r.className="rpL a";r.style.left=e.clientX+"px";r.style.top=e.clientY+"px";document.body.appendChild(r);r.onanimationend=()=>r.remove()},{passive:true});/*]]>*/</script>
```

#### Button Ripple Effect JavaScript

```
<script>/*<![CDATA[*//* Ripple Button JS (www.coshix.in) */document.querySelectorAll(".rpLb").forEach(b=>b.addEventListener("pointerdown",e=>{const r=document.createElement("span");r.className="br a";r.style.left=e.offsetX+"px";r.style.top=e.offsetY+"px";b.appendChild(r);r.onanimationend=()=>r.remove()},{passive:true}));/*]]>*/</script>
```

13.  Now save the changes we made in the HTML

**Success:** That’s it! You have successfully added a modern ripple effect to your website using pure CSS and JavaScript.

## How This Ripple Effect Works

This ripple effect **detects the user's click position using JavaScript and dynamically creates a ripple effect** at the same position. When the user clicks anywhere on the page, the ripple effect will be generated with **smooth animation using CSS keyframes.**

  

The **CSS handles its scaling effect, animation glow, etc**. JavaScript controls how the ripple effect should appear and automatically removes the effect when the animation ends. These all **make the ripple effect lightweight and avoid unnecessary elements from staying in the DOM**.

  

The use of only pure CSS and JavaScript ensures it remains **smooth and performance-friendly across both desktop and mobile devices**.

## FAQ (Frequently Asked Questions)

Does this ripple effect affect website speed?

No, this ripple effect uses lightweight CSS and JavaScript

Does this work in Blogger?

Yes, this ripple effect works perfectly in Blogger websites

Can I use this ripple effect on buttons only?

Yes, you can use the button ripple effect separately.

Will this work on all modern browsers?

Yes, the ripple effect works on most modern browsers including Chrome, Edge and Firefox.

## Conclusion

Adding s**mall intractive effects like this ripple effect can improve your website's overall feel**. Adding a ripple effect to your website is one of the best ways to improve user experience. Adding a ripple click effect instead of a static click with no visual effect h**elps users to understand where they interact on your website**, like clicking buttons and other elements.

  

You c**an also improve its design, animation, speed, etc**. in future as it **uses pure CSS and JavaScript** instead of obfuscated and heavy code. As it is f**ully customisable, both beginners and developers** can experiment there own styles on this ripple effect code. The small improvements in your website not only improve its visual appearance but also **improve the professionalism** of your website.

  

I hope this tutorial helped you to understand how to implement a modern ripple click effect on your website. If you are interested in more content like this, then please feel free to explore [www.coshix.in](https://www.coshix.in). If you have any doubts related to this guide, don't forget to drop a comment below. Thanks for visiting. Have a nice day!