import { SVGProps } from 'react';

export type IconsType = keyof typeof import('../icons/index');

export interface IconProps extends SVGProps<SVGSVGElement> {
  iconName: IconsType;
}
