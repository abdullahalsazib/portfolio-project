import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  group,
} from '@angular/animations';

// Fade animations
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-out', style({ opacity: 1 })),
  ]),
]);

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeInDown = trigger('fadeInDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeInLeft = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const fadeInRight = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

// Scale animations
export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

export const scaleInCenter = trigger('scaleInCenter', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.5)' }),
    animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

// Slide animations
export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
]);

export const slideInDown = trigger('slideInDown', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)', opacity: 0 }),
    animate('700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),
]);

// Rotate animations
export const rotateIn = trigger('rotateIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'rotate(-180deg) scale(0.5)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'rotate(0deg) scale(1)' })),
  ]),
]);

// Stagger animations for lists
export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);

export const staggerScaleIn = trigger('staggerScaleIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.8)' }),
      stagger(80, [
        animate('400ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ], { optional: true }),
  ]),
]);

// Hover animations
export const hoverScale = trigger('hoverScale', [
  state('normal', style({ transform: 'scale(1)' })),
  state('hovered', style({ transform: 'scale(1.05)' })),
  transition('normal => hovered', animate('200ms ease-in')),
  transition('hovered => normal', animate('200ms ease-out')),
]);

export const hoverLift = trigger('hoverLift', [
  state('normal', style({ transform: 'translateY(0)' })),
  state('hovered', style({ transform: 'translateY(-10px)' })),
  transition('normal => hovered', animate('300ms ease-in')),
  transition('hovered => normal', animate('300ms ease-out')),
]);

// Bounce animations
export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    animate(
      '1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      keyframes([
        style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
        style({ opacity: 1, transform: 'scale(1.1)', offset: 0.5 }),
        style({ transform: 'scale(0.9)', offset: 0.7 }),
        style({ transform: 'scale(1)', offset: 1 }),
      ])
    ),
  ]),
]);

// Page transition animations
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0.8)',
      }),
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease', style({ opacity: 1, transform: 'scale(1)' })),
    ], { optional: true }),
  ]),
]);

// Card animations
export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px) scale(0.9)' }),
    animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
  ]),
]);

// Progress bar animation
export const progressAnimation = trigger('progressAnimation', [
  transition(':enter', [
    style({ width: '0%' }),
    animate('1500ms ease-out', style({ width: '*' })),
  ]),
]);

// Text reveal animation
export const textReveal = trigger('textReveal', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// Float animation (for continuous animation)
export const float = trigger('float', [
  state('up', style({ transform: 'translateY(-10px)' })),
  state('down', style({ transform: 'translateY(10px)' })),
  transition('up <=> down', [
    animate('3000ms ease-in-out'),
  ]),
]);

// Pulse animation
export const pulse = trigger('pulse', [
  transition(':enter', [
    animate(
      '2000ms ease-in-out infinite',
      keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.05)', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 }),
      ])
    ),
  ]),
]);

// Shake animation
export const shake = trigger('shake', [
  transition('* => *', [
    animate(
      '500ms',
      keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(-10px)', offset: 0.1 }),
        style({ transform: 'translateX(10px)', offset: 0.2 }),
        style({ transform: 'translateX(-10px)', offset: 0.3 }),
        style({ transform: 'translateX(10px)', offset: 0.4 }),
        style({ transform: 'translateX(0)', offset: 0.5 }),
      ])
    ),
  ]),
]);

