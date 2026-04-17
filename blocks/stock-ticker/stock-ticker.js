export default function decorate(block) {
  block.innerHTML = `
    <div class="ticker-header">
      <button data-market="NSE" class="active">NSE</button>
      <button data-market="BSE">BSE</button>
      <button id="theme-toggle">🌙</button>
    </div>
    <div class="ticker-wrapper">
      <div class="ticker-track"></div>
    </div>
  `;

  const track = block.querySelector('.ticker-track');
  const buttons = block.querySelectorAll('button[data-market]');
  const themeToggle = block.querySelector('#theme-toggle');

  let currentMarket = 'NSE';

  // Lazy Load using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadTicker();
      observer.disconnect();
    }
  });

  observer.observe(block);

  // Load ticker data
  async function loadTicker() {
    const data = await getMockData(currentMarket);
    renderTicker(data);
  }

  // Mock API (replace with real API later)
  async function getMockData(market) {
    const stocks = {
      NSE: [
        { name: 'NIFTY', price: 22450, change: '+120' },
        { name: 'RELIANCE', price: 2950, change: '+12' },
        { name: 'TCS', price: 4100, change: '-20' }
      ],
      BSE: [
        { name: 'SENSEX', price: 73500, change: '+200' },
        { name: 'HDFC', price: 1600, change: '+10' },
        { name: 'INFY', price: 1500, change: '-5' }
      ]
    };

    return new Promise((res) => setTimeout(() => res(stocks[market]), 300));
  }

  // Render ticker
  function renderTicker(data) {
    track.innerHTML = '';

    const content = data
      .map(
        (s) => `
        <span class="ticker-item ${s.change.includes('-') ? 'down' : 'up'}">
          ${s.name}: ₹${s.price} (${s.change})
        </span>
      `
      )
      .join('');

    // duplicate for seamless loop
    track.innerHTML = content + content;
  }

  // Market toggle
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      currentMarket = btn.dataset.market;
      loadTicker();
    });
  });

  // Dark mode toggle
  themeToggle.addEventListener('click', () => {
    block.classList.toggle('dark');
  });
}
