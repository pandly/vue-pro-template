export default [{
  path: 'navigation2',
  name: 'navigation2',
  component: () => import(/* webpackChunkName: 'sectionLayout' */ '@/layouts/SectionLayout'),
  meta: {
    title: 'Navigation 2',
    icon: 'menu'
  },
  children: [{
    path: 'submenu',
    name: 'submenu',
    component: () => import(/* webpackChunkName: 'sectionLayout' */ '@/layouts/SectionLayout'),
    meta: {
      title: 'SubMenu'
    },
    children: [{
      path: '/navigation2/submenu/option3',
      name: 'option3',
      component: () => import(/* webpackChunkName: 'view231' */ '@/views/navigation2/submenu/option3'),
      meta: {
        title: 'Option 3'
      }
    }, {
      path: '/navigation2/submenu/option4',
      name: 'option4',
      component: () => import(/* webpackChunkName: 'view232' */ '@/views/navigation2/submenu/option4'),
      meta: {
        title: 'Option 4'
      }
    }]
  }, {
    path: '/navigation2/option5',
    name: 'option5',
    component: () => import(/* webpackChunkName: 'view12' */ '@/views/navigation2/option5'),
    meta: {
      title: 'Option 5'
    }
  }, {
    path: '/navigation2/option6',
    name: 'option6',
    component: () => import(/* webpackChunkName: 'view11' */ '@/views/navigation2/option6'),
    meta: {
      title: 'Option 6'
    }
  }]
}]
