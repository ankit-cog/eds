
 export default function decorate(block) {

  const rows = [...block.children];

  rows.forEach((row) => {

    const wrapper = row.firstElementChild;
    if (!wrapper) return;

    const items = [...wrapper.children];

    const icon = items[0];
    const number = items[1];
    const label = items[2];

    const statsItem = document.createElement('div');
    statsItem.className = 'carousel-item';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'carousel-image';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'carousel-body';

    const numberDiv = document.createElement('div');
    numberDiv.className = 'carousel-title';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'carousel-text';

    if (icon) iconDiv.append(icon);
    if (number) numberDiv.append(number.textContent);
    if (label) labelSpan.append(label.textContent);

    contentDiv.append(numberDiv, labelSpan);

    statsItem.append(iconDiv, contentDiv);

    row.replaceChildren(statsItem);

  });

}

