
export interface RecruitRequirement {
  title: string;
  body: string;
  isWarning?: boolean;
}

export interface SalonLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  imageUrl: string;
  city: string;
  label?: string;
  subtitle?: string;
  description?: string;
  recruitBadge?: string;
  businessHours?: string;
  holidays?: string;
  recruitRequirements?: RecruitRequirement[];
  facilities?: string[];
}


export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface NewsPost {
  id: number;
  slug: string;
  date: string;
  category: string;
  title: string;
  imageUrl: string;
  profile?: string;
  schedule?: ScheduleItem[];
  reason?: string;
  message?: string;
  author?: string;
  readTime?: string;
  sections?: BlogSection[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// ---- microCMS レスポンス型 ----

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface MicroCMSBase {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

export interface MicroCMSFAQ extends MicroCMSBase {
  question: string;
  answer: string;
  category?: string[];
  sortOrder?: number;
  isPublished?: boolean;
}

export interface MicroCMSImage {
  url: string;
  width: number;
  height: number;
}

export interface MicroCMSRecruitRequirement {
  fieldId: 'recruitRequirements';
  title: string;
  body: string;
  isWarning?: boolean;
}

export interface MicroCMSBlogSection {
  fieldId: 'sections';
  heading: string;
  body: string;
}

export interface MicroCMSBlog extends MicroCMSBase {
  title: string;
  slug: string;
  date?: string;
  category?: string[];
  image: MicroCMSImage;
  author?: string;
  readTime?: string[];
  sections: MicroCMSBlogSection[];
  isFeatured?: boolean;
  isVisible?: boolean;
  order?: number;
}

export interface MicroCMSVoiceScheduleItem {
  fieldId: 'schedule';
  time: string;
  activity: string;
}

export interface MicroCMSVoice extends MicroCMSBase {
  title: string;
  slug: string;
  date: string;  // ISO 8601
  category: string[];
  image: MicroCMSImage;
  profile: string;
  reason?: string;
  schedule?: MicroCMSVoiceScheduleItem[];
  message?: string;
  age?: number;
  salonName?: string[];
  order?: number;  // microCMS側で`order`フィールド追加時に有効化される並び順
}

export interface MicroCMSSalonInfo {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
  name: string;
  city?: string;
  address: string;
  phone?: string;
  image?: MicroCMSImage;
  hotpepper?: string;
  beauty?: string;
  label?: string;
  subtitle?: string;
  description?: string;
  recruitBadge?: string;
  businessHours?: string;
  holidays?: string;
  recruitRequirements?: MicroCMSRecruitRequirement[];
  facilities?: string[];
  order?: number;
  isVisible?: boolean;
}
