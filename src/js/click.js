let link = document.getElementById("listphotoslink");
let icon = document.getElementById("listphotosicon");

function ButtonMorePhotos() {
	if (link === null || icon === null) return;

	if (icon.classList.contains("icon--more-rotate-bottom")) {
		icon.classList.remove("icon--more-rotate-bottom");
		icon.classList.add("icon--more-rotate-top");

		link.innerHTML = "Скрыть полный список";
	} else {
		icon.classList.add("icon--more-rotate-bottom");
		icon.classList.remove("icon--more-rotate-top");

		link.innerHTML = "Смотреть полный список";
	}
}

function CheckURL() {
	let url = window.location.hash.substr(1);

	if (url[0] == "k") {
		ButtonMorePhotos();

		let container = document.getElementById("listphotos");
		container.classList.add("show");
	}
}

CheckURL();
