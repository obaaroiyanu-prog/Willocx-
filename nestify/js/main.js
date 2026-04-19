/* =====================================================
   NESTIFY — Main JavaScript (Dawn Theme)
   ===================================================== */

// ── PRODUCT DATA ───────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    title: 'Black heavy-duty gaffer tape',
    vendor: 'Nestify Essentials',
    price: 14.99,
    comparePrice: null,
    badge: '3-pack',
    category: 'essentials',
    stars: 4.9, ratingCount: 142,
    sku: 'NST-BT-001',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553949285-1ebf1dd53073?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['Single Roll', '3-Pack', '6-Pack'],
    description: `
      <p>Professional-grade black gaffer tape trusted by engineers, event crews, and DIY enthusiasts worldwide. Strong, clean-removing, and built to last.</p>
      <ul>
        <li>Extra-strong adhesive — holds on any surface</li>
        <li>Tear-resistant polyethylene film</li>
        <li>UV &amp; moisture resistant</li>
        <li>Width: 48mm | Length: 50m per roll</li>
        <li>Leaves no residue on removal</li>
      </ul>
    `,
    reviews: [
      { name: 'Tom H.', location: 'Chicago, USA', stars: 5, text: '"Excellent quality for the price. Holds everything firmly and peels off clean."' },
      { name: 'Mia L.', location: 'Sydney, AU', stars: 5, text: '"Used for cable management at our live event — worked perfectly all weekend."' },
      { name: 'Ryan K.', location: 'Manchester, UK', stars: 5, text: '"Best tape I\'ve ever used. The 3-pack is great value."' },
    ],
  },
  {
    id: 2,
    title: 'Carrot cutter',
    vendor: 'Nestify Kitchen',
    price: 24.50,
    comparePrice: 32.00,
    badge: 'Sale',
    category: 'kitchen',
    stars: 4.7, ratingCount: 89,
    sku: 'NST-CC-002',
    images: [
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564519070904-40139eb81e07?w=800&h=800&fit=crop&q=80',
    ],
    variants: null,
    description: `
      <p>Slice, dice and julienne carrots in seconds with this precision carrot cutter. An essential for any meal-prep routine.</p>
      <ul>
        <li>Food-grade stainless steel blades</li>
        <li>BPA-free ergonomic handle</li>
        <li>Non-slip suction base</li>
        <li>Dishwasher safe</li>
        <li>Multiple cut styles: rounds, julienne, half-moons</li>
      </ul>
    `,
    reviews: [
      { name: 'Rachel B.', location: 'London, UK', stars: 5, text: '"Prep time halved. The suction base keeps it totally stable while I use it."' },
      { name: 'Kevin S.', location: 'Dallas, USA', stars: 4, text: '"Great for meal prep. Blades are sharp and it comes apart easily for cleaning."' },
    ],
  },
  {
    id: 3,
    title: 'Digital food Measuring spoon scale for kitchen',
    vendor: 'Nestify Kitchen',
    price: 32.00,
    comparePrice: null,
    badge: 'Best Seller',
    category: 'kitchen',
    stars: 4.9, ratingCount: 312,
    sku: 'NST-DMS-003',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&h=800&fit=crop&q=80',
    ],
    variants: null,
    description: `
      <p>The world's most precise measuring spoon — with a built-in digital scale. Perfect for baking, coffee brewing, and nutrition tracking.</p>
      <ul>
        <li>Accuracy to 0.1g | Max 500g capacity</li>
        <li>4 units: g, oz, ml, tsp</li>
        <li>Tare / zero function</li>
        <li>Includes 2× AAA batteries</li>
        <li>Auto power-off after 2 minutes</li>
        <li>Food-grade stainless steel spoon bowl</li>
      </ul>
    `,
    reviews: [
      { name: 'Jessica A.', location: 'New York, USA', stars: 5, text: '"Completely changed my baking. So accurate and the display is crystal clear."' },
      { name: 'Daniel W.', location: 'Melbourne, AU', stars: 5, text: '"Perfect for coffee dosing and protein powder. Compact and accurate."' },
      { name: 'Claire M.', location: 'Paris, FR', stars: 5, text: '"Compact, precise and easy to clean. Love it."' },
    ],
  },
  {
    id: 4,
    title: 'Flexible silicone bowl covers (Set of 6)',
    vendor: 'Nestify Green',
    price: 19.99,
    comparePrice: null,
    badge: 'Eco Pick',
    category: 'kitchen',
    stars: 4.8, ratingCount: 204,
    sku: 'NST-SL-004',
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['Set of 6', 'Set of 12'],
    description: `
      <p>Replace plastic wrap for good. These reusable silicone stretch lids form an airtight seal over any bowl, cup, can or container.</p>
      <ul>
        <li>6 graduated sizes: XS to XL</li>
        <li>Food-grade BPA-free silicone</li>
        <li>Microwave, freezer &amp; dishwasher safe</li>
        <li>Fits round, square &amp; irregular shapes</li>
        <li>Temperature range: −40°C to 230°C</li>
      </ul>
    `,
    reviews: [
      { name: 'Emma T.', location: 'Bristol, UK', stars: 5, text: '"These stretch over literally everything. Airtight seal every time."' },
      { name: 'Noah G.', location: 'Vancouver, CA', stars: 5, text: '"Zero plastic wrap in our house now. These are genuinely brilliant."' },
    ],
  },
  {
    id: 5,
    title: 'Apple corer slicer peeler',
    vendor: 'Nestify Kitchen',
    price: 45.00,
    comparePrice: null,
    badge: null,
    category: 'kitchen',
    stars: 4.6, ratingCount: 167,
    sku: 'NST-ACP-005',
    images: [
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?w=800&h=800&fit=crop&q=80',
    ],
    variants: null,
    description: `
      <p>Core, slice, and peel an apple in under 10 seconds. Perfect for pies, snacks, baby food, and smoothies. Works on pears and potatoes too.</p>
      <ul>
        <li>Stainless steel blades and peeling arm</li>
        <li>Heavy-duty suction-cup base</li>
        <li>Produces 16 uniform slices</li>
        <li>Fully dishwasher safe (removable parts)</li>
        <li>Compact fold-away design for storage</li>
      </ul>
    `,
    reviews: [
      { name: 'Linda P.', location: 'Boston, USA', stars: 5, text: '"Cores and peels in seconds. My apple pies have never been easier to make."' },
      { name: 'Finn O.', location: 'Dublin, IE', stars: 4, text: '"My kids love prepared apple snacks now. This gadget saves so much time."' },
    ],
  },
  {
    id: 6,
    title: 'Nestify Essentials Supplements Collection',
    vendor: 'Nestify Health',
    price: 18.99,
    comparePrice: null,
    badge: 'New',
    category: 'health',
    stars: 4.8, ratingCount: 98,
    sku: 'NST-SUP-006',
    images: [
      'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614468153291-fc9d72f47d34?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['Wellness Vitamin C Complex — $18.99', 'Multivitamin For Her — $22.99', 'Immunity Booster Plus — $25.99'],
    description: `
      <p>Our carefully formulated supplement collection supports your energy, immunity, and focus every day. Made with clinically-backed ingredients.</p>
      <ul>
        <li>Vitamin C, D3, B12 &amp; Zinc complex</li>
        <li>Omega-3 fatty acids (Fish Oil 1000mg)</li>
        <li>Ashwagandha for stress resilience</li>
        <li>Magnesium for sleep &amp; recovery</li>
        <li>No artificial colours or preservatives</li>
        <li>Third-party lab tested for purity</li>
      </ul>
    `,
    reviews: [
      { name: 'Priya K.', location: 'Mumbai, IN', stars: 5, text: '"Noticeable energy improvement within 2 weeks. Clean ingredients list."' },
      { name: 'Chris L.', location: 'San Francisco, USA', stars: 5, text: '"These are now a permanent part of my morning routine."' },
    ],
  },
  {
    id: 7,
    title: 'Catagaroo Hoodies with Kangaroo Pouch for your cat',
    vendor: 'Nestify Apparel',
    price: 59.99,
    comparePrice: null,
    badge: 'Limited',
    category: 'apparel',
    stars: 5.0, ratingCount: 56,
    sku: 'NST-CHK-007',
    images: [
      'https://images.unsplash.com/photo-1602810319250-a663f0af2f75?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: `
      <p>The original kangaroo-pouch hoodie — big enough for your cat, comfy enough for you. Featured by thousands of cat owners worldwide.</p>
      <ul>
        <li>80% cotton / 20% polyester fleece</li>
        <li>Extra-deep front kangaroo pouch for your cat</li>
        <li>Adjustable drawstring hood</li>
        <li>Ribbed cuffs &amp; hem — unisex relaxed fit</li>
        <li>Machine washable — stays soft wash after wash</li>
        <li>Available in Charcoal, Forest Green &amp; Navy</li>
      </ul>
    `,
    reviews: [
      { name: 'Zoe F.', location: 'Edinburgh, UK', stars: 5, text: '"My cat literally lives in this pocket. I carry him around the house all day."' },
      { name: 'Marcus D.', location: 'Berlin, DE', stars: 5, text: '"Incredibly soft and the kangaroo pocket is massive. My cat loves it."' },
      { name: 'Lily S.', location: 'Toronto, CA', stars: 5, text: '"Best purchase of the year. Ordered three for the whole family."' },
    ],
  },
];

// ── STAR RENDER ────────────────────────────────────────────────────────────
function renderStars(n) {
  const full = Math.floor(n);
  const half = n % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ── CART (localStorage) ────────────────────────────────────────────────────
function getCart() {
  try { return JSON.parse(localStorage.getItem('nestify_cart_v2')) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('nestify_cart_v2', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}
function addToCart(title, price, variant, image) {
  const cart = getCart();
  const key = title + (variant ? `|${variant}` : '');
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    const prod = PRODUCTS.find(p => p.title === title);
    cart.push({ key, title, variant: variant || null, price, qty: 1, image: image || (prod ? prod.images[0] : '') });
  }
  saveCart(cart);
  showToast(`"${title.substring(0, 30)}${title.length > 30 ? '…' : ''}" added to cart`);
}

// ── TOAST ──────────────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (!toast) return;
  msgEl.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── QTY ────────────────────────────────────────────────────────────────────
function changeQty(delta) {
  const input = document.getElementById('qty');
  if (!input) return;
  input.value = Math.max(1, Math.min(99, (parseInt(input.value) || 1) + delta));
}

// ── PRODUCT PAGE ───────────────────────────────────────────────────────────
let _prod = null;
let _selectedVariant = null;

function loadProduct(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) { window.location.href = 'collections.html'; return; }
  _prod = prod;
  _selectedVariant = prod.variants ? prod.variants[0] : null;

  document.title = `${prod.title} — Nestify`;
  const ptEl = document.getElementById('page-title');
  if (ptEl) ptEl.textContent = `${prod.title} — Nestify`;

  setEl('bc-title', prod.title);
  setEl('prod-vendor', prod.vendor);
  setEl('prod-title', prod.title);

  const starsEl = document.getElementById('prod-stars-block');
  if (starsEl) starsEl.innerHTML = `
    <span style="color:#c89000;font-size:14px;">${renderStars(prod.stars)}</span>
    <span style="font-size:12px;color:var(--color-text-2);margin-left:4px;">${prod.ratingCount} reviews</span>
  `;

  const priceEl = document.getElementById('prod-price');
  if (priceEl) {
    priceEl.textContent = `$${prod.price.toFixed(2)}`;
    if (prod.comparePrice) priceEl.classList.add('sale');
  }
  const compEl = document.getElementById('prod-compare');
  if (compEl && prod.comparePrice) {
    compEl.textContent = `$${prod.comparePrice.toFixed(2)}`;
    compEl.style.display = 'inline';
  }

  const descEl = document.getElementById('prod-desc');
  if (descEl) descEl.innerHTML = prod.description;

  const metaEl = document.getElementById('prod-meta');
  if (metaEl) metaEl.innerHTML = `
    <p>SKU: <span>${prod.sku}</span></p>
    <p>Vendor: <span>${prod.vendor}</span></p>
  `;

  // gallery
  const mainImg = document.getElementById('main-img');
  if (mainImg) { mainImg.src = prod.images[0]; mainImg.alt = prod.title; }
  const thumbsEl = document.getElementById('gallery-thumbs');
  if (thumbsEl) {
    thumbsEl.innerHTML = prod.images.map((src, i) => `
      <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchImg(${i})">
        <img src="${src}" alt="${prod.title} view ${i+1}" loading="lazy" />
      </div>
    `).join('');
  }

  // variants
  const varRow = document.getElementById('variant-row');
  if (varRow && prod.variants) {
    varRow.style.display = 'block';
    setEl('selected-var-label', _selectedVariant);
    const vbtns = document.getElementById('variant-btns');
    if (vbtns) {
      vbtns.innerHTML = prod.variants.map(v => `
        <button class="size-btn ${v === _selectedVariant ? 'active' : ''}" onclick="selectVar('${v.replace(/'/g,"&#39;")}')">${v}</button>
      `).join('');
    }
  }

  // reviews
  const rhEl = document.getElementById('reviews-heading');
  if (rhEl) rhEl.textContent = `${prod.ratingCount} Reviews`;
  const rgEl = document.getElementById('reviews-grid');
  if (rgEl) {
    rgEl.innerHTML = prod.reviews.map(r => `
      <div class="testimonial-card">
        <div class="testimonial-stars">${renderStars(r.stars)}</div>
        <p class="testimonial-quote">${r.text}</p>
        <div class="testimonial-author">${r.name}</div>
        <div class="testimonial-location">${r.location}</div>
      </div>
    `).join('');
  }

  // related
  const relEl = document.getElementById('related-grid');
  if (relEl) {
    const related = PRODUCTS.filter(p => p.id !== id).slice(0, 4);
    relEl.innerHTML = related.map(p => `
      <div class="product-card product-card-grid" onclick="window.location='product.html?id=${p.id}'" style="cursor:pointer;">
        <div class="product-card-img-wrap">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy" />
          ${p.badge ? `<span class="product-card-badge ${p.badge === 'Sale' ? 'sale' : ''}">${p.badge}</span>` : ''}
        </div>
        <div class="product-card-title">${p.title}</div>
        <div class="product-card-price">$${p.price.toFixed(2)}</div>
      </div>
    `).join('');
  }
}

function switchImg(i) {
  if (!_prod) return;
  const el = document.getElementById('main-img');
  if (el) el.src = _prod.images[i];
  document.querySelectorAll('.gallery-thumb').forEach((t, idx) => t.classList.toggle('active', idx === i));
}

function selectVar(v) {
  _selectedVariant = v;
  setEl('selected-var-label', v);
  document.querySelectorAll('.size-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === v));
}

function addCurrentToCart() {
  if (!_prod) return;
  const qty = parseInt(document.getElementById('qty').value) || 1;
  for (let i = 0; i < qty; i++) addToCart(_prod.title, _prod.price, _selectedVariant, _prod.images[0]);
}

function buyNow() {
  addCurrentToCart();
  window.location.href = 'cart.html';
}

// ── CART PAGE ──────────────────────────────────────────────────────────────
function renderCartPage() {
  const cart = getCart();
  const emptyEl = document.getElementById('empty-state');
  const contentEl = document.getElementById('cart-content');
  if (!emptyEl) return;

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  setEl('cart-item-count', totalQty > 0 ? `(${totalQty} item${totalQty !== 1 ? 's' : ''})` : '');

  if (cart.length === 0) {
    emptyEl.style.display = 'block';
    contentEl.style.display = 'none';
    return;
  }
  emptyEl.style.display = 'none';
  contentEl.style.display = 'grid';

  const listEl = document.getElementById('cart-items-list');
  if (listEl) {
    listEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-img">
          <img src="${item.image || ''}" alt="${item.title}" loading="lazy" />
        </div>
        <div>
          <div class="cart-item-name">${item.title}</div>
          ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
          <div class="cart-item-bottom">
            <div style="display:flex;align-items:center;gap:0;">
              <div class="qty-ctrl" style="transform:scale(.88);transform-origin:left;">
                <button onclick="updateQty(${idx},-1)">−</button>
                <input type="number" value="${item.qty}" min="1" max="99" onchange="setQty(${idx},this.value)" style="width:40px;height:34px;" />
                <button onclick="updateQty(${idx},1)">+</button>
              </div>
            </div>
            <div>
              <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
              ${item.qty > 1 ? `<div style="font-size:11px;color:var(--color-text-2);">$${item.price.toFixed(2)} each</div>` : ''}
            </div>
          </div>
          <div class="cart-remove" onclick="removeItem(${idx})">Remove</div>
        </div>
      </div>
    `).join('');
  }

  updateSummary();
}

