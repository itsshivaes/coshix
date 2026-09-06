---
title: "How to Create a Quiz System in JavaScript with Timer, Explanation & Score (Step-by-Step Tutorial)"
date: 2026-03-16
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGo9k_CFkrE9kiYhsOtKmWM70YVU47zUo4Dn2lREbUgZ1G_N033NqGiLOsyfgAscy5MZY193ZfVdduSXrDCp_sG3yLFjXKCxm5t_l8rr6cJhtKmnEK1ITwrN-JZlk-9pXO6HCEjTUf4BAHVyfzfguTQ_oiBsfERKFWevwt9TfVPWQIT2APyMyhK3D9k5Fx/s1600-rw/quiz-system.webp"
categories: ["Common"]
tags: ["Common","Web","How To","Quiz","CSS","JavaScript","HTML","JavaScript Components"]
draft: false
---

![Thumbnail](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGo9k_CFkrE9kiYhsOtKmWM70YVU47zUo4Dn2lREbUgZ1G_N033NqGiLOsyfgAscy5MZY193ZfVdduSXrDCp_sG3yLFjXKCxm5t_l8rr6cJhtKmnEK1ITwrN-JZlk-9pXO6HCEjTUf4BAHVyfzfguTQ_oiBsfERKFWevwt9TfVPWQIT2APyMyhK3D9k5Fx/s1600-rw/quiz-system.webp)

Adding a quiz system to a website helps to increase user engagement and to make it more intractive especially in education site. The quiz feature is commonly used in education website to evaluate user knowledge. With some HTML, CSS and JavaScript, you can also implement a quiz system on your website, and you don't need to worry about your website's performance, as we didn't use any external libraries to build this feature.

A well-made quiz system includes a good design, timer, explanation,  automatic scoreboard, etc which are all included in this quiz system. This helps your website users to understand their mistakes and improve their knowledge more efficiently. Adding these types of features also helps to make your website more useful to the visitors.

In this tutorial, you will learn how to implement a quiz system in HTML and a Blogger-based website. This quiz feature includes a timer, scoreboard, celebration, motivational messages, explanation, etc.  At the end of this article, you will understand the entire process. So without wasting much time, let's implement a quiz system on your website.

Before doing this process, we recommend that you take a backup of your HTML to avoid errors in HTML if any mistake has been done

## How to add a quiz system to your website?

1.  Open your website .html file, for example: **index.html**
2.  Find the </head> tag 
3.  Paste the following CSS just above the </head> tag

```
<style>
/* Quiz - Coshix */.quizBox{max-width:700px;margin:auto;padding:28px;border-radius:18px;background:#fff;border:1px solid rgba(0,74,173,.12);box-shadow:0 15px 40px rgba(0,0,0,.08);color:#000}
#startScreen{text-align:center}
#startBtn{padding:12px 28px;border-radius:12px;border:0;font-weight:600;background:linear-gradient(135deg,#00c853,#43a047);color:#fff;cursor:pointer;font-size:16px}
.quizHead{display:flex;justify-content:space-between;color:#888;font-size:13px;margin-bottom:10px;display:none}
#question{font-size:20px;font-weight:600;margin-bottom:18px;display:none}
.opt{padding:14px;border-radius:12px;border:1px solid #e5e5e5;margin-bottom:10px;cursor:pointer;background:#fafafa;transition:.25s}
.opt:hover{transform:translateY(-2px)}
.correct{background:#d4edda;border-color:#28a745}
.wrong{background:#f8d7da;border-color:#dc3545}
.quizBtns{margin-top:16px;display:none;gap:10px}
button{padding:10px 18px;border-radius:10px;border:0;font-weight:600;cursor:pointer}
#nextBtn{background:#00c853;color:#fff;display:none}
#skipBtn{background:#ececec}

#explanation{margin-top:12px;background:#f7f7f7;padding:12px;border-radius:10px;font-size:14px;display:none}
#result{text-align:center;margin-top:30px;display:none}
.resultCard{padding:30px;border-radius:16px;text-align:center;animation:fade .5s;background:linear-gradient(135deg,#f8f9ff,#ffffff)}
.resultCard.win{box-shadow:0 10px 40px rgba(0,200,83,.25)}
.resultCard.lose{box-shadow:0 10px 40px rgba(255,82,82,.25)}
.score{font-size:32px;font-weight:700;margin-bottom:10px}
.msg{font-size:18px;margin-bottom:15px}
.restartBtn{padding:10px 22px;border-radius:10px;border:0;background:linear-gradient(to right, #004aad 0%, #cb6ce6 100%);color:#fff;cursor:pointer}
.confetti{position:fixed;width:8px;height:8px;background:red;top:-10px;animation:fall 3s linear infinite}
.quizRules{background:#f6f8ff;border:1px solid #e4e7ff;padding:18px;border-radius:14px;margin-bottom:18px;text-align:left}.quizRules h3{margin:0 0 8px;font-size:16px}.quizRules ul{margin:0;padding-left:18px;font-size:14px;color:#555}.quizRules li{margin-bottom:6px}.dark-mode .quizRules{background:#262626;border-color:#333}
@keyframes fall{to{transform:translateY(100vh) rotate(360deg)}}
@keyframes fade{from{opacity:0;transform:translateY(10px)}to{opacity:1}}
</style>
```

