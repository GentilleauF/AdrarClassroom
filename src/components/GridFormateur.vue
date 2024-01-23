<template>
    <div class="flex flex-row">
        <div class="grid grid-cols-3 m-14 basis-2/3">
            <div class="flex flex-col w-48 text-center items-center pb-16">
                <button class="border border-black-adrar focus:outline-black py-2.5 bg-green-adrar hover:bg-green-dark-adrar rounded-full size-40 p-8"><img src="../assets/images/rediger_cours.jpg" alt="Rédiger un cours" width="100"></button>
                <h1>Rédiger un cours</h1>
            </div>
            <div class="flex flex-col  w-48 text-center items-center">
                <button class="border border-black-adrar focus:outline-black py-2.5 bg-green-adrar hover:bg-green-dark-adrar rounded-full size-40 p-8"><img src="../assets/images/ajouter_article.png" alt="Ajouter un article" width="100"></button>
                <h1>Ajouter un article</h1>
            </div>
            <div class="flex flex-col  w-48 text-center items-center">
                <button class="border border-black-adrar focus:outline-black py-2.5 bg-green-adrar hover:bg-green-dark-adrar rounded-full size-40 p-8"><img src="../assets/images/sws.png" alt="SWS" width="100"></button>
                <h1>SWS</h1>
            </div>
            <div class="flex flex-col  w-48 text-center items-center">
                <button class="border border-black-adrar focus:outline-black py-2.5 bg-green-adrar hover:bg-green-dark-adrar rounded-full size-40 p-8"><img src="../assets/images/sessions.png" alt="Sessions" width="100"></button>
                <h1>Sessions</h1>
            </div>
            <div class="flex flex-col  w-48 text-center items-center">
                <button class="border border-black-adrar focus:outline-black py-2.5 bg-green-adrar hover:bg-green-dark-adrar rounded-full size-40 p-8"><img src="../assets/images/stagiaires.png" alt="Stagiaires" width="100"></button>
                <h1>Stagiaires</h1>
            </div>
            <div class="flex flex-col  w-48 text-center items-center">
                <button class="border border-black-adrar focus:outline-black py-2.5 bg-green-adrar hover:bg-green-dark-adrar rounded-full size-40 p-8"><img src="../assets/images/gestion_comptes.png" alt="Gestions des comptes" width="100"></button>
                <h1>Gestion des comptes</h1>
            </div>
        </div>
        <div class="basis-1/3 text-center">
            <div class="border border-black-adrar rounded-md p-8 m-8">
                <h1 class="text-2xl text-green-adrar mb-8"><u>Calendrier</u></h1>
                <Calendrier />
            </div>
            <div class="border border-black-adrar rounded-md p-8 m-8">
                <h1 class="text-2xl text-green-adrar mb-8"><u>Prochains cours</u></h1>
                <h1 class="text-xl"><u>Matin:</u> CDA (25/01)</h1>
                <h1 class="text-xl"><u>Après-midi:</u> CDA (25/01)</h1>
            </div>
            <button class="border border-black-adrar focus:outline-black py-2.5 px-4 border-b-4 bg-green-adrar hover:bg-green-dark-adrar rounded-md mb-6 text-2xl p-4 w-64">Planning</button>
        </div>
    </div>
</template>

<script setup>
    import Calendrier from "../components/Calendrier.vue";
</script>