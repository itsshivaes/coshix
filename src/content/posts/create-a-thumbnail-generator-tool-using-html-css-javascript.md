---
title: "Create a Thumbnail Generator Tool Using HTML, CSS & JavaScript"
date: 2026-05-04
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigmDSzP0641Dx0g8bkFKdh-agVkv1zPqBFXDIcXFam9SHhTUAQgb4q-RIqspRRF_0VqGoBts2ZVqAO-g_Ah0hvr9PpW8dAGkMeiyUDPGtmKMz6dU5rKakt9XaJW2b1pyG5eshgLBFTUnUxYVtVyAAqHryvIiMlUxdzdkT23xT8q2WKAhL67LVe9dfOUxaG/s1600-rw/thumbnail-generator-tool-pure-js.webp"
categories: ["Codes"]
tags: ["Codes","Web","Common","Thumbnail Generator","How To","Tools","CSS","JavaScript","HTML","JavaScript Components"]
draft: false
---

![Thumbnail generator tool](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigmDSzP0641Dx0g8bkFKdh-agVkv1zPqBFXDIcXFam9SHhTUAQgb4q-RIqspRRF_0VqGoBts2ZVqAO-g_Ah0hvr9PpW8dAGkMeiyUDPGtmKMz6dU5rKakt9XaJW2b1pyG5eshgLBFTUnUxYVtVyAAqHryvIiMlUxdzdkT23xT8q2WKAhL67LVe9dfOUxaG/s1600-rw/thumbnail-generator-tool-pure-js.webp)

Creating attractive thumbnails is one of the most important factors for improving CTR. **CTR stands for Click Through Rate**, and it is an **important factor in ranking your blog, YouTube channel, etc**. In this guide, we are going to share with you a beautiful and advanced thumbnail generator source code that just uses **Pure CSS and JavaScript**, and it doesn't require any backend services, which is also the highlight of this tool.

This thumbnail generator tool uses the **HTML5 Canvas API** to dynamically generate thumbnails with a live preview for users. This tool allows users to customise everything, including fonts, colours, shapes, icons, gradients, labels, texts, and even export file formats like users can export images in **PNG,** **JPG** and **WEBP** formats. This also saves the **user's thumbnail configuration in local storage to avoid design loss** on the next visit, which makes this tool more professional.

At the end of this tutorial, you will have a proper working thumbnail generator tool on your website **without relying on any paid backend services.** Whether you are building a tool website or using it for educational purposes, this source code will help you to build a powerful thumbnail generator. So without wasting much time, let's create this thumbnail generator tool.

Table of Contents

