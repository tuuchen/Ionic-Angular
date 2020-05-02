/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.page.html',
  styleUrls: ['./soft-skills.page.scss'],
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
export class SoftSkillsPage implements OnInit {
  // soft skills
  softSkills = [
    {
      description: 'I have a strong work ethic',
    },
    {
      description: "I'm optimistic",
    },
    {
      description: 'I have great communication skills',
    },
    {
      description: "I'm willing to admit my mistakes and learn from them",
    },
    {
      description: "I'm great at solving problems",
    },
    {
      description: "I'm a team player",
    },
    {
      description: "I don't give up!",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
