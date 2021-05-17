<template>
  <a-sub-menu :key="menuInfo.name">
    <template #title>
      <user-outlined />
      <span> {{ menuInfo.meta.title }}</span>
    </template>
    <template v-for="(ele, index) in menuInfo.children">
      <a-menu-item v-if="!ele.children" :key="ele.name">
        <a @click="toLink(ele)">
          <span> {{ ele.meta.title }}</span>
        </a>
      </a-menu-item>
      <SubMenu v-else :key="ele.name" :menu-info="ele" @toLink="toLink" />
    </template>
  </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  props: ['menuInfo'],
  components: {
    UserOutlined,
  },
  setup(props, { emit }) {
    const toLink = (item: any) => {
      emit('toLink', item)
    }
    return {
      toLink,
    }
  },
})
</script>
