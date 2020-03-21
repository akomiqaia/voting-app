
  const countries = [
    {
      id: 1,
      userName: 'Natalia',
      title: 'Georgia',
      description: 'Ako\'s homecountry. It is famous for good food and wine. And really cheap to stay there.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: '/images/avatars/daniel.jpg',
      productImageUrl: '/images/countries/image-aqua.png',
    },
    {
      id: 2,
      userName: 'Martin',
      title: 'Germany',
      description: 'Martin\'s suggestion and also he promised to host us at his place in the mountains',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: '/images/avatars/kristy.png',
      productImageUrl: '/images/countries/image-rose.png',
    },
    {
      id: 3,
      userName: 'Lea',
      title: 'Spain',
      description: 'We already have been here for several times and we really love spain and spanish culture. we should be back again',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: '/images/avatars/veronika.jpg',
      productImageUrl: '/images/countries/image-steel.png',
    },
    {
      id: 4,
      userName: 'Sara',
      title: 'Dart',
      description: 'We play dart and whereever most darts land we go there',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: '/images/avatars/molly.png',
      productImageUrl: '/images/countries/image-yellow.png',
    },
  ];


function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}


export default countries
