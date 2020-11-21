import React from 'react';
export const homeObjOne = {
  lightBg: false,
  primary: true,
  imgStart: 'true',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  buttonLabel: 'First Project',
  description: 'Second Life is an online application where users can upcycle belongings they no longer want. Our vision was to create an application where people can give away the items they no longer need to people who do need them, thereby reducing both the amount of waste going to landfill and the demand link in the supply-and-demand chain.',
  headline: 'Second Life',
  topLine: 'Upcyling!',
  img: require('../../images/svg1.svg'),
  alt: 'an image is missing',
  start: '',
  buttonHidden: true
};

export const homeObjTwo = {
  lightBg: true,
  primary: false,
  imgStart: '',
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  buttonLabel: '',
  description: 'Second Life was built using Ruby on Rails, Google Maps API and is hosted on Heroku. The workflow for the project involved the agile framework scrum, where sprints were done in order to complete user stories. Continuous integration practices were used with GitHub and automated testing was deployed when committing using Travis CI.',
  headline: 'Tech Stack',
  topLine: "",
  img: require('../../images/svg2.svg'),
  alt: 'an image is missing',
  start: '',
  buttonHidden: true
};

export const homeObjThree = {
  lightBg: false,
  primary: true,
  imgStart: 'start',
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  buttonLabel: '',
  description: <a href="http://second-life-app.herokuapp.com/">Click here for the demo</a>,
  headline: 'Second Life Website',
  topLine: "",
  img: require('../../images/svg3.svg'),
  alt: 'an image is missing',
  start: 'false',
  buttonHidden: true
};

export const homeObjFour = {
  lightBg: true,
  primary: false,
  imgStart: 'start',
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  buttonLabel: '',
  description: "Strong communicator - passionate at learning new languages and skills. Adaptive - thrives in a volatile environment.",
  headline: 'My Skills',
  topLine: "Why should you hire me...",
  img: require('../../images/svg4.svg'),
  alt: 'an image is missing',
  start: 'true'
};
