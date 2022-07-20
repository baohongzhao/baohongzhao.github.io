<template>
  <div class="params">
    <div class="params_rule">
      <table v-for="v in params.rule">
        <tr v-for="val in v">
          <td v-for="item in val">{{item}}</td>
        </tr>
      </table>
    </div>

    <div class="params_info">
      <table>
        <tr v-for="v in params.info">
          <td>{{v.key}}</td>
          <td>{{v.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    params: {
      type: Object,
      default () {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.params{
  padding: 10px;
  border-bottom: 4px solid #f6f6f6;
}
.params_rule{
  border-bottom: 1px solid #eee;
}
.params_rule table{
  width: 100%;
  font-size: 14px;
  border-spacing: 0;
}
.params_rule table td{
  height: 40px;
  border-bottom: 1px solid #eee;
}
.params_info table{
  width: 100%;
}
.params_info td{
  line-height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  color: var(--color-high-text);
}
.params_info tr td:first-child{
  width: 30%;
  color: var(--color-text);
}
.params_info tr:last-child td{
  border-bottom: 0;
}
</style>