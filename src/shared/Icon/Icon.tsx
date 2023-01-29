import { IconMap, IconType } from './IconMap';

interface IconProps {
  iconType: IconType;
  className: string;
}

const Icon = ({ iconType, className }: IconProps) => {
  const { source, width, height } = IconMap.get(iconType) || {};
  if (source) {
    const Icon = source;
    return <Icon className={className} width={width} height={height} />;
  } else {
    return null;
  }

};

export default Icon;
