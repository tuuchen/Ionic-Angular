/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.page.html',
  styleUrls: ['./technical-skills.page.scss'],
  styles: [
    `
      .star {
        font-size: 1.5rem;
        color: #b0c4de;
      }
      .filled {
        color: #1e90ff;
      }
      .bad {
        color: #deb0b0;
      }
      .filled.bad {
        color: #ff1e1e;
      }
    `,
  ],
})
export class TechnicalSkillsPage implements OnInit {

  // Front end scores (Stars)
  frontEnd = [
    {
      name: 'HTML',
      value: 4,
    },
    {
      name: 'CSS',
      value: 3,
    },
    {
      name: 'ES',
      value: 4,
    },
    {
      name: 'Bootstrap',
      value: 4,
    },
    {
      name: 'Ionic',
      value: 4,
    },
    {
      name: 'Angular',
      value: 3,
    },
    {
      name: 'React',
      value: 2,
    },
    {
      name: 'Vue',
      value: 4,
    },
  ];

  // Back end scores (Stars)
  backEnd = [
    {
      name: 'Java',
      value: 3,
    },
    {
      name: 'Python',
      value: 2,
    },
    {
      name: 'PHP',
      value: 2,
    },
    {
      name: 'Node',
      value: 3,
    },
    {
      name: 'Express',
      value: 3,
    },
    {
      name: 'Mongodb',
      value: 3,
    },
    {
      name: 'Mongoose',
      value: 3,
    },
    {
      name: 'MySQL',
      value: 2,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
