---
title: "How to Add Like and Dislike Button in Blogger Using Firebase"
date: 2026-03-06
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJwM0sGX0MuuhY_OBNoD0KQLV02l6zJ3feY3k8tfxXR1ZPm30Wmoh6oZs6fuDzyeVx9OggS9-e7wmCYEbAmw832yo-PAc8SBn3fqGIHsM7FyJFppjIhE532ohWj58k_MELPXAZajKRfprPYvBkamXZtQ6DiDuBCM9gfGKZJ0mHj9x1HxK8imfpaRUXGaJB/s1600-rw/firebase-relatime%20%281%29.webp"
categories: ["Blogger"]
tags: ["Blogger","How To","Codes","Firebase","CSS","JavaScript","HTML","JavaScript Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJwM0sGX0MuuhY_OBNoD0KQLV02l6zJ3feY3k8tfxXR1ZPm30Wmoh6oZs6fuDzyeVx9OggS9-e7wmCYEbAmw832yo-PAc8SBn3fqGIHsM7FyJFppjIhE532ohWj58k_MELPXAZajKRfprPYvBkamXZtQ6DiDuBCM9gfGKZJ0mHj9x1HxK8imfpaRUXGaJB/s1600-rw/firebase-relatime%20%281%29.webp)

Adding a like and dislike feature to your Blogger website helps you to improve your website's user engagement. Several popular websites use this feature to allow users to express their opinion about a post easily and quickly. In Blogger, this feature is not available by default; to add it, we need to use CSS, HTML, JS and Firebase. Firebase make easier to manage user interactions, it records and updates user interactions in real-time.

  

Firebase is a platform built by Google to provide powerful backend services. Firebase is commonly used in Web application for authentication, database and hosting. We use Firebase in this like and dislike feature because Firebase helps to store users' likes and dislikes of each post, which also updates instantly.

  

Are you worried about your website performance when using Firebase services? Then you don't need to worry about it because we use lazy.js made by [www.fineshopdesign.com](https://www.fineshopdesign.com). The lazy.js helps to lazyload JavaScript using local storage. By following this tutorial carefully, you can implement a cool like and dislike feature in your Blogger website. So without wasting much time, let's check how to implement it.

## How To Add Like And Dislike in Blogger

### Create Firebase Project

1.  Go to your [Firebase Console](https://console.firebase.google.com/)
2.  Click **Create a Project**
3.  Name your project
4.  Click **Continue**
5.  Disable Google Analytics
6.  Click **Create Project**
7.  Click the gear icon near **Project Overview** on the sidebar
8.  Scroll to the Your Apps section 
9.  Choose Web
10.  Name your Web App
11.  Click **Register App**
12.  Now you can find something like the given below copy that section and save it somewhere, like **Notepad** 

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

14.  Click the **Build** option in the sidebar
15.  Click **Firestore Database**
16.  Click **Create database**
17.  Go to the **Rules** tab
18.  Delete the old rule completely, then paste the following rule

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /postLikes/{postId} {
      allow read, write: if true;
    }

  }
}
```

20.  Click the **Publish** button

### Add Like and Dislike Button Code in Blogger

1.  Go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the **Themes** option from the sidebar
3.  Click the drop-down icon near the **Customize** button on that page
4.  Click **Edit HTML** from the drop-down menu
5.  Find \]\]></b:skin> 
6.  Paste the following CSS above it

```
/* Like - Dislike (coshix)  */
.likeBox{display:flex;justify-content:center;gap:12px;margin-top:20px;border-top:1px solid rgba(0,0,0,0.08);border-bottom:1px solid rgba(0,0,0,0.08);padding:10px}
.like-btn,.dislike-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;border:1px solid rgba(0,0,0,.08);background:transparent;cursor:pointer;font-size:14px;transition:.2s ease}
.like-btn svg,.dislike-btn svg{width:18px;height:18px;flex-shrink:0;transition:.2s}
.like-btn:hover{background:#e6f7ed;color:#000;}
.dislike-btn:hover{background:#fdecea;color:#000}
.active-like{background:#e6f7ed;border-color:#22c55e;color:#000}
.active-dislike{background:#fdecea;border-color:#ef4444;color:#000}
.active-like svg{fill:#000!important}
.active-dislike svg{fill:#000!important}
.like-btn:hover svg, .dislike-btn:hover svg{fill:#000}
```

**Useful Guides for you:**

*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [How to Add Table of Contents in Blogger (Automatic TOC Guide)](/2026/03/add-table-of-contents-blogger.html)
*   [How to Create a Quiz System in JavaScript with Timer, Explanation & Score (Step-by-Step Tutorial)](/2026/03/javascript-quiz-system.html)

9.  Find <data:post.body/> 
10.  Paste the following HTML code below it

```
<b:if cond='data:view.isPost'>
<div class='likeBox'><button class='like-btn' id='likeBtn'><svg viewBox='0 0 16 16'><path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/></svg> <span id='likeCount'>0</span></button><button class='dislike-btn' id='dislikeBtn'><svg viewBox='0 0 16 16'><path d='M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1'/></svg> <span id='dislikeCount'>0</span></button></div>
</b:if>
```

12.  Find </head> tag
13.  Place the following JS above it

```
<script>/*<![CDATA[*//*@fineshopdesign/lazy.js*/ window.lazy=window.lazy||new Promise(e=>{const t="IS_LAZIED",n="true",o=["scroll","click"],i=["keydown","mouseover","touchmove","touchstart"],r=o.concat(i);function a(){try{return localStorage.getItem(t)===n}catch(e){return!0}}function l(e=!0){try{e?localStorage.setItem(t,n):localStorage.removeItem(t)}catch(e){}}function d(t){l(!0),e({type:t.type.toLowerCase()}),r.forEach(e=>window.removeEventListener(e,d))}if(a())e({type:"local"});else if(0!==document.documentElement.scrollTop||document.body&&0!==document.body.scrollTop)d({type:"scroll"});else{const e=()=>{window.removeEventListener("load",e),i.forEach(e=>window.addEventListener(e,d))};window.addEventListener("load",e),o.forEach(e=>window.addEventListener(e,d))}}); /*]]>*/</script>
```

15.  Find </body> tag
16.  Place the following JS above it

```
<b:if cond='data:view.isPost'>
  <script type='module'>/*<![CDATA[*//* Like - Dislike (www.coshix.in) */window.lazy.then(()=>{import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js").then(async({initializeApp})=>{const{getFirestore,doc,getDoc,setDoc,increment,onSnapshot}=await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

const firebaseConfig={
  apiKey:"YOUR_API_KEY",
  authDomain:"YOUR_PROJECT.firebaseapp.com",
  projectId:"YOUR_PROJECT_ID",
  messagingSenderId:"YOUR_SENDER_ID",
  appId:"YOUR_APP_ID"
};

const app=initializeApp(firebaseConfig),db=getFirestore(app),postId=(document.querySelector("article")?.getAttribute("data-id")||location.pathname).replace(/[^\w]/g,"_"),likeBtn=document.getElementById("likeBtn"),dislikeBtn=document.getElementById("dislikeBtn"),likeCount=document.getElementById("likeCount"),dislikeCount=document.getElementById("dislikeCount"),postRef=doc(db,"postLikes",postId),voteKey="postVote_"+postId;let busy=!1;getDoc(postRef).then(s=>{s.exists()||setDoc(postRef,{likes:0,dislikes:0},{merge:!0})});onSnapshot(postRef,s=>{if(!s.exists())return;likeCount&&(likeCount.textContent=s.data().likes||0);dislikeCount&&(dislikeCount.textContent=s.data().dislikes||0)});function setActive(v){likeBtn&&likeBtn.classList.remove("active-like");dislikeBtn&&dislikeBtn.classList.remove("active-dislike");v==="liked"&&likeBtn&&likeBtn.classList.add("active-like");v==="disliked"&&dislikeBtn&&dislikeBtn.classList.add("active-dislike")}setActive(localStorage.getItem(voteKey));async function vote(t){if(busy)return;busy=!0;likeBtn&&(likeBtn.disabled=!0);dislikeBtn&&(dislikeBtn.disabled=!0);let v=localStorage.getItem(voteKey);if(t==="like"){if(v==="liked"){await setDoc(postRef,{likes:increment(-1)},{merge:!0});localStorage.removeItem(voteKey);setActive(null)}else{await setDoc(postRef,{likes:increment(1)},{merge:!0});v==="disliked"&&await setDoc(postRef,{dislikes:increment(-1)},{merge:!0});localStorage.setItem(voteKey,"liked");setActive("liked")}}if(t==="dislike"){if(v==="disliked"){await setDoc(postRef,{dislikes:increment(-1)},{merge:!0});localStorage.removeItem(voteKey);setActive(null)}else{await setDoc(postRef,{dislikes:increment(1)},{merge:!0});v==="liked"&&await setDoc(postRef,{likes:increment(-1)},{merge:!0});localStorage.setItem(voteKey,"disliked");setActive("disliked")}}setTimeout(()=>{busy=!1;likeBtn&&(likeBtn.disabled=!1);dislikeBtn&&(dislikeBtn.disabled=!1)},300)}likeBtn&&(likeBtn.onclick=()=>vote("like"));dislikeBtn&&(dislikeBtn.onclick=()=>vote("dislike"))})});/*]]>*/</script>
</b:if>
```

Don't forget to replace the blue colour-highlighted sections in JS with the info which have been we saved before.

13.  Click  to save changes

**Want to see how it works?**  
[Demo](https://coshix-outputs.blogspot.com/2026/03/like-button-demo.html)

## Conclusion

Adding a like and dislike feature using Firebase is one of the best ways to make your Blogger website more attractive and engaging. Before, they could just read your article and go away, but now users can quickly express their opinion about your website's article. The Firebase make our like and dislike feature more efficient and reliable.

  

With Firebase real-time capabilities, we can easily make like - dislike realtime count update without even refreshing the page. Since Firebase maintains everything, including like-dislike data, you don't need to create your own server. Using Firebase, you can not only add a like-dislike feature, but also you can add more advanced features, which we will discuss in upcoming articles.

  

We need to say special thanks to www.fineshop.com for providing amazing scripts like lazy.js, which help us to maintain speed even with external libraries like Firebase, which we used for this like-dislike system. Hope this article helped you to implement the like and dislike feature in your Blogger website. If you have any doubts related to this article, then don't forget to leave a comment about it. Thanks for reading this article. Have a good day!