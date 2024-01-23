<template>
    <form class="space-y-5 flex flex-col p-3 md:p-20 md:w-[60vw]">
        <div class="flex flex-row justify-center items-center">
            <label
                class="w-[20vw] mr-2 font-medium leading-6 text-gray-900"
                htmlFor="username"
            >
                Titre du cours :
            </label>
            <input
                type="text"
                required
                class="rounded border flex-auto border-gray-300 bg-white px-3.5 py-2 text-black"
            />
        </div>

        <div class="flex">
            <label
                class="w-[20vw] mr-2 font-medium leading-6 text-gray-900"
                htmlFor="username"
            >
                Choix du fichier :
            </label>
            <div>
                <input type="file" required id="img" name="img" />
                <p>Fichier accepté: .docx .pdf .png .jpg</p>
            </div>
        </div>
        <div class="flex justify-center mt-6">
            <button
                type="submit"
                class="bg-blackBg w-48 text-white p-1 rounded"
            >
                Envoyer
            </button>
        </div>
    </form>
</template>
