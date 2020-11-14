import Index from '../pages/index/index';
import Login from '../pages/login';
import Lecture from '../pages/lecture';
import Work from '../pages/work';
import Course from '../pages/course';

const routeList = [
  {
    name: '首页',
    path: '/',
    exact: true,
    render() {
      return <Index />;
    },
  },
  {
    name: '登录',
    path: '/login',
    exact: true,
    render() {
      return <Login />;
    },
  },
  {
    name: '讲师',
    path: '/lecture',
    exact: true,
    render() {
      return <Lecture />;
    },
  },
  {
    name: '课程',
    path: '/course',
    exact: true,
    render() {
      return <Course />;
    },
  },
  {
    name: '作品',
    path: '/work',
    exact: true,
    render() {
      return <Work />;
    },
  },
];

export default routeList;
