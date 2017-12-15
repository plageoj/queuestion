Router.route('/', function() {
    this.render('Home');
});
Router.route('/user/:userid', function() {
    this.render('User');
});
Router.route('/user/:userid/q', function() {
    this.render('Enqueue');
});
Router.route('/q/:qid', function() {
    this.render('Question');
});