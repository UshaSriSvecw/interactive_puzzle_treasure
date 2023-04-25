function checkInput() {
    var input = document.getElementById("my-textbox").value;
    var desired = "Fire"; // your desired text
    if (input === desired) {
      document.getElementById("result").innerHTML = "Correct!";
      window.location.href = "sample.html";
    } else {
      document.getElementById("result").innerHTML = "Incorrect, try again!";
    }
  }

(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});

console.clear();