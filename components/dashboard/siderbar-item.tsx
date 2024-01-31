"use client";
import { useHeaderSidebarContext } from '@/contexts/headerSidebar-context';
import classNames from 'classnames';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { UrlObject } from 'url';

export type SideNavItem = {
  type: "item";
  child: JSX.Element | string;
  target: string | UrlObject;
  icon?: JSX.Element;
  active?: boolean;
  key?: string;
} | {
  type: "text";
  child: JSX.Element | string;
};


export default function SidebarItem({item} : {item: SideNavItem}) {
  const { sidebarActiveKey } = useHeaderSidebarContext();

  return item.type == "text" ? (
    <li className="mx-3.5 mt-4 mb-2">
      <p className="block antialiased font-sans text-sm leading-normal text-white font-bold opacity-75">{item.child}</p>
    </li>
  ) : (
    <li>
      <Link href={item.target}>
        <button className={classNames("font-sans font-bold center transition-all text-xs py-3 rounded-xl text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4",  sidebarActiveKey == item.key && "bg-gradient-to-tr from-blue-600/50 to-blue-400/50")} type="button">
          {item.icon}
          <p className="block antialiased font-sans text-sm leading-relaxed text-inherit font-normal capitalize text-left">{item.child}</p>
        </button>
      </Link>
    </li>
  )
}
