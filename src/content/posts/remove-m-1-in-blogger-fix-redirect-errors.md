---
title: "Remove ?m=1 in Blogger + Fix Redirect Errors"
date: 2026-03-31
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisxS7jamF1tDmYA-9kkaey7Jfry7jGKRmzRZ0aG48EgMESi-86hcI0tvczE-DnmI08y887Ij_kMru1ZyZ9uZ8nMxdR2NW_3Vt1bTr1b8hTz-iMMK_W8o5pPtmndOKScz-hLdByHIqI-0qXtOmAfio2CaMfGGg326CroUa-_UpS2oJpuOSruMbkdlaXYHwx/s1600-rw/remove-m1-blogger.webp"
categories: ["Blogger"]
tags: ["Blogger","Codes","Remove ?m=1","Web","SEO & Performance"]
draft: false
---

[![Remove ?m=1 in Blogger](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisxS7jamF1tDmYA-9kkaey7Jfry7jGKRmzRZ0aG48EgMESi-86hcI0tvczE-DnmI08y887Ij_kMru1ZyZ9uZ8nMxdR2NW_3Vt1bTr1b8hTz-iMMK_W8o5pPtmndOKScz-hLdByHIqI-0qXtOmAfio2CaMfGGg326CroUa-_UpS2oJpuOSruMbkdlaXYHwx/s1600-rw/remove-m1-blogger.webp)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisxS7jamF1tDmYA-9kkaey7Jfry7jGKRmzRZ0aG48EgMESi-86hcI0tvczE-DnmI08y887Ij_kMru1ZyZ9uZ8nMxdR2NW_3Vt1bTr1b8hTz-iMMK_W8o5pPtmndOKScz-hLdByHIqI-0qXtOmAfio2CaMfGGg326CroUa-_UpS2oJpuOSruMbkdlaXYHwx/s1600-rw/remove-m1-blogger.webp)

Nowadays, many Blogger users are facing a redirection error issue in the search console, which prevents the indexing of their pages in Google search. The main reason behind this problem is the extra parameter, which shows in the mobile URLs of a Blogger-based blog. From the beginning of Blogger, there was `?m=1` or `?m=0` in url's, but this redirection error problem came recently.

The Blogger adds `?m=1` automatically in mobile URLs to display the mobile version of that website, but now most of the themes are being released as fully responsive themes, so this extra parameter is no longer needed. Nowadays, this `?m=1` parameter is causing problems in indexing for some blogger websites in the name of redirect error, other canonical tags, etc.

Blogger doesn't have an inbuilt option to disable the `?m=1` parameter, but if you are using a custom domain and you connected your domain with Cloudflare in proximized mode, then you can easily remove `?m=1` it from your Blogger blog's mobile URL. In this article, we are going to show you how to remove `?m=1` the parameter from your Blogger URL and fix redirection errors or any errors caused by the `?m=1` parameter. So, without wasting much time, let's check.

## Why Blogger Adds ?m=1 to Mobile URLs

Blogger adds`?m=1` parameter in the URL when you visit the Blogger blog from a mobile device. This was created to load seperate version of the website on mobile, which looks good on mobile devices. In the early days, many Blogger templates were not responsive, so adding the `?m=1` parameter helped to display a good and simplified mobile version to users.

  

At this time, most of the Blogger templates are fully responsive and adapt automatically to different screen sizeswhich made this parameter unnecessary. However, Blogger still use this. As a result of this, it started creating multiple versions of the same page and also started having issues like duplicate content, redirect error and other indexing problems in the search console.

## Requirements for this Fix

A custom domain name connected with your Blogger blog and Cloudflare in Proximized mode.

**Useful Guides for you:**

*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [How to Add News Ticker Widget in Blogger (Pure JS)](/2026/03/modern-news-ticker-blogger.html)
*   [How to Add Like and Dislike Button in Blogger Using Firebase](/2026/03/like-and-dislike-feature-blogger.html)

## How to Remove ?m=1 from Blogger (Step-by-Step Guide)

