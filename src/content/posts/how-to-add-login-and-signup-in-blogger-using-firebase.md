---
title: "How to Add Login and Signup in Blogger Using Firebase"
date: 2026-03-24
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIr_Ttf2Cmdk_g1wHX1mPl287PPlHXqSRkJvZXrEinZ3RW7eZiffeOZblBWa91bELidVAbqfitPW2zXA3UczftZqODUnndnNf2UWU2VXadNrXajGJ3oQ5ECkjt6ys-Y3aIRhUcF16jTvxddHuK4iuykESt3RxGM0FK-Ch4tv_u-cLLWjMo3zXYtppkHS0w/s1600-rw/firebase-login-feature-blogger.webp"
categories: ["Blogger"]
tags: ["Blogger","Codes","How To","Firebase","Login Feature","Web","CSS","JavaScript","HTML","JavaScript Components"]
draft: false
---

[![Login feature in Blogger](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIr_Ttf2Cmdk_g1wHX1mPl287PPlHXqSRkJvZXrEinZ3RW7eZiffeOZblBWa91bELidVAbqfitPW2zXA3UczftZqODUnndnNf2UWU2VXadNrXajGJ3oQ5ECkjt6ys-Y3aIRhUcF16jTvxddHuK4iuykESt3RxGM0FK-Ch4tv_u-cLLWjMo3zXYtppkHS0w/s1600-rw/firebase-login-feature-blogger.webp)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIr_Ttf2Cmdk_g1wHX1mPl287PPlHXqSRkJvZXrEinZ3RW7eZiffeOZblBWa91bELidVAbqfitPW2zXA3UczftZqODUnndnNf2UWU2VXadNrXajGJ3oQ5ECkjt6ys-Y3aIRhUcF16jTvxddHuK4iuykESt3RxGM0FK-Ch4tv_u-cLLWjMo3zXYtppkHS0w/s1600-rw/firebase-login-feature-blogger.webp)

Adding login and signup features to your Blogger website is one of the best ways to make it more attractive and engaging to users. By implementing login and signup features in your website, you can allow users to sign in securely to your website and give them access to amazing content and features in your website that are only available to logged-in users.

Adding this feature to your website, it helps to make your website feel like a professional and modern website instead of just looking like a simple blog. By using Firebase, you can implement a login system in your Blogger website without creating any backend. Firebase makes it easier to handle sign-in, sign-up, google sign in, password reset and other account management.

In this tutorial, we are going to show you how to implement sign in and sign-up feature in your website with amazing features like a user dashboard, bookmarks and exclusive content. Are you scared of implementing your website performance by implementing it? Then don't worry, we are using [www.fineshopdesign.com](https://www.fineshopdesign.com)'s lazyload.js to avoid performance issues. So, without wasting much time, let's check how to implement the login feature in your Blogger website.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Set Up Firebase for Blogger Login and Signup

