// just replacing domain ggpht to googleusercontent cuz ggpht is banned in russia lol
var observer = new MutationObserver(function(mutations, observer) {
	for (const parent of document.getElementsByTagName('yt-img-shadow')) {
		if (parent.getAttribute('changed-ryta')) continue;

		for (const child of parent.childNodes) if (child.id == 'img') {
			if (child.src == '' || child.src == null) continue;
			child.src = child.src.replace('://yt3.ggpht.com/', '://yt3.googleusercontent.com/');

			let href = parent.parentElement.getAttribute('href');
			if (href != null)
				console.log('[Return YT Avatars] Changed avatar of ' + href.substring(1));

			parent.setAttribute('changed-ryta', true);
		}
	}
})
observer.observe(document.querySelector('body'), {
	attributes: true,
	subtree: true
})

console.log('[Return YT Avatars] Successfully initialized, will observe each change of body element.');