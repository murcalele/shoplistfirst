import VueRouter from 'vue-router'
import ShopPage from '@/pages/mainPage'
import CheckOutPage from "@/pages/checkOutPage";
import ItemInfo from "@/pages/itemInfo";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ShopPage
        },
        {
            path: '/checkout',
            component: CheckOutPage
        },
        {
            path: '/itemInfo/:id',
            component: ItemInfo
        },
    ]
})