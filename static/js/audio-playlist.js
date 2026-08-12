(function () {
  function initPlaylist(root) {
    var deck = root.querySelector("[data-playlist-deck]");
    var tracks = Array.prototype.slice.call(
      root.querySelectorAll("[data-playlist-track]"),
    );
    var current = -1;

    function setActive(index) {
      tracks.forEach(function (t, i) {
        t.classList.toggle("is-active", i === index);
      });
    }

    function load(index, autoplay) {
      if (index < 0 || index >= tracks.length) return;
      current = index;
      deck.src = tracks[index].dataset.src;
      setActive(index);
      if (autoplay) deck.play().catch(function () {});
    }

    tracks.forEach(function (track, i) {
      track.addEventListener("click", function () {
        load(i, true);
      });
    });

    deck.addEventListener("ended", function () {
      if (current + 1 < tracks.length) load(current + 1, true);
    });

    if (tracks.length) load(0, false);
  }

  document.querySelectorAll("[data-playlist]").forEach(initPlaylist);
})();
