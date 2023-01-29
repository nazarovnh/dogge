import { ReactComponent as Eye } from './icons/eye.svg';

export enum IconType {
  Eye
}

type IconElement = {
  width?: string;
  height?: string;
  source: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const IconMap = new Map<IconType, IconElement>([
  [IconType.Eye, { source: Eye, width: '24px', height: '24px' }],
]);
