/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // URLs are defined and not empty
		it('have URLs', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});
		 
		// Names are defined and not empty
		it('have names', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
    });


    /* TODO: Write a new test suite named 'The menu' */
	describe('The Menu', function() {
	
		// Body class fluctuates 'menu-hidden' when it shows/hides
		it('menu is hidden by default', function() {
			expect(document.body.className).toContain('menu-hidden');
		});

        // Click on the visibility once, expect shows, click again, expect hidden
		it('menu changes visibility on click', function() {
			document.querySelector('.icon-list').click();
			expect(document.body.className).not.toContain('menu-hidden');

			document.querySelector('.icon-list').click();
			expect(document.body.className).toContain('menu-hidden');
		});
	});

    /* TODO: Write a new test suite named 'Initial Entries' */
	describe('Initial Entries', function() {
		
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});
		
		it('loads at least 1 entry', function() {
			var entries = document.querySelectorAll('.entry');
			expect(entries.length).toBeGreaterThan(0);
		});
	});
	
	describe('New Feed Selection', function() {
	
		var firstFeed,
			secondFeed;
		
		beforeEach(function(done) {
			loadFeed(1, function() {
				firstFeed = document.querySelector('.feed');
				loadFeed(2, function() {
					done();
				});
			});        
		});
		
		it('changes the feed content on screen', function() {
			secondFeed = document.querySelector('.feed');
			
			expect(firstFeed).not.toBe(secondFeed);
		});
	});
}());
