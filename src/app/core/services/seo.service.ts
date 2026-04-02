import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface SeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  noIndex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly BASE_URL = 'https://metaslot.aevon.online';
  private readonly SITE_NAME = 'Metaslot';

  set(config: SeoConfig): void {
    const fullTitle = `${config.title} | ${this.SITE_NAME}`;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });

    if (config.canonicalPath !== undefined) {
      const url = `${this.BASE_URL}${config.canonicalPath}`;
      this.meta.updateTag({ property: 'og:url', content: url });
      this.updateCanonical(url);
    }

    if (config.noIndex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    }
  }

  private updateCanonical(url: string): void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }
}
