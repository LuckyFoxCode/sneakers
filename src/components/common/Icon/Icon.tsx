import { CSSProperties, FC } from 'react';
import * as iconComponents from './icons';
import { IconType } from './types';

export interface IconProps {
  size?: number;
  fill?: string;
  name: IconType;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const getIconName = (name: string) => `Icon${name}`;

export const Icon: FC<IconProps> = ({ name, size, fill, style, onClick, className, ...rest }) => {
  const IconComponent = iconComponents[getIconName(name) as keyof typeof iconComponents] || null;

  return (
    IconComponent && (
      <IconComponent
        {...rest}
        fill={fill}
        data-name={name}
        onClick={onClick}
        className={className}
        style={{ ...style, width: size, height: size }}
      />
    )
  );
};
