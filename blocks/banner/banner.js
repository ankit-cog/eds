export default function decorate(block) {

  const row = block.firstElementChild;
  if (!row) return;

  row.classList.add('banner-inner');

  const cols = row.children;

  if (cols[0]) {
    cols[0].classList.add('banner-text');
  }

  if (cols[1]) {
    cols[1].classList.add('banner-cta');
  }

}
