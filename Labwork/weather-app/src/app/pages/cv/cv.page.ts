import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss'],
})
export class CvPage implements OnInit {
  // Employers
  employers = [
    {
      description: 'KaVo Kerr Group Finland Ltd.',
      location: 'Tuusula',
      date: '09/2011 -',
      role: 'Assembler and Final Tester',
      img: 'assets/kavo.jpg',
    },
  ];
  // Education
  educations = [
    {
      description: 'Laurea University of Applied Sciences',
      date: '01/2018 -',
      role: 'Business Information Technology (BBA)',
      img: 'assets/laurea.png',
    },
    {
      description: 'Hyria koulutus Ltd. Vocational School',
      date: '08/2008 – 12/2010',
      role: 'Electrician degree',
      img: 'assets/hyria2.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
