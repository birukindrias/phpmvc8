// @ts-ignore
// @ts-ignore
var Search = /** @class */ (function () {
    function Search() {
        this.searchFieldValue = '';
        this.searchResults = [];
        this.uniqueTopics = [];
        this.showSearch = false;
    }
    Search.prototype.getSearchResults = function () {
        var self = this;
        self.searchResults = [];
        $("#siteSearchBox ul").html('');
        $("#notifyUser").html('<img src="newLayoutAssets/img/loaders/puff.svg" width="25px"/>    <span style="font-size:25px;">Loading...</span>');
        if (self.searchFieldValue != '') {
            clearTimeout(self.typingTimer);
            self.typingTimer = setTimeout(function () {
                axios.get('/search/f/p/f/' + self.searchFieldValue)
                    .then(function (response) {
                    self.searchResults = response.data;
                    if (response.data.length) {
                        _.forEach(self.searchResults, function (value) {
                            if (value.forum_title) {
                                $("#notifyUser").text('');
                                $("#siteSearchBox ul.searchResultList").append('<li class="list-group-item"> ' + value.forum_title +
                                    '<a href="/topic/' + value.forum_id + '/' + value.slug + '"><span title="Opens in same page" ' +
                                    'class="badge badge-info lnr-text-align-right mr-3 ml-3"><i class="fab fa-readme"></i> ' +
                                    'Read</span></a><a target="_blank" href="/topic/' + value.forum_id + '/' + value.slug + '">' +
                                    '<span title="Opens in new page" class="badge badge-light lnr-text-align-right">' +
                                    '<i class="fas fa-external-link-alt"></i> Read</span></a></li>');
                            }
                        });
                    }
                    else {
                        $("#notifyUser").text('No results for this keyword');
                    }
                })["catch"](function (error) {
                    // handle error
                    console.log(error);
                    //console.log('no input');
                });
            }, 2000);
        }
        else {
            self.searchResults = [];
            $("#notifyUser").html('');
            $("#siteSearchBox ul").html('');
        }
    };
    Search.prototype.hideDropdown = function () {
        var self = this;
        if (self.searchFieldValue.length > 0) {
            $("#siteSearchBox span.searchClearButton").find('i.fas')
                .removeClass('fa-search')
                .addClass('fa-times')
                .addClass('clear');
            $("#siteSearchBox span.searchClearButton #siteSearchTitle")
                .text(' Clear');
        }
        else {
            $("#siteSearchBox span.searchClearButton")
                .find('i.fas')
                .removeClass('fa-times')
                .removeClass('clear')
                .addClass('fa-search');
            $("#siteSearchBox span.searchClearButton #siteSearchTitle")
                .text(' Search');
        }
    };
    Search.prototype.clearResults = function (e) {
        var self = this;
        self.searchResults = [];
        self.searchFieldValue = '';
        $("#notifyUser").html('');
    };
    Search.prototype.hideSearchArea = function () {
        $(".row.searchWrapper").fadeOut(500);
    };
    return Search;
}());
//# sourceMappingURL=search.js.map