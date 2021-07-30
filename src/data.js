import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Add Task',
    links: [
      { label: 'Daily task', icon: <FaCreditCard />, url: '/dailytask' },
      { label: 'Schedule', icon: <FaCreditCard />, url: '/weeklytask' },
      // { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'View',
    links: [
      { label: 'Today', icon: <FaBook />, url: '/viewtoday' },
      { label: 'This Week', icon: <FaBook />, url: '/viewweek' },
      // { label: 'help', icon: <FaBook />, url: '/products' },
      // { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Notification',
    links: [
      { label: 'Due', icon: <FaBriefcase />, url: 'viewdue' },
      { label: 'Remaining Task', icon: <FaBriefcase />, url: '/remtask' },
    ],
  },
];

export default sublinks;