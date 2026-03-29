/* ================================================
   MANE. — Main Script
   ================================================ */

const PRODUCTS = [
  {
    id: 'p001',
    name: 'Satin Cloud Scrunchie Set',
    shortName: 'Scrunchie Set',
    desc: 'Ultra-soft satin scrunchies that protect your hair while looking amazing. Set of 6 in luxe assorted colors — no creasing, no breakage.',
    price: 28,
    oldPrice: 42,
    category: 'Scrunchies',
    badge: 'best',
    badgeText: 'Best Seller',
    image: '1630081757603-a46d414be089',
    slug: 'product-scrunchie.html',
    rating: 4.8,
    reviews: 312,
    colors: ['#FF2D6B', '#FFE600', '#0D0D0D', '#FFFFFF', '#C8B6FF', '#FFB347']
  },
  {
    id: 'p002',
    name: 'Pearl Pin-Up Clips',
    shortName: 'Pearl Clips',
    desc: 'Elegant pearl-finished hair pins that add instant glamour to any hairstyle. Durable, secure hold. Pack of 10.',
    price: 32,
    oldPrice: null,
    category: 'Clips',
    badge: 'new',
    badgeText: 'New',
    image: '1554196222-3464352db975',
    slug: 'product-clips.html',
    rating: 4.6,
    reviews: 187,
    colors: ['#FFFFFF', '#FFE5B4', '#E8E8E8', '#D4B896']
  },
  {
    id: 'p003',
    name: 'Velvet Claw Clip Trio',
    shortName: 'Claw Clips',
    desc: 'Oversized velvet claw clips in three sophisticated earth tones. Built to hold thick and fine hair alike without slipping.',
    price: 24,
    oldPrice: 36,
    category: 'Claws',
    badge: 'sale',
    badgeText: 'Sale',
    image: '1648010035195-6b0a56e14667',
    slug: 'product-claw.html',
    rating: 4.9,
    reviews: 423,
    colors: ['#2D2D2D', '#8B5E3C', '#1B4D3E', '#7B5EA7']
  },
  {
    id: 'p004',
    name: 'Silk Bow Ribbon Set',
    shortName: 'Silk Ribbons',
    desc: 'Pure 100% silk hair ribbons for that effortlessly chic, feminine look. Set of 4 ribbons, each 120cm long, in classic shades.',
    price: 38,
    oldPrice: null,
    category: 'Ribbons',
    badge: 'new',
    badgeText: 'New',
    image: '1728040407339-78b4e7e2a91e',
    slug: 'product-ribbon.html',
    rating: 4.7,
    reviews: 156,
    colors: ['#FF2D6B', '#0D0D0D', '#FFFFFF', '#4A90D9', '#F5E6D3']
  },
  {
    id: 'p005',
    name: 'Crystal Butterfly Set',
    shortName: 'Butterfly Clips',
    desc: 'Dazzling crystal-studded butterfly clips that genuinely turn heads. Lightweight alloy, secure hinges. Set of 5 assorted sizes.',
    price: 45,
    oldPrice: 65,
    category: 'Butterfly',
    badge: 'sale',
    badgeText: 'Sale',
    image: '1763347118969-824d513fa5dd',
    slug: 'product-butterfly.html',
    rating: 4.8,
    reviews: 298,
    colors: ['#C0C0C0', '#FFD700', '#E8CECE', '#B8D4E8']
  }
];

/* === CART === */
const CART_KEY = 'mane_cart';

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    const p = PRODUCTS.find(p => p.id === productId);
    if (p) cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, category: p.category, qty: qty });
  }
  saveCart(cart);
  showToast('Added to cart! 🛍', 'success');
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  }
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartCount() {
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = getCartCount();
  });
}

/* === TOAST === */
function showToast(msg, type) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast ' + (type || 'success');
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* === PRODUCTS PAGE === */
function renderProducts(filter) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  filter = filter || 'All';
  const list = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-card__img-wrap">
        <a href="${p.slug}">
          <img class="product-card__img"
            src="https://images.unsplash.com/photo-${p.image}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600"
            alt="${p.name}" loading="lazy">
        </a>
        ${p.badge ? `<span class="product-card__badge ${p.badge}">${p.badgeText}</span>` : ''}
      </div>
      <div class="product-card__body">
        <div class="product-card__cat">${p.category}</div>
        <h3 class="product-card__name"><a href="${p.slug}">${p.name}</a></h3>
        <p class="product-card__desc">${p.desc.substring(0,80)}...</p>
        <div>
          <span class="product-card__price">$${p.price}</span>
          ${p.oldPrice ? `<span class="product-card__price-old">$${p.oldPrice}</span>` : ''}
        </div>
      </div>
      <div class="product-card__footer">
        <button class="btn btn-pink btn-sm" style="flex:1" onclick="addToCart('${p.id}')">Add to Cart</button>
        <a href="${p.slug}" class="btn btn-outline btn-sm">View</a>
      </div>
    </article>
  `).join('');
}

function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.cat);
    });
  });
}

/* === CART PAGE === */
function renderCartPage() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFull = document.getElementById('cart-full');
  if (!cartItemsEl && !cartEmpty) return;

  const cart = getCart();
  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartFull) cartFull.style.display = 'none';
    return;
  }
  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartFull) cartFull.style.display = 'grid';

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__img-name">
        <img class="cart-item__img"
          src="https://images.unsplash.com/photo-${item.image}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=200"
          alt="${item.name}">
        <div>
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__cat">${item.category}</div>
        </div>
      </div>
      <div class="cart-item__price">$${item.price}</div>
      <div class="cart-item__qty">
        <button onclick="changeQty('${item.id}',-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.id}',1)">+</button>
      </div>
      <div class="cart-item__total">$${(item.price * item.qty).toFixed(2)}</div>
      <button class="cart-item__remove" onclick="removeItem('${item.id}')" title="Remove">✕</button>
    </div>
  `).join('');

  updateOrderSummary();
}

