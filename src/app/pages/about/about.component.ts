import { NgFor, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
declare var AOS: any;

interface Skill {
  name: string;
  percentage: number;
  delay: string;
}
interface AdditionalSkill {
  name: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  email: string = 'mdsazibhossin2021@gmail.com';

  frontendSkills: Skill[] = [
    { name: 'React', percentage: 85, delay: '0.2s' },
    { name: 'Angular', percentage: 67, delay: '0s' },
    { name: 'TypeScript', percentage: 89, delay: '0.4s' },
  ];

  backendSkills: Skill[] = [
    { name: 'Go', percentage: 85, delay: '0.6s' },
    { name: 'Gin', percentage: 80, delay: '0.8s' },
    { name: 'Node.js', percentage: 65, delay: '0.6s' },
    { name: 'Postgres & MySql', percentage: 84, delay: '1s' },
    { name: 'MongoDB', percentage: 70, delay: '1s' },
  ];

  toolsSkills: Skill[] = [
    { name: 'Linux', percentage: 95, delay: '1.2s' },
    { name: 'Vim/Nvim', percentage: 95, delay: '1.2s' },
    { name: 'Git', percentage: 97, delay: '1.2s' },
    { name: 'GitHub', percentage: 88, delay: '1.2s' },
    { name: 'Docker', percentage: 80, delay: '1.4s' },
    // { name: 'AWS', percentage: 75, delay: '1.6s' }
  ];

  additionalSkills: AdditionalSkill[] = [
    {
      name: 'Tailwind CSS',
      color:
        'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    },
    {
      name: 'Next.Js',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    },
    {
      name: 'GraphQL',
      color:
        'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    },
    {
      name: 'Firebase',
      color:
        'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    },
    {
      name: 'Redux',
      color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    },
    // { name: 'AWS', percentage: 75, delay: '1.6s' }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }
}
