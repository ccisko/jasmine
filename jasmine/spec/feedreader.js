/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /*  This suite is all about the RSSfeeds definitions,
	the allFeeds variable in our application.
     */
    describe('My RSS Feeds', function() {
        it('All Feeds are defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('All feeds objects have URL defined and  not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        it('All feeds objects have NAME defined and  not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        it('The menu should be hidden by Default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        it('ensures menu changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        var feedOne;
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(1, function() {
                feedOne = $('.feed').find("h2").text();
                done();
            });
        });
        it('When loadfeed completes should be atleast 1 entry', function() {
            expect(feedOne.length).not.toEqual(0);
        });
    });

    describe('New Feed Selection', function() {
        var feedOne, feedTwo;
        beforeEach(function(done) {
            loadFeed(1, function() {
                feedOne = $('.feed').find("h2").text();
                done();
            });
        });
        beforeEach(function(done) {
            loadFeed(2, function() {
                feedTwo = $('.feed').find("h2").text();
                done();
            });
        });
        it('New feed content changes', function() {
            expect(feedOne).not.toEqual(feedTwo);
        });
    });
}());