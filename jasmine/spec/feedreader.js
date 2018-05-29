
$(function() {
  /* first test suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {
    /* it tests to make sure that the
    * allFeeds variable has been defined and that it is not
    * empty.
    */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* loops through each feed in the allFeeds object and
    ensures it has a URL defined and that the URL is not empty.
    */
    it('URL defined and not empty', function(){
      allFeeds.forEach(feed => {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe("");
      });
    });

    /* loops through each feed in the allFeeds object and
    ensures it has a name defined and that the name is not empty.
    */
    it("name defined and not empty", function(){
      allFeeds.forEach(feed => {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe("");
      });
    });
  });

  /* suite named "The menu" */
  describe("The menu", function(){
    /* test that ensures the menu element is hidden by default.
    */
    it("menu is hidden by default", function(){
      expect($("body").hasClass("menu-hidden")).toBe(true);
    });

    /* test that ensures the menu changes
    * visibility when the menu icon is clicked. */
    it("menu changes visibility when the menu icon is clicked", function(){
      $(".menu-icon-link").trigger("click");
      expect($("body").hasClass("menu-hidden")).not.toBe(true);
      $(".menu-icon-link").trigger("click");
      expect($("body").hasClass("menu-hidden")).toBe(true);
    });
  });

  /* suite named "Initial Entries" */
  describe("Initial Entries", function(){
    /* test when the loadFeed function is called and completes its work,
    * there is at least a single .entry element within the .feed container.
    */
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it("there is at least a single .entry element within the .feed container", function(){
      expect($(".feed .entry").length).toBeGreaterThan(0);
    });  
  });


  /* suite named "New Feed Selection" */
  describe("New Feed Selection", function(){
    /* test when a new feed is loaded
    * by the loadFeed function that the content actually changes. */
    let firstFeed;
    let secondFeed;

    beforeEach(function(done) {
      loadFeed(0, function(){
        firstFeed = ($(".feed").html());
        loadFeed(1, function(){
          secondFeed = ($(".feed").html());
          done();
        });
      });

      it("Feeds are not equal", function(){
        expect(firstFeed).not.toEqual(secondFeed);
      });
    });
  });

}());
