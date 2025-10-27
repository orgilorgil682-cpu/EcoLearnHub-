document.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Товчлуурын event
  const btn = document.querySelector('.btn');
  if (btn) {  // btn байгаа эсэхийг шалгана
    btn.addEventListener('click', () => {
      alert('Энд та сургалтын дэлгэрэнгүй мэдээлэл үзнэ үү!');
    });
  }

  // 2️⃣ Өдрийн мэндчилгээг харуулах функц
  function showGreeting() {
    const greetingContainer = document.createElement('div'); // контейнер үүсгэнэ
    greetingContainer.style.textAlign = 'center';
    greetingContainer.style.margin = '1rem 0';

    const greeting = document.createElement('p');
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      greeting.textContent = 'Өглөөний мэнд! 🌅';
    } else if (hour < 18) {
      greeting.textContent = 'Өдрийн мэнд! ☀️';
    } else {
      greeting.textContent = 'Оройн мэнд! 🌙';
    }

    greeting.style.fontSize = '1.2rem';
    greeting.style.fontWeight = 'bold';

    greetingContainer.appendChild(greeting);

    // HTML-д тохирох хэсэгт нэмнэ (features секцийн өмнө)
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
      featuresSection.parentNode.insertBefore(greetingContainer, featuresSection);
    } else {
      // Хэрвээ features байхгүй бол body төгсгөлд нэмнэ
      document.body.appendChild(greetingContainer);
    }
  }

  showGreeting();
});
