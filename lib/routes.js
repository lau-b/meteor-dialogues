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

FlowRouter.route('/dialoggestaltungsrichtlinien', {
    name: 'dialoggestaltungsrichtlinien',
    action() {
        BlazeLayout.render('OverviewLayout', {overview: 'Dialoggestaltungsrichtlinien'});
    }
});

FlowRouter.route('/gesetz-der-naehe', {
    name: 'gesetz-der-naehe',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerNaehe'});
    }
});
// ***** Richtlinien
FlowRouter.route('/fehlertoleranz', {
    name: 'fehlertoleranz',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Fehlertoleranz'});
    }
});

FlowRouter.route('/aufgabenangemessenheit', {
    name: 'aufgabenangemessenheit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Aufgabenangemessenheit'});
    }
});

FlowRouter.route('/erwartungskonformitaet', {
    name: 'erwartungskonformitaet',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Erwartungskonformitaet'});
    }
});

FlowRouter.route('/individualisierbarkeit', {
    name: 'individualisierbarkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Individualisierbarkeit'});
    }
});

FlowRouter.route('/lernfoerderlichkeit', {
    name: 'lernfoerderlichkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Lernfoerderlichkeit'});
    }
});

FlowRouter.route('/selbstbeschreibungsfaehigkeit', {
    name: 'selbstbeschreibungsfaehigkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Selbstbeschreibungsfaehigkeit'});
    }
});

FlowRouter.route('/steuerbarkeit', {
    name: 'steuerbarkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Steuerbarkeit'});
    }
});
