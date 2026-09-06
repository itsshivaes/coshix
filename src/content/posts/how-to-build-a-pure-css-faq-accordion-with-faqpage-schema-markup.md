---
title: "How to Build a Pure CSS FAQ Accordion with FAQPage Schema Markup"
date: 2026-07-03
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKRBlGJqKno66zilIW1B_v9jsGAMlm-3iAFdt0bNeJ3Q8D89DUxNIvtleyVmIUYCUP_ueFNtOFUyQ6cu3KiaWj68ZMNbAkeGZCT019mD8tUa3BWUYpw5usijGtrrdbnfh2vkBVu6M0zNSTV4XyNG7P928OF84CJ0KaXdlNLa261DM5_S6vf6Y1xRnLCMxm/s1600-rw/faqpage-schema-markup-coshix.webp"
categories: ["Codes"]
tags: ["Codes","Common","FAQ","FAQPage","How To","Web","HTML","CSS","Components","SEO & Performance","CSS Components","Widgets"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKRBlGJqKno66zilIW1B_v9jsGAMlm-3iAFdt0bNeJ3Q8D89DUxNIvtleyVmIUYCUP_ueFNtOFUyQ6cu3KiaWj68ZMNbAkeGZCT019mD8tUa3BWUYpw5usijGtrrdbnfh2vkBVu6M0zNSTV4XyNG7P928OF84CJ0KaXdlNLa261DM5_S6vf6Y1xRnLCMxm/s1600-rw/faqpage-schema-markup-coshix.webp) Frequently Asked Questions are commonly used on websites to organise information well and to give answers to users' common questions in a proper, user-friendly, and clear way. Instead of displaying questions and answers in a simple block of text, an **accordion FAQ section helps you to display questions and answers properly and allows users to expand only the question they are interested in**.

  

In this guide, you will learn how to create an FAQ accordion with FAQPage Schema Markup **using pure CSS**, which means **it works without relying on any JavaScript or external libraries**. This design is responsive as well as lightweight at the same time, which makes it suitable for blogs, business websites, landing pages, portfolios, documentation websites, and many other types of websites.

  

As this **includes FAQPage Schema Markup**, it **helps search engines understand your FAQ content** properly. Whether you are a beginner or a developer who is looking for a lightweight FAQ solution, this tutorial includes everything you need to get started. So, without wasting much time, let's explore how this works and how to implement this FAQ Accordion on your website.

## Features of This FAQ Accordion

*   Uses pure CSS
*   Doesn't use JavaScript or external libraries
*   Built using semantic HTML `<details>`  and `<summary>` elements
*   Integrated FAQPage Schema Markup for search engines
*   Fully responsive design
*   Dark mode support
*   Smooth animations
*   Expand and collapse functionality
*   SEO friendly structure
*   Lightweight and performance-friendly
*   Custom SVG icon support for each FAQ item

## FAQ Accordion Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/07/faq-with-schema-markup.html)

**Useful Guides for you:**

*   [How to Add a Latest Posts Slider in Blogger Using CSS & JavaScript](/2026/06/blogger-featured-posts-slider.html)
*   [How to Add Eye Care Mode in Your Website Using Pure CSS & JavaScript](/2026/05/eye-care-mode-css-javascript.html)
*   [How to Create a Modern YouTube Video Playlist Player Using Pure JavaScript](/2026/06/modern-youtube-video-player.html)

## How to Add This FAQ Accordion to Your Website

