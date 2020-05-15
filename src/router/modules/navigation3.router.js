export default [{
  path: '/navigation3',
  name: 'navigation3',
  component: () => import(/* webpackChunkName: 'view2' */ '../../views/navigation3/navigation3'),
  meta: {
    title: 'Navigation 3',
    icon: 'search'
  }
}]