function updateSummary() {
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const qty = cart.reduce((s, i) => s + i.qty, 0);
  const freeShipping = subtotal >= 50;
  const total = freeShipping ? subtotal : subtotal + 4.99;

  setEl('sum-qty', `(${qty} item${qty !== 1 ? 's' : ''})`);
  setEl('sum-subtotal', `$${subtotal.toFixed(2)}`);
  setEl('sum-total', `$${total.toFixed(2)}`);

  const shipEl = document.getElementById('sum-shipping');
  if (shipEl) {
    if (freeShipping) {
      shipEl.textContent = 'Free';
      shipEl.style.color = 'var(--color-accent)';
      shipEl.style.fontWeight = '700';
    } else {
      shipEl.textContent = '$4.99';
      shipEl.style.color = 'var(--color-text-2)';
      shipEl.style.fontWeight = '400';
    }
  }
}

function updateQty(idx, delta) {
  const cart = getCart();
  if (!cart[idx]) return;
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(cart); renderCartPage();
}
function setQty(idx, val) {
  const cart = getCart();
  if (!cart[idx]) return;
  cart[idx].qty = Math.max(1, parseInt(val) || 1);
  saveCart(cart); renderCartPage();
}
function removeItem(idx) {
  const cart = getCart();
  const name = cart[idx]?.title || 'Item';
  cart.splice(idx, 1);
  saveCart(cart); renderCartPage();
  showToast(`"${name.substring(0,30)}" removed`);
}

// ── HELPERS ────────────────────────────────────────────────────────────────
function setEl(id, html) {
  const el = document.getElementById(id);
  if (el) el.textContent = html;
}

// ── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
});