document.addEventListener('DOMContentLoaded', function() { if (typeof TableOfContents !== 'undefined') { new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#toContent') }).generateToc(); } });

## Live Tool Demo

**Want to see how it works?**  
[View Demo](https://coshix-outputs.blogspot.com/2026/05/thumbnail-generator.html)

## Features of the Thumbnail Generator Tool

*   Live preview using Canvas API
*   Custom fonts, colours, gradients
*   Shapes (circle, hexagon, blob, etc.)
*   Icon support (emoji + SVG upload)
*   Labels and UI elements
*   Export as PNG, JPG, WEBP
*   Saves settings using localStorage

## How the Thumbnail Generator Tool Works

This tool completely works using **HTML5 Canvas API and pure JavaScript**, so it doesn't require any backend service. When you change font, colour, shapes, texts, etc., it also live updates the preview in Canvas. This live preview helps users of this thumbnail generator tool to see the final look before exporting the design, which improves user experience.

  

Every input field in this tool, such as font, colour, shapes, gradients, etc., is **connected to JavaScript event listeners.** For a more professional touch, this **tool uses local storage to save user settings** to avoid loss when the user reloads, and at last, it also made possible to **convert to different image formats like JPG, PNG and WEBP using canvas data conversion**. As everything runs in the frontend, it is completely privacy-focused and fast.

## Thumbnail Generator Tool Source Code (HTML, CSS & JavaScript)

**Useful Guides for you:**

*   [How to make a Keyless Domain License System using Blogger](/2026/04/keyless-license-system.html)
*   [How to Create a Simple Cookie Consent Banner with CSS & JS](/2026/04/create-cookie-consent-banner-css-js.html)
*   [How to Add Login and Signup in Blogger Using Firebase](/2026/03/blogger-login-signup-firebase.html)

### HTML Structure of Thumbnail Generator Tool

```
<!-- ========================================================= -->
<!-- THUMBNAIL GENERATOR                                       -->
<!-- MADE BY COSHIX (www.coshix.in)                            -->
<!-- ========================================================= -->

<div class="thumbTool">

  <!-- CANVAS PREVIEW AREA -->
  <div class="thumbPreview">
    <canvas height="768" id="thumbCanvas" width="1366"></canvas>
  </div>

  <!-- ALL CONTROLS PANEL -->
  <div class="thumbControls">

    <!-- ========== TITLE SECTION ========== -->
    <div class="field">
      <label>Title</label>
      <input id="titleInput" value="YOUR TITLE" />
    </div>

    <!-- ========== FONT & TITLE COLOR ========== -->
    <div class="field">
      <label>Font</label>
      <select id="fontSelect">
        <option value="Arial" selected>Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Trebuchet MS">Trebuchet</option>
        <option value="Impact">Impact</option>
        <option value="Courier New">Courier</option>
        <option value="Times New Roman">Times</option>
      </select>
    </div>

    <div class="field">
      <label>Title Color</label>
      <input id="titleColor" type="color" value="#000000" />
    </div>

    <!-- ========== BACKGROUND GRADIENT (HEX ONLY) ========== -->
    <div class="field">
      <label>Gradient</label>
      <div class="row">
        <input id="bg1" type="color" value="#FFFFFF" />
        <input id="bg2" type="color" value="#FFFFFF" />
      </div>
    </div>

    <!-- ========== ICON (TEXT EMOJI OR SVG) ========== -->
    <div class="field">
      <label>Icon</label>
      <input id="iconInput" placeholder="🔥 ⚡ 🚀" value="⚡" />
    </div>

    <div class="field">
      <label>Upload SVG Icon</label>
      <input accept=".svg" id="svgIcon" type="file" />
    </div>

    <div class="field">
      <label>Icon Size</label>
      <input id="iconSize" max="150" type="range" value="75" />
    </div>

    <div class="field">
      <label>Icon Gap</label>
      <input id="iconGap" max="200" type="range" value="33" />
    </div>

    <div class="field">
      <label>Icon Color</label>
      <input id="iconColor" type="color" value="#FFD966" />
    </div>

    <!-- ========== DECORATIVE SHAPES ========== -->
    <div class="field">
      <label>Shape</label>
      <select id="shapeType">
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="rounded">Rounded Rectangle</option>
        <option value="diamond">Diamond</option>
        <option value="hexagon">Hexagon</option>
        <option value="star" selected>Star</option>
        <option value="blob">Blob</option>
      </select>
    </div>

    <div class="field">
      <label>Shape Color</label>
      <input id="shapeColor" type="color" value="#FFB347" />
    </div>

    <!-- ========== DOTTED PATTERN ========== -->
    <div class="field">
      <label>Pattern</label>
      <input checked id="patternToggle" type="checkbox" />
    </div>

    <div class="field">
      <label>Pattern Color</label>
      <input id="patternColor" type="color" value="#000000" />
    </div>

    <!-- ========== LABELS SECTION (DUAL TABS) ========== -->
    <div class="field">
      <label>Enable Labels</label>
      <input checked id="labelToggle" type="checkbox" />
    </div>

    <div class="field">
      <label>Labels</label>
      <div class="row">
        <input id="label1" value="DESIGN" />
        <input id="label2" value="LAUNCH" />
      </div>
    </div>

    <div class="field">
      <label>Label Background</label>
      <input id="labelBg" type="color" value="#1A1A2E" />
    </div>

    <div class="field">
      <label>Active Label Color</label>
      <input id="activeLabelColor" type="color" value="#E94560" />
    </div>

    <div class="field">
      <label>Active Label</label>
      <select id="activeLabel">
        <option value="1">Label 1 Active</option>
        <option value="2">Label 2 Active</option>
      </select>
    </div>

    <div class="field">
      <label>Label 1 Text Color</label>
      <input id="label1Color" type="color" value="#FFFFFF" />
    </div>

    <div class="field">
      <label>Label 2 Text Color</label>
      <input id="label2Color" type="color" value="#FFFFFF" />
    </div>

    <div class="field">
      <label>Label Font Weight</label>
      <select id="labelWeight">
        <option value="300">Thin</option>
        <option value="400">Normal</option>
        <option selected value="700">Bold</option>
      </select>
    </div>

    <!-- ========== EXPORT & UNDO ========== -->
    <div class="field">
      <label>Export Format</label>
      <select id="exportFormat">
        <option value="png">PNG</option>
        <option value="jpeg">JPG</option>
        <option value="webp">WEBP</option>
      </select>
    </div>

    <button onclick="undoChange()">Undo</button>
    <button onclick="downloadThumb()">Download</button>

  </div>
</div>
```

### CSS Styling for Thumbnail Generator Tool

```
/* ===== THUMBNAIL GENERATOR STYLE (www.coshix.in)  ===== */
  .thumbTool {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .thumbPreview {
    display: flex;
    background: #F1F5F9;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 14px;
    border: 1px solid #E2E8F0;
  }
  .thumbPreview canvas {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .thumbControls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
    padding: 20px;
    border-radius: 20px;
    background: #FFFFFF;
    border: 1px solid #E9ECF3;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .field label {
    font-size: 13px;
    font-weight: 600;
    color: #334155;
    letter-spacing: 0.3px;
  }
  .field input, .field select {
    width: 100%;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid #CBD5E1;
    background: #FFFFFF;
    font-size: 14px;
    color: #0F172A;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .row input {
    flex: 1;
  }
  .field input[type="color"] {
    height: 42px;
    padding: 4px;
    cursor: pointer;
  }
  .field input[type="range"] {
    width: 100%;
    padding: 0;
  }
  .field input[type="checkbox"] {
    width: 24px;
    height: 24px;
    transform: scale(1);
  }
  .thumbControls button {
    text-align: center;
    padding: 12px;
    border: none;
    border-radius: 40px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    color: white;
    transition: 0.2s;
  }
  .thumbControls button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(59,130,246,0.3);
  }
  input[type="range"] {
    -webkit-appearance: none;
    background: #E2E8F0;
    border-radius: 40px;
    height: 8px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #3B82F6;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  }
  input[type="file"]::file-selector-button {
    background: #3B82F6;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 30px;
    font-weight: 500;
    cursor: pointer;
  }
```

### JavaScript Logic for Thumbnail Generator Tool

```
/* ----
  Thumbnail Generator Tool
  Created by: www.coshix.in
  Source code: https://www.coshix.in/2026/05/build-thumbnail-generator-tool.html
---- */
(function() {
    // --- DOM elements ---
    const canvas = document.getElementById("thumbCanvas");
    const ctx = canvas.getContext("2d");
    const titleInput = document.getElementById("titleInput");
    const iconInput = document.getElementById("iconInput");
    const fontSelect = document.getElementById("fontSelect");
    const titleColor = document.getElementById("titleColor");
    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");
    const shapeType = document.getElementById("shapeType");
    const shapeColor = document.getElementById("shapeColor");
    const patternToggle = document.getElementById("patternToggle");
    const patternColor = document.getElementById("patternColor");
    const labelToggle = document.getElementById("labelToggle");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const labelBg = document.getElementById("labelBg");
    const activeLabel = document.getElementById("activeLabel");
    const activeLabelColor = document.getElementById("activeLabelColor");
    const label1Color = document.getElementById("label1Color");
    const label2Color = document.getElementById("label2Color");
    const labelWeight = document.getElementById("labelWeight");
    const exportFormat = document.getElementById("exportFormat");
    const svgIconUpload = document.getElementById("svgIcon");
    const iconSizeSlider = document.getElementById("iconSize");
    const iconGapSlider = document.getElementById("iconGap");
    const iconColorPicker = document.getElementById("iconColor");

    // SVG state
    let svgImg = null;        // HTMLImageElement for uploaded SVG
    let svgRawString = null;  // raw SVG text for color replacement

    // --- Save initial state for undo (all hex values) ---
    let initialState = {
      title: titleInput.value,
      icon: iconInput.value,
      font: fontSelect.value,
      color: titleColor.value,
      bg1: bg1.value,
      bg2: bg2.value,
      shape: shapeType.value,
      shapeColor: shapeColor.value,
      pattern: patternToggle.checked,
      patternColor: patternColor.value,
      labelToggle: labelToggle.checked,
      l1: label1.value,
      l2: label2.value,
      labelBg: labelBg.value,
      activeLabel: activeLabel.value,
      activeLabelColor: activeLabelColor.value,
      label1Color: label1Color.value,
      label2Color: label2Color.value,
      labelWeight: labelWeight.value,
      iconSize: iconSizeSlider.value,
      iconGap: iconGapSlider.value,
      iconColor: iconColorPicker.value
    };

    // --- Utility: roundRect (for rounded shapes & labels) ---
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.moveTo(x+r, y);
        this.lineTo(x+w-r, y);
        this.quadraticCurveTo(x+w, y, x+w, y+r);
        this.lineTo(x+w, y+h-r);
        this.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        this.lineTo(x+r, y+h);
        this.quadraticCurveTo(x, y+h, x, y+h-r);
        this.lineTo(x, y+r);
        this.quadraticCurveTo(x, y, x+r, y);
        return this;
      };
    }

    // --- Shape drawing helpers (HEX colors, no var) ---
    function drawHexagon(cx, cy, radius) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        let angle = Math.PI / 3 * i;
        let x = cx + radius * Math.cos(angle);
        let y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }

    function drawStar(cx, cy, outerR, innerR, points) {
      let step = Math.PI / points;
      let rot = Math.PI / 2 * 3;
      ctx.beginPath();
      for (let i = 0; i < points; i++) {
        let x1 = cx + Math.cos(rot) * outerR;
        let y1 = cy + Math.sin(rot) * outerR;
        ctx.lineTo(x1, y1);
        rot += step;
        let x2 = cx + Math.cos(rot) * innerR;
        let y2 = cy + Math.sin(rot) * innerR;
        ctx.lineTo(x2, y2);
        rot += step;
      }
      ctx.closePath();
      ctx.fill();
    }

    function drawBlob(cx, cy) {
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 70);
      ctx.bezierCurveTo(cx + 90, cy - 190, cx + 210, cy + 60, cx + 50, cy + 130);
      ctx.bezierCurveTo(cx - 150, cy + 210, cx - 220, cy - 10, cx - 100, cy - 70);
      ctx.fill();
    }

    // --- MAIN DRAW FUNCTION (all colors are hardcoded hex or input values) ---
    function drawThumbnail() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1) GRADIENT BACKGROUND (hex values from bg1 & bg2)
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, bg1.value);
      grad.addColorStop(1, bg2.value);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2) DECORATIVE SHAPES (with 20% opacity for modern effect)
      const shapeHex = shapeColor.value;
      ctx.fillStyle = shapeHex + "33";  // adds ~20% opacity (hex alpha not standard, but CSS-style works)
      // For robust opacity, we set fillStyle with rgba? But shapeColor is hex. We'll use globalAlpha approach: 
      // Actually using hex + "33" works in modern browsers, but safer: set globalAlpha
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = shapeHex;
      
      const shape = shapeType.value;
      // positions: top-right & bottom-left decorative shapes
      switch(shape) {
        case "circle":
          ctx.beginPath(); ctx.arc(1150, 120, 190, 0, Math.PI*2); ctx.fill();
          ctx.beginPath(); ctx.arc(160, 660, 240, 0, Math.PI*2); ctx.fill();
          break;
        case "square":
          ctx.fillRect(980, 0, 300, 200);
          ctx.fillRect(0, 520, 280, 200);
          break;
        case "triangle":
          ctx.beginPath(); ctx.moveTo(1120,0); ctx.lineTo(1300,220); ctx.lineTo(920,220); ctx.fill();
          ctx.beginPath(); ctx.moveTo(0,740); ctx.lineTo(260,740); ctx.lineTo(0,510); ctx.fill();
          break;
        case "rounded":
          ctx.roundRect(960, 0, 320, 180, 50); ctx.fill();
          ctx.roundRect(0, 540, 300, 180, 50); ctx.fill();
          break;
        case "diamond":
          ctx.beginPath(); ctx.moveTo(1120,80); ctx.lineTo(1260,220); ctx.lineTo(1120,360); ctx.lineTo(980,220); ctx.fill();
          ctx.beginPath(); ctx.moveTo(140,580); ctx.lineTo(270,700); ctx.lineTo(140,820); ctx.lineTo(10,700); ctx.fill();
          break;
        case "hexagon":
          drawHexagon(1120, 180, 170);
          drawHexagon(150, 660, 190);
          break;
        case "star":
          drawStar(1120, 190, 170, 75, 5);
          drawStar(150, 660, 200, 85, 5);
          break;
        case "blob":
          drawBlob(1120, 190);
          drawBlob(150, 660);
          break;
        default: break;
      }
      ctx.restore();

      // 3) DOTTED PATTERN (if checked)
      if (patternToggle.checked) {
        ctx.fillStyle = patternColor.value;
        for (let y = 70; y < 200; y += 12) {
          for (let x = 70; x < 200; x += 12) {
            ctx.fillRect(x, y, 2.5, 2.5);
          }
        }
      }

      // 4) MAIN TITLE TEXT (center of canvas)
      const titleText = titleInput.value || "THUMBNAIL PRO";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = titleColor.value;
      ctx.font = `bold 78px ${fontSelect.value}`;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      ctx.fillText(titleText, centerX, centerY);

      // 5) ICON (either uploaded SVG or emoji text)
      const iconRaw = iconInput.value;
      const iconSize = parseInt(iconSizeSlider.value, 10) || 70;
      const iconGap = parseInt(iconGapSlider.value, 10) || 50;
      const metrics = ctx.measureText(titleText);
      const titleWidth = metrics.width;
      const leftEdge = centerX - titleWidth/2;
      const rightEdge = leftEdge + titleWidth;
      const iconX = rightEdge + iconGap;
      const iconY = centerY - iconSize/2;

      if (svgImg && svgImg.complete && svgImg.naturalWidth > 0) {
        // Draw SVG (color replaced already via updateSvg)
        ctx.drawImage(svgImg, iconX, iconY, iconSize, iconSize);
      } else if (iconRaw && iconRaw.trim() !== "") {
        ctx.font = `${iconSize}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
        ctx.fillStyle = iconColorPicker.value;
        ctx.fillText(iconRaw, iconX + iconSize/2, centerY);
      }

      // 6) LABELS (modern pill tabs)
      if (labelToggle.checked) {
        const labelsY = canvas.height / 2 + 110;
        const padding = 24;
        const labelHeight = 48;
        ctx.font = `${labelWeight.value} 28px ${fontSelect.value}`;
        const text1 = label1.value || "LABEL";
        const text2 = label2.value || "TWO";
        const w1 = ctx.measureText(text1).width + padding * 2;
        const w2 = ctx.measureText(text2).width + padding * 2;
        const totalWidth = w1 + w2;
        const startX = centerX - totalWidth/2;
        
        // background pill (label container)
        ctx.fillStyle = labelBg.value;
        ctx.beginPath();
        ctx.roundRect(startX, labelsY - labelHeight/2, totalWidth, labelHeight, 40);
        ctx.fill();
        
        // active label highlight
        const active = activeLabel.value; // "1" or "2"
        const activeX = active === "1" ? startX : startX + w1;
        const activeW = active === "1" ? w1 : w2;
        ctx.fillStyle = activeLabelColor.value;
        ctx.beginPath();
        ctx.roundRect(activeX, labelsY - labelHeight/2, activeW, labelHeight, 40);
        ctx.fill();
        
        // label texts
        ctx.fillStyle = label1Color.value;
        ctx.fillText(text1, startX + w1/2, labelsY);
        ctx.fillStyle = label2Color.value;
        ctx.fillText(text2, startX + w1 + w2/2, labelsY);
      }
    }

    // --- SVG handling: replace fill & apply icon color then draw ---
    function updateSvgImage() {
      if (!svgRawString) {
        svgImg = null;
        drawThumbnail();
        return;
      }
      // replace fill attribute with current icon color (hex)
      let modifiedSvg = svgRawString.replace(/fill="[^"]*"/g, `fill="${iconColorPicker.value}"`);
      // also handle stroke if needed, but basic fill is enough
      const blob = new Blob([modifiedSvg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      svgImg = new Image();
      svgImg.onload = () => {
        URL.revokeObjectURL(url);
        drawThumbnail();
      };
      svgImg.src = url;
    }

    // --- SVG upload handler ---
    svgIconUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) {
        svgRawString = null;
        svgImg = null;
        drawThumbnail();
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        svgRawString = ev.target.result;
        updateSvgImage();
      };
      reader.readAsText(file);
    });

    // Whenever icon color changes, refresh uploaded SVG
    iconColorPicker.addEventListener("input", () => {
      if (svgRawString) updateSvgImage();
      else drawThumbnail();
    });

    // --- UNDO function: revert to initial hardcoded state ---
    window.undoChange = function() {
      titleInput.value = initialState.title;
      iconInput.value = initialState.icon;
      fontSelect.value = initialState.font;
      titleColor.value = initialState.color;
      bg1.value = initialState.bg1;
      bg2.value = initialState.bg2;
      shapeType.value = initialState.shape;
      shapeColor.value = initialState.shapeColor;
      patternToggle.checked = initialState.pattern;
      patternColor.value = initialState.patternColor;
      labelToggle.checked = initialState.labelToggle;
      label1.value = initialState.l1;
      label2.value = initialState.l2;
      labelBg.value = initialState.labelBg;
      activeLabel.value = initialState.activeLabel;
      activeLabelColor.value = initialState.activeLabelColor;
      label1Color.value = initialState.label1Color;
      label2Color.value = initialState.label2Color;
      labelWeight.value = initialState.labelWeight;
      iconSizeSlider.value = initialState.iconSize;
      iconGapSlider.value = initialState.iconGap;
      iconColorPicker.value = initialState.iconColor;
      // reset SVG
      svgRawString = null;
      svgImg = null;
      svgIconUpload.value = "";
      drawThumbnail();
    };

    // --- Download thumbnail with selected format ---
    window.downloadThumb = function() {
      const format = exportFormat.value;
      let mime = `image/${format}`;
      if (format === "jpg") mime = "image/jpeg";
      const link = document.createElement("a");
      link.download = `thumbnail.${format}`;
      link.href = canvas.toDataURL(mime, 0.92);
      link.click();
    };

    // --- Auto-save settings to localStorage (preserve user) but with hex only ---
    function saveSettingsToLocal() {
      const settings = {
        title: titleInput.value, icon: iconInput.value, font: fontSelect.value,
        color: titleColor.value, bg1: bg1.value, bg2: bg2.value,
        shapeType: shapeType.value, shapeColor: shapeColor.value,
        patternToggle: patternToggle.checked, patternColor: patternColor.value,
        labelToggle: labelToggle.checked, label1: label1.value, label2: label2.value,
        labelBg: labelBg.value, activeLabel: activeLabel.value,
        activeLabelColor: activeLabelColor.value, label1Color: label1Color.value,
        label2Color: label2Color.value, labelWeight: labelWeight.value,
        iconSize: iconSizeSlider.value, iconGap: iconGapSlider.value,
        iconColor: iconColorPicker.value
      };
      localStorage.setItem("thumbGenHexSettings", JSON.stringify(settings));
    }

    function loadSettingsFromLocal() {
      const saved = localStorage.getItem("thumbGenHexSettings");
      if (!saved) return;
      try {
        const s = JSON.parse(saved);
        if (s.title) titleInput.value = s.title;
        if (s.icon) iconInput.value = s.icon;
        if (s.font) fontSelect.value = s.font;
        if (s.color) titleColor.value = s.color;
        if (s.bg1) bg1.value = s.bg1;
        if (s.bg2) bg2.value = s.bg2;
        if (s.shapeType) shapeType.value = s.shapeType;
        if (s.shapeColor) shapeColor.value = s.shapeColor;
        if (s.patternToggle !== undefined) patternToggle.checked = s.patternToggle;
        if (s.patternColor) patternColor.value = s.patternColor;
        if (s.labelToggle !== undefined) labelToggle.checked = s.labelToggle;
        if (s.label1) label1.value = s.label1;
        if (s.label2) label2.value = s.label2;
        if (s.labelBg) labelBg.value = s.labelBg;
        if (s.activeLabel) activeLabel.value = s.activeLabel;
        if (s.activeLabelColor) activeLabelColor.value = s.activeLabelColor;
        if (s.label1Color) label1Color.value = s.label1Color;
        if (s.label2Color) label2Color.value = s.label2Color;
        if (s.labelWeight) labelWeight.value = s.labelWeight;
        if (s.iconSize) iconSizeSlider.value = s.iconSize;
        if (s.iconGap) iconGapSlider.value = s.iconGap;
        if (s.iconColor) iconColorPicker.value = s.iconColor;
        // update initialState reference for undo
        initialState = { ...initialState, ...s };
      } catch(e) {}
    }

    // --- Attach event listeners to ALL inputs for live draw + auto-save ---
    const allInputs = [titleInput, iconInput, fontSelect, titleColor, bg1, bg2, shapeType, shapeColor, patternToggle, patternColor, labelToggle, label1, label2, labelBg, activeLabel, activeLabelColor, label1Color, label2Color, labelWeight, iconSizeSlider, iconGapSlider, iconColorPicker];
    allInputs.forEach(el => {
      if (el) el.addEventListener("input", () => {
        drawThumbnail();
        saveSettingsToLocal();
      });
    });
    // pattern toggle also redraw
    patternToggle.addEventListener("change", () => { drawThumbnail(); saveSettingsToLocal(); });
    labelToggle.addEventListener("change", () => { drawThumbnail(); saveSettingsToLocal(); });

    // --- initialization: load settings, draw, and set initial state for undo ---
    loadSettingsFromLocal();
    // update initialState after loading saved settings (for correct undo)
    initialState = {
      title: titleInput.value, icon: iconInput.value, font: fontSelect.value,
      color: titleColor.value, bg1: bg1.value, bg2: bg2.value,
      shape: shapeType.value, shapeColor: shapeColor.value,
      pattern: patternToggle.checked, patternColor: patternColor.value,
      labelToggle: labelToggle.checked, l1: label1.value, l2: label2.value,
      labelBg: labelBg.value, activeLabel: activeLabel.value,
      activeLabelColor: activeLabelColor.value, label1Color: label1Color.value,
      label2Color: label2Color.value, labelWeight: labelWeight.value,
      iconSize: iconSizeSlider.value, iconGap: iconGapSlider.value,
      iconColor: iconColorPicker.value
    };
    drawThumbnail();
  })();
