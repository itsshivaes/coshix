---
title: "How to Add Table of Contents in Blogger (Automatic TOC Guide)"
date: 2026-03-20
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghQGAV4VnotemaDi0WIJL0xj8uZCPdTCpe9HVH4tiwhIA3GCapyoYxTDf-1XTwWRevCiH7PqtbXD_TNApfmOVqQw5LNRKDQ6Ux92C2wv4Aw1xo8TdnIILqhkEldfuauVZl7UqC68oAH6uwIR_3Rd_2xJyxJOt1vlDpTvH1lHFnz1TtsYv1sP6FOl_4QTtd/s1600-rw/Table%20Of%20Content.webp"
categories: ["Codes"]
tags: ["Codes","How To","Table Of Content","Blogger","Web","CSS","JavaScript","HTML","Widgets"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghQGAV4VnotemaDi0WIJL0xj8uZCPdTCpe9HVH4tiwhIA3GCapyoYxTDf-1XTwWRevCiH7PqtbXD_TNApfmOVqQw5LNRKDQ6Ux92C2wv4Aw1xo8TdnIILqhkEldfuauVZl7UqC68oAH6uwIR_3Rd_2xJyxJOt1vlDpTvH1lHFnz1TtsYv1sP6FOl_4QTtd/s1600-rw/Table%20Of%20Content.webp)

When you write long posts, it is difficult to reach the exact position of the posts your visitors need, which later may also become the reason to visitor to ignore your website. To avoid this situation, we implement a table of content in our website. An automatically well-organised table of contents gives your website a professional touch. The Table of contents also helps your website visitors to save time by scrolling a lot.

Adding a table of contents to your website is one of the best ways to make your website more friendly to its users. Along with improving user experiance it also helps you to highlight important sections and help you to make your blog look cleaner to your website users. If the table of contents is automatic, then this also make easy for you to implement a table of contents in your website.

Blogger is one of the best platforms where a lot of bloggers start their blogging journey. In this article, we are going to make your learn how to implement an automatic table of contents in your Blogger website. A table of content collect all headings in your article and displays them in one place. This table of contents also have hide and show function, which helps to allow users to make the table of contents show when the users need it.  So, without wasting much time, let's check how to add automatic table content to your Blogger website.

## How to add Automatic Table of Contents in Blogger

1.  First of all, go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the **Themes** option from the sidebar
3.  Click the **drop-down icon** near **the Customise** button on the Themes page
4.  Click **Edit HTML** from that drop-down menu
5.  Find </head> or for some themes it may be <head/>
6.  Paste the following JS just above it

```
<b:if cond='data:view.isPost'>
  <script>/*<![CDATA[*/ 
  /* Table of Content, Credit: blustemy.io/creating-a-table-of-contents-in-javascript */
class TableOfContents { constructor({ from, to }) { this.fromElement = from; this.toElement = to; this.headingElements = this.fromElement.querySelectorAll("h1, h2, h3, h4, h5, h6"); this.tocElement = document.createElement("div"); }; getMostImportantHeadingLevel() { let mostImportantHeadingLevel = 6; for (let i = 0; i < this.headingElements.length; i++) { let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]); mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ? headingLevel : mostImportantHeadingLevel; } return mostImportantHeadingLevel; }; static generateId(headingElement) { return headingElement.textContent.replace(/\s+/g, "_"); }; static getHeadingLevel(headingElement) { switch (headingElement.tagName.toLowerCase()) { case "h1": return 1; case "h2": return 2; case "h3": return 3; case "h4": return 4; case "h5": return 5; case "h6": return 6; default: return 1; } }; generateToc() { let currentLevel = this.getMostImportantHeadingLevel() - 1, currentElement = this.tocElement; for (let i = 0; i < this.headingElements.length; i++) { let headingElement = this.headingElements[i], headingLevel = TableOfContents.getHeadingLevel(headingElement), headingLevelDifference = headingLevel - currentLevel, linkElement = document.createElement("a"); if (!headingElement.id) { headingElement.id = TableOfContents.generateId(headingElement); } linkElement.href = `#${headingElement.id}`; linkElement.textContent = headingElement.textContent; if (headingLevelDifference > 0) { for (let j = 0; j < headingLevelDifference; j++) { let listElement = document.createElement("ol"), listItemElement = document.createElement("li"); listElement.appendChild(listItemElement); currentElement.appendChild(listElement); currentElement = listItemElement; } currentElement.appendChild(linkElement); } else { for (let j = 0; j < -headingLevelDifference; j++) { currentElement = currentElement.parentNode.parentNode; } let listItemElement = document.createElement("li"); listItemElement.appendChild(linkElement); currentElement.parentNode.appendChild(listItemElement); currentElement = listItemElement; } currentLevel = headingLevel; } this.toElement.appendChild(this.tocElement.firstChild); } } 
/*]]>*/</script>
  </b:if>
