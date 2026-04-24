import Link from '@docusaurus/Link';
import type { FooterLinkItem } from '@docusaurus/theme-common';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { ReactNode } from 'react';

export default function Footer(): ReactNode {
  const { footer } = useThemeConfig();
  if (!footer) return null;

  const { copyright, links, logo, style } = footer;

  return (
    <footer className={`footer footer--${style}`}>
      <div className="container footer__three-col">
        <div className="footer__col--left">
          {/** biome-ignore lint/security/noDangerouslySetInnerHtml: need this <*/}
          {copyright && <div dangerouslySetInnerHTML={{ __html: copyright }} />}
        </div>

        <div className="footer__col--center">
          {links?.map(
            (group: any): React.JSX.Element => (
              <div key={group.title}>
                <div className="footer__title">{group.title}</div>
                <ul className="footer__items clean-list">
                  {group.items.map((item: FooterLinkItem) => (
                    <li key={item.label} className="footer__item">
                      <Link
                        href={item.href ?? item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link-item"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        <div className="footer__col--right">
          {logo && <img alt={logo.alt} src={logo.src} width={logo.width ?? 200} />}
        </div>
      </div>
    </footer>
  );
}
