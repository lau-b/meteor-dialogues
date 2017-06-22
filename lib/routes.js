FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/gestaltgesetze', {
    name: 'gestaltgesetze',
    action() {
        BlazeLayout.render('OverviewLayout', {overview: 'Gestaltgesetze'});
    }
});

FlowRouter.route('/gesetz-der-naehe', {
    name: 'gesetz-der-naehe',
    action() {
        BlazeLayout.render('ArticleLayout', {overview: 'GesetzDerNaehe'});
    }
});
