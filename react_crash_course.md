# React Crash Course -- Complete Setup & Workflow Guide

This guide documents the **exact steps** needed to follow the React
Crash Course:\*\*\
https://youtu.be/LDB4uaJ87e0?si=t5u_DKu5nO38ONtR

Tailwind v4 (2025) no longer generates a config file and uses a
different setup, so this guide ensures compatibility with the course by
using **Tailwind v3**.

------------------------------------------------------------------------

## 🎯 Goal

Set up a React project using **Vite**, integrate **TailwindCSS v3**, and
follow along with the course without version issues.

------------------------------------------------------------------------

## 📌 1. Create a React Project (Vite)

**Timestamp: 19:50 in the video**

In your terminal:

``` bash
npm create vite@latest your-project-name
```

Then select: 1. **React** 2. **JavaScript**

This command also creates the project folder.

Install dependencies:

``` bash
cd your-project-name
npm install
```

------------------------------------------------------------------------

## 📌 2. Install TailwindCSS v3 (Required for the 2024 Course)

**Timestamp: 26:50 in the video**

Install the correct Tailwind version:

``` bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
```

Generate the config files:

``` bash
npx tailwindcss init -p
```

This creates: - `tailwind.config.js` - `postcss.config.js`

------------------------------------------------------------------------

## 📌 3. Configure `tailwind.config.js`

Replace the `content` section with:

``` js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

------------------------------------------------------------------------

## 📌 4. Add Tailwind Directives to Your CSS

In `src/index.css`, add:

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

⚠️ **Note:** Some Vite templates create an empty `index.css`.\
This is normal --- just add the three Tailwind lines manually.

------------------------------------------------------------------------

## 📌 5. Enable Tailwind Mode in VS Code (Fix @tailwind Warnings)

To unlock autocomplete, hover previews, and remove the underline:

### **Option A --- Quick per-file fix**

1.  Open `src/index.css`\
2.  Bottom-right corner → click `CSS`\
3.  Switch to **Tailwind CSS**

```

------------------------------------------------------------------------

## 📌 6. Test Tailwind

Start the dev server:

``` bash
npm run dev
```

In `App.jsx`, add:

``` jsx
<h1 className="text-3xl font-bold underline">
  Tailwind is working!
</h1>
```

------------------------------------------------------------------------

## 📌 7. Replace the Default `index.html` Theme

**Timestamp: 39:50 min**

Download the themed file:\
https://github.com/bradtraversy/react-crash-2024/blob/main/\_theme_files/index.html

Replace your existing `index.html` contents with it.

### Comment or uncomment code

-   VS Code shortcut: **Ctrl + /** (Win) or **Cmd + /** (Mac)

### Change `class` → `className`

React requires `className` instead of `class`.

### Quickly replace all instances

1.  Highlight one instance of `class`\
2.  Press **Cmd + Shift + L** (Mac) / **Ctrl + Shift + L** (Win)\
3.  Type: `className`

------------------------------------------------------------------------

## 📌 8. Create a `components` Folder

**Timestamp: 42:20 min**

Create:

    /src/components

------------------------------------------------------------------------

## 📌 9. Add Images Folder & Logo

**Timestamp: 43:55 min**

Download the image:\
https://github.com/bradtraversy/react-crash-2024/blob/main/\_theme_files/images/logo.png

Create:

    /src/assets/images

Place `logo.png` inside.

------------------------------------------------------------------------

## 📌 10. Add Jobs Data (JSON file)

**Timestamp: 55:10 min**

Download the JSON file:\
https://github.com/bradtraversy/react-crash-2024/blob/main/src/jobs.json

Place it in:

    /src/jobs.json

------------------------------------------------------------------------