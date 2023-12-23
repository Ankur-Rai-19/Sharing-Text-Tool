document.addEventListener("DOMContentLoaded", function () {
    const shareMenu = document.getElementById("share-menu");
    const twitterShareBtn = document.getElementById("twitter-share-btn");

    /* This code is adding an event listener to the document for the "mouseup" event. When the user releases the mouse button after making a selection, the code inside the event listener is executed. */
    document.addEventListener("mouseup", function (e) {
        /* retrieving the selected text made by the user on the webpage. */
        const selection = window.getSelection().toString().trim();

        /* This code block is executed when the user makes a selection on the webpage. It checks if there is any text selected by the user using the `if (selection)` condition. */
        if (selection) {
            /* retrieving the selected range of text made by the user on the webpage. */
            const range = window.getSelection().getRangeAt(0);
            const rect = range.getBoundingClientRect();

            shareMenu.style.top = rect.bottom + window.scrollY + "px";
            shareMenu.style.left = rect.left + window.scrollX + "px";
            shareMenu.style.display = "block";

            /* The code is adding a click event to the `twitterShareBtn` element. When the button is clicked, the code inside the function is executed. */
            twitterShareBtn.onclick = function () {
                /* It is responsible for opening a new window with a Twitter intent URL when the user clicks on the Twitter share button. */
                const twitterIntentUrl =
                    "https://twitter.com/intent/tweet?text=" +
                    encodeURIComponent(selection);
                window.open(twitterIntentUrl, "_blank");
                shareMenu.style.display = "none";
            };
        } else {
            shareMenu.style.display = "none";
        }
    });

    /* This code adding an event listener to the document for the "mousedown" event. This event is triggered when the user presses a mouse button. */
    document.addEventListener("mousedown", function (e) {
        const isClickInsideMenu = shareMenu.contains(e.target);
        if (!isClickInsideMenu) {
            shareMenu.style.display = "none";
        }
    });
});