1.  Go to [Firebase Console](https://console.firebase.google.com/)
2.  Make sure you logged in with your Google account
3.  Click "**Create a new Firebase Project**"
4.  Name your project, then click "**Continue**"
5.  Toggle off  "**Enable Gemini in Firebase**"
6.  Click "**Continue**"
7.  Toggle off  "**Enable Google Analytics for this project**"
8.  Click "**Continue**"
9.  Wait to complete the creation of the project
10.  Click "**Continue**"

### How to Create a Web App in Firebase and How to get firebaseconfig

12.  Click "**Settings**" from the sidebar
13.  Click "**General**"
14.  Scroll down to the "**Your Apps**" section
15.  Choose **Web (</>)**
16.  Name your web app
17.  Click "**Register app**"
18.  Copy the firebaseconfig section from the codebox and keep it safe somewhere (e.g. Notepad). The firebaseconif section will look like the code below.

```
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnop"
};
```

### How to Enable Email/Password and Google Authentication in Firebase

21.  Click "**Security**" from the sidebar
22.  Click "**Authentication**"
23.  Click "**Get started**"
24.  Click, then enable "**Email/Password**"
25.  Click "**Save**"
26.  Click "**Google**"
27.  Add Public-facing name for project (Recommend to use website name)
28.  Choose support email
29.  Click "**Save**"

### How to Add Our Domain to Authorised Domains in Firebase

31.  Go to the "**Settings**" tab in the Authentication page
32.  Click "**Authorised domains**"
33.  Click "**Add domain**"
34.  Add your website domain (e.g. www.example.com)
35.  Click "**Add**"

### How to Create a Firestore Database and Set Rules

37.  Click "**Databases and storage**" from the sidebar
38.  Click "**Firestore**"
39.  Click "**Create database**"
40.  Choose "**Standard edition**" then click "**Next**"
41.  Keep the location default, then click "**Next**"
42.  For now, choose "**Start in test mode**" then click "**Create**"
43.  Go to "**Rules**" tab
44.  Delete the old rule fully, then paste the following rule

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function signedIn() {
      return request.auth != null;
    }

    function isOwner(uid) {
      return signedIn() && request.auth.uid == uid;
    }

    match /users/{uid} {
      allow read, create, update, delete: if isOwner(uid);
    }

    match /usernames/{username} {
      allow read: if true;
      allow create: if signedIn() && request.resource.data.uid == request.auth.uid;
      allow update, delete: if signedIn() && resource.data.uid == request.auth.uid;
    }

    match /bookmarks/{uid} {
      allow read, write: if isOwner(uid);

      match /posts/{postId} {
        allow read, write: if isOwner(uid);
      }
    }
  }
}
```

46.  Click the "**Publish**" button

**Useful Guides for you:**

*   [How to Add Like and Dislike Button in Blogger Using Firebase](/2026/03/like-and-dislike-feature-blogger.html)
*   [How to Create a Quiz System in JavaScript with Timer, Explanation & Score (Step-by-Step Tutorial)](/2026/03/javascript-quiz-system.html)
*   [How to Add Table of Contents in Blogger (Automatic TOC Guide)](/2026/03/add-table-of-contents-blogger.html)

## **How to Implement a Login Feature in Blogger Using Firebase**

### **Set Up Login, Signup, Dashboard and Bookmark Pages in Blogger**

1.  First of all, go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the "**Pages**" option from the sidebar
3.  Then create the following Pages

**Info!** When you create pages, we recommend that you use the same names for pages. Otherwise, in later steps, you need to replace the permalink with a new one in the main JS

#### Login

```
<div class='authBox'>
  <h2>Login</h2>
  <input id='loginEmail' type='email' placeholder='Email'/>
  <input id='loginPass' type='password' placeholder='Password'/>
  <button onclick='login()'>Login</button>
  <button onclick='googleLogin()'>Login with Google</button>
  <button onclick='resetPass()'>Forgot Password</button>
  <p>Don't have an account? <a href='/p/signup.html'>Create one</a></p>
</div>
```

#### Signup

```
<div class='authBox'>
  <h2>Create Account</h2>
  <input id='username' type='text' placeholder='Username'/>
  <input id='signupEmail' type='email' placeholder='Email'/>
  <input id='signupPass' type='password' placeholder='Password'/>
  <img id='profilePreview' src='https://ui-avatars.com/api/?name=User' style='width:70px;height:70px;border-radius:50%;display:block;margin:10px 0'/>
  <input type='file' accept='image/*' onchange='loadDP(event)'/>
  <button id='signupBtn' onclick='signup()'>Create Account</button>
  <div class="authOr"><span>or</span></div>
<button type="button" onclick="googleLogin()" class="googleBtn">Sign up with Google</button>
  <p>Already have an account? <a href='/p/login.html'>Login</a></p>
