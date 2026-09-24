document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  let count = 0;
  const cartCount = document.getElementById('cartCount');
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      count++;
      cartCount.textContent = count;
      
      e.target.innerText = 'Added ✓';
      e.target.style.backgroundColor = '#8a9a86';
      e.target.style.color = '#fff';

      setTimeout(() => {
        e.target.innerText = 'Add to Cart';
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#2d2a26';
      }, 1500);
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const newsletterForm = document.getElementById('newsletterForm');
  const formMessage = document.getElementById('formMessage');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formMessage.textContent = 'Thank you for subscribing to BOUQUETS newsletter!';
      newsletterForm.reset();

      setTimeout(() => {
        formMessage.textContent = '';
      }, 4000);
    });
  }

});