import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Products-admin',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: '/admin/products'

  },
  {
    id: 'Products',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: '/products'

  }

];