import { Button, Layout, Menu, Tooltip } from "ant-design-vue";
const componentUse = (app: any) => {
  app.use(Button).use(Layout).use(Menu).use(Tooltip);
};

export { componentUse };