</div>
```

#### Bookmarks

```
<div class='teorzoBookmarks'>Loading...</div>
```

#### Dashboard

```
<div id='userInfo'></div>
```

### How to Add Login Feature Code in Blogger HTML

**Warning!** Before following these steps, we recommend that you take a backup of your Blogger template to avoid issues if any errors occur during the implementation of this feature.

15.  Click the "**Themes**" option from the sidebar
16.  Find `]]></b:skin>` 
17.  Paste the following CSS just above it

```
/* Login and other related features (www.coshix.in) */.authBox,.dash-card,.exclusive-lock,.teorzoBookmarks ul li{background:#fff;color:#5a2323;border:1px solid #eadede;box-shadow:0 8px 24px rgba(90,35,35,.08)}.authBox{max-width:420px;margin:30px auto;padding:24px;border-radius:20px}.authBox h2,.dash-card h3,.exclusive-lock div{color:#6e2f2f}.authBox input,#loginEmail,#loginPass,#signupEmail,#signupPass,#username{width:100%;margin:8px 0;padding:12px 14px;background:#fff;color:#5a2323;border:1px solid #e7d6d6;border-radius:14px;outline:0;box-sizing:border-box}.authBox input::placeholder,#loginEmail::placeholder,#loginPass::placeholder,#signupEmail::placeholder,#signupPass::placeholder,#username::placeholder{color:#b28787}.authBox button,.dash-card button,.dash-card a button,#signupBtn{width:100%;text-align:center;margin:8px 0;padding:12px 14px;background:#fff;color:#6e2f2f;border:1px solid #e7d6d6;border-radius:14px;cursor:pointer;transition:.25s ease;box-sizing:border-box}.authBox button:hover,.dash-card button:hover,.dash-card a button:hover,#signupBtn:hover{background:#f9eeee;border-color:#d9b9b9}.dash-card{max-width:460px;margin:30px auto;padding:24px;border-radius:22px;text-align:center}.dash-pic{width:82px;height:82px;border-radius:50%;object-fit:cover;display:block;margin:0 auto 14px;border:3px solid #f1dede}.dash-card p{color:#8b6666}.exclusive-lock{padding:18px;border-radius:18px;margin:15px 0;text-align:center;background:#fff7f7}.exclusive-lock a{display:inline-block;margin-top:10px;padding:10px 16px;background:#6e2f2f;color:#fff!important;border-radius:12px;text-decoration:none;font-weight:600}.exclusive-lock a:hover{background:#582020}.teorzoBookmarks ul{list-style:none;margin:0;padding:0}.teorzoBookmarks ul li{padding:14px 16px;border-radius:16px;margin:10px 0}.teorzoBookmarks ul li a{color:#6e2f2f;text-decoration:none;font-weight:600}.bm-delete{float:right;cursor:pointer;color:#b04a4a;font-size:18px}.loadingBtn{opacity:.75;pointer-events:none}.dark-mode .authBox,.dark-mode .dash-card,.dark-mode .exclusive-lock,.dark-mode .teorzoBookmarks ul li{background:#1e1a1b;color:#f3e6e6;border:1px solid #3a2d2f;box-shadow:0 8px 24px rgba(0,0,0,.25)}.dark-mode .authBox h2,.dark-mode .dash-card h3,.dark-mode .exclusive-lock div{color:#ffd9d9}.dark-mode .authBox input,.dark-mode #loginEmail,.dark-mode #loginPass,.dark-mode #signupEmail,.dark-mode #signupPass,.dark-mode #username{background:#151112;color:#f7eaea;border:1px solid #453638}.dark-mode .authBox input::placeholder,.dark-mode #loginEmail::placeholder,.dark-mode #loginPass::placeholder,.dark-mode #signupEmail::placeholder,.dark-mode #signupPass::placeholder,.dark-mode #username::placeholder{color:#bda3a3}.dark-mode .authBox button,.dark-mode .dash-card button,.dark-mode .dash-card a button,.dark-mode #signupBtn{background:#2b2324;color:#ffeaea;border:1px solid #4a383b}.dark-mode .authBox button:hover,.dark-mode .dash-card button:hover,.dark-mode .dash-card a button:hover,.dark-mode #signupBtn:hover{background:#382d2f;border-color:#6a4d51}.dark-mode .dash-pic{border-color:#4a383b}.dark-mode .dash-card p{color:#c9b1b1}.dark-mode .exclusive-lock{background:#241d1e}.dark-mode .exclusive-lock a{background:#c88f8f;color:#1b1112!important}.dark-mode .exclusive-lock a:hover{background:#ddb0b0}.dark-mode .teorzoBookmarks ul li a{color:#ffd6d6}.dark-mode .bm-delete{color:#ff9a9a}.teorzoBookmarkPost.bmFull{display:block;width:100%}.teorzoBookmarkPost.bmFull input{display:none}.teorzoBookmarkPost.bmFull .bmBtnFull{margin-top:20px;display:flex;align-items:center;gap:10px;width:100%;padding:14px 16px;border:1px solid var(--border-color);border-radius:14px;cursor:pointer;box-sizing:border-box}.teorzoBookmarkPost.bmFull .bmBtnFull svg{width:22px;height:22px;flex:0 0 22px}.teorzoBookmarkPost.bmFull .bmBtnFull span{font-size:14px;font-weight:600}.teorzoBookmarkPost.bmFull input:checked+label .bS{opacity:0}.teorzoBookmarkPost.bmFull{display:block;width:100%;margin:14px 0}.teorzoBookmarkPost.bmFull input{display:none}.teorzoBookmarkPost.bmFull .bmBtnFull{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:14px 18px;background:#fff;border:1px solid #ece3e3;border-radius:16px;box-shadow:0 4px 14px rgba(0,0,0,.04);cursor:pointer;box-sizing:border-box;transition:.25s ease;color:#3f3f46}.teorzoBookmarkPost.bmFull .bmBtnFull:hover{background:#faf7f7;border-color:#ddd1d1;box-shadow:0 8px 18px rgba(0,0,0,.06);transform:translateY(-1px)}.teorzoBookmarkPost.bmFull .bmBtnFull svg{width:22px;height:22px;flex:0 0 22px;stroke:#5b5b66;fill:none;stroke-width:1.8}.teorzoBookmarkPost.bmFull .bmBtnFull span{font-size:15px;font-weight:600;line-height:1}.teorzoBookmarkPost.bmFull input:checked+label{background:#f8efef;border-color:#d9bcbc;color:#7a3d3d}.teorzoBookmarkPost.bmFull input:checked+label svg{stroke:#7a3d3d}.teorzoBookmarkPost.bmFull input:checked+label .bS{opacity:0}.teorzoBookmarkPost.bmFull input:checked+label span{color:#7a3d3d}.dark-mode .teorzoBookmarkPost.bmFull .bmBtnFull{background:#1f1f23;border-color:#34343b;color:#f1f1f1;box-shadow:none}.dark-mode .teorzoBookmarkPost.bmFull .bmBtnFull:hover{background:#26262b;border-color:#44444c}.dark-mode .teorzoBookmarkPost.bmFull .bmBtnFull svg{stroke:#e5e7eb}.dark-mode .teorzoBookmarkPost.bmFull input:checked+label{background:#312526;border-color:#5a3e40}.dark-mode .teorzoBookmarkPost.bmFull input:checked+label,.dark-mode .teorzoBookmarkPost.bmFull input:checked+label span{color:#ffd6d6}.dark-mode .teorzoBookmarkPost.bmFull input:checked+label svg{stroke:#ffd6d6}#navProfileLink{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;overflow:hidden;background:#fff;border:1px solid #eadede;box-shadow:0 2px 8px rgba(0,0,0,.05)}#navProfileLink img{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block}#navProfileLink svg{width:16px;height:16px;display:block;fill:currentColor}.dark-mode #navProfileLink{background:#1e1a1b;border-color:#3a2d2f}.googleBtn{width:100%;margin:10px 0 0;padding:12px 14px;background:#fff;border:1px solid #eadede;border-radius:14px;cursor:pointer;font-weight:600;color:#5a2323;transition:.25s ease}.googleBtn:hover{background:#faf6f6}.authOr{display:flex;align-items:center;justify-content:center;margin:12px 0 4px}.authOr span{font-size:13px;opacity:.7;position:relative;padding:0 10px}.authOr span:before,.authOr span:after{content:"";position:absolute;top:50%;width:60px;height:1px;background:#e7d6d6}.authOr span:before{right:100%}.authOr span:after{left:100%}.dark-mode .googleBtn{background:#1f1f23;border-color:#34343b;color:#f5eaea}.dark-mode .googleBtn:hover{background:#26262b}.dark-mode .authOr span:before,.dark-mode .authOr span:after{background:#3a2d2f}.historyPage{max-width:860px;margin:0 auto;padding:10px 0}.exclusiveContent,.exclusive{display:none!important;visibility:hidden}.exclusive-lock{display:block}.userLoggedIn .exclusiveContent,.userLoggedIn .exclusive{display:block!important;visibility:visible}.userLoggedIn .exclusive-lock{display:none!important}.teorzoBookmarkPost.bmFull{display:none;width:100%}.userLoggedIn .teorzoBookmarkPost.bmFull{display:flex}
```

**Note:**  
Don't forget to replace `.dark-mode` in css with your template's dark mode class

20.  Find `</head>` or `<head/>`
21.  Paste the following JS just above it

```
<script>/*<![CDATA[*//*@fineshopdesign/lazy.js*/ window.lazy=window.lazy||new Promise(e=>{const t="IS_LAZIED",n="true",o=["scroll","click"],i=["keydown","mouseover","touchmove","touchstart"],r=o.concat(i);function a(){try{return localStorage.getItem(t)===n}catch(e){return!0}}function l(e=!0){try{e?localStorage.setItem(t,n):localStorage.removeItem(t)}catch(e){}}function d(t){l(!0),e({type:t.type.toLowerCase()}),r.forEach(e=>window.removeEventListener(e,d))}if(a())e({type:"local"});else if(0!==document.documentElement.scrollTop||document.body&&0!==document.body.scrollTop)d({type:"scroll"});else{const e=()=>{window.removeEventListener("load",e),i.forEach(e=>window.addEventListener(e,d))};window.addEventListener("load",e),o.forEach(e=>window.addEventListener(e,d))}}); /*]]>*/</script>
```

23.  Find the best place for showing profie link with the profile image (e.g. inside the header)
24.  Paste the following code there

```
<!-- Profile icon (www.coshix.in) -->
    <div id='navProfile'>
    <a aria-label='Profile' href='/p/login.html' id='navProfileLink'>
    <svg viewBox='0 -960 960 960'><path d='M227.92-275.31q56-40.84 119.12-62.77Q410.15-360 480-360q69.85 0 132.96 21.92 63.12 21.93 119.12 62.77 37.3-46 55.61-96.42Q806-422.15 806-480q0-134-96-230t-230-96q-134 0-230 96t-96 230q0 57.85 18.31 108.27 18.31 50.42 55.61 96.42Zm142.7-195.31Q326-515.23 326-580t44.62-109.38Q415.23-734 480-734t109.38 44.62Q634-644.77 634-580t-44.62 109.38Q544.77-426 480-426t-109.38-44.62ZM480-68q-84.15 0-159.5-32.77t-131.15-88.58q-55.81-55.8-88.58-131.15Q68-395.85 68-480q0-85.15 32.77-160t88.58-130.65q55.8-55.81 131.15-88.58Q395.85-892 480-892q85.15 0 160 32.77t130.65 88.58q55.81 55.8 88.58 130.65Q892-565.15 892-480q0 84.15-32.77 159.5t-88.58 131.15q-55.8 55.81-130.65 88.58Q565.15-68 480-68Z'/></svg>
   </a>
   </div>
```

26.  Find `<data:post.body/>`
27.  Paste the following bookmark add button code just above it

```
<b:if cond='data:view.isPost'>
  <bdi class='teorzoBookmarkPost bmFull'>
  <input expr:id='&quot;bm-&quot; + data:post.id' type='checkbox'/>
  <label aria-label='Add to Bookmark' class='bmBtnFull' expr:data-img='data:post.featuredImage ? resizeImage(data:post.featuredImage, 100, &quot;3:2&quot;) : resizeImage(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=&quot;, 100, &quot;3:2&quot;)' expr:data-title='data:post.title' expr:data-url='data:post.url' expr:for='&quot;bm-&quot; + data:post.id'>
    <svg class='line' viewBox='0 0 24 24'>
      <path d='M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z'/>
      <path d='M12 8.20996V13.21'/>
      <path class='bS' d='M14.5 10.6499H9.5'/>
    </svg>
    <span>Add to Bookmark</span>
  </label>
</bdi>
</b:if>
```

29.  Find `</body>`
30.  Paste the following JS just above it

```
<script>/*<![CDATA[*/
/* ----
  Firebase login with exclusive content, bookmark, user dashboard
  Created by: www.coshix.in
  Source code: https://www.coshix.in/2026/03/blogger-login-signup-firebase.html
---- */
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  login: "/p/login.html",
  signup: "/p/signup.html",
  dashboard: "/p/dashboard.html",
  bookmark: "/p/bookmarks.html"
};

