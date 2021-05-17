<template>
  <a-layout>
    <a-layout>
      <a-layout-header class="header">
        <div class="logo" />
        <div>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
      </a-layout-header>
      <SiderMenu :routesList="routes" :collapsed="collapsed" />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref, reactive } from 'vue'
import { routes } from '../../router'
import SiderMenu from './SiderMenu.vue'
export default defineComponent({
  name: 'BasicLayout',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SiderMenu,
  },
  setup() {
    let list = ref<any>(routes[0].children)
    return {
      collapsed: ref<boolean>(false),
      routes: list.value,
    }
  },
})
</script>
<style>
.ant-layout .header {
  background: #001529;
  padding: 0px;
  display: flex;
  height: 50px;
}
.ant-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  background: #001529;
  width: 200px;
  padding: 16px 0px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout .layout-main {
  margin: 15px 0px;
  padding: 10px;
  background: #fff;
  height: calc(100vh - 80px);
}
</style>
