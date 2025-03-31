console.log('from node')

import { DateTime } from "luxon"
import {writeFile} from "node:fs"

import {randomUUID} from "node:crypto"

const {pathname: root} = new URL('../src/pages/post', import.meta.url)

const postDir = `${root}`

console.log(postDir)

function createPostCLI (){
  const args = process.argv.slice(2)

  const title = args[0]

  const date = DateTime.now()

  const formattedDate = date.setLocale("es").toFormat("d MMMM, yyyy");

  const postBody = `---
layout: ../../layouts/PostLayout.astro
title: "New Post"
description: "Generic post description"
author: "Juan Rojas"
pubDate: ${formattedDate}
date: ${date.toISODate()}
image: ""
slug: ${title}
tags:
---
`

  writeFile(`${root}/${title}.mdx`, postBody,(err) => {
    if (err) throw err;
    console.log(`The file has been saved in the route ${postDir}`);
  }); 
}

createPostCLI()