5.  Find the </body> tag
6.  Paste the following JS just above the </body> tag

```
<script>/* Quiz (Coshix) */(function(){if(typeof quizData=="undefined")return;let i=0,s=0,t=29,tm,startBtn=document.getElementById("startBtn"),startScreen=document.getElementById("startScreen"),quizArea=document.getElementById("quizArea"),question=document.getElementById("question"),options=document.getElementById("options"),exp=document.getElementById("explanation"),nextBtn=document.getElementById("nextBtn"),skipBtn=document.getElementById("skipBtn"),qNumber=document.getElementById("qNumber"),timer=document.getElementById("timer"),result=document.getElementById("result");if(!startBtn)return;quizArea.style.display="none";startBtn.onclick=function(){startScreen.style.display="none";quizArea.style.display="block";document.querySelector(".quizHead").style.display="flex";question.style.display="block";document.querySelector(".quizBtns").style.display="flex";load()};function load(){clearInterval(tm);t=29;timer.innerText=t;tm=setInterval(()=>{t--;timer.innerText=t;if(t<=0){clearInterval(tm);document.querySelectorAll(".opt").forEach(o=>o.onclick=null);exp.innerText="⏰ Time up! "+quizData[i].explanation;exp.style.display="block";setTimeout(()=>{i++;i<quizData.length?load():show()},1200)}},1e3);const q=quizData[i];qNumber.innerText="Q"+(i+1)+"/"+quizData.length;question.innerText=q.question;options.innerHTML="";exp.style.display="none";nextBtn.style.display="none";q.options.forEach((v,x)=>{const d=document.createElement("div");d.className="opt";d.innerText=v;d.onclick=()=>sel(d,x);options.appendChild(d)})}function sel(el,x){clearInterval(tm);const q=quizData[i],all=document.querySelectorAll(".opt");all.forEach(a=>a.onclick=null);if(x==q.answer){el.classList.add("correct");s++}else{el.classList.add("wrong");all[q.answer].classList.add("correct")}exp.innerText="Explanation: "+q.explanation;exp.style.display="block";nextBtn.style.display="inline-block"}nextBtn.onclick=function(){i++;i<quizData.length?load():show()};skipBtn.onclick=function(){clearInterval(tm);i++;i<quizData.length?load():show()};function show(){quizArea.style.display="none";result.style.display="block";let p=s/quizData.length*100,m="",c="";p>=70?(m="🎉 Amazing! You did a fantastic job!",c="win",party()):p>=40?(m="🙂 Good try! You can do even better!",c="win"):(m="😢 Don't give up! Try again and improve!",c="lose");result.innerHTML='<div class="resultCard '+c+'"><div class="score">'+s+"/"+quizData.length+'</div><div class="msg">'+m+'</div><button class="restartBtn" onclick="location.reload()">Restart Quiz</button></div>'}function party(){for(let i=0;i<40;i++){let c=document.createElement("div");c.className="confetti";c.style.left=Math.random()*100+"vw";c.style.background=["#ff5252","#ffeb3b","#4caf50","#2196f3","#ff9800"][Math.floor(Math.random()*5)];c.style.animationDuration=Math.random()*3+2+"s";document.body.appendChild(c);setTimeout(()=>c.remove(),4e3)}}})();</script>
```

