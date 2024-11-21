import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogPost, Category } from '../../interfaces/blog.interface';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { blogPosts, categories } from '../../data/blog-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  selectedCategory: string = 'All';
  selectedPost: BlogPost | null = null;
  searchQuery: string = '';

  // Import data from blog-data.ts
  blogPosts: BlogPost[] = blogPosts;
  categories: Category[] = categories;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Any initialization logic
  }

  // Filter posts by category
  filterPosts(category: string) {
    this.selectedCategory = category;
  }

  // Get filtered posts
  get filteredPosts() {
    return this.blogPosts.filter(post => {
      const matchesCategory = this.selectedCategory === 'All' || post.category === this.selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  // Get featured post
  get featuredPost() {
    return this.blogPosts.find(post => post.featured);
  }

  // Modal handling with content sanitization
  toggleModal(post: BlogPost | null = null) {
    this.selectedPost = post;
    const modal = document.getElementById('readMoreModal');
    if (modal) {
      if (post) {
        modal.classList.remove('hidden');
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
      } else {
        modal.classList.add('hidden');
        // Restore body scrolling when modal is closed
        document.body.style.overflow = 'auto';
      }
    }
  }

  // Safely render HTML content
  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  // Close modal when clicking outside
  closeModalOnOutsideClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.toggleModal(null);
    }
  }

  // Clean up when component is destroyed
  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }

  // Newsletter subscription
  subscribeNewsletter(email: string) {
    // Implement newsletter subscription logic
    console.log('Newsletter subscription for:', email);
  }

  // Search posts
  searchPosts(query: string) {
    this.searchQuery = query;
  }
}
