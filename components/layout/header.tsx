import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
//import { Menu, Transition } from '@headlessui/react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
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
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// export default function Example() {
//   return (
//     <Popover className="relative bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <a href="#">
//               <span className="sr-only">Workflow</span>
//               <img
//                 className="h-8 w-auto sm:h-10"
//                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="-mr-2 -my-2 md:hidden">
//             <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span className="sr-only">Open menu</span>
//               <MenuIcon className="h-6 w-6" aria-hidden="true" />
//             </Popover.Button>
//           </div>
//           <Popover.Group as="nav" className="hidden md:flex space-x-10">
//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button
//                     className={classNames(
//                       open ? 'text-gray-900' : 'text-gray-500',
//                       'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                     )}
//                   >
//                     <span>Solutions</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? 'text-gray-600' : 'text-gray-400',
//                         'ml-2 h-5 w-5 group-hover:text-gray-500'
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
//                       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                         <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                         {solutions.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                             >
//                               <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
//                               <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">{item.name}</p>
//                                 <p className="mt-1 text-sm text-gray-500">{item.description}</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                         <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
//                           {callsToAction.map((item) => (
//                             <div key={item.name} className="flow-root">
//                               <a
//                                 href={item.href}
//                                 className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
//                               >
//                                 <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
//                                 <span className="ml-3">{item.name}</span>
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </>
//               )}
//             </Popover>

//             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//               Pricing
//             </a>
//             <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
//               Docs
//             </a>

//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button
//                     className={classNames(
//                       open ? 'text-gray-900' : 'text-gray-500',
//                       'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                     )}
//                   >
//                     <span>More</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? 'text-gray-600' : 'text-gray-400',
//                         'ml-2 h-5 w-5 group-hover:text-gray-500'
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
//                       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                         <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                           {resources.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                             >
//                               <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
//                               <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">{item.name}</p>
//                                 <p className="mt-1 text-sm text-gray-500">{item.description}</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                         <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
//                           <div>
//                             <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
//                             <ul role="list" className="mt-4 space-y-4">
//                               {recentPosts.map((post) => (
//                                 <li key={post.id} className="text-base truncate">
//                                   <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
//                                     {post.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="mt-5 text-sm">
//                             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                               {' '}
//                               View all posts <span aria-hidden="true">&rarr;</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </>
//               )}
//             </Popover>
//           </Popover.Group>
//           <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
//             <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
//               Sign in
//             </a>
//             <a
//               href="#"
//               className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//             >
//               Sign up
//             </a>
//           </div>
//         </div>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="duration-200 ease-out"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="duration-100 ease-in"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
//           <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//             <div className="pt-5 pb-6 px-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt="Workflow"
//                   />
//                 </div>
//                 <div className="-mr-2">
//                   <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                     <span className="sr-only">Close menu</span>
//                     <XIcon className="h-6 w-6" aria-hidden="true" />
//                   </Popover.Button>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <nav className="grid gap-y-8">
//                   {solutions.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                     >
//                       <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
//                       <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
//                     </a>
//                   ))}
//                 </nav>
//               </div>
//             </div>
//             <div className="py-6 px-5 space-y-6">
//               <div className="grid grid-cols-2 gap-y-4 gap-x-8">
//                 <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                   Pricing
//                 </a>

//                 <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
//                   Docs
//                 </a>
//                 {resources.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div>
//                 <a
//                   href="#"
//                   className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                 >
//                   Sign up
//                 </a>
//                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   Existing customer?{' '}
//                   <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Popover.Panel>
//       </Transition>
//     </Popover>
//   )
// }


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
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
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
          <h4 className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
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
                />{" "}
              
              </a>
            </Link>
          </h4>
          <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          {/* <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div> */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <a href="/home" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-lg sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {/* {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))} */}
                          {console.log(data.areas)}
                         
                          {data.areas && data.areas.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                               <Icon
                                  parentColor={data.color}
                                  data={{
                                    size: "xs",
                                    name: item.icon.name,
                                    color: item.icon.color,
                                    style: item.icon.style,
                                  }}
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                /> 
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.label}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))
                          }
                        </div>
                     
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
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
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
                        {/* {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))} */}
                          {console.log(data.resources)}
                         
                          {data.resources && data.resources.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                               <Icon
                                  parentColor={data.color}
                                  data={{
                                    size: "xs",
                                    name: item.icon.name,
                                    color: item.icon.color,
                                    style: item.icon.style,
                                  }}
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                /> 
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.label}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))
                          }
                        </div>
                     
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {/* {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))} */}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

           
            <a href="/positions" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Positions
            </a>
{/* 
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>More</span>
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
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}
          </Popover.Group>
          {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div> */}
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
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                {/* <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div> */}
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {data.nav && data.nav.map((item) => (
                    <a
                    key={item.label}
                    href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                     
                     
                      <span className="ml-3 text-base font-medium text-gray-900">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            {/* <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/home" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Home
                </a>

                <a href="/positions" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Positions
                </a>
                {data.resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            
            </div> */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  
          {/* <ul className="flex gap-6 sm:gap-8 lg:gap-10">
            {data.nav &&
              data.nav.map((item, i) => {
                const activeItem =
                  item.href === ""
                    ? typeof location !== "undefined" &&
                      location.pathname == "/"
                    : windowUrl.includes(item.href);
                return (
                  <li
                    key={`${item.label}-${i}`}
                    className={activeItem ? activeItemClasses[theme.color] : ""}
                  >
                    <Link href={`${prefix}/${item.href}`} passHref>
                      <a className="select-none	text-base inline-block tracking-wide font-regular transition duration-150 ease-out opacity-70 hover:opacity-100 py-8">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul> */}
           {/*
              <Menu>
      <Menu.Button>More</Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
      </Transition>
    </Menu> */}
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        />
      </Container>
      
    </div>
  );
};
