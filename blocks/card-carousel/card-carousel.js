export default function decorate(block) {

  const rows = [...block.children];

  /* ---------- HEADER ---------- */

  const headerRow = rows.shift();
  const header = document.createElement('div');
  header.className = 'carousel-header';

  if (headerRow) {
    header.append(...headerRow.children);
  }

  /* ---------- SWIPER STRUCTURE ---------- */

  const swiper = document.createElement('div');
  swiper.className = 'swiper';

  const wrapper = document.createElement('div');
  wrapper.className = 'swiper-wrapper';

  rows.forEach((row) => {

    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const card = document.createElement('div');
    card.className = 'testimonial-card';

    const content = row.firstElementChild;

    if (content) {
      card.append(...content.children);
    }

    slide.append(card);
    wrapper.append(slide);

  });

  swiper.append(wrapper);

//   const pagination = document.createElement('div');
//   pagination.className = 'swiper-pagination';

//   swiper.append(pagination);

  const next = document.createElement('div');
  next.className = 'swiper-button-next';

  const prev = document.createElement('div');
  prev.className = 'swiper-button-prev';

  swiper.append(next,prev);

  block.textContent = '';
  block.append(header, swiper);

  /* ---------- INIT SWIPER ---------- */

  new Swiper(swiper, {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    // pagination: {
    //   el: pagination,
    //   clickable: true,
    // },
 
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

}