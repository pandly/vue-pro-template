<template>
  {{#if_eq UI "element-ui"}}
  <{{menu}} router :default-active="currentPath">
  {{/if_eq}}
  {{#if_eq UI "view-design"}}
  <{{menu}} :open-names="currentPath.split('/')" :active-name="currentPath">
  {{/if_eq}}
  {{#if_eq UI "ant-design-vue"}}
  <{{menu}} mode="inline" :default-open-keys="currentPath.split('/')" :default-selected-keys="[currentPath]">
  {{/if_eq}}
    <template v-for="menu in menus">
      <{{menuItem}} v-if="!menu.children" :key="menu.path"{{#if_eq UI "element-ui"}} :index="menu.path"{{/if_eq}}{{#if_eq UI "view-design"}} :name="menu.path" :to="{path: menu.path}"{{/if_eq}}>
        {{#if_eq UI "element-ui"}}
        <i v-if="menu.meta.icon" :class="`el-icon-${menu.meta.icon}`"></i>
        <span>\{{ menu.meta.title }}</span>
        {{/if_eq}}
        {{#if_eq UI "view-design"}}
        <Icon v-if="menu.meta.icon" :type="`ios-${menu.meta.icon}`" />
        <span>\{{ menu.meta.title }}</span>
        {{/if_eq}}
        {{#if_eq UI "ant-design-vue"}}
        <router-link :to="{ path: menu.path }">
          <a-icon :type="menu.meta.icon" />
          <span>\{{ menu.meta.title }}</span>
        </router-link>
        {{/if_eq}}
      </{{menuItem}}>
      <sub-menu v-else :key="menu.path" :item="menu" />
    </template>
  </{{menu}}>
</template>

<script>
import SubMenu from './SubMenu'
export default {
  name: 'SideMenu',
  components: {
    SubMenu
  },
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
  {{#if_eq UI "element-ui"}}
  .el-menu {
    border: none;
    min-width: $sideMenuWidth;
  }
  ::v-deep .el-menu-item, ::v-deep .el-submenu__title {
    line-height: normal;
    display: flex;
    align-items: center;
  }
  {{/if_eq}}
  {{#if_eq UI "view-design"}}
  .ivu-menu-vertical.ivu-menu-light:after {
    content: none;
  }
  {{/if_eq}}
  {{#if_eq UI "ant-design-vue"}}
  .ant-menu-inline {
    border: none;
  }
  {{/if_eq}}
</style>
