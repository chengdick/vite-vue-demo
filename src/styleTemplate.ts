let fff = '#fff'
export default `
::selection {
  color:${fff};
  background: {{primary}};
}
.ant-btn-primary{
  background-color: {{primary}};
  border-color: {{primary}};
}
.ant-btn-primary:hover, .ant-btn-primary:focus{
  background-color: {{primary-light-1}};
  border-color: {{primary-light-1}};
}
.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
  background-color: {{primary}};
}
`
