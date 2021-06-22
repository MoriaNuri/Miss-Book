export default {
    template: `
<section class="book-filter">
    <label>Name:</label>
    <input v-model="filterBy.title" type="text" @input="filter" placeholder="search..">
    <label>From:</label>
    <input v-model="filterBy.minPrice" type="number" @input="filter" placeholder="search..">
    <label>To:</label>
    <input v-model="filterBy.maxPrice" type="number" @input="filter" placeholder="search..">
    <button v-on:clic="filter">SEARCH</button>
</section>

`,
    data() {
        return {
            filterBy: {
                title: '',
                minPrice: 0,
                maxPrice: 1000,
            }
        };
    },
    methods: {
        filter() {
            const filterCopy = JSON.parse(JSON.stringify(this.filterBy))
            this.$emit('filtered', filterCopy);
        }
    }

};