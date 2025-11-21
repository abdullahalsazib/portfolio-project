import { NgFor, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { skillCategories, additionalSkills, SkillCategory, AdditionalSkill } from '../../data/skills-data';
declare var AOS: any;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, NgClass, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  email: string = 'mdsazibhossin2021@gmail.com';
  
  skillCategories: SkillCategory[] = skillCategories;
  additionalSkills: AdditionalSkill[] = additionalSkills;

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }

  getGradientClasses(categoryId: string): string {
    const gradientMap: { [key: string]: string } = {
      'programming': 'bg-gradient-to-r from-indigo-500 to-purple-600',
      'web-development': 'bg-gradient-to-r from-blue-500 to-cyan-600',
      'database': 'bg-gradient-to-r from-emerald-500 to-teal-600',
      'devops': 'bg-gradient-to-r from-blue-500 to-indigo-600',
      'cybersecurity': 'bg-gradient-to-r from-red-500 to-orange-600',
      'soft-skills': 'bg-gradient-to-r from-purple-500 to-pink-600',
      'cloud-apis': 'bg-gradient-to-r from-orange-500 to-yellow-600',
      'continuous-learning': 'bg-gradient-to-r from-green-500 to-emerald-600'
    };
    return gradientMap[categoryId] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  }

  getColorClasses(categoryId: string): string {
    const colorMap: { [key: string]: string } = {
      'programming': 'text-indigo-600 dark:text-indigo-400',
      'web-development': 'text-blue-600 dark:text-blue-400',
      'database': 'text-emerald-600 dark:text-emerald-400',
      'devops': 'text-blue-600 dark:text-blue-400',
      'cybersecurity': 'text-red-600 dark:text-red-400',
      'soft-skills': 'text-purple-600 dark:text-purple-400',
      'cloud-apis': 'text-orange-600 dark:text-orange-400',
      'continuous-learning': 'text-green-600 dark:text-green-400'
    };
    return colorMap[categoryId] || 'text-gray-600 dark:text-gray-400';
  }

  getBlurClasses(categoryId: string): string {
    const blurMap: { [key: string]: string } = {
      'programming': 'bg-indigo-500/20 group-hover:bg-indigo-500/30',
      'web-development': 'bg-blue-500/20 group-hover:bg-blue-500/30',
      'database': 'bg-emerald-500/20 group-hover:bg-emerald-500/30',
      'devops': 'bg-blue-500/20 group-hover:bg-blue-500/30',
      'cybersecurity': 'bg-red-500/20 group-hover:bg-red-500/30',
      'soft-skills': 'bg-purple-500/20 group-hover:bg-purple-500/30',
      'cloud-apis': 'bg-orange-500/20 group-hover:bg-orange-500/30',
      'continuous-learning': 'bg-green-500/20 group-hover:bg-green-500/30'
    };
    return blurMap[categoryId] || 'bg-gray-500/20 group-hover:bg-gray-500/30';
  }
}