```

**Success!** Now you have your own thumbnail generator tool built using HTML, CSS, and JavaScript.

## Full Code

```
<!-- ========================================================= -->
<!-- THUMBNAIL GENERATOR                                       -->
<!-- MADE BY COSHIX (www.coshix.in)                            -->
<!-- ========================================================= -->

<div class="thumbTool">

  <!-- CANVAS PREVIEW AREA -->
  <div class="thumbPreview">
    <canvas height="768" id="thumbCanvas" width="1366"></canvas>
  </div>

  <!-- ALL CONTROLS PANEL -->
  <div class="thumbControls">

    <!-- ========== TITLE SECTION ========== -->
    <div class="field">
      <label>Title</label>
      <input id="titleInput" value="YOUR TITLE" />
    </div>

    <!-- ========== FONT & TITLE COLOR ========== -->
    <div class="field">
      <label>Font</label>
      <select id="fontSelect">
        <option value="Arial" selected>Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Trebuchet MS">Trebuchet</option>
        <option value="Impact">Impact</option>
        <option value="Courier New">Courier</option>
        <option value="Times New Roman">Times</option>
      </select>
    </div>

    <div class="field">
      <label>Title Color</label>
      <input id="titleColor" type="color" value="#000000" />
    </div>

    <!-- ========== BACKGROUND GRADIENT (HEX ONLY) ========== -->
    <div class="field">
      <label>Gradient</label>
      <div class="row">
        <input id="bg1" type="color" value="#FFFFFF" />
        <input id="bg2" type="color" value="#FFFFFF" />
      </div>
    </div>

    <!-- ========== ICON (TEXT EMOJI OR SVG) ========== -->
    <div class="field">
      <label>Icon</label>
      <input id="iconInput" placeholder="🔥 ⚡ 🚀" value="⚡" />
    </div>

    <div class="field">
      <label>Upload SVG Icon</label>
      <input accept=".svg" id="svgIcon" type="file" />
    </div>

    <div class="field">
      <label>Icon Size</label>
      <input id="iconSize" max="150" type="range" value="75" />
    </div>

    <div class="field">
      <label>Icon Gap</label>
      <input id="iconGap" max="200" type="range" value="33" />
    </div>

    <div class="field">
      <label>Icon Color</label>
      <input id="iconColor" type="color" value="#FFD966" />
    </div>

    <!-- ========== DECORATIVE SHAPES ========== -->
    <div class="field">
      <label>Shape</label>
      <select id="shapeType">
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="rounded">Rounded Rectangle</option>
        <option value="diamond">Diamond</option>
        <option value="hexagon">Hexagon</option>
        <option value="star" selected>Star</option>
        <option value="blob">Blob</option>
      </select>
    </div>

    <div class="field">
      <label>Shape Color</label>
      <input id="shapeColor" type="color" value="#FFB347" />
    </div>

    <!-- ========== DOTTED PATTERN ========== -->
    <div class="field">
      <label>Pattern</label>
      <input checked id="patternToggle" type="checkbox" />
    </div>

    <div class="field">
      <label>Pattern Color</label>
      <input id="patternColor" type="color" value="#000000" />
    </div>

    <!-- ========== LABELS SECTION (DUAL TABS) ========== -->
    <div class="field">
      <label>Enable Labels</label>
      <input checked id="labelToggle" type="checkbox" />
    </div>

    <div class="field">
      <label>Labels</label>
      <div class="row">
        <input id="label1" value="DESIGN" />
        <input id="label2" value="LAUNCH" />
      </div>
    </div>

    <div class="field">
      <label>Label Background</label>
      <input id="labelBg" type="color" value="#1A1A2E" />
    </div>

    <div class="field">
      <label>Active Label Color</label>
      <input id="activeLabelColor" type="color" value="#E94560" />
    </div>

    <div class="field">
      <label>Active Label</label>
      <select id="activeLabel">
        <option value="1">Label 1 Active</option>
        <option value="2">Label 2 Active</option>
      </select>
    </div>

    <div class="field">
      <label>Label 1 Text Color</label>
      <input id="label1Color" type="color" value="#FFFFFF" />
    </div>

    <div class="field">
      <label>Label 2 Text Color</label>
      <input id="label2Color" type="color" value="#FFFFFF" />
    </div>

    <div class="field">
      <label>Label Font Weight</label>
      <select id="labelWeight">
        <option value="300">Thin</option>
        <option value="400">Normal</option>
        <option selected value="700">Bold</option>
      </select>
    </div>

    <!-- ========== EXPORT & UNDO ========== -->
    <div class="field">
      <label>Export Format</label>
      <select id="exportFormat">
        <option value="png">PNG</option>
        <option value="jpeg">JPG</option>
        <option value="webp">WEBP</option>
      </select>
    </div>

    <button onclick="undoChange()">Undo</button>
    <button onclick="downloadThumb()">Download</button>

  </div>
