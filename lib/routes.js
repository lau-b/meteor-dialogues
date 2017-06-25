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
// ***** Gestaltgesetze
FlowRouter.route('/gesetz-der-naehe', {
    name: 'gesetz-der-naehe',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerNaehe'});
    }
});
FlowRouter.route('/gesetz-der-erfahrung', {
    name: 'gesetz-der-erfahrung',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerErfahrung'});
    }
});
FlowRouter.route('/gesetz-der-geschlossenheit', {
    name: 'gesetz-der-geschlossenheit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerGeschlossenheit'});
    }
});
FlowRouter.route('/gesetz-der-gleichheit', {
    name: 'gesetz-der-gleichheit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerGleichheit'});
    }
});
FlowRouter.route('/gesetz-der-guten-gestalt', {
    name: 'gesetz-der-guten-gestalt',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerGutenGestalt'});
    }
});
FlowRouter.route('/gesetz-der-symmetrie', {
    name: 'gesetz-der-symmetrie',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerSymmetrie'});
    }
});
FlowRouter.route('/gesetz-des-gemeinsamen-schicksals', {
    name: 'gesetz-des-gemeinsamen-schicksals',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDesGemeinsamenSchicksals'});
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
