import Icon from '../../icon';
import { IconProps } from '../../types';

export const ChevronLeftIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_370_850"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <rect x="0.398438" y="0.706421" width="24" height="24" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_370_850)">
        <path
          d="M11.1982 12.7065L15.0982 16.6065C15.2816 16.7898 15.3732 17.0231 15.3732 17.3065C15.3732 17.5898 15.2816 17.8231 15.0982 18.0065C14.9149 18.1898 14.6816 18.2815 14.3982 18.2815C14.1149 18.2815 13.8816 18.1898 13.6982 18.0065L9.09824 13.4065C8.99824 13.3065 8.92741 13.1981 8.88574 13.0815C8.84408 12.9648 8.82324 12.8398 8.82324 12.7065C8.82324 12.5731 8.84408 12.4481 8.88574 12.3315C8.92741 12.2148 8.99824 12.1065 9.09824 12.0065L13.6982 7.40647C13.8816 7.22314 14.1149 7.13147 14.3982 7.13147C14.6816 7.13147 14.9149 7.22314 15.0982 7.40647C15.2816 7.5898 15.3732 7.82314 15.3732 8.10647C15.3732 8.3898 15.2816 8.62314 15.0982 8.80647L11.1982 12.7065Z"
          fill="currentColor"
        />
      </g>
    </svg>
  </Icon>
);

ChevronLeftIcon.displayName = 'ChevronLeftIcon';
