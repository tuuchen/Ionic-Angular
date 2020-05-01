/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.page.html',
  styleUrls: ['./personal-projects.page.scss'],
})
export class PersonalProjectsPage implements OnInit {
  // Define array of object with values to loop in html.
  // This could be extended further and the values could be fetched from server.
  // Just change server values and the App would be updated.
  projects = [
    {
      title: 'React',
      subtitle: 'Web-Development',
      description: 'Airbnb React App',
      content:
        'My first ever React project build on top of my own Airbnb database. Sort, filter and list apartments by price, location, reviews, etc! \n\n This React app was made as a independent project part of a Laurea Full-stack course.',
      img: 'assets/react.png',
      url: 'https://github.com/tuuchen/R0314-MEVN/tree/master/airbnb-react-app',
    },
    {
      title: 'Vue',
      subtitle: 'Web-Development',
      description: 'Vue blogging app',
      content:
        'My first ever small full-stack project using Spring Boot framework backend and Vue frontend to view and create blog posts. \n\n This project was made as a personal interest towards Vue and Spring Boot framework.',
      img: 'assets/vue.jpeg',
      url: 'https://github.com/tuuchen/springboot-blog-app',
    },
    {
      title: 'Ionic',
      subtitle: 'Mobile App Development',
      description: 'Lyrics App',
      content:
        'My first ever Ionic/Angular  CRUD  mobile app with firebase integration. \n\n This Mobile app was made as an independent project part of a Laurea Mobile development course.',
      img: 'assets/ionic.jpg',
      url:
        'https://github.com/tuuchen/ionic-angular/tree/master/Labwork/lyrics-app',
    },
    {
      title: 'Node.js',
      subtitle: 'Web-Development',
      description: 'REST API service',
      content:
        'My own Airbnb REST API service using Node.js, MongoDB, Mongoose and Express \n\n Sample data extracted from MongoDB Atlas, and all routes/paths made by myself.',
      img: 'assets/node.png',
      url: 'https://github.com/tuuchen/R0314-MEVN/tree/master/airbnb-rest-api',
    },
  ];

  constructor() {}

  doRedirect(url) {
    window.open(url);
  }

  ngOnInit() {}
}
