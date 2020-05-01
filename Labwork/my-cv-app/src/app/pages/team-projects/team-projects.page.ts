/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-projects',
  templateUrl: './team-projects.page.html',
  styleUrls: ['./team-projects.page.scss'],
})
export class TeamProjectsPage implements OnInit {
  // Define array of object with values to loop in html.
  // This could be extended further and the values could be fetched from server.
  // Just change server values and the App would be updated.
  projects = [
    {
      title: 'Ionic Creator',
      subtitle: 'Movile App Development',
      description: 'Weather App Wireframe',
      content:
        'In this project I learned how to use Creator -tool to create basic ionic framework weather app wireframe.' +
        '\n\n We made the wireframe together with my friend in Mobile App Development Course. We later used this wireframe to build an working Weather App.',
      img: 'assets/ionic.jpg',
      url:
        'https://github.com/tuuchen/ionic-angular/tree/master/Labwork/Wireframe',
    },
    {
      title: 'Ionic',
      subtitle: 'Movile App Development',
      description: 'Weather App',
      content:
        'This Weather App project was an interesting dive into possibilities of Ionic and Angular. Angular is a really mature and rich framework with all the tools you need to build and application.' +
        '\n\n Combined with Ionic, we made this Weather App project together with my friend in Mobile App Development Course.',
      img: 'assets/ionic.jpg',
      url:
        'https://github.com/tuuchen/ionic-angular/tree/master/Labwork/WeatherApp',
    },
    {
      title: 'RCF Festival',
      subtitle: 'Service Design',
      description: 'Red Carpet Ride',
      content:
        'Part of a Service Design project we made a new service called Red Carpet Ride to bring the festival to your door.' +
        '\n\n Enjoy the company of your favourite movie star on your way to the festival!',
      img: 'assets/carpet.png',
    },
    {
      title: 'Caito Project',
      subtitle: 'Website Accessibility Project',
      description: 'Kaarteen sotamuseo',
      content:
        'We made a project to improve the accessibility of Kaarteen Sotamuseo website to attract more tourists from Japan.' +
        '\n\n We carefully studied best principles of SEO and the existing website, and wrote a 12-page report of improvements we could apply to the website.',
      img: 'assets/caito.png',
    },
  ];

  // URL as param, and redirect to URL.
  doRedirect(url) {
    window.open(url);
  }

  constructor() {}

  ngOnInit() {}
}
