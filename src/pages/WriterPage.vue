<template>
  <q-page Padding>
    <div class="q-mt-xl">
      <q-form class="row justify-center">
        <p class="col-12 text-h5 text-center">Novo Artigo</p>
        <div class="col-md-8 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-file
            filled
            bottom-slots
            v-model="thumbnail"
            label="Thumbnail"
            counter
            multiple
            accept=".jpg, image/*"
            @update:model-value="previewImage"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-image" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop.prevent="clearThumb"
                class="cursor-pointer"
              />
            </template>
          </q-file>
          <div class="q-pa-md">
            <div class="q-gutter-md row items-start flex flex-center">
              <q-img
                :key="mode"
                :src="thumbnail_url"
                :style="
                  thumbnail_url
                    ? 'max-width: 1200px; height: 600px'
                    : 'max-width: 150px; height: 75px'
                "
                fit="cover"
              >
              </q-img>
            </div>
          </div>
          <q-input
            v-model="title"
            label="Título"
            type="text"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Informe um título']"
            rounded
            outlined
          />
          <q-input
            v-model="brief"
            label="Resumo"
            type="text"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Faça um resumo']"
            rounded
            outlined
          />

          <q-editor v-model="text" min-height="15rem" />
          <div class="full-width q-pt-md flex flex-center">
            <q-btn label="Publicar" color="grey-8" rounded type="submit" />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>
<script>
import useAuthUser from "src/composables/useAuthUser";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "WriterPage",
  setup() {
    const { user, isLoggedIn } = useAuthUser();
    const router = useRouter();

    const title = ref("");
    const brief = ref("");
    let thumbnail = ref();
    let thumbnail_url = ref("");
    const text = ref("");
    const table = "articles";

    onMounted(() => {
      if (isLoggedIn) {
        if (!user.value.user_metadata.is_writer) {
          router.push({ name: "me" });
        }
      } else {
        router.push({ name: "index" });
      }
    });

    const previewImage = () => {
      console.log("handlePreview is triggered");
      if (thumbnail.value) {
        console.log(thumbnail.value[0].name);
        thumbnail_url.value = URL.createObjectURL(thumbnail.value[0]);
        console.log(thumbnail_url.value);
      }
    };

    const clearThumb = () => {
      thumbnail.value = null;
      thumbnail_url.value = null;
    };

    return {
      title,
      brief,
      thumbnail,
      thumbnail_url,
      text,
      previewImage,
      clearThumb,
    };
  },
};
</script>
