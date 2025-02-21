import Icon from '../../icon';
import { IconProps } from '../../types';

export const PlayArrowIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_367_826"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <rect x="0.707031" y="0.64502" width="24" height="24" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_367_826)">
        <path
          d="M8.70703 17.82V7.46997C8.70703 7.18664 8.80703 6.94914 9.00703 6.75747C9.20703 6.5658 9.44036 6.46997 9.70703 6.46997C9.79036 6.46997 9.87786 6.48247 9.96953 6.50747C10.0612 6.53247 10.1487 6.56997 10.232 6.61997L18.382 11.795C18.532 11.895 18.6445 12.02 18.7195 12.17C18.7945 12.32 18.832 12.4783 18.832 12.645C18.832 12.8116 18.7945 12.97 18.7195 13.12C18.6445 13.27 18.532 13.395 18.382 13.495L10.232 18.67C10.1487 18.72 10.0612 18.7575 9.96953 18.7825C9.87786 18.8075 9.79036 18.82 9.70703 18.82C9.44036 18.82 9.20703 18.7241 9.00703 18.5325C8.80703 18.3408 8.70703 18.1033 8.70703 17.82ZM10.707 15.995L15.957 12.645L10.707 9.29497V15.995Z"
          fill="currentColor"
        />
      </g>
    </svg>
  </Icon>
);

PlayArrowIcon.displayName = 'PlayArrowIcon';
