import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css'],
})
export class ModulesHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why the sky is blue?', content: 'Because of air'},
    { title: 'What is the longest river?', content: 'Nile river'},
    { title: 'what is the driest desert in the world?', content: 'Atacama Desert in Chile'}
  ]

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
