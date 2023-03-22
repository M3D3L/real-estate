import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const PrimaryLinkVariant = ['primary', 'basic'] as const;
type PrimaryLinkProps = {
  variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ className, children, variant = 'primary', ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'font-medium',
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-teal-400 hover:text-teal-500 active:text-teal-600',
            'disabled:text-teal-200',
          ],
          variant === 'basic' && [
            'text-black hover:text-gray-600 active:text-gray-800',
            'disabled:text-gray-300',
          ],
          //#endregion  //*======== Variant ===========
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
