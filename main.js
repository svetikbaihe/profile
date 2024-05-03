import $app from './src/assets/utils/app';
import Profile from './src/components/Profile';
import './main.scss';

const $newProfile = new Profile ({
  img: 'src/assets/images/avatar-jessica.jpeg',
  name: 'Jessica Randall',
  location: 'London, United Kingdom',
  description: '"Front-end developer and avid reader."',
  social_media_list: [
    {
      link: "https://www.github.com",
      name: "GitHub"
    },
    {
      link: "https://www.frontendmentor.io/",
      name: "Frontend Mentor"
    },
    {
      link: "https://www.linkedin.com",
      name: "LinkedIn"
    },
    {
      link: "https://www.twitter.com",
      name: "Twitter"
    },
    {
      link: "https://www.instagram.com",
      name: "Instagram"
    }
  ]
}).$profileWrapper

$app.appendChild($newProfile);