**Warning!** Cloudflare have [workers limit](https://developers.cloudflare.com/workers/platform/limits/). If your website hits this limit, your website may become inaccessible.

### Create Worker in Cloudflare

2.  First of all, go to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
3.  Click "**Compute**" from the sidebar
4.  Click the "**Workers & Pages**" option
5.  Click the "**Create Application**" button  on that page
6.  Click "**Start with Hello World!**"
7.  Set a name for your worker
8.  Click the "**Deploy**" button
9.  Click the "**Edit code**" button in that worker
10.  Replace the code inside it with the code given below

```
/**
 * @typedef Env
 * @property {string} my_var
 */

// device detection regexes
const _a = /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\ mini|avantgo|mobilesafari|docomo|KAIOS)/i;
const _b = /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i;

const _c = (x) => {
  let y = "desktop";
  if (typeof x === "string") {
    if (_a.test(x)) y = "mobile";
    else if (_b.test(x)) y = "tablet";
  }
  return y;
};

const _worker = {
  async fetch(req, env, ctx) {
    // Avoid recursion: internal request marker
    if (req.headers.has("X-Worker-Internal")) {
      const h = new Headers(req.headers);
      h.delete("X-Worker-Internal");
      return fetch(new Request(req, { headers: h }));
    }

    try {
      const url = new URL(req.url);
      const t = _c(req.headers.get("User-Agent"));

      // Remove ?m=1 for non‑desktop devices
      if (t !== "desktop") url.searchParams.delete("m");

      // Cache key based on the cleaned URL
      const cacheKey = new Request(url.toString());
      const cache = caches.default;

      let resp = await cache.match(cacheKey);
      if (!resp) {
        const proxied = new Request(url, {
          method: req.method,
          body: req.body,
          headers: req.headers,
          redirect: "follow",
        });
        proxied.headers.set("X-Worker-Internal", "true");

        const originResp = await fetch(proxied, { signal: AbortSignal.timeout(5000) });
        resp = new Response(originResp.body, originResp);
        ctx.waitUntil(cache.put(cacheKey, resp.clone()));
      }
      return resp;
    } catch (err) {
      // Silent fallback: directly fetch the origin without altering the URL
      console.error("Worker error, using direct fallback:", err);
      const fallbackReq = new Request(req);
      fallbackReq.headers.set("X-Worker-Internal", "true");
      return fetch(fallbackReq);
    }
  },
};

export default _worker;
```

12.  Click the "**Deploy**" button

### Configure Worker Route for Your Custom Domain

14.  Go back to your [Cloudflare dashboard](https://dash.cloudflare.com/)
15.  Click "**Domains**" from the sidebar
16.  Click "**Overview**"
17.  Click on your domain where you need to remove the `?m=1` parameter
18.  Click the "**Workers Route**" option from the sidebar
19.  Click the  "**Add route**" button
20.  In the "**Route**" section, type your domain in the format given below

```
www.coshix.in/*
```

22.  In the "**Worker**" section, choose the worker we just created
23.  Click the "**Save**" button

**Done!** Now check your blog from your mobile device, the `?m=1` parameter has been removed from your URL.

## Validate fixes in Search Console

1.  Go to your [Search Console](https://search.google.com/search-console/) dashboard
2.  Make sure you choosen right domain
3.  Click the "**Pages**" option from the sidebar
4.  Click on the error (e.g Redirect Error)
5.  Click the "**Validate Fix**" button

## FAQs

Why ?m=1 in Blogger Mobile URLs?

I provided an answer to this question in this post. ?m=1 was added because in older times, there were less responsive Blogger templates so Blogger added ?m=1 to mobile URLs to apply a different version of the same website in mobile to show a simplified and good-looking page in mobile.

Why i getting a redirect error in Search Console in my Blogger website?

In Blogger, most of times redirect error was caused by improper handling of the ?m=1 parameter, multiple redirects or incorrect canonical URL.

Can we remove the ?m=1 parameter completely from the mobile URL?

Yes, we can remove it if you have been using a custom domain and Cloudflare. Currently, we haven't found any method to fix this issue in the blogspot subdomain blog.

Which method is best for removing ?m=1 from the Blogger blog URL?

Custom domain + Cloudflare Worker method is best for removing ?m=1 from the mobile URL.

## Conclusion

Removing `?m=1` from your Blogger blog's mobile URLs is not a simple change, it improves your blog's presence in search results. By removing uneccessary parameter and keeping a clean URL improves SEO and improves the visibility of your blog. However, you also need to be aware of the limit of Cloudflare workers and make sure your blog doesn't hit that limit.

Once everything is configured very well, your blog becomes SEO friendly, easier to index and ready to be indexed in search engines. Even after making these changes, you need to keep monitoring your blog and keep your blog updated. Also, keeping an indexed single version of your website avoids confusion for both users and Google.

Using this worker with its proper caching and loop prevention helps you to keep your blog fast and avoid uneccessary redirect in your Blogger blog. Hope this tutorial helps you to remove ?m=1 and fix the redirect error in your Search Console. If you have any doubts related to this Cloudflare setup, then don't forget to drop a comment below. If you also like to add a login and signup system with amazing features in your Blogger website, then don't forget to check out the "[How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)" tutorial.  Thanks for reading this post.