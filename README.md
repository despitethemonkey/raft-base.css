# raft-base.css

Raft-base is a classless stylesheet for quickly adding base styles to web projects.

Designed for a quick prototyping or for use with our Raft Ui Components.

## Why raft-base?

- Quick to get started
- Opinionated yet flexible
- light weight

We created raft-base as a boilerplate for projects using our raft-ui components, however we wanted raft-base to also work as a stand-alone style sheet with no additional configuration required out of the box.

raft-base is designed to provide a lightly opinionated style to most html5 elements, allowing fast prototyping and bootstraping of projects.

raft-base is flexible and easily customised for each project.
Instead of providing a never-ending list of css custom properties to tinker with, we provide only the most frequently changed values.

## What raft-base isn't

raft-base is not a css framework or component library, it provides only basic styling out the box.

## Getting Started

raft-base requires a css normaliser/moderniser we like [modern-normalise](https://github.com/sindresorhus/modern-normalize)

Then simply include this tag in the `<head>` of your html document:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/despitethemonkey/raft-base.css@0.1.0/out/raft-base.min.css">`

## Running Dev Environment

`npm run dev` - Test page available at `localhost:3000`
