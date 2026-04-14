export default function decorate(block) {

  /* ---------- BACKGROUND IMAGE PART ---------- */

  const picture = block.querySelector('picture');

  if (picture) {
    const img = picture.querySelector('img');

    if (img) {
      block.style.backgroundImage = `url(${img.src})`;
      block.style.backgroundSize = 'cover';
      block.style.backgroundPosition = 'center';
      block.style.backgroundRepeat = 'no-repeat';
    }

    // remove image wrapper from DOM
    const wrapper = picture.closest('div');
    if (wrapper) wrapper.remove();
  }

  const contentWrapper = block.children[1];
  if (!contentWrapper) return;

  const inner = document.createElement('div');
  inner.classList.add('banner-inner');

  const children = [...contentWrapper.children];

  children.forEach((child, index) => {

    if (index === 0) {
      child.classList.add('banner-text');
    }

    if (index === 1) {
      child.classList.add('banner-cta');
    }

    inner.append(child);
  });

  block.append(inner);
}