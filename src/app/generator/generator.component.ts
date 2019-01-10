import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { PMR } from 'src/interfaces';
import { MatChipInputEvent } from '@angular/material';
import * as _chance from 'chance';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  public output: string;

  // public pmr: PMR = {
  //   title: chance.sentence({ words: 5 }),
  //   purpose: chance.sentence({ words: 10 }),
  //   version: chance.date({ string: true }).toString(),
  //   authors: [chance.name()],
  //   positives: [chance.sentence({ words: 5 }), chance.sentence({ words: 5 })],
  //   negatives: [chance.sentence({ words: 5 }), chance.sentence({ words: 5 })],
  //   future: chance.sentence({ words: 10 })
  // };

  public pmr: PMR = {
    title: '',
    purpose: '',
    version: '',
    authors: [],
    positives: [],
    negatives: [],
    future: ''
  };

  readonly separatorKeysCodesAuthors: number[] = [ENTER, COMMA];
  readonly separatorKeysCodes: number[] = [ENTER];

  constructor() { }

  ngOnInit() {
    this.generateOutput();
  }

  generateOutput() {
    const pmr = this.pmr;
    this.output = `PROJECT TITLE: ${pmr.title}
PURPOSE OF PROJECT: ${pmr.purpose}
VERSION or DATE: ${pmr.version}
AUTHORS: ${pmr.authors.join(', ')}

**************************** P M R *********************************************

<+s>: ${pmr.positives.join('\n      ')}

<-s>: ${pmr.negatives.join('\n      ')}

********************************************************************************
In the future: ${pmr.future}`;
  }

  addAuthor(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.pmr.authors.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.generateOutput();
  }

  removeAuthor(author: string) {
    const index = this.pmr.authors.indexOf(author);

    if (index >= 0) {
      this.pmr.authors.splice(index, 1);
    }

    this.generateOutput();
  }

  addPositive(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.pmr.positives.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.generateOutput();
  }

  removePositive(positive: string) {
    const index = this.pmr.positives.indexOf(positive);

    if (index >= 0) {
      this.pmr.positives.splice(index, 1);
    }

    this.generateOutput();
  }

  addNegative(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.pmr.negatives.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.generateOutput();
  }

  removeNegative(negative: string) {
    const index = this.pmr.negatives.indexOf(negative);

    if (index >= 0) {
      this.pmr.negatives.splice(index, 1);
    }

    this.generateOutput();
  }

  syncFullText() {

  }

}
