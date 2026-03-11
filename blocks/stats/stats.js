
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
    statsItem.className = 'stats-item';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'stats-icon';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'stats-content';

    const numberDiv = document.createElement('div');
    numberDiv.className = 'stats-number';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'stats-label';

    if (icon) iconDiv.append(icon);
    if (number) numberDiv.append(number.textContent);
    if (label) labelSpan.append(label.textContent);

    contentDiv.append(numberDiv, labelSpan);

    statsItem.append(iconDiv, contentDiv);

    row.replaceChildren(statsItem);

  });

}

