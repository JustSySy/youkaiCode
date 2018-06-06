<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="75" v-model="isCollapsed">
                <Menu active-name="Video" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="Home">
                      <router-link to="Home">
                        <Icon type="home"></Icon>
                        <span>首页</span>
                      </router-link>
                    </MenuItem>
                    <MenuItem name="Video">
                      <router-link to="Video">
                        <Icon type="headphone"></Icon>
                        <span>多媒体</span>
                      </router-link>
                    </MenuItem>
                    <MenuItem name="Settings">
                      <Icon type="settings"></Icon>
                      <span>设置</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '850px'}">
                  <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },
    menuitemClasses () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  padding-right: 100%;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
