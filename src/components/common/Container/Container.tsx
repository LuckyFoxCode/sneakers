import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
import s from './Container.module.scss';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={clsx(s.Container, className)}>{children}</div>;
};
