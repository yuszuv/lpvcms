<template lang="pug">
b-form.d-inline-block(@submit.prevent='requestAuthorize')
  .spinner-wrapper.d-flex.justify-content-center.mb-3(v-if='loading')
    b-spinner(label='Loading...')
  b-form-group
    b-form-input#topic(v-model='password' autofocus='' type='password' :class="error && 'is-invalid'" @input='resetError')
    small.form-text.invalid-feedback(v-if='error') Passwort stimmt nicht.
    small.form-text Das beim Erstellen angegebene Passwort.
  b-button(type='submit' variant='primary') #[i.fas.fa-unlock] Freigeben
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      password: '',
      isAuthorized: false,
      error: false,
      loading: false,
    }
  },
  props: ['id'],
  methods: {
    requestAuthorize(event) {
      this.loading = true
      axios.post(`/api/cards/${this.id}/authorize`, { password: this.password })
        .then(response => {
          this.$emit('authorize', this.password)
          this.error = false
        })
        .catch(error => {
          this.error = true
        })
        .finally(response => {
          this.loading = false
        })
    },
    resetError() {
      this.error = false
    },
  },
}
</script>

<style>
form {
  width: 100%;
}
</style>
