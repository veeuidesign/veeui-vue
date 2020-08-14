<template>
  <div class="vee-table">
      <table>
          <thead>
              <tr>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
export default {
    name: 'vee-table',
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            cloneColumns: cloneDeep(this.columns),
            cloneData: cloneDeep(this.data)
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';

.vee-table {
    table {
        th,td {
            border: 1px solid $color-light;
        }
    }
}
</style>