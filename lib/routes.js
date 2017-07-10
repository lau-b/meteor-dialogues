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
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerNaehe', example: 'Example_Naehe'});
    }
});
FlowRouter.route('/gesetz-der-erfahrung', {
    name: 'gesetz-der-erfahrung',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerErfahrung', example: 'Example_Erfahrung'});
    }
});
FlowRouter.route('/gesetz-der-geschlossenheit', {
    name: 'gesetz-der-geschlossenheit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerGeschlossenheit', example: 'Example_Geschlossenheit'});
    }
});
FlowRouter.route('/gesetz-der-gleichheit', {
    name: 'gesetz-der-gleichheit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerGleichheit', example: 'Example_Gleichheit'});
    }
});
FlowRouter.route('/gesetz-der-guten-gestalt', {
    name: 'gesetz-der-guten-gestalt',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerGutenGestalt', example: 'Example_Gestalt'});
    }
});
FlowRouter.route('/gesetz-der-symmetrie', {
    name: 'gesetz-der-symmetrie',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDerSymmetrie', example: 'Example_Symmetrie'});
    }
});
FlowRouter.route('/gesetz-des-gemeinsamen-schicksals', {
    name: 'gesetz-des-gemeinsamen-schicksals',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'GesetzDesGemeinsamenSchicksals', example: 'Example_Schicksal'});
    }
});

// ***** Richtlinien
FlowRouter.route('/fehlertoleranz', {
    name: 'fehlertoleranz',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Fehlertoleranz', example: 'Example_Fehlertoleranz'});
    }
});

FlowRouter.route('/aufgabenangemessenheit', {
    name: 'aufgabenangemessenheit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Aufgabenangemessenheit', example: 'Example_Aufgabenangemessenheit'});
    }
});

FlowRouter.route('/erwartungskonformitaet', {
    name: 'erwartungskonformitaet',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Erwartungskonformitaet', example: 'Example_Erwartungskonformitaet'});
    }
});

FlowRouter.route('/individualisierbarkeit', {
    name: 'individualisierbarkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Individualisierbarkeit', example: 'Example_Individualisierbarkeit'});
    }
});

FlowRouter.route('/lernfoerderlichkeit', {
    name: 'lernfoerderlichkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Lernfoerderlichkeit', example: 'Example_Lernfoerderlichkeit'});
    }
});

FlowRouter.route('/selbstbeschreibungsfaehigkeit', {
    name: 'selbstbeschreibungsfaehigkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Selbstbeschreibungsfaehigkeit', example: 'Example_Selbstbeschreibungsfaehigkeit'});
    }
});

FlowRouter.route('/steuerbarkeit', {
    name: 'steuerbarkeit',
    action() {
        BlazeLayout.render('ArticleLayout', {content: 'Steuerbarkeit', example: 'Example_Steuerbarkeit'});
    }
});
