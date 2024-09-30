let link = document.getElementById("listphotoslink");
let icon = document.getElementById("listphotosicon");

function ButtonMorePhotos(lang) {
	if (link === null || icon === null) return;

	if (icon.classList.contains("icon--more-rotate-bottom")) {
		icon.classList.remove("icon--more-rotate-bottom");
		icon.classList.add("icon--more-rotate-top");

		link.innerHTML =
			lang === "ru" ? "Скрыть полный список" : "Hide the full list";

		localStorage.setItem("lang", lang);
	} else {
		icon.classList.add("icon--more-rotate-bottom");
		icon.classList.remove("icon--more-rotate-top");

		link.innerHTML =
			lang === "ru" ? "Смотреть полный список" : "View the full list";
	}
}

function CheckURL() {
	let url = window.location.hash.substr(1);

	if (url[0] == "k") {
		ButtonMorePhotos(localStorage.getItem("lang") ?? "ru");

		let container = document.getElementById("listphotos");
		container.classList.add("show");
	}
}

CheckURL();
