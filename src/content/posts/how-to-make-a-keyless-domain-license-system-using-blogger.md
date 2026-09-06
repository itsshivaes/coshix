---
title: "How to make a Keyless Domain License System using Blogger"
date: 2026-04-29
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikXv1J3b8VkE6ZmRBQm6UtW_DYuNk23KNv2_6xYTZfpj2VMVtuIgIv6QV322X6nAgsZN31yL72jpnwWufeQFa-_kXA5-tSn3xLIgREvPR6QHyGa4Qh08szIBdwQPBe81bed2s72OHXjgr_bNOH3fvCrmxshKuub_pbdrKX43fIpwQ6_N2m1dHU5GUVu6Yk/s1600-rw/domain-license-system-blogger.webp"
categories: ["Blogger"]
tags: ["Blogger","Codes","Web","License","How To","Common","JavaScript Components"]
draft: false
---

![Domain License System](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikXv1J3b8VkE6ZmRBQm6UtW_DYuNk23KNv2_6xYTZfpj2VMVtuIgIv6QV322X6nAgsZN31yL72jpnwWufeQFa-_kXA5-tSn3xLIgREvPR6QHyGa4Qh08szIBdwQPBe81bed2s72OHXjgr_bNOH3fvCrmxshKuub_pbdrKX43fIpwQ6_N2m1dHU5GUVu6Yk/s1600-rw/domain-license-system-blogger.webp)

Protecting your premium elements or themes using the domain license system is one of the best ways to avoid leaking; however, the **client-side scripts are always not 100% secure** as you think. A domain-based license system helps to make your element or theme safe by verifying whether the domain exists or not in the post; if it does not exist, it redirects to the main domain with an alert message.

Using Blogger feeds, we can make a lightweight, simple and easy-to-manage keyless license system at no cost. It was suitable for anyone who needs a keyless license system for their elements or theme without any traditional database or external server. In this guide, we share with you how to make a keyless license system for your custom elements or themes.

We also try to make this guide simple and easy to understand step by step guide. Since it doesn't use any server setup, it doesn't require any big complex steps; you can authorise domains, like adding blog posts. So without wasting much time, let's check how to implement this keyless domain license system in your custom element or template.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Requirement for this license system

*   A Blogger account
*   A public Blogger blog (For license post)

## Features of this license system

*   No license key required to be added by users
*   Doesn't require an external server
*   Verified console message
*   Invalid license alert with redirection 
*   Minimal code
*   Easy to manage

## How to add the Keyless Domain License System in Blogger

**Useful Guides for you:**

*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [Fix Blogger ?m=1 Issue + Redirect Errors in Google Search Console](/2026/03/remove-m1-from-blogger.html)
*   [How to Add a Like and Dislike Button in Blogger Using Firebase](/2026/03/like-and-dislike-feature-blogger.html)

1.  First of all, create a separate blog for the license system in [Blogger](https://www.blogger.com)

### Getting BLOG ID and POST ID

3.  Create a blog post in it and open it
4.  Look at the post edit page address in the browser
5.  In the address bar, the first set of numbers is the blog ID, and the second set of numbers is the post ID. Note it anywhere

![Thumbnail](data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=)

### Adding a license system

8.  Go to the main JS of your custom element or theme
9.  Add the following JS just with the JS of your custom element or theme

```
/* ----
  Keyless Domain License System through Blogger
  Created by: www.coshix.in
  Source code: https://www.coshix.in/2026/04/keyless-license-system.html
---- */
(function () {

  /* Demo configuration (replace with your own values) */
  var BLOG_ID = "YOUR_BLOG_ID";
  var POST_ID = "YOUR_LICENSE_POST_ID";

  function invalidLicense(){
    alert("License validation failed.");
  }

  function allowAccess(){
    console.log("License valid, Thanks for purchasing!");
  }

  function verifyLicense(){

    var domain = location.hostname.replace(/^www\./,'');
    var cb = "license_cb_" + Date.now();

    window[cb] = function(data){
      delete window[cb];

      var content =
        data &&
        data.entry &&
        data.entry.content &&
        data.entry.content.$t || "";

      var domains = content.split(/\n+/).map(function(v){
        return v.trim();
      });

      if(domains.indexOf(domain) !== -1){
        allowAccess();
      } else {
        invalidLicense();
      }
    };

    var s = document.createElement("script");
    s.src =
      "https://www.blogger.com/feeds/" +
      BLOG_ID +
      "/posts/default/" +
      POST_ID +
      "?alt=json-in-script&callback=" + cb;

    s.onerror = function(){
      console.warn("Network error, allowing access");
    };

    document.body.appendChild(s);
  }

  if(document.body){
    verifyLicense();
  } else {
    document.addEventListener("DOMContentLoaded", verifyLicense);
  }

})();
```

11.  Replace `YOUR_BLOG_ID` with your license blog ID and replace `YOUR_LICENSE_POST_ID` with your license blog post ID in the same blog
12.  Obfuscate that mixed JS with any obfuscation tools like [obfuscator.io](https://obfuscator.io/)

### Blog Post Creation

14.  Now, go to the license post you created in your license blog
15.  Switch to **HTML view**
16.  Add license-validated domains one by one on that post in the recommended format given below.

```
<ol>

<li>yourdomain.com</li>
<li>second-domain.blogspot.com</li>
<li>subdomain.domain.com</li>

</ol>
```

18.  Publish your license post

**Success:** Now you have successfully implemented a keyless license system for your theme or element.

**Warning:** Always make sure your license blog reader access is set to public, else it allows access to your theme or element to everyone, and also make sure the blog feed is set to full in Blogger settings.

## FAQ

What is the domain license system?

Domain license system verifies whether the element or theme working website's domain is authorised or not, and if it is not authorised, it avoids giving access to that website.

How does this Blogger feed-based license system work?

It checks whether the domain name which running your element, theme, or other projects is in your blog post using Blogger feeds and takes action.

Does this license system require any external server?

No, it doesn't require any external server as we use Blogger feeds as the license serving source.

Can we use this method for any website besides Blogger?

Yes, you can use this method anywhere, but it requires creating a blog in Blogger to store the license key, as it uses Blogger feeds.

## Conclusion

Keyless license system using this minimal JS is one of the easiest ways to protect your premium elements, themes or any other developer projects instead of relying on complex server setup, but I again repeat that the client-side method is not 100% secure like server-side setups. This method uses lightweight JS to manage authorised domains.

Using this method, provide a license to your elements, themes, or other projects' users more easily, as you don't need to make separate code for every user. You can share the same code with everyone, and you can manage license validation just by editing a blog post. This method is best for those who need a low-maintenance, free-of-cost and lightweight license setup.

After all this process, I again remind you to obfuscate your license mixed theme or element JS using any obfuscator tools like [obfuscator.io](https://obfuscator.io/), or else anyone can easily edit your premium code, which makes the license system useless. Hope this article helped you to implement a domain license system for your project. If you have any doubts related to this guide, then don't forget to drop a comment below. Thanks for reading this guide.