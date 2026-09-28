<script setup>
defineProps({
  th: Array,
  rows: Array,
});
</script>

<template>
  <section class="table_characters">
    <div class="container">
      <figure class="wp-block-table">
        <table class="has-fixed-layout">
          <thead>
            <tr>
              <th v-for="(item, idx) in th" :key="idx">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in rows" :key="idx">
              <td v-for="(item, idk) in row" :key="idk">{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  </section>
</template>
<style scoped>
.wp-block-table {
  overflow-x: auto;
}
figure {
  margin: 1em 0;
}
.wp-block-table .has-fixed-layout {
  table-layout: fixed;
  width: 100%;
}
.wp-block-table table {
  border-collapse: collapse;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.507);
}
.wp-block-table thead {
  border-bottom: 3px solid;
}
table thead {
  background-color: #ff002f;
  color: #fff;
}
.wp-block-table .has-fixed-layout td,
.wp-block-table .has-fixed-layout th {
  word-break: break-word;
}
.wp-block-table td,
.wp-block-table th {
  border: 1px solid;
  padding: 0.5em;
}
table thead th {
  padding: 12px 16px;
  border: 1px solid #dddddd;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}
table tbody tr td {
  padding: 12px 16px;
  border: 1px solid #ddd;
  text-align: left;
}
table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>