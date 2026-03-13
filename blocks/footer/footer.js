import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {

  // load footer fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');

  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  block.append(footer);

  /* --------------------------
     HANDLE BACKGROUND IMAGE
  ---------------------------*/

  const bgPicture = block.querySelector('.columns-img-col picture');

  if (bgPicture) {
    const img = bgPicture.querySelector('img');

    if (img) {
      block.style.backgroundImage = `url(${img.src})`;
      block.style.backgroundSize = 'cover';
      block.style.backgroundPosition = 'center';
      block.style.backgroundRepeat = 'no-repeat';
    }

    // remove picture wrapper so it does not appear in layout
    const bgWrapper = bgPicture.closest('.columns-img-col');
    if (bgWrapper) bgWrapper.remove();
  }

  /* --------------------------
     MAIN FOOTER COLUMNS
  ---------------------------*/

  const footerColumns = block.querySelector('.columns.footer');
  if (!footerColumns) return;

  const row = footerColumns.lastElementChild;
  const columns = [...row.children];

  row.classList.add('footer-columns');

  columns.forEach((col, index) => {
    col.classList.add('footer-col', `footer-col-${index + 1}`);
  });

  /* --------------------------
     GALLERY (4th column)
  ---------------------------*/

  const galleryColumn = block.querySelector('.footer-col-4');

  if (galleryColumn) {
    const images = galleryColumn.querySelectorAll('p');

    const galleryWrapper = document.createElement('div');
    galleryWrapper.className = 'footer-gallery';

    images.forEach((p) => {
      const picture = p.querySelector('picture');
      if (!picture) return;

      const item = document.createElement('div');
      item.className = 'gallery-item';

      item.append(picture);
      galleryWrapper.append(item);

      p.remove();
    });

    galleryColumn.append(galleryWrapper);
  }

  /* --------------------------
     FOOTER BOTTOM
  ---------------------------*/

  const bottomColumns = block.querySelector('.columns.footer-bottom');

  if (bottomColumns) {

    const row = bottomColumns.firstElementChild;
    const cols = [...row.children];

    row.classList.add('footer-bottom-inner');

    cols[0]?.classList.add('footer-copyright');
    cols[1]?.classList.add('footer-links');
  }

}

