<template>
  <q-page>
    <div class="">
      <div class="">
        <div class="q-gutter-md q-pa-sm row justify-center bg-dark top-menu">
          <q-btn
            color="dark text-white"
            class="btn-menu"
            dense
            flat
            label="Lançamentos"
          />

          <q-btn
            color="dark text-white"
            class="btn-menu"
            dense
            flat
            label="Novidades"
          />

          <q-btn
            color="dark text-white"
            class="btn-menu"
            dense
            flat
            label="Picapes"
          />

          <q-btn
            color="dark text-white"
            class="btn-menu"
            dense
            flat
            label="Motos"
          />
        </div>
      </div>

      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        infinite
      >
        <q-carousel-slide
          :name="1"
          img-src="https://img.odcdn.com.br/wp-content/uploads/2023/08/S10-High-Country-2022-1024x680.webp"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://s2-autoesporte.glbimg.com/kxavflra_C-fV0KM_rM6gJC2BN0=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/3/K/9yY3WMQteYDl6ujJpBEg/2016-10-05-trd-8212-final-1024x680.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://conteudo.imguol.com.br/blogs/13/files/2018/08/F-150-Raptor-1024x680.jpg"
        />

        <template v-slot:control v-if="!$q.platform.is.mobile">
          <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
            class="text-white rounded-borders"
            style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
          >
            <q-toggle
              dense
              dark
              color="orange"
              v-model="autoplay"
              label="Auto Play"
            />
          </q-carousel-control>

          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push
              round
              dense
              color="orange"
              text-color="black"
              icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
    <div class="div-table">
      <q-table
        flat
        bordered
        :rows="rowsArticles"
        :columns="columnsArticles"
        grid
        row-key="title"
        hide-header
        hide-pagination
      >
        <template v-slot:item="props">
          <div class="q-pa-sm">
            <q-card class="my-card">
              <q-img :src="props.row.thumbnail" />

              <q-card-section>
                <div class="text-h6">{{ props.row.title }}</div>
                <div class="text-subtitle2">{{ props.row.author }}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ props.row.brief }}
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { columnsArticles, rowsArticles } from "./table";
export default {
  name: "IndexPage",
  setup() {
    return {
      columnsArticles,
      rowsArticles,
      slide: ref(1),
      autoplay: ref(false),
    };
  },
};
</script>
