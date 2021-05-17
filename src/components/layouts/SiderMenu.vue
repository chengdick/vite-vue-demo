<template>
  <a-layout>
    <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
      <a-menu
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        :open-keys.sync="openKeys"
      >
        <template v-for="(item, index) in routesList">
          <a-menu-item v-if="!item.children?.length" :key="item.name">
            <a @click="toLink(item)">
              <user-outlined />
              <span> {{ item.meta.title }}</span>
            </a>
          </a-menu-item>
          <SubMenu v-else :menu-info="item" :key="item.name" @toLink="toLink" />
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout-content class="layout-main">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import SubMenu from './SubMenu.vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  props: {
    routesList: {
      type: Array,
      required: false,
      default: [],
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SubMenu,
  },
  name: 'SiderMenu',
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const openKeys = ref<string[]>([])
    router.getRoutes().forEach((item: any) => {
      if (item.name === route.name) {
        openKeys.value = item.meta.openKeys
      }
    })
    console.log(router.getRoutes(), 'lllllllll')

    console.log(openKeys, 'lllllllll')

    const toLink = (item: any) => {
      router.push({
        path: item.path,
      })

      console.log(item, 'll')
    }
    return {
      openKeys,
      toLink,
      selectedKeys: ref<any[]>([route.name]),
    }
  },
})
</script>
