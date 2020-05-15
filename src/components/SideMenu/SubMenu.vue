<template functional>
  {{#if_eq UI "element-ui"}}
  <{{subMenu}} :index="data.attrs.item.path">
  {{/if_eq}}
  {{#if_eq UI "view-design"}}
  <{{subMenu}} :name="data.attrs.item.path">
  {{/if_eq}}
  {{#if_eq UI "ant-design-vue"}}
  <{{subMenu}} :key="data.attrs.item.path">
  {{/if_eq}}
    <template slot="title">
      {{#if_eq UI "element-ui"}}
      <i v-if="data.attrs.item.meta.icon" :class="`el-icon-${data.attrs.item.meta.icon}`"></i>
      {{/if_eq}}
      {{#if_eq UI "view-design"}}
      <Icon v-if="data.attrs.item.meta.icon" :type="`ios-${data.attrs.item.meta.icon}`" />
      {{/if_eq}}
      {{#if_eq UI "ant-design-vue"}}
      <a-icon v-if="data.attrs.item.meta.icon" :type="data.attrs.item.meta.icon" />
      {{/if_eq}}
      <span>\{{ data.attrs.item.meta.title }}</span>
    </template>
    <template v-for="child in data.attrs.item.children">
      <sub-menu v-if="child.children && child.children.length > 0" :key="child.path" :item="child" />
      <{{menuItem}} v-else :key="child.path"{{#if_eq UI "element-ui"}} :index="child.path"{{/if_eq}}{{#if_eq UI "view-design"}} :name="child.path" :to="{path: child.path}"{{/if_eq}}>
        {{#if_eq UI "ant-design-vue"}}
        <router-link :to="{ path: child.path }">
          <span>\{{ child.meta.title }}</span>
        </router-link>
        {{/if_eq}}
        {{#unless_eq UI "ant-design-vue"}}
        <span>\{{ child.meta.title }}</span>
        {{/unless_eq}}
      </{{menuItem}}>
    </template>
  </{{subMenu}}>
</template>
