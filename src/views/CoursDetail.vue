<script setup>
import HeaderStagiaire from "../components/HeaderStagiaire.vue";
import SearchBar from "../components/SearchBar.vue";
import Footer from "../components/Footer.vue";
import { HeartIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <HeaderStagiaire />
  <SearchBar />
  <div class="flex pb-20">
    <div class="basis-2/3 px-10 pl-20">
      <h2 class="mb-5 flex justify-center text-yellow-adrar text-4xl font-bold">
        COURS VUE n°2
      </h2>
      <p>Ecrit par Jean-François PECH</p>
      <p>Relu et validé par : Sophie POULAKOS</p>
      <p class="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error
        magni quod quae necessitatibus qui vel deleniti nisi impedit culpa?
        Beatae cumque quae eveniet nostrum quia reiciendis voluptatum?
        Voluptatibus aut earum atque ullam quasi nulla esse in numquam,
        voluptates, ipsa voluptas, cupiditate iure necessitatibus labore dolore.
        Culpa, minus sunt! Saepe quas dolorum mollitia accusantium eius
        aspernatur expedita. Consequatur saepe doloremque blanditiis pariatur
        delectus architecto deleniti dolorum voluptate nostrum incidunt?
        Repellendus, repellat? Ratione in voluptas explicabo tempora ullam nemo
        harum praesentium perspiciatis numquam. Eos praesentium facilis
        temporibus cum omnis, ab placeat sunt eius libero, laudantium fugiat
        eaque enim, exercitationem commodi delectus. Beatae earum id omnis atque
        ipsa reiciendis eaque aliquid autem minima possimus debitis
        necessitatibus ab amet quo consequatur molestias commodi voluptatem
        perspiciatis, totam sapiente. Consectetur, distinctio? Veniam corrupti
        magnam autem enim! Deserunt tenetur commodi non nostrum molestias
        excepturi architecto temporibus adipisci! Rerum maiores, placeat
        nesciunt dignissimos ab optio magnam labore dolores, facere dicta quidem
        commodi sunt, facilis provident debitis eum! Animi fugit sint delectus
        commodi in sunt corrupti recusandae dolore dolores veniam harum, porro,
        adipisci, iste quia ratione totam culpa ullam neque? Ex praesentium
        magnam facere repellat obcaecati? Deserunt qui repellat obcaecati
        impedit nostrum atque delectus corporis nobis id velit! Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Nihil quos quas aut
        veritatis debitis at vel quis voluptate, fugit dolores nostrum sunt
        possimus deleniti excepturi rem eaque. Necessitatibus aliquam et
        perferendis excepturi vel illo. Consequuntur placeat omnis modi, debitis
        commodi dolorum magnam reiciendis, amet harum cum, iusto mollitia
        perspiciatis fugit aperiam ipsa incidunt neque sunt quidem adipisci unde
        porro dignissimos? Fugit, natus. Consectetur inventore numquam vero
        autem dolorum recusandae quaerat eos mollitia labore esse, excepturi
        nisi reprehenderit maxime accusantium cumque tempora impedit in facere
        rerum porro, veritatis nostrum! Laborum maiores hic quae ex earum
        veritatis debitis accusamus unde nostrum. Et.
      </p>
    </div>

    <div class="flex basis-1/3 flex-col p-10 items-center space-y-10 mt-16">
      <div class="flex justify-center items-center">
        <p class="font-medium">Ajouter au favoris</p>
        <div
          class="flex justify-center items-center size-7 rounded-full ml-3 bg-yellow-adrar"
        >
          <HeartIcon class="size-4 flex" />
        </div>
      </div>
      <img
        class="h-[35vh] w-44"
        src="../../public/icons/CoursPhoto.png"
        alt=""
      />
      <button class="bg-yellow-adrar p-2 rounded-md font-medium">
        Faire la validation du module
      </button>
    </div>
  </div>
  <Footer />
</template>