</div>

<style>
  /* ===== THUMBNAIL GENERATOR STYLE (www.coshix.in)  ===== */
  .thumbTool {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .thumbPreview {
    display: flex;
    background: #F1F5F9;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 14px;
    border: 1px solid #E2E8F0;
  }
  .thumbPreview canvas {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .thumbControls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
    padding: 20px;
    border-radius: 20px;
    background: #FFFFFF;
    border: 1px solid #E9ECF3;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .field label {
    font-size: 13px;
    font-weight: 600;
    color: #334155;
    letter-spacing: 0.3px;
  }
  .field input, .field select {
    width: 100%;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid #CBD5E1;
    background: #FFFFFF;
    font-size: 14px;
    color: #0F172A;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .row input {
    flex: 1;
  }
  .field input[type="color"] {
    height: 42px;
    padding: 4px;
    cursor: pointer;
  }
  .field input[type="range"] {
    width: 100%;
    padding: 0;
  }
  .field input[type="checkbox"] {
    width: 24px;
    height: 24px;
    transform: scale(1);
  }
  .thumbControls button {
    text-align: center;
    padding: 12px;
    border: none;
    border-radius: 40px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    background: linear-gradient(135deg, #3B82F6, #8B5CF6);
    color: white;
    transition: 0.2s;
  }
  .thumbControls button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(59,130,246,0.3);
  }
  input[type="range"] {
    -webkit-appearance: none;
    background: #E2E8F0;
    border-radius: 40px;
    height: 8px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #3B82F6;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  }
  input[type="file"]::file-selector-button {
    background: #3B82F6;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 30px;
    font-weight: 500;
    cursor: pointer;
  }
</style>

<script>
  /* ----
  Thumbnail Generator Tool
  Created by: www.coshix.in
  Source code: https://www.coshix.in/2026/05/build-thumbnail-generator-tool.html
---- */
  (function() {
    // --- DOM elements ---
    const canvas = document.getElementById("thumbCanvas");
    const ctx = canvas.getContext("2d");
    const titleInput = document.getElementById("titleInput");
    const iconInput = document.getElementById("iconInput");
    const fontSelect = document.getElementById("fontSelect");
    const titleColor = document.getElementById("titleColor");
    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");
    const shapeType = document.getElementById("shapeType");
    const shapeColor = document.getElementById("shapeColor");
    const patternToggle = document.getElementById("patternToggle");
    const patternColor = document.getElementById("patternColor");
    const labelToggle = document.getElementById("labelToggle");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const labelBg = document.getElementById("labelBg");
    const activeLabel = document.getElementById("activeLabel");
    const activeLabelColor = document.getElementById("activeLabelColor");
    const label1Color = document.getElementById("label1Color");
    const label2Color = document.getElementById("label2Color");
    const labelWeight = document.getElementById("labelWeight");
    const exportFormat = document.getElementById("exportFormat");
    const svgIconUpload = document.getElementById("svgIcon");
    const iconSizeSlider = document.getElementById("iconSize");
    const iconGapSlider = document.getElementById("iconGap");
    const iconColorPicker = document.getElementById("iconColor");

    // SVG state
    let svgImg = null;        // HTMLImageElement for uploaded SVG
    let svgRawString = null;  // raw SVG text for color replacement

    // --- Save initial state for undo (all hex values) ---
    let initialState = {
      title: titleInput.value,
      icon: iconInput.value,
      font: fontSelect.value,
      color: titleColor.value,
      bg1: bg1.value,
      bg2: bg2.value,
      shape: shapeType.value,
      shapeColor: shapeColor.value,
      pattern: patternToggle.checked,
      patternColor: patternColor.value,
      labelToggle: labelToggle.checked,
      l1: label1.value,
      l2: label2.value,
      labelBg: labelBg.value,
      activeLabel: activeLabel.value,
      activeLabelColor: activeLabelColor.value,
      label1Color: label1Color.value,
      label2Color: label2Color.value,
      labelWeight: labelWeight.value,
      iconSize: iconSizeSlider.value,
      iconGap: iconGapSlider.value,
      iconColor: iconColorPicker.value
    };

    // --- Utility: roundRect (for rounded shapes & labels) ---
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.moveTo(x+r, y);
        this.lineTo(x+w-r, y);
        this.quadraticCurveTo(x+w, y, x+w, y+r);
        this.lineTo(x+w, y+h-r);
        this.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        this.lineTo(x+r, y+h);
        this.quadraticCurveTo(x, y+h, x, y+h-r);
        this.lineTo(x, y+r);
        this.quadraticCurveTo(x, y, x+r, y);
        return this;
      };
    }

    // --- Shape drawing helpers (HEX colors, no var) ---
    function drawHexagon(cx, cy, radius) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        let angle = Math.PI / 3 * i;
        let x = cx + radius * Math.cos(angle);
        let y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }

    function drawStar(cx, cy, outerR, innerR, points) {
      let step = Math.PI / points;
      let rot = Math.PI / 2 * 3;
      ctx.beginPath();
      for (let i = 0; i < points; i++) {
        let x1 = cx + Math.cos(rot) * outerR;
        let y1 = cy + Math.sin(rot) * outerR;
        ctx.lineTo(x1, y1);
        rot += step;
        let x2 = cx + Math.cos(rot) * innerR;
        let y2 = cy + Math.sin(rot) * innerR;
        ctx.lineTo(x2, y2);
        rot += step;
      }
      ctx.closePath();
      ctx.fill();
    }

    function drawBlob(cx, cy) {
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy - 70);
      ctx.bezierCurveTo(cx + 90, cy - 190, cx + 210, cy + 60, cx + 50, cy + 130);
      ctx.bezierCurveTo(cx - 150, cy + 210, cx - 220, cy - 10, cx - 100, cy - 70);
      ctx.fill();
    }

    // --- MAIN DRAW FUNCTION (all colors are hardcoded hex or input values) ---
    function drawThumbnail() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1) GRADIENT BACKGROUND (hex values from bg1 & bg2)
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, bg1.value);
      grad.addColorStop(1, bg2.value);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2) DECORATIVE SHAPES (with 20% opacity for modern effect)
      const shapeHex = shapeColor.value;
      ctx.fillStyle = shapeHex + "33";  // adds ~20% opacity (hex alpha not standard, but CSS-style works)
      // For robust opacity, we set fillStyle with rgba? But shapeColor is hex. We'll use globalAlpha approach: 
      // Actually using hex + "33" works in modern browsers, but safer: set globalAlpha
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = shapeHex;
      
      const shape = shapeType.value;
      // positions: top-right & bottom-left decorative shapes
      switch(shape) {
        case "circle":
          ctx.beginPath(); ctx.arc(1150, 120, 190, 0, Math.PI*2); ctx.fill();
          ctx.beginPath(); ctx.arc(160, 660, 240, 0, Math.PI*2); ctx.fill();
          break;
        case "square":
          ctx.fillRect(980, 0, 300, 200);
          ctx.fillRect(0, 520, 280, 200);
          break;
        case "triangle":
          ctx.beginPath(); ctx.moveTo(1120,0); ctx.lineTo(1300,220); ctx.lineTo(920,220); ctx.fill();
          ctx.beginPath(); ctx.moveTo(0,740); ctx.lineTo(260,740); ctx.lineTo(0,510); ctx.fill();
          break;
        case "rounded":
          ctx.roundRect(960, 0, 320, 180, 50); ctx.fill();
          ctx.roundRect(0, 540, 300, 180, 50); ctx.fill();
          break;
        case "diamond":
          ctx.beginPath(); ctx.moveTo(1120,80); ctx.lineTo(1260,220); ctx.lineTo(1120,360); ctx.lineTo(980,220); ctx.fill();
          ctx.beginPath(); ctx.moveTo(140,580); ctx.lineTo(270,700); ctx.lineTo(140,820); ctx.lineTo(10,700); ctx.fill();
          break;
        case "hexagon":
          drawHexagon(1120, 180, 170);
          drawHexagon(150, 660, 190);
          break;
        case "star":
          drawStar(1120, 190, 170, 75, 5);
          drawStar(150, 660, 200, 85, 5);
          break;
        case "blob":
          drawBlob(1120, 190);
          drawBlob(150, 660);
          break;
        default: break;
      }
      ctx.restore();

      // 3) DOTTED PATTERN (if checked)
      if (patternToggle.checked) {
        ctx.fillStyle = patternColor.value;
        for (let y = 70; y < 200; y += 12) {
          for (let x = 70; x < 200; x += 12) {
            ctx.fillRect(x, y, 2.5, 2.5);
          }
        }
      }

      // 4) MAIN TITLE TEXT (center of canvas)
      const titleText = titleInput.value || "THUMBNAIL PRO";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = titleColor.value;
      ctx.font = `bold 78px ${fontSelect.value}`;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      ctx.fillText(titleText, centerX, centerY);

      // 5) ICON (either uploaded SVG or emoji text)
      const iconRaw = iconInput.value;
      const iconSize = parseInt(iconSizeSlider.value, 10) || 70;
      const iconGap = parseInt(iconGapSlider.value, 10) || 50;
      const metrics = ctx.measureText(titleText);
      const titleWidth = metrics.width;
      const leftEdge = centerX - titleWidth/2;
      const rightEdge = leftEdge + titleWidth;
      const iconX = rightEdge + iconGap;
      const iconY = centerY - iconSize/2;

      if (svgImg && svgImg.complete && svgImg.naturalWidth > 0) {
        // Draw SVG (color replaced already via updateSvg)
        ctx.drawImage(svgImg, iconX, iconY, iconSize, iconSize);
      } else if (iconRaw && iconRaw.trim() !== "") {
        ctx.font = `${iconSize}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
        ctx.fillStyle = iconColorPicker.value;
        ctx.fillText(iconRaw, iconX + iconSize/2, centerY);
      }

      // 6) LABELS (modern pill tabs)
      if (labelToggle.checked) {
        const labelsY = canvas.height / 2 + 110;
        const padding = 24;
        const labelHeight = 48;
        ctx.font = `${labelWeight.value} 28px ${fontSelect.value}`;
        const text1 = label1.value || "LABEL";
        const text2 = label2.value || "TWO";
        const w1 = ctx.measureText(text1).width + padding * 2;
        const w2 = ctx.measureText(text2).width + padding * 2;
        const totalWidth = w1 + w2;
        const startX = centerX - totalWidth/2;
        
        // background pill (label container)
        ctx.fillStyle = labelBg.value;
        ctx.beginPath();
        ctx.roundRect(startX, labelsY - labelHeight/2, totalWidth, labelHeight, 40);
        ctx.fill();
        
        // active label highlight
        const active = activeLabel.value; // "1" or "2"
        const activeX = active === "1" ? startX : startX + w1;
        const activeW = active === "1" ? w1 : w2;
        ctx.fillStyle = activeLabelColor.value;
        ctx.beginPath();
        ctx.roundRect(activeX, labelsY - labelHeight/2, activeW, labelHeight, 40);
        ctx.fill();
        
        // label texts
        ctx.fillStyle = label1Color.value;
        ctx.fillText(text1, startX + w1/2, labelsY);
        ctx.fillStyle = label2Color.value;
        ctx.fillText(text2, startX + w1 + w2/2, labelsY);
      }
    }

    // --- SVG handling: replace fill & apply icon color then draw ---
    function updateSvgImage() {
      if (!svgRawString) {
        svgImg = null;
        drawThumbnail();
        return;
      }
      // replace fill attribute with current icon color (hex)
      let modifiedSvg = svgRawString.replace(/fill="[^"]*"/g, `fill="${iconColorPicker.value}"`);
      // also handle stroke if needed, but basic fill is enough
      const blob = new Blob([modifiedSvg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      svgImg = new Image();
      svgImg.onload = () => {
        URL.revokeObjectURL(url);
        drawThumbnail();
      };
      svgImg.src = url;
    }

    // --- SVG upload handler ---
    svgIconUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) {
        svgRawString = null;
        svgImg = null;
        drawThumbnail();
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        svgRawString = ev.target.result;
        updateSvgImage();
      };
      reader.readAsText(file);
    });

    // Whenever icon color changes, refresh uploaded SVG
    iconColorPicker.addEventListener("input", () => {
      if (svgRawString) updateSvgImage();
      else drawThumbnail();
    });

    // --- UNDO function: revert to initial hardcoded state ---
    window.undoChange = function() {
      titleInput.value = initialState.title;
      iconInput.value = initialState.icon;
      fontSelect.value = initialState.font;
      titleColor.value = initialState.color;
      bg1.value = initialState.bg1;
      bg2.value = initialState.bg2;
      shapeType.value = initialState.shape;
      shapeColor.value = initialState.shapeColor;
      patternToggle.checked = initialState.pattern;
      patternColor.value = initialState.patternColor;
      labelToggle.checked = initialState.labelToggle;
      label1.value = initialState.l1;
      label2.value = initialState.l2;
      labelBg.value = initialState.labelBg;
      activeLabel.value = initialState.activeLabel;
      activeLabelColor.value = initialState.activeLabelColor;
      label1Color.value = initialState.label1Color;
      label2Color.value = initialState.label2Color;
      labelWeight.value = initialState.labelWeight;
      iconSizeSlider.value = initialState.iconSize;
      iconGapSlider.value = initialState.iconGap;
      iconColorPicker.value = initialState.iconColor;
      // reset SVG
      svgRawString = null;
      svgImg = null;
      svgIconUpload.value = "";
      drawThumbnail();
    };

    // --- Download thumbnail with selected format ---
    window.downloadThumb = function() {
      const format = exportFormat.value;
      let mime = `image/${format}`;
      if (format === "jpg") mime = "image/jpeg";
      const link = document.createElement("a");
      link.download = `thumbnail.${format}`;
      link.href = canvas.toDataURL(mime, 0.92);
      link.click();
    };

    // --- Auto-save settings to localStorage (preserve user) but with hex only ---
    function saveSettingsToLocal() {
      const settings = {
        title: titleInput.value, icon: iconInput.value, font: fontSelect.value,
        color: titleColor.value, bg1: bg1.value, bg2: bg2.value,
        shapeType: shapeType.value, shapeColor: shapeColor.value,
        patternToggle: patternToggle.checked, patternColor: patternColor.value,
        labelToggle: labelToggle.checked, label1: label1.value, label2: label2.value,
        labelBg: labelBg.value, activeLabel: activeLabel.value,
        activeLabelColor: activeLabelColor.value, label1Color: label1Color.value,
        label2Color: label2Color.value, labelWeight: labelWeight.value,
        iconSize: iconSizeSlider.value, iconGap: iconGapSlider.value,
        iconColor: iconColorPicker.value
      };
      localStorage.setItem("thumbGenHexSettings", JSON.stringify(settings));
    }

    function loadSettingsFromLocal() {
      const saved = localStorage.getItem("thumbGenHexSettings");
      if (!saved) return;
      try {
        const s = JSON.parse(saved);
        if (s.title) titleInput.value = s.title;
        if (s.icon) iconInput.value = s.icon;
        if (s.font) fontSelect.value = s.font;
        if (s.color) titleColor.value = s.color;
        if (s.bg1) bg1.value = s.bg1;
        if (s.bg2) bg2.value = s.bg2;
        if (s.shapeType) shapeType.value = s.shapeType;
        if (s.shapeColor) shapeColor.value = s.shapeColor;
        if (s.patternToggle !== undefined) patternToggle.checked = s.patternToggle;
        if (s.patternColor) patternColor.value = s.patternColor;
        if (s.labelToggle !== undefined) labelToggle.checked = s.labelToggle;
        if (s.label1) label1.value = s.label1;
        if (s.label2) label2.value = s.label2;
        if (s.labelBg) labelBg.value = s.labelBg;
        if (s.activeLabel) activeLabel.value = s.activeLabel;
        if (s.activeLabelColor) activeLabelColor.value = s.activeLabelColor;
        if (s.label1Color) label1Color.value = s.label1Color;
        if (s.label2Color) label2Color.value = s.label2Color;
        if (s.labelWeight) labelWeight.value = s.labelWeight;
        if (s.iconSize) iconSizeSlider.value = s.iconSize;
        if (s.iconGap) iconGapSlider.value = s.iconGap;
        if (s.iconColor) iconColorPicker.value = s.iconColor;
        // update initialState reference for undo
        initialState = { ...initialState, ...s };
      } catch(e) {}
    }

    // --- Attach event listeners to ALL inputs for live draw + auto-save ---
    const allInputs = [titleInput, iconInput, fontSelect, titleColor, bg1, bg2, shapeType, shapeColor, patternToggle, patternColor, labelToggle, label1, label2, labelBg, activeLabel, activeLabelColor, label1Color, label2Color, labelWeight, iconSizeSlider, iconGapSlider, iconColorPicker];
    allInputs.forEach(el => {
      if (el) el.addEventListener("input", () => {
        drawThumbnail();
        saveSettingsToLocal();
      });
    });
    // pattern toggle also redraw
    patternToggle.addEventListener("change", () => { drawThumbnail(); saveSettingsToLocal(); });
    labelToggle.addEventListener("change", () => { drawThumbnail(); saveSettingsToLocal(); });

    // --- initialization: load settings, draw, and set initial state for undo ---
    loadSettingsFromLocal();
    // update initialState after loading saved settings (for correct undo)
    initialState = {
      title: titleInput.value, icon: iconInput.value, font: fontSelect.value,
      color: titleColor.value, bg1: bg1.value, bg2: bg2.value,
      shape: shapeType.value, shapeColor: shapeColor.value,
      pattern: patternToggle.checked, patternColor: patternColor.value,
      labelToggle: labelToggle.checked, l1: label1.value, l2: label2.value,
      labelBg: labelBg.value, activeLabel: activeLabel.value,
      activeLabelColor: activeLabelColor.value, label1Color: label1Color.value,
      label2Color: label2Color.value, labelWeight: labelWeight.value,
      iconSize: iconSizeSlider.value, iconGap: iconGapSlider.value,
      iconColor: iconColorPicker.value
    };
    drawThumbnail();
  })();
</script>
```

## Frequently Asked Questions (FAQ)

Does this thumbnail generator require a backend?

No, this tool works completely on the frontend using HTML, CSS, and JavaScript.

Can I use this tool for YouTube thumbnails?

Yes, you can create thumbnails suitable for YouTube, blogs, and social media.

Does this tool store user data?

No, this tool does not store or upload any user data. Everything runs locally in your browser.

Can I add this tool to my Blogger or WordPress site?

Yes, you can easily add this tool into Blogger or WordPress by embedding the HTML, CSS, and JavaScript code.

## Conclusion

Building a thumbnail generator is one of the best ways to make your growing website valuable. **In this time, tools are one of the best ways to get users to your website and make it more interactive**. This type of web tool also helps you to learn how real web tools work, especially when handling dynamic rendering and user inputs.

  

As it **uses pure JavaScript and CSS**, you **don't want to depend on any backend service** for this tool. You can customise it, add features, and edit the text as you like. Whether you need to add some amazing features that come from your creative mind, you get full control over this tool. The flexibility it offers makes this thumbnail generator tool powerful.

  

If you are creating a powerful tool website or planning to make tools like this, **this is a great starting point for you**. Projects like this **not only help to improve your skills but also help to improve user engagement**. Hope this article helped you to build a powerful thumbnail generator tool. If you have any doubts related to this tool, then don't forget to drop a comment below. Thanks for reading this guide.