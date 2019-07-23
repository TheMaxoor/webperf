(function() {
    console.log('--- START ADS LOAD ---');
    $(document).ready(function() {
        setTimeout(function() {
            $('.wp-ad').each(function(i) {
                var $element = $(this);
                $element.addClass('loaded');
                $element.html('<div class="content">PUB</div>');
            });
        }, 2000);
        console.log('--- ADS LOADED ---');
    });
})();