function updateOrderSummary() {
  const subtotal = getCartTotal();
  const shipping = subtotal === 0 ? 0 : subtotal >= 60 ? 0 : 5.99;
  const total = subtotal + shipping;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summary-subtotal', '$' + subtotal.toFixed(2));
  set('summary-shipping', shipping === 0 && subtotal > 0 ? 'FREE' : '$' + shipping.toFixed(2));
  set('summary-total', '$' + total.toFixed(2));
}

function changeQty(productId, delta) {
  updateQty(productId, delta);
  renderCartPage();
}

function removeItem(productId) {
  removeFromCart(productId);
  renderCartPage();
  showToast('Item removed', 'error');
}

/* === CHECKOUT === */
function renderCheckoutSummary() {
  const el = document.getElementById('checkout-items');
  if (!el) return;
  const cart = getCart();
  if (cart.length === 0) { el.innerHTML = '<p style="color:#888;font-size:14px;">No items in cart.</p>'; return; }
  el.innerHTML = cart.map(item => `
    <div class="summary-row">
      <span>${item.name} <strong>×${item.qty}</strong></span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');
  updateOrderSummary();
}

function initPaymentTabs() {
  document.querySelectorAll('.payment-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.payment-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('panel-' + btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

function handleCheckout(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  if (btn) { btn.textContent = 'Processing...'; btn.disabled = true; }
  setTimeout(() => {
    const num = 'MN-' + Math.floor(1000 + Math.random() * 9000);
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    showToast('Order ' + num + ' confirmed! 🎉', 'success');
    setTimeout(() => window.location.href = 'index.html', 2500);
  }, 1200);
}

/* === PRODUCT DETAIL === */
function initThumbs() {
  const thumbs = document.querySelectorAll('.product-detail__thumb');
  const mainImg = document.getElementById('main-img');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImg) {
        mainImg.src = thumb.getAttribute('data-full') || thumb.src.replace('w=140', 'w=800');
      }
    });
  });
}

function initProductTabs() {
  document.querySelectorAll('.product-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.product-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.product-tab-content').forEach(c => c.classList.remove('active'));
      const tab = document.getElementById('tab-' + btn.dataset.tab);
      if (tab) tab.classList.add('active');
    });
  });
}

function initQtyControl() {
  const input = document.getElementById('qty-input');
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!input) return;
      const delta = btn.dataset.dir === 'up' ? 1 : -1;
      input.value = Math.max(1, parseInt(input.value || 1) + delta);
    });
  });
}

function addDetailToCart(productId) {
  const qty = parseInt(document.getElementById('qty-input')?.value || 1);
  addToCart(productId, qty);
}

/* === SWATCHES === */
function initSwatches() {
  document.querySelectorAll('.swatch').forEach(s => {
    s.addEventListener('click', () => {
      const parent = s.closest('.color-swatches');
      if (parent) parent.querySelectorAll('.swatch').forEach(sw => sw.classList.remove('active'));
      s.classList.add('active');
    });
  });
}

/* === COOKIE BANNER === */
function initCookieBanner() {
  if (localStorage.getItem('mane_cookies')) return;
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'flex';
}

function acceptCookies() {
  localStorage.setItem('mane_cookies', '1');
  hideCookieBanner();
}

function declineCookies() {
  localStorage.setItem('mane_cookies', '0');
  hideCookieBanner();
}

function hideCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) { banner.style.opacity = '0'; setTimeout(() => banner.style.display = 'none', 300); }
}

/* === MOBILE MENU === */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

/* === FAQ === */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer.open').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-question span').forEach(s => s.textContent = '+');
      if (!isOpen) {
        answer.classList.add('open');
        q.querySelector('span').textContent = '−';
      }
    });
  });
}

/* === PROMO CODE === */
function applyPromo() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'MANE10') {
    showToast('10% discount applied! 🎉', 'success');
  } else if (code === 'WELCOME') {
    showToast('Welcome! Free shipping applied!', 'success');
  } else {
    showToast('Invalid promo code', 'error');
  }
}

/* === NEWSLETTER === */
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input && input.value) {
    showToast('You\'re subscribed! 💌', 'success');
    input.value = '';
  }
}

/* === CONTACT FORM === */
function handleContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll reply within 24h 💬', 'success');
  e.target.reset();
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initFilters();
  renderProducts();
  renderCartPage();
  renderCheckoutSummary();
  initPaymentTabs();
  initCookieBanner();
  initThumbs();
  initProductTabs();
  initQtyControl();
  initSwatches();
  initFAQ();

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletter);

  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleContact);
});
