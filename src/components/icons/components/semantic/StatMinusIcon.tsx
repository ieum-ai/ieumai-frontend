import Icon from '../../icon';
import { IconProps } from '../../types';

export const StatMinusIcon = (props: IconProps) => (
  <Icon type="fill" {...props}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_291_662"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <rect x="0.841919" y="0.0693359" width="24" height="24" fill={props.fill} />
      </mask>
      <g mask="url(#mask0_291_662)">
        <path
          d="M12.8419 15.0193C12.7086 15.0193 12.5836 14.9985 12.4669 14.9568C12.3502 14.9151 12.2419 14.8443 12.1419 14.7443L7.54191 10.1443C7.35857 9.96097 7.26274 9.7318 7.25441 9.4568C7.24607 9.1818 7.34191 8.9443 7.54191 8.7443C7.72524 8.56097 7.95857 8.4693 8.24191 8.4693C8.52524 8.4693 8.75857 8.56097 8.94191 8.7443L12.8419 12.6193L16.7419 8.7443C16.9252 8.56097 17.1544 8.46513 17.4294 8.4568C17.7044 8.44847 17.9419 8.5443 18.1419 8.7443C18.3252 8.92763 18.4169 9.16097 18.4169 9.4443C18.4169 9.72763 18.3252 9.96097 18.1419 10.1443L13.5419 14.7443C13.4419 14.8443 13.3336 14.9151 13.2169 14.9568C13.1002 14.9985 12.9752 15.0193 12.8419 15.0193Z"
          fill={props.fill}
        />
      </g>
    </svg>
  </Icon>
);

StatMinusIcon.displayName = 'StatMinusIcon';
