(function () {
    angular.module('app', [])
    .controller('Student', function () {
        var data = {
            "name": 'Pesho',
            "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            "grade": 5,
            "school": "High School of Mathematics",
            "teacher": "Gichka Pesheva",
        };
        this.data = data;

    })

    .controller('Tiger', function () {
        var tiger = {
            name: 'pesho',
            born: 'africa',
            birthData: 2006,
            live: 'sofia zoo',
            pic: 'http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg'
        };
        this.data = tiger;
    })

    .filter('capitalize', function () {
        return function (input, all) {
            return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
        }
    })
}())