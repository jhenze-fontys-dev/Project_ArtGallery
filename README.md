# 🎨 Virtual Art Gallery — Project Setup Guide

This repository contains the starting files for the **Virtual Art Gallery** project.  
Before development can start, every team member must set up the project correctly **with the local SQLite database**.

---

## 📥 1. Required Files (from Microsoft Teams)

Because the MET dataset is very large, it is **not stored in GitHub**.

Download the following file from Teams:

> **Teams location:**  
> Documents → General → REACT → **data**

### You need to download:
- **gallery.db** (SQLite database containing all records)

### You do NOT need:
- **MetObjects.csv** (only used once for import, backup only)

---

## 📁 2. Project Folder Structure

After downloading the repo, your folder should look like this:

```
Project_ArtGallery/
│
├── data/
│   ├── gallery.db       <-- you must add this manually
│   └── schema.sql       <-- already included
│
├── Backlog.md
├── .gitignore
└── README.md
```

---

## 🛠️ 3. Setup Instructions

### Step 1: Clone the repository

```bash
git clone https://github.com/jhenze-fontys-dev/Project_ArtGallery.git
cd Project_ArtGallery
```

### Step 2: Add the database  
Copy **gallery.db** into:

```
Project_ArtGallery/data/
```

### Step 3: Verify that `gallery.db` is NOT tracked by Git  
Run:

```bash
git status
```

You should **NOT** see `gallery.db` listed.

If you do, ask for help before pushing anything.

---

## ⚠️ 4. Git Ignore Rules (Important)

The repository includes a `.gitignore` file that prevents pushing large data files.

These rules must stay:

```
# Ignore local SQLite databases
data/*.db

# Ignore CSV files
data/*.csv
```

This prevents:
- accidental uploads of 300MB+ files  
- broken pushes  
- repository corruption  

### ❓ Should the `.gitignore` also be stored in Teams?

**No.**  
Every clone of the repo already includes the correct `.gitignore`.  
There is no need to copy it manually.

---

## 🎯 5. What the Team Should Do Now

1. Clone this repo  
2. Download `gallery.db` from Teams  
3. Place it in `/data/`  
4. Confirm `.gitignore` is working  
5. Begin development (frontend/backend structure comes next)

---

## 💬 Need help?

Ask Jack or reach out in Teams.