/* Don't edit */
document.documentElement.classList.add("js");document.addEventListener("click",function(e){let b=e.target.closest(".teorzoBookmarkPost label");if(b){let i=b.parentNode.querySelector("input");if(!window.db||!window.auth){alert("Bookmark not loaded yet, please wait...");i&&(i.checked=!1);e.preventDefault();e.stopImmediatePropagation();return!1}}},!0);function fbReady(){return window.firebaseConfig&&firebaseConfig.apiKey&&!firebaseConfig.apiKey.includes("YOUR")}let selectedDP="";function loadDP(e){let f=e.target.files[0];if(!f)return;let r=new FileReader;r.onload=function(ev){selectedDP=ev.target.result;let p=document.getElementById("profilePreview");p&&(p.src=selectedDP)},r.readAsDataURL(f)}function signup(){let btn=document.getElementById("signupBtn"),u=(document.getElementById("username")||{}).value?.trim()||"",e=(document.getElementById("signupEmail")||{}).value?.trim()||"",p=(document.getElementById("signupPass")||{}).value||"";btn&&(btn.classList.add("loadingBtn"),btn.innerText="Creating");if(!u||!e||!p){alert("Fill all fields");btn&&(btn.classList.remove("loadingBtn"),btn.innerText="Create Account");return}u=u.replace(/\s+/g,"").toLowerCase(),db.doc("usernames/"+u).get().then(s=>{if(s.exists){alert("Username taken");btn&&(btn.classList.remove("loadingBtn"),btn.innerText="Create Account");return}auth.createUserWithEmailAndPassword(e,p).then(async r=>{await r.user.sendEmailVerification();let photo=selectedDP&&selectedDP.startsWith("data:image")?selectedDP:"https://ui-avatars.com/api/?name="+encodeURIComponent(u);await db.doc("users/"+r.user.uid).set({username:u,email:e,photo:photo});await db.doc("usernames/"+u).set({uid:r.user.uid});alert("Account created. Verify email then login");location.href=firebaseConfig.login}).catch(err=>{alert(err.message);btn&&(btn.classList.remove("loadingBtn"),btn.innerText="Create Account")})})}function login(){let e=document.getElementById("loginEmail"),p=document.getElementById("loginPass");auth.signInWithEmailAndPassword(e.value,p.value).then(()=>location.href=firebaseConfig.dashboard).catch(e=>alert(e.message))}function googleLogin(){let p=new firebase.auth.GoogleAuthProvider;auth.signInWithPopup(p).then(()=>location.href=firebaseConfig.dashboard).catch(e=>alert(e.message))}function logout(){auth.signOut().then(()=>location.href="/")}function loadDash(u){let ui=document.getElementById("userInfo");if(!ui)return;ui.innerHTML="Loading...";let ref=db.doc("users/"+u.uid),count=0,wait=setInterval(()=>{ref.get().then(s=>{count++;if(s.exists){clearInterval(wait);let d=s.data(),photo=d.photo||"https://ui-avatars.com/api/?name="+encodeURIComponent(d.username);ui.innerHTML=`<div class="dash-card"><img src="${photo}" class="dash-pic"><h3>${d.username}</h3><p>${d.email}</p><button onclick="editProfile()">Edit username</button><button onclick="changeDP()">Change Profile Photo</button><input type="file" id="dpUpload" accept="image/*" style="display:none" onchange="uploadDP(event)"><a href="${firebaseConfig.bookmark}"><button>View Bookmarks</button></a><button onclick="changePassword()">Change Password</button><button onclick="logout()">Logout</button></div>`}else count>15&&(clearInterval(wait),ui.innerHTML="Profile not found")})},400)}function editProfile(){let n=prompt("New username");if(!n)return;n=n.replace(/\s+/g,"").toLowerCase();let u=auth.currentUser;if(!u)return;db.doc("usernames/"+n).get().then(s=>{if(s.exists){alert("Username taken");return}let ref=db.doc("users/"+u.uid);ref.get().then(o=>{if(!o.exists){alert("Profile not found");return}let d=o.data(),old=d.username,photo=d.photo||"https://ui-avatars.com/api/?name="+encodeURIComponent(n);Promise.all([db.doc("usernames/"+old).delete().catch(()=>{}),ref.update({username:n,photo:photo}),db.doc("usernames/"+n).set({uid:u.uid})]).then(()=>{alert("Username updated");location.reload()}).catch(e=>alert(e.message))})})}function changeDP(){let i=document.getElementById("dpUpload");i&&i.click()}function uploadDP(e){let f=e.target.files[0];if(!f)return;let r=new FileReader;r.onload=function(ev){let img=ev.target.result,u=auth.currentUser;if(!u)return;db.doc("users/"+u.uid).update({photo:img}).then(()=>{alert("Profile photo updated");location.reload()}).catch(e=>alert(e.message))},r.readAsDataURL(f)}function changePassword(){let p=prompt("New password");if(!p)return;auth.currentUser.updatePassword(p).then(()=>alert("Password updated")).catch(e=>alert(e.message))}function resetPass(){let e=prompt("Enter email");if(!e)return;auth.sendPasswordResetEmail(e).then(()=>alert("Reset mail sent")).catch(r=>alert(r.message))}function navUpdate(u){let c=document.getElementById("navProfileLink");if(!c)return;if(u&&(u.emailVerified||!(u.providerData[0]&&u.providerData[0].providerId==="password"))){db.doc("users/"+u.uid).get().then(s=>{let p="https://ui-avatars.com/api/?name=User";if(s.exists){let d=s.data();p=d.photo||"https://ui-avatars.com/api/?name="+encodeURIComponent(d.username)}c.href=firebaseConfig.dashboard,c.innerHTML=`<img src="${p}" alt="Profile">`})}else c.href=firebaseConfig.login,c.innerHTML=`<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-92.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 60 19.5 111.5T234-276Zm246-204q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>`}function bookmarkInit(){if(!window.db||!window.auth)return;let u=auth.currentUser;document.querySelectorAll(".teorzoBookmarkPost").forEach(e=>e.classList.toggle("showBM",!!u));if(!u)return;let uid=u.uid,arr=[];db.collection("bookmarks/"+uid+"/posts").get().then(q=>{q.forEach(doc=>arr.push(doc.data()));renderBM(arr,uid)})}function renderBM(arr,uid){let box=document.querySelector(".teorzoBookmarks");box&&(box.innerHTML=arr.length<1?"No bookmarks":"<ul>"+arr.map(b=>`<li><a href="${b.url}">${b.title}</a> <span onclick="delBM('${uid}','${b.id}')" class="bm-delete">×</span></li>`).join("")+"</ul>");document.querySelectorAll(".teorzoBookmarkPost input").forEach(i=>{let id=i.id.replace("bm-",""),txt=i.parentNode.querySelector("label span");i.checked=!!arr.find(x=>x.id==id),txt&&(txt.textContent=i.checked?"Bookmarked":"Add to Bookmark"),i.onchange=function(){if(!window.db||!window.auth){alert("Bookmark not loaded yet please wait...");i.checked=!1;return}let user=auth.currentUser;if(!user){alert("Please login first");i.checked=!1;location.href=firebaseConfig.login;return}let label=i.parentNode.querySelector("label"),item={id:id,title:label.dataset.title,url:label.dataset.url,img:label.dataset.img};i.checked?db.doc("bookmarks/"+uid+"/posts/"+id).set(item).then(()=>{txt&&(txt.textContent="Bookmarked"),alert("Added to bookmarks")}).catch(()=>{i.checked=!1,txt&&(txt.textContent="Add to Bookmark")}):db.doc("bookmarks/"+uid+"/posts/"+id).delete().then(()=>{txt&&(txt.textContent="Add to Bookmark"),alert("Removed from bookmarks")}).catch(()=>{i.checked=!0,txt&&(txt.textContent="Bookmarked")})}})}function delBM(uid,id){db.doc("bookmarks/"+uid+"/posts/"+id).delete().then(()=>bookmarkInit())}fbReady()&&lazy.then(()=>{let a=document.createElement("script");a.src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",a.onload=()=>{let b=document.createElement("script");b.src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js",b.onload=()=>{let c=document.createElement("script");c.src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js",c.onload=init,document.head.appendChild(c)},document.head.appendChild(b)},document.head.appendChild(a)});function init(){firebase.apps.length||firebase.initializeApp(firebaseConfig),window.auth=firebase.auth(),window.db=firebase.firestore(),auth.onAuthStateChanged(async u=>{if(u){try{let ref=db.doc("users/"+u.uid),s=await ref.get();if(!s.exists){let base=(u.displayName||(u.email?u.email.split("@")[0]:"user")||"user").replace(/\s/g,"").toLowerCase(),uname=base,t=await db.doc("usernames/"+uname).get();t.exists&&(uname=base+Math.floor(Math.random()*9999)),await ref.set({username:uname,email:u.email||"",photo:u.photoURL||"https://ui-avatars.com/api/?name="+encodeURIComponent(uname)}),await db.doc("usernames/"+uname).set({uid:u.uid})}}catch(e){}if(!u.emailVerified&&u.providerData[0]&&u.providerData[0].providerId==="password"){document.body.classList.remove("userLoggedIn"),document.querySelectorAll(".teorzoBookmarkPost").forEach(e=>e.classList.remove("showBM")),navUpdate(null),location.pathname===firebaseConfig.dashboard&&alert("Verify email first"),location.pathname===firebaseConfig.dashboard&&auth.signOut().then(()=>location.href=firebaseConfig.login)}else document.body.classList.add("userLoggedIn"),(location.pathname===firebaseConfig.login||location.pathname===firebaseConfig.signup)&&(location.href=firebaseConfig.dashboard),document.querySelectorAll(".exclusive-lock").forEach(e=>e.remove()),document.querySelectorAll(".teorzoBookmarkPost").forEach(e=>e.classList.add("showBM")),location.pathname===firebaseConfig.dashboard&&loadDash(u),navUpdate(u),bookmarkInit()}else{document.body.classList.remove("userLoggedIn"),navUpdate(null),document.querySelectorAll(".teorzoBookmarkPost").forEach(e=>e.classList.remove("showBM")),document.querySelectorAll(".exclusiveContent").forEach(e=>{if(!e.previousElementSibling||!e.previousElementSibling.classList.contains("exclusive-lock")){let box=document.createElement("div");box.className="exclusive-lock",box.innerHTML=`<div style="font-size:22px;margin-bottom:6px">🔒 Exclusive Content</div>Login to unlock this premium part<br><a href="${firebaseConfig.login}" style="display:inline-block;margin-top:10px;padding:8px 16px;background:#6e2f2f;color:#fff;border-radius:12px;text-decoration:none;font-weight:600">Login Now</a>`,e.parentNode.insertBefore(box,e)}}),location.pathname===firebaseConfig.dashboard&&(location.href=firebaseConfig.login);let box=document.querySelector(".teorzoBookmarks");box&&(box.innerHTML="Please login to view bookmarks")}})}
/*]]>*/</script>
```

32.  Replace the firebaseconfig info with your firebaseconfig info we [noted before](#how-to-create-a-firestore-database-and-set-rules), then if there are any change permalinks given, then also replace with your permalink.
33.  Click to save the HTML

**Warning!** After making every change in the main js we recommend that you obfuscate the JS to make it a more secure implementation. Use any online tool like [obfuscator.io](https://obfuscator.io/legacy-playground) to obfuscate the JS.

### How to Add Exclusive Content in Blogger

Paste the following code just inside your post or page where you need to add exclusive content.

```
<!-- Exclusive content (www.coshix.in) -->
  <div class="exclusiveContent">
YOUR SECRET CONTENT HERE
</div>
```

## FAQ

Is the Firebase Authentication feature free?

Yes, Firebase provide a free plan that includes authentication like features, which is enough for most of the Blogger based websites.

Is implementing the login and signup feature using Firebase safe?

Yes, this method is secure; Firebase Authentication is managed by **Google**. It handles every user's data safely and provides built-in protection.

Can I implement this Firebase-based login and signup feature without coding knowledge?

Yes, you can implement this feature without any coding knowledge, but still a basic HTML, CSS and JavaScript knowledge is useful.

Does this login and signup implementaion includes Google sign-in?

Yes, we also added Google sign-in support in this Login and Signup feature with the help of Firebase.

## Conclusion

By adding this login and signup feature to your website, you can increase your Blogger website's capability to offer amazing stuff. You can allows users to register an account, add posts to their account, allowing to read exclusive content to logged in users etc. This is a useful feature for anyone who wants to keep their website like a simple blog.

Firebase is the best and easiest way to implement this feature in your Blogger website because Firebase have capability to handle authentication and data storage without any requirement for a custom server. This allows you to add a modern, professional website-like feel even in Blogger-based websites. By using Firebase here, you can also see there is no issue with performance, its becuase of **lazyload.js** by [Fineshop Design](https://www.fineshopdesign.com).

Hope this tutorial helped you to implement login and signup features in your Blogger website without any errors. If you have any doubts related to implementation, then don't forget to drop a comment about it below. Don't forget to share this article with your Blogger using friends because it may also be useful to them. If you want to also implement local storage and Firebase based like and dislike posts system in your Blogger website, then visit our [Blogger like and dislike system using Firebase tutorial](/2026/03/like-and-dislike-feature-blogger.html). Thanks for reading this post.