```

7.  Find \]\]></b:skin>
8.  Paste the following CSS just above it

```
/* Smooth Scroll */html{scroll-behavior:smooth}
/* Table of Content (www.coshix.in) */#toc-container{margin:20px 0;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#eef2ff,#f8fafc);border:1px solid rgba(0,0,0,.06);box-shadow:0 4px 20px rgba(0,0,0,.05)}#toc-toggle{width:100%;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:transparent;border:0;font-size:15px;font-weight:600;color:#111827;cursor:pointer}#toc-icon{transition:.25s}#toc{max-height:0;overflow:hidden;transition:max-height .25s ease;padding:0 16px}#toc-container.open #toc{max-height:500px;padding:10px 16px}#toc-container:not(.open) #toc{transition:none;padding:0 16px}#toc-container.open #toc-icon{transform:rotate(180deg)}#toc ol{padding-left:18px;margin:0}#toc li{margin:6px 0}#toc a{text-decoration:none;color:#374151;font-size:14px;transition:.2s}#toc a:hover{color:#6366f1;padding-left:4px}.darkMode #toc-container{background:linear-gradient(135deg,#0f172a,#111827);border:1px solid rgba(255,255,255,.06);box-shadow:0 4px 20px rgba(0,0,0,.4)}.darkMode #toc-toggle{color:#e5e7eb}
```

9.  Find <data:post.body/>
10.  Replace it with the following code

```
<div class='postBody'><data:post.body/></div>
```

11.  Click  to save changes
12.  Go back to the dashboard
13.  Click the **Posts** option from the sidebar
14.  Click on any post that you need to add a table of contents
15.  Paste the following code anywhere in that post ( **Recommend:** Top of the post or middle of the post )

```
<!--[ TOC (www.coshix.in)]-->
<div id='toc-container'><button id='toc-toggle'><span>Table of contents</span><svg height='18' id='toc-icon' viewBox='0 0 24 24' width='18'><path d='M6 9l6 6 6-6' fill='none' stroke='currentColor' stroke-width='2'/></svg></button><div id='toc'></div></div>
<script>/*<![CDATA[*//* Load TOC */document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".postBody"),t=document.getElementById("toc"),c=document.getElementById("toc-container"),b=document.getElementById("toc-toggle");e&&t&&new TableOfContents({from:e,to:t}).generateToc(),b&&b.addEventListener("click",function(){c.classList.toggle("open")})});/*]]>*/</script>
```

You can change the blue-highlighted text in the code with your likely text.

**Useful Guides for you:**

*   [How to Create a Quiz System in JavaScript with Timer, Explanation & Score (Step-by-Step Tutorial)](/2026/03/javascript-quiz-system.html)
*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [How to Add Like and Dislike Button in Blogger Using Firebase](/2026/03/like-and-dislike-feature-blogger.html)

16.  If you have done everything in your post, click the **Publish** button at the top to make the post public

## Requirement to make the work Table of Contents properly

*   Always ensure you use proper heading tags 
*   Make sure you followed every step given above
*   The web browser should not block JavaScript
*   Do not use H1 in a post more than once. Some Blogger templates also use H1 in the Blogger post title, so if it's then don't even touch H1 in your post. 

**Want to see how it works?**  
[Demo](https://coshix-outputs.blogspot.com/2026/03/the-heading.html)

## Is the Table of Contents Good for SEO?

Yes, the table of contents is good for SEO, it helps to improve your article structure, readability and user experiance but we only recommend you to use a table of contents in long articles. Don't use it on short articles; using TOC on short articles is not a good practice.

## Conclusion

Adding a table of contents in a longer article is one of the best ways to improve the readability of this type of article, as it helps users to directly jump to the required portion of the article. A well-structured table of contents also motivates content writers to use proper headings in their written articles and also gives a professional touch to the website.

  

When your post is structured properly, like the proper use of heading tags in an article, it will encourage both users and search engines to check out your website. The table of contents is a very useful feature, especially in a long, well-explained guide. Using this table of contents also gives a good interface to your website's table of contents; it also allows users to show the table of contents only when they want it.

  

Hope this tutorial helped you to successfully implement an automatic table of contents in your Blogger website. If you have any doubts related to the implementation or found any errors, then don't forget to comment down below, which will help us to solve the problem as soon as possible. Do you also want to add a quiz system to your website? Then don't forget to check out the "[How to Create a Quiz System in JavaScript with Timer, Explanation & Score (Step-by-Step Tutorial)](/2026/03/javascript-quiz-system.html)" article. Thanks for reading this article.