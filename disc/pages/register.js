export default {
    data() {
      return {
        name: '',
        surname: '',
        secondname: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      redirectToLogin() {
        this.$router.push('/login');
      }
    }
  };