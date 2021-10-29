$.fn.isOnScreen = function () {
	var win = $(window);
	var viewport = {
		top: win.scrollTop(),
		left: win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	return !(
		viewport.right < bounds.left ||
		viewport.left > bounds.right ||
		viewport.bottom < bounds.top ||
		viewport.top > bounds.bottom
	);
};

$(window).scroll(function () {
    if ($(".greed").isOnScreen()) {
        $(".notification1").addClass("show");
    } else {
        $(".notification1").removeClass("show");
    }
});
$(window).scroll(function () {
    if ($(".dawkins").isOnScreen()) {
        $(".notification2").addClass("show");
    } else {
        $(".notification2").removeClass("show");
    }
});
$(window).scroll(function () {
    if ($(".public").isOnScreen()) {
        $(".notification3").addClass("show");
    } else {
        $(".notification3").removeClass("show");
    }
});


