Router.route('/', function() {
    this.subscribe('Questions', 'public');
    this.render('Home');
});
Router.route('/user/:userid', function() {
    this.subscribe('Questions', 'users', this.params.userid);
    this.render('User');
});
Router.route('/user/:userid/q', function() {
    this.render('Enqueue');
});
Router.route('/q/:qid', function() {
    this.subscribe('Questions', 'specific', this.params.qid);
    this.render('Question');
});