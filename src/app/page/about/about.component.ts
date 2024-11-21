import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare var AOS: any;

interface Skill {
  name: string;
  percentage: number;
  delay: string;
}

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  frontendSkills: Skill[] = [
    { name: 'Angular', percentage: 95, delay: '0s' },
    { name: 'React', percentage: 90, delay: '0.2s' },
    { name: 'TypeScript', percentage: 85, delay: '0.4s' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 90, delay: '0.6s' },
    { name: 'Express.js', percentage: 85, delay: '0.8s' },
    { name: 'MongoDB', percentage: 80, delay: '1s' }
  ];

  toolsSkills: Skill[] = [
    { name: 'Git', percentage: 95, delay: '1.2s' },
    { name: 'Docker', percentage: 80, delay: '1.4s' },
    { name: 'AWS', percentage: 75, delay: '1.6s' }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }
}