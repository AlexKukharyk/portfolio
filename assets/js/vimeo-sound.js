(function () {
    'use strict';

    if (!window.Vimeo || !window.Vimeo.Player) return;

    // Only user-played case films opt in; background loops stay muted.
    document.querySelectorAll('iframe[data-vimeo-sound]').forEach(function (iframe) {
        var player = new window.Vimeo.Player(iframe);
        var hasStarted = false;

        function reportError(error) {
            console.warn('Could not initialize Vimeo audio:', error);
        }

        function enableSound() {
            // Mute and volume are separate preferences. muted=0 alone can
            // leave a remembered zero volume, even when dnt=1 is enabled.
            return Promise.all([
                player.setMuted(false),
                player.setVolume(1)
            ]).catch(reportError);
        }

        function onFirstPlay() {
            hasStarted = true;
            player.off('play', onFirstPlay);
            // Retry after the user's Play gesture for mobile browsers.
            // Later pauses, replays and manual sound changes are untouched.
            enableSound();
        }

        player.on('play', onFirstPlay);
        player.ready().then(function () {
            if (!hasStarted) return enableSound();
        }).catch(reportError);
    });
})();
