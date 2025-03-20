import '@/assets/styles.scss';
import Lara from '@primeuix/themes/lara';
import moment from 'moment';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import { configure, defineRule } from 'vee-validate';
configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: true,
  validateOnModelUpdate: false
});
const app = createApp({});

defineRule('custom_confirm', (value, arg) => {
  return /^[A-Za-z0-9]*$/i.test(value);
});

defineRule('password_rule_admin', (value) => {
  return /^[A-Za-z0-9]*$/i.test(value);
});
defineRule('date_format', (value) => {
  if (!value) {
    return true;
  }
  return moment(value, 'YYYY/MM/DD', true).isValid();
});

defineRule('password_rule', (value) => {
  if (!value) {
    return true;
  }
  let lower = /[a-z]/g.test(value);
  let upper = /[A-Z]/g.test(value);
  let number = /[0-9]/g.test(value);
  let special = /[!#$%&*+-=?@_]/g.test(value);

  return lower && upper && number && special;
});
defineRule('telephone', (value) => {
  return /^0(\d-\d{4}-\d{4})+$/i.test(value.trim()) || /^0(\d{3}-\d{2}-\d{4})+$/i.test(value.trim()) || /^(070|080|090|050)(-\d{4}-\d{4})+$/i.test(value.trim()) || /^0(\d{2}-\d{3}-\d{4})+$/i.test(value.trim()) || /^0(\d{9,10})+$/i.test(value.trim());
});
defineRule('kata', (value) => {
  return /^([ァ-ン]|ー)*$/i.test(value);
});

import BtnAction from '@/Components/Common/BtnAction.vue';
import DataEmpty from '@/Components/Common/DataEmpty.vue';
import FormSearch from '@/Components/Common/FormSearch.vue';
import GenerateSort from '@/Components/Common/GenerateSort.vue';
import LimitPageOption from '@/Components/Common/LimitPageOption.vue';
import Notyf from '@/Components/Common/Notyf.vue';
import Paginator from '@/Components/Common/Paginator.vue';
import { Inertia } from '@inertiajs/inertia';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import NProgress from 'nprogress';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Fieldset from 'primevue/fieldset';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Password from 'primevue/password';
import ProgressSpinner from 'primevue/progressspinner';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/index.js';
// import Paginator from 'primevue/paginator'
import { useRequestStore } from '@/store/request';
import { Link } from '@inertiajs/inertia-vue3';
import ColumnGroup from 'primevue/columngroup';
import ConfirmationService from 'primevue/confirmationservice';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import OverlayPanel from 'primevue/overlaypanel';
import Panel from 'primevue/panel';
import RadioButton from 'primevue/radiobutton';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import StyleClass from 'primevue/styleclass';
import TabPanel from 'primevue/tabpanel';
import TabView from 'primevue/tabview';
import Textarea from 'primevue/textarea';

app.component('notyf', Notyf);
const appName = 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(ConfirmationService)
      .use(PrimeVue, {
        theme: {
          preset: Lara,
          options: {
            darkModeSelector: '.app-dark'
          }
        },
        locale: {
          startsWith: 'Starts with',
          contains: 'Contains',
          notContains: 'Not contains',
          endsWith: 'Ends with',
          equals: 'Equals',
          notEquals: 'Not equals',
          noFilter: 'No Filter',
          lt: 'Less than',
          lte: 'Less than or equal to',
          gt: 'Greater than',
          gte: 'Greater than or equal to',
          dateIs: 'Date is',
          dateIsNot: 'Date is not',
          dateBefore: 'Date is before',
          dateAfter: 'Date is after',
          clear: 'Clear',
          apply: 'Apply',
          matchAll: 'Match All',
          matchAny: 'Match Any',
          addRule: 'Add Rule',
          removeRule: 'Remove Rule',
          accept: 'Yes',
          reject: 'No',
          choose: 'Choose',
          upload: 'Upload',
          cancel: 'Cancel',
          dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
          dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
          dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
          monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          today: '今日',
          weekHeader: '週',
          firstDayOfWeek: 0,
          dateFormat: 'yy-mm-dd',
          chooseYear: 'Choose Year',
          chooseMonth: 'Choose Month',
          chooseDate: 'Choose Date',
          prevDecade: 'Previous Decade',
          nextDecade: 'Next Decade',
          prevYear: 'Previous Year',
          nextYear: 'Next Year',
          prevMonth: 'Previous Month',
          nextMonth: 'Next Month',
          prevHour: 'Previous Hour',
          nextHour: 'Next Hour',
          prevMinute: 'Previous Minute',
          nextMinute: 'Next Minute',
          prevSecond: 'Previous Second',
          nextSecond: 'Next Second',
          am: 'am',
          pm: 'pm',
          weak: 'Weak',
          medium: 'Medium',
          strong: 'Strong',
          passwordPrompt: 'Enter a password',
          emptyFilterMessage: 'No results found', // @deprecated Use 'emptySearchMessage' option instead.
          searchMessage: '{0} results are available',
          selectionMessage: '{0} items selected',
          emptySelectionMessage: 'No selected item',
          emptySearchMessage: 'No results found',
          emptyMessage: 'No available options',
          aria: {
            trueLabel: 'True',
            falseLabel: 'False',
            nullLabel: 'Not Selected',
            star: '1 star',
            stars: '{star} stars',
            selectAll: 'All items selected',
            unselectAll: 'All items unselected',
            close: 'Close',
            previous: 'Previous',
            next: 'Next',
            navigation: 'Navigation',
            scrollTop: 'Scroll Top',
            moveTop: 'Move Top',
            moveUp: 'Move Up',
            moveDown: 'Move Down',
            moveBottom: 'Move Bottom',
            moveToTarget: 'Move to Target',
            moveToSource: 'Move to Source',
            moveAllToTarget: 'Move All to Target',
            moveAllToSource: 'Move All to Source',
            pageLabel: '{page}',
            firstPageLabel: 'First Page',
            lastPageLabel: 'Last Page',
            nextPageLabel: 'Next Page',
            prevPageLabel: 'Previous Page',
            rowsPerPageLabel: 'Rows per page',
            jumpToPageDropdownLabel: 'Jump to Page Dropdown',
            jumpToPageInputLabel: 'Jump to Page Input',
            selectRow: 'Row Selected',
            unselectRow: 'Row Unselected',
            expandRow: 'Row Expanded',
            collapseRow: 'Row Collapsed',
            showFilterMenu: 'Show Filter Menu',
            hideFilterMenu: 'Hide Filter Menu',
            filterOperator: 'Filter Operator',
            filterConstraint: 'Filter Constraint',
            editRow: 'Row Edit',
            saveEdit: 'Save Edit',
            cancelEdit: 'Cancel Edit',
            listView: 'List View',
            gridView: 'Grid View',
            slide: 'Slide',
            slideNumber: '{slideNumber}',
            zoomImage: 'Zoom Image',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            rotateRight: 'Rotate Right',
            rotateLeft: 'Rotate Left'
          }
        }
      })
      .use(ToastService)
      .use(createPinia())
      .component('InputText', InputText)
      .component('Password', Password)
      .component('Breadcrumb', Breadcrumb)
      .component('Checkbox', Checkbox)
      .component('Button', Button)
      .component('Card', Card)
      .component('Image', Image)
      .component('Column', Column)
      .component('GenerateSort', GenerateSort)
      .component('BtnAction', BtnAction)
      .component('DataEmpty', DataEmpty)
      .component('Chart', Chart)
      .component('DataTable', DataTable)
      .component('Link', Link)
      .component('Menu', Menu)
      .component('Dialog', Dialog)
      .component('Calendar', Calendar)
      .component('ProgressSpinner', ProgressSpinner)
      .component('Paginator', Paginator)
      .component('LimitPageOption', LimitPageOption)
      .component('Toast', Toast)
      .component('RadioButton', RadioButton)
      .component('InputNumber', InputNumber)
      .component('Textarea', Textarea)
      .component('Dropdown', Dropdown)
      .component('Sidebar', Sidebar)
      .component('Divider', Divider)
      .component('TabView', TabView)
      .component('TabPanel', TabPanel)
      .component('ColumnGroup', ColumnGroup)
      .component('Fieldset', Fieldset)
      .component('Row', Row)
      .component('OverlayPanel', OverlayPanel)
      .component('Panel', Panel)
      .component('FormSearch', FormSearch)
      .component('ConfirmDialog', ConfirmDialog)
      .component('useRequestStore', useRequestStore)
      .component('SelectButton', SelectButton)
      .directive('styleclass', StyleClass)

      .use(ZiggyVue, Ziggy, Notyf)
      .mount(el);
  }
});

InertiaProgress.init({ color: '#10b981' });
Inertia.on('start', () => {
  useRequestStore().showLoading();
  NProgress.start();
});
Inertia.on('finish', () => {
  useRequestStore().hideLoading();
  NProgress.done();
});
