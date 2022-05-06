# Secretboxes.io

## About Secret Boxes

This repository is home to the Secret Boxes main website and is currently hosted [here.](https://snazzy-conkies-d2e682.netlify.app/) Below you can read more to learn about what Secret Boxes are and how to make them, as well as more details about this project itself.

### Creating a Secret Box

Creating a Secret Box involves one part coding and one part technical writing. Secret Boxes are distributed via gitpod due to its ease of use and availability. Each Secret Box has an accompanying set of written tutorials hosted on the Secret Boxes website. These tutorials are written in Markdown. Example posts can be found in the [content](/src/content/) directory of this repo.

#### Creating a Gitpod Deployment

You can use this template to start creating your first Secret Box. **Coming Soon**

#### Writing Your Guide

Secret Boxes tutorials are written using Markdown and require specific pieces of front matter to display properly on the website.

##### Secret Boxes Front Matter

Each post should have a front matter section at the top of the markdown file that looks something like this.

```
title: Part 1: My Secret Box
description: The first thing you’ll need to do to start developing secret contracts in your local environment is install and launch a Secret Network blockchain.
index: 1
lottie: https://assets5.lottiefiles.com/private_files/lf30_0vbtxqrd.json
box: {
    title: Hello World,
    description: "Use this tutorial to learn about launching a local Secret blockchain, modifying the secret contract, runing unit tests, and viewing debug messages in the node log.", 
    prelude: A fun way for developers to quickly learn about working with secret contracts.,
    difficulty: Beginner,
    image: /illustrations/hello_world_illustration.svg,
    gitpod: https://gitpod.io/#https://github.com/gitpod-io/sveltejs-template
}
```

###### Post-Specific Front Matter

* `title` Title for the specific tutorial (**required**)
* `description`: Description for the specific tutorial (**required**)
* `index`: A Secret Box can be split up between many different posts. This index indicates the ordering for each post and **begins at index 1** (**required**)
* `lottie`: Refers to a lottie animation url (*optional*)

###### Box-Specific Front Matter

Each tutorial post must also include information about the Secret Box it pertains to. Noted by the `box` object of the example. Currently all `box` variables are **required,** but they can be copy and pasted for posts pertaining to the same box.

* `title` Title of the Secret Box
* `description` Description of the Secret Box
* `prelude` A short one-sentence description of the Secret Box
* `difficulty` One of three options: Beginner, Intermediate, Advanced
* `image` An image for the Secret Box
* `gitpod` A gitpod deployment URL

##### Speciality Markdown Components

Because the Secret Boxes website is built using Astro, our tutorials can utilized reactive JavaScript components within our markdown files. For example,

```
setup: |
  import MarkdownImage from '@components/MarkdownImage.svelte'
title: Launch Developer Blockchain 
description: The first thing you’ll need to do to start developing secret contracts in your local environment is install and launch a Secret Network blockchain.
...
```

If we include a setup variable in our Frontmatter we are allowed to import framework specific components into our Markdown and use them like so:

```html
<MarkdownImage 
  client:visible 
  alt="Image of Secret testnet startup"
  image="/boxes/hello world/secretdev-startup-1.jpg"></MarkdownImage>
```

This `MarkdownImage` component allows us to create a special `img` component which when clicked on the website will display a modal with the option for the user to download the image. 

More details on the available components built for Secret Boxes tutorials will be listed here.

## 🚀 Project Structure

```
/
├── public/ 
│   ├── boxes/
│   ├── fonts/
│   ├── icons/
│   ├── illustrations/
│   ├── logos/
│   └── favicon.ico
│   └── logo.svg
├── src/
│   ├── components/ (Astro & Svelte Components)
│   ├── content/ (Contains boxes Markdown files)
│   ├── layouts/ (Used to wrap page content)
│   └── pages/ (Specific pages and routes for of the site)
│   └── styles/
└── package.json
```
## 🧞 Commands & Usage

After cloning the repo, all commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn`     | Installs dependencies                        |
| `yarn dev`     | Starts local dev server at `localhost:3000`  |
| `yarn build`   | Build your production site to `./dist/`      |
| `yarn preview` | Preview your build locally, before deploying |
