/* eslint-disable react/jsx-pascal-case */
import React, { memo, FC } from 'react';
import * as Icons from '../icons/index';
import { IconProps } from './types';

const SvgIcon: FC<IconProps> = ({ iconName, ...rest }) => {
  const IconMap = {
    Behance: <Icons.Behance {...rest} />,
    Email: <Icons.Email {...rest} />,
    Facebook: <Icons.Facebook {...rest} />,
    Github: <Icons.Github {...rest} />,
    Instagram: <Icons.Instagram {...rest} />,
    Link: <Icons.Link {...rest} />,
    Linkedin: <Icons.Linkedin {...rest} />,
    Settings: <Icons.Settings {...rest} />,
    Spotify: <Icons.Spotify {...rest} />,
    Telegram: <Icons.Telegram {...rest} />,
    Tiktok: <Icons.Tiktok {...rest} />,
    Whatsapp: <Icons.Whatsapp {...rest} />,
    Youtube: <Icons.Youtube {...rest} />,
  };
  return IconMap[iconName] ?? null;
};

export default memo(SvgIcon);
