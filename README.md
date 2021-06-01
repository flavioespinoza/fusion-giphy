# fusion-giphy

> Web application that serves the singular purpose of searching and displaying GIF images via the `GIPHY Search API`.
>
> Built using Uber's `Fusion.JS` framework (UI and styling), and the `GIPHY SDK for Web` which implements custom hooks based on React's useContext (state management).

## Overview

- Utilizes the GIPHY image search API and shows the results in a 1, 2, or 3-column scrollable view.
- Users enter queries (such as "kittens") into a search box, automatically triggering the API request and populating the screen.
- Implements endless scrolling, automatically requesting and displaying more images when the user scrolls to the bottom of the view.

## Prerequisites

You must have the following tech installed on your local development environment.

**Node**: <https://nodejs.org/en/download>

**Git**: <https://git-scm.com/downloads>

**Yarn**: <https://classic.yarnpkg.com/en/docs/install/#mac-stable>

## Getting Started

Clone the GitHub repo:

```shell
git clone https://github.com/flavioespinoza/fusion-giphy.git
```

CD into the cloned directory:

```shell
cd fusion-giphy
```

Install dependencies:

```shell
yarn install
```

Run the application:

```shell
yarn dev
```

The app will be visible on your preferred browser:

<http://localhost:3000/>

## Usage

Type a term into the search box:

<img src="docs/assets/img/1.png" />

The images will display automatically:

<img src="docs/assets/img/2.png" />

Click the icons to the upper right to change the columns displayed:

<img src="docs/assets/img/3.png" />

Click the icon to the upper left to clear the search:

<img src="docs/assets/img/4.png" />

Scroll to your heart's content: :)

<img src="docs/assets/img/5.png" />

## Choice of Framework

This application is built with Uber's web platform [FusionJS](https://fusionjs.com).

My first thought when approaching this challenge was to use Create React App; then, I noted the mention of FusionJS in the requirements, so I decided to take a look and see what it was all about, and I have to say, Fusion is the best SSR platform I've ever used. It's much better than other SSR web platforms I've used, such as NextJS. I like the `__BROWSER__` and `__NODE__` global variables that allow you to do your front-end and server-side code in the same JavaScript file.

The thing that impressed me most was how easy it was to set things up. I started developing this project in Create React App but then switched to FusionJS to see how easy (or difficult) it would be to use the components I had built using the GIPHY Web SDK. All of the components that I made in the Create React App worked in FusionJS.

### GIPHY SDK for Web

My approach to any project always starts with a fair amount of reading (e.g., research). After digging deep into the [GIPHY SDK for Web](https://developers.giphy.com/docs/sdk#web), I decided to leverage those resources to concentrate the bulk of my effort on learning Fusion.

I had one primary concern about GIPHY's fetch API, which used the GIPHY API key on the front-end. However, after reading through their documentation, I found this:

> GIPHY APIs are designed to be used on the client-side (and hence the API key too). You should go ahead and use it that way. Once development is complete - please apply for Production access for the key through the Developer Dashboard, which removes Rate limits associated with a beta key, so you don't have to worry about high traffic.
>
> Lastly, and most importantly - GIPHY has monitors set up for API key abuse, and we'll reach out to you if anything happens. We definitely don't want you to worry about it.

## Testing

Tests are implemented using Fusion's [Component Testing](https://fusionjs.com/docs/testing/component/).

```shell
yarn test
```

- [ ] Complete [Component Testing](https://fusionjs.com/docs/testing/component/)
- [ ] Add [Unit Testing](https://fusionjs.com/docs/testing/unit/)
- [ ] Add [Snapshot Testing](https://fusionjs.com/docs/testing/snapshot/)
- [ ] Add [Simulation Testing](https://fusionjs.com/docs/testing/simulation/)
- [ ] Add [Integration Testing](https://fusionjs.com/docs/testing/integration/)

## Things to Add before Production

- [ ] Complete config for GIPHY API Key using Fusion's createToken and createPlugin methods
- [ ] Add automated CI/CD via Digital Ocean:
  - [App Platform](https://www.digitalocean.com/products/app-platform/)
- [ ] Peer Review and discussion about application architecture, code, testing, UI/UX
