import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{path: '/', name: 'Accueil', component: ()=>import('./views/Accueil.vue')},
	{path: '/supatest', name: 'SupaTest', component: ()=>import('./views/SupaTest.vue')},
	{path : '/:pathMatch(.*)*', name: '404', component: ()=>import('./views/404.vue')},
	{path: '/creation-compte', name: 'CreationCompte', component: ()=>import('./views/CreationCompte.vue')},
	{path: '/connexion', name: 'Connexion', component: ()=>import('./views/Connexion.vue')},
	{path: '/profil', name: 'Profil', component: ()=>import('./views/Profil.vue')},
	{path: '/ajout-cours', name: 'ajoutCour', component: ()=>import('./views/AjoutDunCours.vue')}
	
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;