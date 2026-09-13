import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import MagneticHover from '@/components/motion/MagneticHover';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'underline';
  className?: string;
}

type LinkButtonProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, 'children' | 'className'> & {
    href: string;
  };

type AnchorButtonProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string;
  };

type NativeButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>;

/**
 * Premium-feeling button with three variants.
 * Magnetic hover is wrapped in a client component so RSC pages stay server-rendered.
 */
export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = 'primary', className = '', ...rest } = props as ButtonBaseProps & {
    href?: string;
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const linkProps = rest as { href: string } & Record<string, unknown>;
    return (
      <MagneticHover as="div" strength={0.2} className="inline-block">
        <Link {...linkProps} className={styles}>
          {children}
        </Link>
      </MagneticHover>
    );
  }
  return (
    <MagneticHover as="div" strength={0.2} className="inline-block">
      <button {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={styles}>
        {children}
      </button>
    </MagneticHover>
  );
}

export function LinkButton({ children, variant = 'primary', className = '', ...rest }: AnchorButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();
  return (
    <MagneticHover as="div" strength={0.2} className="inline-block">
      <a {...rest} className={styles}>
        {children}
      </a>
    </MagneticHover>
  );
}

const baseStyles =
  'inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-[15px] font-normal tracking-wide transition-all duration-500 will-change-transform';

const variantStyles: Record<'primary' | 'ghost' | 'underline', string> = {
  primary:
    'bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent-wisteria)] shadow-[0_8px_24px_-12px_rgba(43,38,32,0.4)]',
  ghost:
    'border border-[var(--color-ink)]/30 text-[var(--color-ink)] hover:border-[var(--color-accent-wisteria)] hover:text-[var(--color-accent-wisteria)]',
  underline:
    'rounded-none px-1 py-0.5 border-b border-[var(--color-accent-wisteria)] text-[var(--color-accent-wisteria)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink)]',
};
