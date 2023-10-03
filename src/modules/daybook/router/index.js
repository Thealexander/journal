export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '', name: 'no-entry',
            component: () => import( /* webpackChunkName: "no-entry"*/("../views/NoEntrySelected.vue"))
        },
        {
            path: ':id', name: 'entry-view',
            component: () => import( /* webpackChunkName: "entry-view"*/("../views/EntryView.vue"))
        }
    ]

}