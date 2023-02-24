import paul from './assets/paul.png';
import marius from './assets/marius.png';
import vlad from './assets/vlad.png';
import daniel from './assets/daniel.png';
import madalin from './assets/madalin.png';
import dominika from './assets/dominika.png';

export interface TeamInterface {
  imageUrl: string;
  name: string;
  role: string;
}

export const TeamObj: TeamInterface[] = [
  {
    imageUrl: vlad,
    name: 'Vlad',
    role: 'UI & UX Designer',
  },
  {
    imageUrl: paul,
    name: 'Paul',
    role: 'Full Stack Dev',
  },
  {
    imageUrl: marius,
    name: 'Marius',
    role: 'Blockchain Dev',
  },
  {
    imageUrl: dominika,
    name: 'Dominika',
    role: 'Art Director',
  },
  {
    imageUrl: madalin,
    name: 'Madalin',
    role: 'Marketing Master',
  },
  {
    imageUrl: daniel,
    name: 'Danijel',
    role: 'Discord & Security',
  },
];
