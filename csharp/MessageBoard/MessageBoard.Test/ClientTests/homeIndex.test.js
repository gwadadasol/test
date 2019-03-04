/// <reference path="../scripts/jasmine.js" />
/// <reference path="../../messageboard/scripts/angular.js" />
/// <reference path="../../messageboard/js/home-index.js" />
/// <reference path="../../messageboard/scripts/angular-mocks.js" />
/// <reference path="../../messageboard/scripts/angular-route.js" />


describe("home-index Tests ->", function () {

    beforeEach(function () {
        module('ngRoute');
        module('homeIndex');
    });

    var $httpBackend;

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get("$httpBackend");

        $httpBackend.when("GET", "/api/v1/topics?includeReplies=true").
            respond([{
                title: "first title",
                body: "same body",
                id: 1,
                created: "20050401"
            },
            {
                title: "second title",
                body: "same body",
                id: 2,
                created: "20050401"
            },
            {
                title: "third title",
                body: "same body",
                id: 3,
                created: "20050401"
            }
            ]);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingException();
        $httpBackend.verifyNoOutstandingRequest();
    }
    );

    describe("dataService ->", function () {
        it("can load topics", inject(function (dataService) {

            expect(dataService.topics).toEqual([]);

            $httpBackend.expectGET("/api/v1/topics?includeReplies=true");
            dataService.getTopics();
            dataService.getTopics();
            $httpBackend.flush();

            expect(dataService.topics.length).toBeGreaterThan(0);
            expect(dataService.topics.length).toEqual(43);
        }));
    });

});