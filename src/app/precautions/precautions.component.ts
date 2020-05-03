import { Component, OnInit } from '@angular/core';
import { InstructionsInterface } from './instructions';
import { BoldTextPipe } from './bold-text.pipe'

const INSTRUCTIONS: InstructionsInterface[] = [
  { major: 'stay', minor: 'home' },
  { major: 'keep', minor: 'a safe distance' },
  { major: 'wash', minor: 'hands often' },
  { major: 'cover', minor: 'your cough' },
  { major: 'sick?', minor: 'Call the helpline' }
];

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css'],
  providers: [
    BoldTextPipe
  ]
})

export class PrecautionsComponent implements OnInit {

  constructor(private boldText: BoldTextPipe) { }

  instructions = INSTRUCTIONS;

  ngOnInit() {
  }

}
