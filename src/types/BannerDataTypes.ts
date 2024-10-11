// lib/data/types.ts
export interface BannerImage {
  src: string;
  alt: string;
}
  
export interface Banner {
  bannerTitle: string;
  image: BannerImage;
}

export interface BannerData {
  banner: Banner;
}
