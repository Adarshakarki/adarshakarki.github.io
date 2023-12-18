$(document).ready(function() {
    var currentPage = 1;
    var isAnimating = false;

    function showPage(pageNumber) {
        $(".page").hide();
        $("#page" + pageNumber).show();
    }

    function nextPage() {
        if (currentPage < 3 && !isAnimating) {
            isAnimating = true;
            currentPage++;
            showPage(currentPage);
            setTimeout(function() {
                isAnimating = false;
            }, 500); // Adjust this value based on your animation duration
        }
    }

    function prevPage() {
        if (currentPage > 1 && !isAnimating) {
            isAnimating = true;
            currentPage--;
            showPage(currentPage);
            setTimeout(function() {
                isAnimating = false;
            }, 500); // Adjust this value based on your animation duration
        }
    }

    // Mouse wheel event with sensitivity adjustment
    $(document).on('wheel', function(e) {
        if (e.originalEvent.deltaY > 0) {
            nextPage();
        } else {
            prevPage();
        }
    });

    // Button click handlers
    $("#page1").click(function() {
        nextPage();
    });

    $("#page2").click(function() {
        nextPage();
    });

    $("#page3").click(function() {
        nextPage();
    });

    // Explore Features button click handler
    $("#exploreFeatures").on("click", function() {
        // Redirect to the features.html page
        window.location.href = 'features.html';
    });

    // Join Now button click handler
    $("#joinNow").on("click", function() {
        // Redirect to the join.html page (replace with the actual page)
        window.location.href = 'login.html';
    });

    showPage(currentPage);
});