1.  Go to your webpage HTML file (example: index.html). If you are using Blogger, go to your [Blogger dashboard](https://www.blogger.com), then click the "**Theme**" option, then click the **drop-down menu** next to the "**Customise**" button, then click the "**Edit HTML**" option.

### Adding CSS For FAQ Accordion

```
/* FAQ Accordion CSS (Source:www.coshix.in) */
.showH{max-width:820px;margin:0 auto;padding:2.5rem 2.5rem 2rem;background:#fff;border-radius:6px;border:1px solid #e2e2e2;color:#1a2332}
.faq-head{text-align:center;margin-bottom:2.5rem}
.faq-head h2{font-size:2.2rem;font-weight:700;letter-spacing:-.02em;margin:0;background:linear-gradient(135deg,#1a2332 0%,#3a4a62 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.faq-head p{color:#5e6f88;font-size:1.05rem;margin:.4rem 0 0;opacity:.8}
.faq-item{display:block;border-bottom:1px solid rgba(0,0,0,.05);padding:.2rem 0}
.faq-item:last-child{border-bottom:0}
.faq-question{list-style:none;display:flex;align-items:center;gap:.75rem;padding:.9rem .2rem;cursor:pointer;font-weight:600;font-size:1.08rem;color:#1a2332;transition:color .2s;position:relative;user-select:none}
.faq-question::-webkit-details-marker{display:none}
.faq-question:hover{color:#4f6ef7}
.faq-icon{flex-shrink:0;width:1.6rem;height:1.6rem;display:flex;align-items:center;justify-content:center}
.faq-icon svg{width:100%;height:100%;stroke:#4f6ef7;stroke-width:1.8;fill:none;stroke-linecap:round;stroke-linejoin:round}
.faq-toggle{flex-shrink:0;margin-left:auto;width:1.8rem;height:1.8rem;display:flex;align-items:center;justify-content:center;transition:transform .3s ease}
.faq-toggle svg{width:100%;height:100%;stroke:#7a8aa0;stroke-width:2.2;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:stroke .2s,transform .3s}
.faq-item[open] .faq-toggle svg{stroke:#4f6ef7;transform:rotate(180deg)}
.faq-answer{padding:.2rem 1.8rem 1.2rem 2.5rem;color:#2d3b4e;font-size:.98rem;line-height:1.7;animation:faqFade .3s ease}
.faq-answer p{margin:0}
.faq-answer strong{color:#1a2332;font-weight:600}
@keyframes faqFade{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
@media (max-width:600px){
.showH{padding:1.8rem 1.2rem 1.2rem}
.faq-head h2{font-size:1.7rem}
.faq-question{font-size:.98rem;gap:.5rem;padding:.7rem 0}
.faq-answer{padding:.2rem .5rem .8rem 1.8rem}
.faq-icon{width:1.3rem;height:1.3rem}
.faq-toggle{width:1.5rem;height:1.5rem}
}

/* Dark Mode (Remove if not using) */
.dark-mode .showH{background:#14181f;border-color:#2b3442;color:#e8edf7}
.dark-mode .faq-head h2{background:linear-gradient(135deg,#fff 0%,#b9c8e7 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.dark-mode .faq-head p{color:#9aa9bf}
.dark-mode .faq-item{border-bottom:1px solid rgba(255,255,255,.08)}
.dark-mode .faq-question{color:#f2f5fb}
.dark-mode .faq-question:hover{color:#7ea2ff}
.dark-mode .faq-icon svg{stroke:#7ea2ff}
.dark-mode .faq-toggle svg{stroke:#9aa9bf}
.dark-mode .faq-item[open] .faq-toggle svg{stroke:#7ea2ff}
.dark-mode .faq-answer{color:#c6d2e3}
.dark-mode .faq-answer strong{color:#fff}
```

If your theme supports dark mode, then don't forget to replace the dark-mode class in CSS with your theme's dark mode class.

### Adding FAQ Accordion with FAQPage Schema Markup

6.  If you are using [Blogger,](https://www.blogger.com) click to save the HTML and open the post or page where you want to display the FAQ Accordion. Then switch to **HTML view** and paste the following code. If you are using a normal website, paste the following code anywhere inside the `<body></body>` tag where you want the FAQ Accordion to appear.

```
<div class="showH" itemscope itemtype="https://schema.org/FAQPage">

  <div class="faq-head">
    <h2>Frequently Asked <span style="background:linear-gradient(135deg,#4f6ef7,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Questions</span></h2>
    <p>Quick answers to the most common queries</p>
  </div>

  <!-- Q1 -->
  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><path d="M4 6h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6z"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>
      </span>
      What is your return policy?
      <span class="faq-toggle">
       <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">We offer a <strong>30‑day money‑back guarantee</strong>. If you're not satisfied, return within 30 days for a full refund. Items must be in original condition.</p>
    </div>
  </details>

  <!-- Q2 -->
  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><rect x="1" y="4" width="15" height="13" rx="1"/><path d="M16 8h3l4 4v5h-4"/><circle cx="6" cy="20" r="2"/><circle cx="18" cy="20" r="2"/><path d="M6 17v1"/></svg>
      </span>
      How long does shipping take?
      <span class="faq-toggle">
        <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text"><strong>Standard</strong> 3–5 business days (US). <strong>Express</strong> 2–3 days, <strong>Overnight</strong> 1–2 days. International varies by destination.</p>
    </div>
  </details>

  <!-- Q3 -->
  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </span>
      Do you offer international shipping?
      <span class="faq-toggle">
        <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">Yes! We ship to <strong>50+ countries</strong>. Costs and delivery times are calculated at checkout based on your address.</p>
    </div>
  </details>

  <!-- Q4 -->
  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v3l2 1"/></svg>
      </span>
      How do I track my order?
      <span class="faq-toggle">
        <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">You'll receive a <strong>tracking link</strong> via email once shipped. You can also check your order status in your account dashboard.</p>
    </div>
  </details>

</div>
```

Don't forget to change the highlighted texts, SVGs, and others with yours!

### To Add More Questions and Answers

To create more questions and answers, simply copy the entire `<details class="faq-item">...</details>`  block and paste it below the previous one.

#### Example

  

```
<div class="showH" itemscope itemtype="https://schema.org/FAQPage">

  <div class="faq-head">
    <h2>Frequently Asked <span style="background:linear-gradient(135deg,#4f6ef7,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Questions</span></h2>
    <p>Quick answers to the most common queries</p>
  </div>

  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><path d="M4 6h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6z"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>
      </span>
      What is your return policy?
      <span class="faq-toggle">
       <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">We offer a <strong>30‑day money‑back guarantee</strong>. If you're not satisfied, return within 30 days for a full refund. Items must be in original condition.</p>
    </div>
  </details>

</div>
```

```
<div class="showH" itemscope itemtype="https://schema.org/FAQPage">

  <div class="faq-head">
    <h2>Frequently Asked <span style="background:linear-gradient(135deg,#4f6ef7,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Questions</span></h2>
    <p>Quick answers to the most common queries</p>
  </div>

  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><path d="M4 6h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6z"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>
      </span>
      What is your return policy?
      <span class="faq-toggle">
       <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">We offer a <strong>30‑day money‑back guarantee</strong>. If you're not satisfied, return within 30 days for a full refund. Items must be in original condition.</p>
    </div>
  </details>
  
  <details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <summary class="faq-question" itemprop="name">
      <span class="faq-icon">
        <svg viewBox="0 0 24 24"><rect x="1" y="4" width="15" height="13" rx="1"/><path d="M16 8h3l4 4v5h-4"/><circle cx="6" cy="20" r="2"/><circle cx="18" cy="20" r="2"/><path d="M6 17v1"/></svg>
      </span>
      How long does shipping take?
      <span class="faq-toggle">
        <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </summary>
    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text"><strong>Standard</strong> 3–5 business days (US). <strong>Express</strong> 2–3 days, <strong>Overnight</strong> 1–2 days. International varies by destination.</p>
    </div>
  </details>

</div>
```

## How This FAQ Accordion Works

This FAQ Accordion was built with HTML `<details>` and `<summary>` elements, which allow users to expand or collapse answers by simply clicking on a question without the help of JavaScript or any external libraries; it is supported by most modern browsers. Since it is built without relying on JavaScript, it is lightweight, fast and easy to implement on almost any website.

The design, animations, and its appearance are entirely controlled with the help of CSS. CSS is used to create more layout, typography, hover effects, spacing and smooth opening animations. Since it uses pure CSS, you can easily customise colours, borders, fonts and overall layout to match your website design.

The accordion also includes **FAQPage Scheme Markup** using schema.org structured data. Each question and answer is wrapped in the appropriate markup so search engines can easily understand your FAQ content. These all make it a well-structured section which easy to read for both users and search engines while remaining simple to update whenever you need to edit or add a question and answer.

## FAQ (Frequently Asked Questions)

Do I need JavaScript to use this FAQ accordion?

No. This FAQ accordion is built entirely with HTML and CSS.

Can I customize the colors and design?

Yes. You can easily modify the colors, fonts, spacing, borders, icons, and other design elements through the CSS code.

Does this FAQ support FAQPage Schema Markup?

Yes. The code includes FAQPage Schema Markup using Schema.org.

Can I replace the SVG icons?

Yes. You can replace the default SVG icons with your own icons or use any icons website like [iconsax.io](https://iconsax.io/)

## Conclusion

A well-made FAQ section can **make a difference in how visitors interact with your website**. It makes it **easy to find the information** they need instead of searching through lengthy content or contacting website support for help. It not only improves users' browsing experience but also helps to **build trust between your website and its users**.

  

Whether you are building a business website, blog, online store, portfolio or any other type of website,  you can **easily replace sample content with your own content**.  The **customisable design** makes it suitable for almost any type of website. Its simple and easy-to-customise structure also makes it easy to **keep updating your FAQ section as your website grows**.

  

A clean and well-organised FAQ section not only helps to answer common questions but also it **encourage visitors to stay on your website for a longer time**. I hope this guide helped you to add an FAQ accordion **with FAQPage Schema Markup** to your website. If you have any doubts related to this guide, don't forget to drop a comment below about it. Thanks for visiting and have a nice day!