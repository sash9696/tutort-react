#!/usr/bin/env node

//instruction to the os

// console.log('hello world');

// const _ = require("loadash"); //earlier way

// import { count } from "./utils.js";
// const {count} = require('./utils.js');
// import  whatever from "./utils.js";
// import fs from 'node:fs';
// import _ from "loadash";

// const note = process.argv[2];

// const newNote = {
//     content: note,
//     id: Date.now(),
// }
// console.log(newNote);


import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', (yargs) => {
    return yargs.positional('note', {
        type:"string",
        description:"The content of the note to create"
    })
  }, (argv) => {
    console.log(argv.note)
  })
  .option('tags', {
    alias: 't',
    type:'string',
    description:'tags to add to the note'
  })
  .demandCommand(1)
  .parse()