You can change highlighted  29  to the number of seconds of the timer you like, and you can edit the texts highlighted in blue colour in the code.

6.  Add following code in the place where you need to add quiz

```
<!-- Quiz -->

<div class="quizBox">

<div id="startScreen">

<div class="quizRules">
<h3>Quiz Rules</h3>
<ul>
<li>Each question has <b>29 seconds</b> to answer.</li>
<li>Select the correct option before time runs out.</li>
<li>You can skip a question using the Skip button.</li>
<li>Your final score will be shown at the end.</li>
<li>Read explanations to improve your knowledge.</li>
</ul>

</div>

<button id="startBtn">Start Quiz</button>

</div>

<div id="quizArea">

<div class="quizHead">
<span id="qNumber"></span>
<span><span id="timer">29</span>s</span>
</div>

<div id="question"></div>

<div id="options"></div>

<div id="explanation"></div>

<div class="quizBtns">
<button id="nextBtn">Next</button>
<button id="skipBtn">Skip</button>
</div>

</div>

<div id="result"></div>

</div>

<!-- Quiz Data -->
<script>const quizData=[
{
question:"5 + 3 = ?",
options:["6","8","9","10"],
answer:1,
explanation:"5 + 3 = 8"
},
{
question:"10 - 4 = ?",
options:["5","6","7","8"],
answer:1,
explanation:"10 - 4 = 6"
},
{
question:"6 * 2 = ?",
options:["10","12","14","16"],
answer:1,
explanation:"6 * 2 = 12"
}
  ];</script>
```

To edit questions in the quiz, you need to edit the quiz data.   
  
**For example**, you can see blue highlighted 5 + 3 = ? Change it with your question.  
  
Then you can see in the options section something like "6","8","9","10" edit it with your options  
  
**Example**: "option 1","option 2","option 3","option 4"  
  
Then you can see the answer: 1. This is for choosing the right answer. Here, the index number starts from 0, so 0 is 1st option, 1 is the second option, etc., so if you want to set the first option as the answer, change answer: 1 to answer: 0.  
  
Then to edit the explanation section.  
  
**For example,** change 5 + 3 = 8 with your explanation.  
  
To add more questions, just add  ,  then add a {question:"6 \* 2 = ?", options:\["10","12","14","16"\], answer:1, explanation:"6 \* 2 = 12" }  
  
Also, you can edit other highlighted sections with your text.

7.  Save the HTML

**Useful Guides for you:**

*   [How to Add Table of Contents in Blogger (Automatic TOC Guide)](/2026/03/add-table-of-contents-blogger.html)
*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)
*   [How to Add Like and Dislike Button in Blogger Using Firebase](/2026/03/like-and-dislike-feature-blogger.html)

## How to add a quiz system in Blogger website

1.  Go to your [Blogger dashboard](https://www.blogger.com)
2.  Click the **Theme** option from the sidebar
3.  Click the **drop-down icon** near the **Customize** button in the theme page
4.  Click the **Edit HTML** option
5.  Find \]\]></b:skin> 
6.  Paste the following CSS above it

