---
title: How to Create Split Post in PlusUI Theme (Blogger Pagination Guide)
slug: how-to-create-split-post-in-plusui-theme
date: 2026-10-21
description: Learn how to create split posts in the PlusUI Blogger theme using simple JavaScript. Follow this step-by-step guide to add pagination to your blog posts, improve readability, and make navigation easier for your readers.
authors:
  - Ender Avcu
image: /images/dynamic-post-filter.png
categories:
  - Blogging Tips
tags:
  - Split Post
  - Blogger Pagination
  - Tutorial
draft: false
---

# How to Create Split Post in PlusUI Theme (Blogger Pagination Guide)

Are you looking for a simple way to split long blog posts into multiple pages using the PlusUI theme for Blogger? If so, you're in the right place! Post pagination is a useful feature that allows you to divide lengthy articles into smaller sections, making your content easier to read and navigate.

In this guide, we are going to show you how to create a split post in the PlusUI theme using a simple JavaScript code. This method allows you to add pagination to your Blogger posts without requiring any backend services or additional plugins.

The best part is that you can control where each page begins by adding a special `<!--nextpage-->` marker inside your post content. Readers can then navigate between the pages using automatically generated pagination links.

At the end of this tutorial, you will know how to implement a working split-post pagination system on your Blogger website. Whether you publish long tutorials, educational articles, or detailed guides, this method can help improve content navigation and readability.

So, without wasting much time, let's get started!

## Features of Split Post Pagination

- Split long blog posts into multiple pages.
- Navigate between pages using pagination links.
- Automatically generate page numbers based on the `<!--nextpage-->` marker.
- Display the current page number.
- Add a Next button to navigate to the following page.
- Works with the PlusUI Blogger theme when the required post container and markup are present.
- Uses JavaScript without requiring a separate backend service.

## Why Is Pagination Important?

Before implementing the code, let's understand why post pagination can be useful for your Blogger website.

**1. Improved Readability:** Breaking a lengthy article into smaller sections makes it easier for readers to follow the content.

**2. Better Navigation:** Readers can move between different sections using page numbers and navigation links.

**3. Improved Mobile Experience:** Properly divided content can be easier to browse on mobile devices, especially when articles are lengthy.

**4. Better Content Organization:** Tutorials, educational guides, and step-by-step articles can be divided into logical sections.

**Note:** Pagination does not automatically improve SEO rankings or page speed. Its main purpose is to improve content organization and navigation.

## How to Create Split Post in PlusUI Theme

To add split-post pagination to your Blogger website, follow the steps below carefully.

### Step 1: Open Your Blogger Theme

First, log in to your Blogger dashboard.

1. Open your Blogger website dashboard.
2. Navigate to the **Theme** section.
3. Click the dropdown menu beside Customize.
4. Select **Edit HTML**.
5. Back up your current theme before making any changes.

Creating a backup is important because it allows you to restore your original theme if something goes wrong.

### Step 2: Add the JavaScript Code

Now, find the closing `</body>` tag in your Blogger theme HTML.

Paste the following JavaScript code immediately above the `</body>` tag.

```plain
<!-- Split Post Pagination for PlusUI -->
<script>
/*<![CDATA[*/
document.addEventListener('DOMContentLoaded', function () {
  const postBody = document.querySelector('div.postBody');
  const splitPost = document.getElementById('postSplit');

  if (!postBody || !splitPost) return;

  const content = splitPost.innerHTML.split('<!--nextpage-->');
  const currentUrl = new URL(window.location.href);
  const requestedPage = parseInt(
    currentUrl.searchParams.get('page') || '1',
    10
  );

  const pageNumber = Math.min(
    Math.max(Number.isFinite(requestedPage) ? requestedPage : 1, 1),
    content.length
  );

  splitPost.innerHTML = content[pageNumber - 1];

  if (content.length > 1) {
    const pager = document.createElement('div');
    pager.className = 'blogPg';
    pager.id = 'postPager';

    const label = document.createElement('span');
    label.className = 'page current';
    label.textContent = 'Pages:';
    pager.appendChild(label);

    for (let i = 1; i <= content.length; i++) {
      if (i === pageNumber) {
        const current = document.createElement('span');
        current.className = 'current';
        current.textContent = i;
        pager.appendChild(current);
      } else {
        const link = document.createElement('a');
        link.href = new URL(window.location.href).origin +
          new URL(window.location.href).pathname +
          '?page=' + i;
        link.textContent = i;
        pager.appendChild(link);
      }
    }

    if (pageNumber < content.length) {
      const next = document.createElement('a');
      next.href = new URL(window.location.href).origin +
        new URL(window.location.href).pathname +
        '?page=' + (pageNumber + 1);
      next.textContent = 'Next';
      pager.appendChild(next);
    }

    if (pageNumber > 1) {
      const previous = document.createElement('a');
      previous.href = new URL(window.location.href).origin +
        new URL(window.location.href).pathname +
        '?page=' + (pageNumber - 1);
      previous.textContent = 'Previous';
      pager.appendChild(previous);
    }

    splitPost.appendChild(pager);
  }
});
/*]]>*/
</script>
```

