<template>
  <card-component
    title="Login"
    icon="lock"
  >
    <router-link
      slot="button"
      to="/"
      class="button is-small"
    >
      Dashboard
    </router-link>

    <form
      method="POST"
      @submit.prevent="submit"
    >
      <b-field label="E-mail Address">
        <b-input
          v-model="form.email"
          name="email"
          type="email"
          required
          autofocus
        />
      </b-field>

      <b-field label="Password">
        <b-input
          v-model="form.password"
          type="password"
          name="password"
          required
        />
      </b-field>

      <b-field>
        <b-checkbox
          v-model="form.remember"
          type="is-black"
          class="is-thin"
        >
          Remember me
        </b-checkbox>
      </b-field>

      <hr>

      <b-field grouped>
        <div class="control">
          <b-button
            native-type="submit"
            type="is-black"
            :loading="isLoading"
          >
            Login
          </b-button>
        </div>
        <div class="control">
          <router-link
            to="/"
            class="button is-outlined is-black"
          >
            Dashboard
          </router-link>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
import { useRouter } from '@/router'
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'Login',
  components: { CardComponent },
  setup () {
    const isLoading = ref(false)

    const form = reactive({
      email: 'john.doe@example.com',
      password: 'my-secret-password-9e9w',
      remember: false
    })

    const router = useRouter()

    const submit = () => {
      isLoading.value = true

      setTimeout(() => {
        isLoading.value = false

        router.push('/')
      }, 750)
    }

    return {
      isLoading,
      form,
      submit
    }
  }
}
</script>
