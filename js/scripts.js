(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        // año copyright
        document.querySelector("#year").innerHTML = new Date().getFullYear();

        function scrollNav() {
            const enlaces = document.querySelectorAll(".menu__item");

            enlaces.forEach(function(enlace) {
                enlace.addEventListener('click', function(e) {
                    e.preventDefault();
                    const seccion = document.querySelector(e.target.attributes.href.value);

                    seccion.scrollIntoView({
                        behavior: 'smooth',
                    });

                    /* enlace activo */
                    const enlaceActivo = document.querySelector(".activo");

                    if (enlaceActivo != null) {
                        enlaceActivo.classList.remove("activo");
                    }

                    // colocar activo al clickeado
                    enlace.classList.add("activo");
                });
            });
        }
        scrollNav();

        /* quitar activo cuando se hace click en ver vivo */
        document.querySelector(".item_vivo").addEventListener('click', (e) => {
            const enlaceActivo = document.querySelector(".activo");

            if (enlaceActivo != null) {
                enlaceActivo.classList.remove("activo");
            }
        });

        // slider de imagenes quienes_somos__img
        const quienesSomosImgSlide = document.querySelector("#slider");
        const arrayImgsQuienesSomos = [];

        for (let i = 1; i <= 5; i++) {
            arrayImgsQuienesSomos.push(`media/img/quienes-somos_equipo${i}.webp`);
        }

        let contador = 1;
        setInterval(() => {
            if (contador > 5) {
                contador = 1;
            }
            quienesSomosImgSlide.setAttribute("src", `media/img/quienes-somos_equipo${contador}.webp`);
            contador++;
        }, 3000);

        /* MAPA */
        /* 
            uruguay: -26.536947577378083, -59.342346111730386
            chile 450: -26.538044642553803, -59.34150305701847
        */
        const map = L.map('map').setView([-26.538044642553803, -59.34150305701847], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([-26.538044642553803, -59.34150305701847]).addTo(map)
            .bindPopup('Chile 450').openPopup();

    });

})();