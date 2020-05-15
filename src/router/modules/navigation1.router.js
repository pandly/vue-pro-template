export default [{
  path: '/navigation1',
  name: 'navigation1',
  component: () => import(/* webpackChunkName: 'sectionLayout' */ '@/layouts/SectionLayout'),
  meta: {
    title: 'Navigation 1',
    icon: 'link'
  },
  children: [{
    path: '/navigation1/option1',
    name: 'option1',
    component: () => import(/* webpackChunkName: 'view11' */ '@/views/navigation1/option1'),
    meta: {
      title: 'Option 1'
    }
  }, {
    path: '/navigation1/option2',
    name: 'option2',
    component: () => import(/* webpackChunkName: 'view12' */ '@/views/navigation1/option2'),
    meta: {
      title: 'Option 2'
    }
  }]
}]
