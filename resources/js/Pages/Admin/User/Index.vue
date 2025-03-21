<script setup>
import AdminLayout from '@/Layouts/Admin/AppLayout.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { useRequestStore } from '@/store/request';
import { ref, onMounted } from 'vue';
const products = ref([
  {
    code: 'P1001',
    name: 'Product 1',
    category: 'Category 1',
    quantity: 10
  },
  {
    code: 'P1002',
    name: 'Product 2',
    category: 'Category 2',
    quantity: 20
  },
  {
    code: 'P1003',
    name: 'Product 3',
    category: 'Category 3',
    quantity: 30
  }
]);
</script>
<template>
  <AdminLayout>
    <template #content>
      <Panel :header="$page.props.data.title">
        <FormSearch :request="$page.props.data.request" :routeName="'admin.user.index'" :createUrl="route('admin.user.create')"></FormSearch>
        <template v-if="$page.props.data.users.length">
          <div class="flex">
            <div class="group-select-page">
              <LimitPageOption />
            </div>
            <div class="group-paginate">
              <Paginator :paginator="$page.props.data.paginator"></Paginator>
            </div>
          </div>

          <div class="p-datatable p-component">
            <div class="p-datatable-table-container">
              <table role="table" class="p-datatable-table">
                <thead class="p-datatable-thead" role="rowgroup" data-pc-section="thead" style="position: sticky">
                  <tr>
                    <GenerateSort :data="$page.props.data.sortLinks"></GenerateSort>
                    <th class="p-datatable-header-cell w-140px"></th>
                  </tr>
                </thead>
                <tbody class="p-datatable-tbody">
                  <tr
                    v-for="(user, index) in $page.props.data.users"
                    :key="index"
                    :class="{
                      'p-row-odd': index % 2 === 0,
                      'p-row-even': index % 2 !== 0
                    }"
                  >
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.created_at }}</td>
                    <td>
                      <BtnAction
                        :urlEdit="route('admin.user.edit', user.id)"
                        :urlDelete="route('admin.user.destroy', user.id)"
                        messageConfirm="このユーザーを削除しますか？"
                        :request="$page.props.data.request"
                        :routeName="'admin.user.index'"
                      ></BtnAction>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="group-paginate w-full mt-1">
            <Paginator :paginator="$page.props.data.paginator"></Paginator>
          </div>
        </template>
        <DataEmpty v-else></DataEmpty>
      </Panel>
    </template>
  </AdminLayout>
</template>
