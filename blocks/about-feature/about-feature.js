export default function decorate(block) {

  const row = block.firstElementChild;
  if (!row) return;

  row.classList.add('about-feature-inner');

  const cols = row.children;

  if (cols[0]) {
    cols[0].classList.add('about-feature-image');
  }

  if (cols[1]) {
    cols[1].classList.add('about-feature-text-col');
  }

  const rightCol = cols[1];
  if (!rightCol) return;

  const children = [...rightCol.children];

  let authorImgRow;
  let authorNameRow;
  let authorCompanyRow;
  let learnMoreRow;

  children.forEach((el) => {

    if (el.querySelector('picture')) {
      authorImgRow = el;
      authorNameRow = el.nextElementSibling;
      authorCompanyRow = authorNameRow?.nextElementSibling;
    }

    if (el.querySelector('a:not(ul li a)')) {
      learnMoreRow = el;
    }

  });

  let authorWrapper;
  let ctaWrapper;

  // wrap author info
  if (authorImgRow && authorNameRow && authorCompanyRow) {

    authorWrapper = document.createElement('div');
    authorWrapper.className = 'author-wrapper';

    authorImgRow.before(authorWrapper);

    authorWrapper.append(authorImgRow);
    authorWrapper.append(authorNameRow);
    authorWrapper.append(authorCompanyRow);
  }

  // wrap learn more
  if (learnMoreRow) {

    ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'cta-wrapper';

    learnMoreRow.before(ctaWrapper);
    ctaWrapper.append(learnMoreRow);
  }

  // wrap both together
  if (authorWrapper && ctaWrapper) {

    const parentWrapper = document.createElement('div');
    parentWrapper.className = 'author-cta-wrapper';

    authorWrapper.before(parentWrapper);

    parentWrapper.append(authorWrapper);
    parentWrapper.append(ctaWrapper);

  }

}
