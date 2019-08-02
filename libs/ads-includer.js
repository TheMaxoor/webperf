(function() {
    console.log('--- START ADS LOAD ---');
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            var ads = document.querySelectorAll('.wp-ad');
            for (i = 0; i < ads.length; i++) {
                var element = ads[i];
                element.classList.add('loaded');
                element.innerHTML = '<div class="content">PUB</div>';
            }
        }, 2000);
        console.log('--- ADS LOADED ---');
    });
})();
