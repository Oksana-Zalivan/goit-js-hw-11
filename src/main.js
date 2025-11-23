import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async event => {
    event.preventDefault();

    const query = event.target.elements["search-text"].value.trim();

    if (!query) {
    iziToast.warning({
        title: "Увага",
        message: "Введи, будь ласка, пошуковий запит 🙂",
        position: "topRight",
    });
    return;
    }

    clearGallery();
    showLoader();

    try {
    const data = await getImagesByQuery(query);

        if (!data.hits.length === 0) {
        clearGallery();
        iziToast.info({
        title: "Нічого не знайдено",
        message: "Спробуй інший запит 😉",
        position: "topRight",
        });
        return;
    }

    createGallery(data.hits);
    } catch (error) {
    console.error(error);

    iziToast.error({
        title: "Помилка",
        message: "Сталася помилка під час завантаження. Спробуй ще раз пізніше.",
        position: "topRight",
    });
    } finally {
    hideLoader();
    form.reset();
    }
});