```
/* Quiz - Coshix */.quizBox{max-width:700px;margin:auto;padding:28px;border-radius:18px;background:#fff;border:1px solid rgba(0,74,173,.12);box-shadow:0 15px 40px rgba(0,0,0,.08);color:#000}
#startScreen{text-align:center}
#startBtn{padding:12px 28px;border-radius:12px;border:0;font-weight:600;background:linear-gradient(135deg,#00c853,#43a047);color:#fff;cursor:pointer;font-size:16px}
.quizHead{display:flex;justify-content:space-between;color:#888;font-size:13px;margin-bottom:10px;display:none}
#question{font-size:20px;font-weight:600;margin-bottom:18px;display:none}
.opt{padding:14px;border-radius:12px;border:1px solid #e5e5e5;margin-bottom:10px;cursor:pointer;background:#fafafa;transition:.25s}
.opt:hover{transform:translateY(-2px)}
.correct{background:#d4edda;border-color:#28a745}
.wrong{background:#f8d7da;border-color:#dc3545}
.quizBtns{margin-top:16px;display:none;gap:10px}
button{padding:10px 18px;border-radius:10px;border:0;font-weight:600;cursor:pointer}
#nextBtn{background:#00c853;color:#fff;display:none}
#skipBtn{background:#ececec}
#explanation{margin-top:12px;background:#f7f7f7;padding:12px;border-radius:10px;font-size:14px;display:none}
#result{text-align:center;margin-top:30px;display:none}
.resultCard{padding:30px;border-radius:16px;text-align:center;animation:fade .5s;background:linear-gradient(135deg,#f8f9ff,#ffffff)}
.resultCard.win{box-shadow:0 10px 40px rgba(0,200,83,.25)}
.resultCard.lose{box-shadow:0 10px 40px rgba(255,82,82,.25)}
.score{font-size:32px;font-weight:700;margin-bottom:10px}
.msg{font-size:18px;margin-bottom:15px}
.restartBtn{padding:10px 22px;border-radius:10px;border:0;background:linear-gradient(to right, #004aad 0%, #cb6ce6 100%);color:#fff;cursor:pointer}
.confetti{position:fixed;width:8px;height:8px;background:red;top:-10px;animation:fall 3s linear infinite}
.quizRules{background:#f6f8ff;border:1px solid #e4e7ff;padding:18px;border-radius:14px;margin-bottom:18px;text-align:left}.quizRules h3{margin:0 0 8px;font-size:16px}.quizRules ul{margin:0;padding-left:18px;font-size:14px;color:#555}.quizRules li{margin-bottom:6px}.dark-mode .quizRules{background:#262626;border-color:#333}
@keyframes fall{to{transform:translateY(100vh) rotate(360deg)}}
@keyframes fade{from{opacity:0;transform:translateY(10px)}to{opacity:1}}
```

8.  Find the </body> tag
9.  Paste the following JS just above it

```
<script>/*<![CDATA[*//* Quiz (Coshix) */(function(){if(typeof quizData=="undefined")return;let i=0,s=0,t=29,tm,startBtn=document.getElementById("startBtn"),startScreen=document.getElementById("startScreen"),quizArea=document.getElementById("quizArea"),question=document.getElementById("question"),options=document.getElementById("options"),exp=document.getElementById("explanation"),nextBtn=document.getElementById("nextBtn"),skipBtn=document.getElementById("skipBtn"),qNumber=document.getElementById("qNumber"),timer=document.getElementById("timer"),result=document.getElementById("result");if(!startBtn)return;quizArea.style.display="none";startBtn.onclick=function(){startScreen.style.display="none";quizArea.style.display="block";document.querySelector(".quizHead").style.display="flex";question.style.display="block";document.querySelector(".quizBtns").style.display="flex";load()};function load(){clearInterval(tm);t=29;timer.innerText=t;tm=setInterval(()=>{t--;timer.innerText=t;if(t<=0){clearInterval(tm);document.querySelectorAll(".opt").forEach(o=>o.onclick=null);exp.innerText="⏰ Time up! "+quizData[i].explanation;exp.style.display="block";setTimeout(()=>{i++;i<quizData.length?load():show()},1200)}},1e3);const q=quizData[i];qNumber.innerText="Q"+(i+1)+"/"+quizData.length;question.innerText=q.question;options.innerHTML="";exp.style.display="none";nextBtn.style.display="none";q.options.forEach((v,x)=>{const d=document.createElement("div");d.className="opt";d.innerText=v;d.onclick=()=>sel(d,x);options.appendChild(d)})}function sel(el,x){clearInterval(tm);const q=quizData[i],all=document.querySelectorAll(".opt");all.forEach(a=>a.onclick=null);if(x==q.answer){el.classList.add("correct");s++}else{el.classList.add("wrong");all[q.answer].classList.add("correct")}exp.innerText="Explanation: "+q.explanation;exp.style.display="block";nextBtn.style.display="inline-block"}nextBtn.onclick=function(){i++;i<quizData.length?load():show()};skipBtn.onclick=function(){clearInterval(tm);i++;i<quizData.length?load():show()};function show(){quizArea.style.display="none";result.style.display="block";let p=s/quizData.length*100,m="",c="";p>=70?(m="🎉 Amazing! You did a fantastic job!",c="win",party()):p>=40?(m="🙂 Good try! You can do even better!",c="win"):(m="😢 Don't give up! Try again and improve!",c="lose");result.innerHTML='<div class="resultCard '+c+'"><div class="score">'+s+"/"+quizData.length+'</div><div class="msg">'+m+'</div><button class="restartBtn" onclick="location.reload()">Restart Quiz</button></div>'}function party(){for(let i=0;i<40;i++){let c=document.createElement("div");c.className="confetti";c.style.left=Math.random()*100+"vw";c.style.background=["#ff5252","#ffeb3b","#4caf50","#2196f3","#ff9800"][Math.floor(Math.random()*5)];c.style.animationDuration=Math.random()*3+2+"s";document.body.appendChild(c);setTimeout(()=>c.remove(),4e3)}}})();/*]]>*/</script>
```

