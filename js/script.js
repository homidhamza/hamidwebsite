const meds = [
    { id: 1, name: "بنادول اكسترا", price: 1500, image: "https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=Panadol" },
    { id: 2, name: "فيتامين سي 1000", price: 3200, image: "https://via.placeholder.com/100x100/4ECDC4/FFFFFF?text=Vitamin+C" },
    { id: 3, name: "أومول أطفال", price: 1100, image: "https://via.placeholder.com/100x100/45B7D1/FFFFFF?text=Omol" },
    { id: 4, name: "أوجمنتين 1 جم", price: 5800, image: "https://via.placeholder.com/100x100/F7DC6F/FFFFFF?text=Augmentin" },
    { id: 5, name: "أسبرين", price: 800, image: "https://via.placeholder.com/100x100/BB8FCE/FFFFFF?text=Aspirin" },
    { id: 6, name: "إيبوبروفين", price: 1200, image: "https://via.placeholder.com/100x100/85C1E9/FFFFFF?text=Ibuprofen" },
    { id: 7, name: "باراسيتامول", price: 900, image: "https://via.placeholder.com/100x100/F8C471/FFFFFF?text=Paracetamol" },
    { id: 8, name: "أموكسيسيلين", price: 2500, image: "https://via.placeholder.com/100x100/82E0AA/FFFFFF?text=Amoxicillin" },
    { id: 9, name: "سيبروفلوكساسين", price: 4500, image: "https://via.placeholder.com/100x100/F1948A/FFFFFF?text=Ciprofloxacin" },
    { id: 10, name: "ميتفورمين", price: 3000, image: "https://via.placeholder.com/100x100/AED6F1/FFFFFF?text=Metformin" },
    { id: 11, name: "ليسينوبريل", price: 2200, image: "https://via.placeholder.com/100x100/D7BDE2/FFFFFF?text=Lisinopril" },
    { id: 12, name: "أتورفاستاتين", price: 4000, image: "https://via.placeholder.com/100x100/A3E4D7/FFFFFF?text=Atorvastatin" },
    { id: 13, name: "أوميبرازول", price: 1800, image: "https://via.placeholder.com/100x100/FAD7A0/FFFFFF?text=Omeprazole" },
    { id: 14, name: "سيمفاستاتين", price: 3500, image: "https://via.placeholder.com/100x100/D5A6BD/FFFFFF?text=Simvastatin" },
    { id: 15, name: "فوروسيميد", price: 1600, image: "https://via.placeholder.com/100x100/A9DFBF/FFFFFF?text=Furosemide" },
    { id: 16, name: "وارفارين", price: 2800, image: "https://via.placeholder.com/100x100/F9E79F/FFFFFF?text=Warfarin" },
    { id: 17, name: "ديجوكسين", price: 3200, image: "https://via.placeholder.com/100x100/BFC9CA/FFFFFF?text=Digoxin" },
    { id: 18, name: "بريدنيزون", price: 2400, image: "https://via.placeholder.com/100x100/ABEBC6/FFFFFF?text=Prednisone" },
    { id: 19, name: "ليفوثيروكسين", price: 1900, image: "https://via.placeholder.com/100x100/D5DBDB/FFFFFF?text=Levothyroxine" },
    { id: 20, name: "ألبوتيرول", price: 2600, image: "https://via.placeholder.com/100x100/FADBD8/FFFFFF?text=Albuterol" }
];
let cart = [];
function render() {
    const grid = document.getElementById('medGrid');
    if(!grid) return;
    grid.innerHTML = meds.map(m => `
        <div class="med-card">
            <img class="med-img" src="${m.image}" alt="${m.name}">
            <h3>${m.name}</h3>
            <p>${m.price} ريال</p>
            <button class="mega-btn" onclick="add(${m.id})">إضافة للسلة</button>
        </div>
    `).join('');
}
function add(id) {
    cart.push(meds.find(m => m.id === id));
    document.getElementById('count').innerText = cart.length;
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('total').innerText = total;
    document.getElementById('cartItems').innerHTML = cart.map(i => `<div class="cart-item">${i.name}</div>`).join('');
}
function logout() {
    // إعادة توجيه إلى صفحة تسجيل الدخول
    window.location.href = 'register.html';
}
window.onload = render;