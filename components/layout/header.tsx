import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
//import { Menu, Transition } from '@headlessui/react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FaBullhorn } from "react-icons/fa";
import MenuBar from "../mobileNav/menuBar";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from "tinacms";
import {Navigation} from '../mobileNav/index';

// import { Banner } from "../blocks/banner";

// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Us', href: '#', icon: PhoneIcon },
// ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const Header = ({ data }) => {
  const theme = useTheme();

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
      gray: "text-white from-gray-400 to-gray-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-400 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
    gray: "border-b-3 border-gray-300 dark:border-gray-600",
  };

  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");
  const isBrowser = typeof window !== "undefined";
  const hasUrl = isBrowser ? window.location.href : "";

  React.useEffect(() => {
    setUrl(hasUrl);
  }, [hasUrl]);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  return (
    <div className={`bg-gradient-to-b ${headerColorCss} sticky top-0 z-50`}>
      <Container size="custom" className="py-0 relative z-10 max-w-8xl">
        
        <div className="flex items-center justify-between">
          <h4 className="select-none text-lg tracking-tight my-4 transition duration-150 ease-out transform">
            <Link href="/" passHref>
              <a className="flex items-center">
                
                <Icon
                  parentColor={data.color}
                  data={{
                    name: data.icon.name,
                    color: data.icon.color,
                    style: data.icon.style,
                  }}
                  className="inline-block h-auto w-10 mr-1"
                />{<div className="font-semibold text-md text-orange-300">AI4BHARAT</div>}
              
              </a>
            </Link>
          </h4>
          <Popover className="relative">
      <div className="max-w-7xl mx-auto mr-6 px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <a href="/home" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
              Home
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group font-semibold rounded-md inline-flex items-center text-sm hover:text-gray-900'
                    )}
                  >
                    <span>Areas</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      
                          {/* {console.log(data)} */}
                         
                          {data.areas && data.areas.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              {( item.icon &&
                               <Icon
                                  parentColor={data.color}
                                  data={{
                                    size: "xs",
                                    name: item.icon.name,
                                    color: item.icon.color,
                                    style: item.icon.style,
                                  }}
                                  className="flex-shrink-0 h-6 w-6 text-gray-600"
                                /> 
                                )}
                              <div className="ml-4">
                                <span>
                                <p className="text-sm font-semibold text-gray-900 inline-block">{item.label}</p>
                                { item.comingSoon && (
        <span className="mb-4 py-1 px-3 rounded-full bg-cyan-200 font-semibold text-[0.65rem] inline-block ml-4"><FaBullhorn className="inline-block mr-2 pb-0.5 bg-color-white"/>Coming Soon</span>
      )} 
             </span>
                                <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                          </div>
                            </a>
                          ))
                          }
                        </div>
                     {console.log(data.callsToAction)}
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {data.callsToAction && data.callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-xs font-semibold text-gray-900"
                              >
                               {( item.icon &&
                                <Icon
                                  parentColor={data.color}
                                  data={{
                                    size: "xs",
                                    name: item.icon.name,
                                    color: item.icon.color,
                                    style: item.icon.style,
                                  }}
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                   />
                                   )}
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group font-semibold rounded-md inline-flex items-center text-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    )}
                  >
                    <span>Resources</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid  gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
       
                          {/* {console.log(data.callsToAction)} */}
                         
                          {data.resources && data.resources.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              {(item.icon &&
                               <Icon
                                  parentColor={data.color}
                                  data={{
                                    size: "xs",
                                    name: item.icon.name,
                                    color: item.icon.color,
                                    style: item.icon.style,
                                  }}
                                  className="flex-shrink-0 h-6 w-6"
                                /> 
                            )}
                              <div className="ml-4">
                                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        
                              </div>
                            </a>
                          ))
                          }
                        </div>
                     
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
       
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

           
            <a href="/positions" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
              Positions
            </a>

          </Popover.Group>
        
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 right-0 md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between"> 
                <div>
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* <div className="mt-6">
                <nav className="grid gap-y-8">
                  {data.nav && data.nav.map((item) => (
                    <a
                    key={item.label}
                    href={item.href}
                      className="-m-3 p-3 flex font-semibold items-center rounded-md hover:bg-gray-50"
                    >
                     
                     
                      <span className="ml-3 text-sm text-gray-900">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div> */}
              <div className="w-[80vw]">
               <Navigation
           
          // use your own router's api to get pathname
          activeItemId="/category/react"
          onSelect={({itemId}) => {
            // maybe push to the route
          }}
          items={[
            {
              title: 'Home',
              itemId: '/home',
            },
            {
              title: 'Areas',
              itemId: '/areas',
              subNav: [
                {
                  title: 'Translation',
                  itemId: '/category/React',
                  desc: 'Open-source datasets (Samanantar) and models (IndicTrans) for neural machine translation between English and 12 Indic languages.',
                  elemBefore: () => <Icon
                        parentColor={data.color}
                        data={{
                          name: 'world',
                          color: data.icon.color,
                          style: 'small',
                        }}
                        className="inline-block h-auto w-10 mr-1"
                    />,
                },
              ],
            },
            {
              title: 'Resources',
              itemId: '/resources',
              subNav: [
                {
                  title: 'About',
                  itemId: '/contact/about',
                },
              ],
            },
            {
              title: 'Positions',
              itemId: '/positions',
            },
          ]}
        />
        </div>
            </div>

          </div>
          
        </Popover.Panel>
        
      </Transition>
    </Popover>

        </div>
        <div
          className={`absolute h-1 bottom-0 left-4 right-4 -z-1 opacity-5`}
        />

     {/* <MenuBar className="w-screen"/> */}
    
      </Container>
      
      {/* <Banner data={data}/> */}
    </div>
  );
};
