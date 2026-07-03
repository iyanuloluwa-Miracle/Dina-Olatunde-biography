export interface TimelineEvent {
  year: string
  title: string
  chapter: string
  description: string
  icon: string
}

export interface Achievement {
  icon: string
  title: string
  description: string
  year: string
}

export interface CoreValue {
  icon: string
  title: string
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption: string
  /** Aspect hint for the masonry layout: 'tall' | 'wide' | 'square' */
  shape: 'tall' | 'wide' | 'square'
}

export interface LifeLesson {
  quote: string
  context: string
}

export interface Tribute {
  photo: string
  name: string
  relationship: string
  message: string
}
