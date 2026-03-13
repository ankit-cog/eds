/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
  });

  const accordion = document.querySelector('.accordion-wrapper');
const columns = document.querySelector('.columns-wrapper');

if (accordion && columns) {
  const parent = accordion.parentElement;

  const wrapper = document.createElement('div');
  wrapper.classList.add('content-wrapper');

  parent.insertBefore(wrapper, accordion);

  wrapper.appendChild(accordion);
  wrapper.appendChild(columns);
}

}