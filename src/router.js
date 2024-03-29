import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{path: '/', name: 'Accueil', component: ()=>import('./views/Accueil.vue')},
	{path: '/supatest', name: 'SupaTest', component: ()=>import('./views/SupaTest.vue')},
	{path : '/:pathMatch(.*)*', name: '404', component: ()=>import('./views/404.vue')},
	{path: '/creation-compte', name: 'CreationCompte', component: ()=>import('./views/CreationCompte.vue')},
	{path: '/connexion', name: 'Connexion', component: ()=>import('./views/Connexion.vue')},
	{path: '/profil', name: 'Profil', component: ()=>import('./views/Profil.vue')},
	{path: '/accueil-formateur', name: 'accueilFormateur', component: ()=>import('./views/AccueilFormateur.vue')},
	{path: '/cours-detail', name: 'coursDetail', component: ()=>import('./views/CoursDetail.vue')},
	{path: '/cours', name: 'cours', component: ()=>import('./views/Cours.vue')},
	{path: '/blog', name: 'blog', component: ()=>import('./views/Blog.vue')},
	{path: '/stagiaires-liste', name: 'stagiaireList', component: ()=>import('./views/stagiaireList.vue')},
	{path: '/ajout-cours', name: 'ajoutCours', component: ()=>import('./views/AjoutDunCours.vue')},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;