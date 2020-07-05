export default {
  data() {
    return {
      users: [],
      descs: [],
    };
  },

  methods: {
    onSubmit() {
      this.onSubmit;
    },

    async fetch() {
      const res = await this.$axios.get(
        "https://corddigital.com/art/public/api/all_data_in_cat",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      this.users = JSON.parse(JSON.stringify(res.data.Data));
      for (var i = 1; i < this.users.length; i++) {
        this.descs.push(
          JSON.parse(JSON.stringify((this.descs = this.users[i].get_description)))
        );
      }
      console.log(this.users);
      console.log(this.descs.title);
    },
  },
};
