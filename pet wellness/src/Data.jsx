import HeroSliderImage1 from './assets/s11.png';
import HeroSliderImage2 from './assets/DogCateg2.png';
import HeroSliderImage3 from './assets/DogCateg3.png';
import DogCateg1 from './assets/size1.jpg';
import DogCateg2 from './assets/middog.jpeg';
import DogCateg3 from './assets/size3.jpg';
import DogCateg4 from './assets/size4.jpg';
import{AiFillYoutube,AiFillInstagram,AiFillGithub} from 'react-icons/ai';
export const navigation=[
    {
        name:'home',
        hief:'#',
    },
    {
        name:'prices',
        hief:'#',
    },
    {
        name:'contact',
        hief:'#',
    },
    {
        name:'Appoinment',
        hief:'#',
    },
    {
      name:'shop',
      hief:'#',
    },
    {
      name:'Login/Signup',
      hief:'#',
  },
]
export const heroSlider=[
    {
        id: 1,
        title:'we take care of your pet',
        image:<HeroSliderImage1/>,
        subtitle:'I think having an animal in your life makes you a better human',
        buttonText:'Get an appoinment',
    },
    {
        id: 2,
        title:'just a paw-dorable furball, all clean and groomed',
        image:<HeroSliderImage2/>,
        subtitle:'No one loves you as unconditionally as your beloved pet.',
        buttonText:'Get an appoinment',
    },
    {
        id: 3,
        title:'Prepare for an overload of cuteness!',
        image:<HeroSliderImage3/>,
        subtitle:'Until one has loved an animal, a part of ones soul remains unawakened',
        buttonText:'Get an appoinment',
    },
]
export const bundleData=[
    {
        id:1,
        name: 'small',
        image:<DogCateg1/>,
        dogcategory:'1-9kg',
        servises:[
            {
                name:'smart',
                price:400,
                list: ['wash',
                   'ears cleaning',
                    'nail cut', 
                    'perfumed'
                  ],
      },
      {
        name: 'premium',
        price: 40,
        list: [
          'all smart services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 60,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'medium',
    image: <DogCateg2 />,
    dogCategory: '10 - 19 kg',
    services: [
      {
        name: 'smart',
        price: 80,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 100,
        list: [
          'all smart services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 120,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'big',
    image: <DogCateg3 />,
    dogCategory: '20 - 29 kg',
    services: [
      {
        name: 'smart',
        price: 140,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 160,
        list: [
          'all smart services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 180,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'super',
    image: <DogCateg4 />,
    dogCategory: '30 - 39 kg',
    services: [
      {
        name: 'smart',
        price: 200,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
      },
      {
        name: 'premium',
        price: 210,
        list: [
          'all smart services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'royal',
        price: 220,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillGithub />,
    href: '#',
  },
];

