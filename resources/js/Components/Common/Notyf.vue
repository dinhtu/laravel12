<template>
  <Toast />
</template>
<script>
import { useToast } from 'primevue/usetoast';
import { useRequestStore } from '@/store/request';
export default {
  setup() {
    const toast = useToast();

    return {
      toast
    };
  },
  created() {
    if (this.data) {
      setTimeout(() => {
        this.show();
      }, 10);
    }
  },
  data() {
    return {
      sessionAlert: this.data
    };
  },
  mounted() {},
  props: ['data'],
  components: {},
  methods: {
    show() {
      let severity = this.sessionAlert.mode ?? '';
      this.toast.add({
        severity: severity,
        detail: this.sessionAlert.message,
        life: 3000
      });
    }
  },
  watch: {
    '$page.props'() {
      useRequestStore().remove();
      this.sessionAlert = this.$page.props.dataSession;
      if (this.sessionAlert) {
        setTimeout(() => {
          this.show();
        }, 100);
      }
    }
  }
};
</script>