**Important:** This code expects the post content to be inside an element with the ID `postSplit`, and the PlusUI theme to use the `postBody` class. Check your theme's actual HTML structure before installing it. Test it on a backup or test blog first.

### Step 3: Add the CSS Styling (Optional)

To make the pagination links look cleaner, you can add the following CSS to your Blogger theme.

Go to **Theme → Customize → Advanced → Add CSS**, if your theme provides this option, or add the CSS inside the theme's existing `<b:skin>` section.

```plain
/* Split Post Pagination Styling */
#postPager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 25px 0;
}

#postPager a,
#postPager .current {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  min-height: 36px;
  padding: 6px 12px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #e2e8f0;
}

#postPager a {
  color: #334155;
  background: #ffffff;
}

#postPager .current {
  color: #ffffff;
  background: #3b82f6;
  border-color: #3b82f6;
}

#postPager a:hover {
  background: #eff6ff;
  border-color: #3b82f6;
}
```

You can change the colors to match your website's design.

## Final Step: Create a Split Post

After adding the required code to your theme, create a new Blogger post or edit an existing one.

Switch to the post editor's HTML view and place your content inside a `<div>` with the ID `postSplit`. Insert `<!--nextpage-->` wherever you want to start a new page.

Here is an example:

```plain
<div id="postSplit">

  <h2>Introduction to the Topic</h2>
  <p>
    This is the first section of your article.
    Add your introduction and the information you want
    readers to see on the first page.
  </p>

  <!--nextpage-->

  <h2>Second Section</h2>
  <p>
    This is the second section of your article.
    Add more details, explanations, or examples here.
  </p>

  <!--nextpage-->

  <h2>Conclusion</h2>
  <p>
    This is the final section of your article.
    Summarize the important points and provide
    any additional information for your readers.
  </p>

</div>
```

In this example, the article is divided into three pages.

- Page 1 displays the introduction.
- Page 2 displays the second section.
- Page 3 displays the conclusion.

Every `<!--nextpage-->` marker creates a new page. You can add as many sections as needed.

**Important:** Use the Blogger post editor's HTML view when inserting the code. If you add it in Compose view, the editor may modify or remove some HTML comments.

## Frequently Asked Questions (FAQ)

### Does split-post pagination require a backend?

No. This implementation uses JavaScript running in the browser and does not require a separate backend service.

### Can I use this code with every Blogger theme?

Not necessarily. The code depends on the theme's HTML structure and CSS classes. It is intended for PlusUI-style themes that use the required post container.

### How many pages can I create in one post?

There is no fixed page limit in this example. You can divide an article into multiple sections using additional `<!--nextpage-->` markers.

### Will pagination improve my website's SEO?

Pagination can improve the organization and usability of long articles, but it does not guarantee higher search rankings. Make sure every page provides useful content and that important information remains accessible to search engines.

### Can I customize the pagination design?

Yes. You can modify the CSS to change the colors, spacing, borders, button shapes, and active-page style.

### Why is pagination not working on my website?

Check that the post content is wrapped inside `<div id="postSplit">`, the JavaScript is placed correctly, and the theme uses the expected `postBody` container. Also make sure the code is not duplicated and test the post using the correct `?page=2` URL.

## Conclusion

Creating split-post pagination in the PlusUI theme is a useful way to organize lengthy Blogger articles into smaller, easier-to-navigate sections. With a small amount of JavaScript and optional CSS, you can add page numbers and navigation links without relying on an external backend.

This method is particularly useful for tutorials, educational content, and detailed guides. Remember to back up your Blogger theme before editing it and test the pagination carefully to ensure it works correctly with your theme.

We hope this guide helped you understand how to create a split post in the PlusUI theme. If you have any questions or encounter any issues while implementing the code, feel free to leave a comment below.

Thanks for reading!