11.  Click  to save changes
12.  Click the **Posts** or **Pages** section from the sidebar as you like
13.  Create a new post/page or choose the post/page where you need to add a quiz
14.  Paste the following code somewhere where you need to show a quiz

```
<!-- Quiz -->

<div class="quizBox">

<div id="startScreen">

<div class="quizRules">
<h3>Quiz Rules</h3>
<ul>
<li>Each question has <b>29 seconds</b> to answer.</li>
<li>Select the correct option before time runs out.</li>
<li>You can skip a question using the Skip button.</li>
<li>Your final score will be shown at the end.</li>
<li>Read explanations to improve your knowledge.</li>
</ul>

</div>

<button id="startBtn">Start Quiz</button>

</div>

<div id="quizArea">

<div class="quizHead">
<span id="qNumber"></span>
<span><span id="timer">29</span>s</span>
</div>

<div id="question"></div>

<div id="options"></div>

<div id="explanation"></div>

<div class="quizBtns">
<button id="nextBtn">Next</button>
<button id="skipBtn">Skip</button>
</div>

</div>

<div id="result"></div>

</div>

<!-- Quiz Data -->
<script>const quizData=[
{
question:"5 + 3 = ?",
options:["6","8","9","10"],
answer:1,
explanation:"5 + 3 = 8"
},
{
question:"10 - 4 = ?",
options:["5","6","7","8"],
answer:1,
explanation:"10 - 4 = 6"
},
{
question:"6 * 2 = ?",
options:["10","12","14","16"],
answer:1,
explanation:"6 * 2 = 12"
}
  ];</script>
```

16.  If you finish your content, click the **Publish** button on the post or page to make it public

To edit content on the code, follow the same note given for an HTML website because both codes are almost the same.

**Want to see how it works?**  
[Demo](https://coshix-outputs.blogspot.com/2026/03/quiz-demo_22.html)

### Video Tutorial

## Conclusion

Adding a quiz is one of the best practical ways to increase user engagement on your website, especially in education websites. By using some HTML, CSS and JS, you can implement a quiz system in your website that can run smoothly in any modern browser without relying on an external framework. Before, the users could read and go away, but now users can test their knowledge of what they understand from your article.

  

Since the quiz directly runs in the browser, it doesn't require any server-side processing, which makes it lightweight, and that's the reason why it doesn't affect your website performance or page speed. If you're running an education website, you can create small tests for students easily, which makes students prefer your website.

  

Hope this article helped you to implement a quiz system on your website. If you have any doubts related to this tutorial, then don't forget to drop a comment below, which helps us to solve them for you. If you like this tutorial, then don't forget to share it with your friends because it may also be useful to them. Thanks for reading this article.