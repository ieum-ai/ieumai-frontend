import Icon from '../../icon';
import { IconProps } from '../../types';

export const ChevronRightIcon = (props: IconProps) => (
  <Icon type="fill" {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_370_862"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill={props.fill} />
      </mask>
      <g mask="url(#mask0_370_862)">
        <path
          d="M12.5998 12L8.6998 8.10005C8.51647 7.91672 8.4248 7.68338 8.4248 7.40005C8.4248 7.11672 8.51647 6.88338 8.6998 6.70005C8.88314 6.51672 9.11647 6.42505 9.3998 6.42505C9.68314 6.42505 9.91647 6.51672 10.0998 6.70005L14.6998 11.3C14.7998 11.4 14.8706 11.5084 14.9123 11.625C14.954 11.7417 14.9748 11.8667 14.9748 12C14.9748 12.1334 14.954 12.2584 14.9123 12.375C14.8706 12.4917 14.7998 12.6 14.6998 12.7L10.0998 17.3C9.91647 17.4834 9.68314 17.575 9.3998 17.575C9.11647 17.575 8.88314 17.4834 8.6998 17.3C8.51647 17.1167 8.4248 16.8834 8.4248 16.6C8.4248 16.3167 8.51647 16.0834 8.6998 15.9L12.5998 12Z"
          fill={props.fill}
        />
      </g>
    </svg>
  </Icon>
);

ChevronRightIcon.displayName = 'ChevronRightIcon';
