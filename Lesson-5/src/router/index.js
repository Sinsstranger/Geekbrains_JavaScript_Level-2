import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: "/",
		name: "Main",
		component: () =>
			import("../views/Main.vue"),
	},
	{
		path: "/cart",
		name: "Cart",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
