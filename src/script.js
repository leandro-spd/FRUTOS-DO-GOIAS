document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados de usuários
    const users = [
        { username: 'frutos.ita', password: '1234' },
        { username: 'frutos.leo', password: '1234' }
    ];
    
    // Função para verificar as credenciais de login
    function checkLogin(username, password) {
        return users.some(user => user.username === username && user.password === password);
    }
    
    // Função para lidar com o envio do formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (checkLogin(username, password)) {
            alert('Login bem-sucedido!');
            window.location.href = 'frutos-do-goias.html'; // Redireciona para a página principal após o login bem-sucedido
        } else {
            alert('Nome de usuário ou senha incorretos. Por favor, tente novamente.');
        }
    });
});
// Função para filtrar os sorvetes com base no texto de pesquisa
function filterIceCreams(searchText) {
    const filteredIceCreams = iceCreams.filter(iceCream => iceCream.flavor.toLowerCase().includes(searchText.toLowerCase()));
    renderFilteredIceCreams(filteredIceCreams);
}

// Função para renderizar os sorvetes filtrados
function renderFilteredIceCreams(filteredIceCreams) {
    const iceCreamList = document.getElementById('iceCreamList');
    iceCreamList.innerHTML = '';
    filteredIceCreams.forEach((iceCream, index) => {
        const iceCreamItem = document.createElement('div');
        iceCreamItem.classList.add('iceCreamItem');
        iceCreamItem.innerHTML = `
            <img src="${iceCream.image}" alt="${iceCream.flavor}">
            <p>${iceCream.flavor} - R$ ${iceCream.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Comprar</button>
        `;
        iceCreamItem.addEventListener('click', () => addToCart(index));
        iceCreamList.appendChild(iceCreamItem);
    });
}
// Função para adicionar um sorvete ao carrinho de compras
function addToCart(index) {
    const selectedIceCream = iceCreams[index];
    cartItems.push(selectedIceCream);
    updateCartBadge();
    renderCart();
    const button = document.querySelectorAll('.iceCreamItem button')[index];
    button.classList.add('clicked'); // Adiciona a classe "clicked" ao botão
    setTimeout(() => {
        button.classList.remove('clicked'); // Remove a classe "clicked" após 0.5 segundos
    }, 500);
}

// Event listener para a barra de pesquisa
document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchText = event.target.value;
    filterIceCreams(searchText);
});

// Simulação de dados de sorvetes
const iceCreams = [
    { flavor: 'Picolé de Pequi', price: 5.00, image: 'images/pequi.png' },
    { flavor: 'Picolé de Uva', price: 6.00, image: 'images/picoleUVA.png' },
    { flavor: 'Picolé Skimó', price: 4.50, image: 'images/skimó.png' },
    { flavor: 'Milho Verde', price: 4.00, image: '/images/milhoverde.png' },
    { flavor: 'Kids Chocolate', price: 5.50, image: 'images/kidschocolate.png' },
    { flavor: 'Picolé Torta de Limão', price: 4.50, image: 'images/tortalimao.png' },
    { flavor: 'Picolé de Flocos', price: 4.50, image: 'images/flocos.png' },
    { flavor: 'Tentação',price: 5.00, image: 'images/5e6405a38f534.png' },
    { flavor: 'Uva', price: 5.00, image: 'images/5e62d94633146.png' },
    { flavor: 'Uva Diet', price: 5.00, image: 'images/5e639dc328e85.png' },
    { flavor: 'Umbu', price: 5.00, image: 'images/5e62d7f2315d2.png' },
    { flavor: 'Torta de Maracujá Premium', price: 5.00, image: 'images/5e7204edd626e.png' },
    { flavor: 'Torta de Limão Premium', price: 5.00, image: 'images/5e70d8080e9a4.png' },
    { flavor: 'Tentação Premium', price: 5.00, image: 'images/5e6405a38f534.png' },
    { flavor: 'Tapioca', price: 5.00, image: 'images/5e62d6d5d4571.png' },
    { flavor: 'Tamarindo', price: 5.00, image: 'images/5e62d64105dac.png' },
    { flavor: 'Skimo Premium', price: 5.00, image: 'images/5e6f96eebe6d2.png' },
    { flavor: 'Romeu e Julieta', price: 5.00, image: 'images/5e62d58359be7.png' },
    { flavor: 'Pera', price: 5.00, image: 'images/5e62d4d9a385d.png' },
    { flavor: 'Pequi', price: 5.00, image: 'images/5e62ccdd98da3.png' },
    { flavor: 'Pé de Moleque Premium', price: 5.00, image: 'images/5e6f94963476e.png' },
    { flavor: 'Passas ao Rum Premium', price: 5.00, image: 'images/5e6404e46d0dd.png' },
    { flavor: 'Olho de Sogra', price: 5.00, image: 'images/5e62c94c2a399.png' },
    { flavor: 'Ninho Trufado Premium', price: 5.00, image: 'images/5e6403e4b5173.png' },
    { flavor: 'Ninho Premium', price: 5.00, image: 'images/5e64001fb8b67.png' },
    { flavor: 'Ninho com Trufas Paleta', price: 5.00, image: 'images/5ec7d1c01ad01.png' },
    { flavor: 'Ninho com Morango Premium', price: 5.00, image: 'images/5e63ff9db9f26.png' },
    { flavor: 'Ninho com Abacaxi Premium', price: 5.00, image: 'images/5e63feb61a3d1.png' },
    { flavor: 'Murici', price: 5.00, image: 'images/5e62c8c9e60a3.png' },
    { flavor: 'Morango', price: 5.00, image: 'images/5e62c806cced0.png' },
    { flavor: 'Morango Diet', price: 5.00, image: 'images/5e639c73a5ec1.png' },
    { flavor: 'Morango com Leite Condensado Paleta', price: 5.00, image: 'images/5e63a31375c05.png' },
    { flavor: 'Morango ao Leite', price: 5.00, image: 'images/5e62c763c9dfd.png' },
    { flavor: 'Milho Verde', price: 5.00, image: 'images/5e62c62021e99.png' },
    { flavor: 'Melão', price: 5.00, image: 'images/5e62c58a280a0.png' },
    { flavor: 'Melancia', price: 5.00, image: 'images/5e62c4dd6ae6c.png' },
    { flavor: 'Maracujá', price: 5.00, image: 'images/5e62c27685f8c.png' },
    { flavor: 'Maracujá com Leite Condensado Paleta', price: 5.00, image: 'images/5e63a24fa43cb.png' },
    { flavor: 'Maracujá ao Leite', price: 5.00, image: 'images/5e62c23ede39c.png' },
    { flavor: 'Mangaba', price: 5.00, image: 'images/5e62c1a55ce99.png' },
    { flavor: 'Manga', price: 5.00, image: 'images/5e62c0ecd419d.png' },
    { flavor: 'Mamão', price: 5.00, image: 'images/5e62c0694356f.png' },
    { flavor: 'Uva Diet', price: 5.00, image: 'images/5e639dc328e85.png' },
    { flavor: 'Umbu', price: 5.00, image: 'images/5e62d7f2315d2.png' },
    { flavor: 'Torta de Maracujá Premium', price: 5.00, image: 'images/5e7204edd626e.png' },
    { flavor: 'Torta de Limão Premium', price: 5.00, image: 'images/5e70d8080e9a4.png' },
    { flavor: 'Tentação Premium', price: 5.00, image: 'images/5e6405a38f534.png' },
    { flavor: 'Tapioca', price: 5.00, image: 'images/5e62d6d5d4571.png' },
    { flavor: 'Tamarindo', price: 5.00, image: 'images/5e62d64105dac.png' },
    { flavor: 'Skimo Premium', price: 5.00, image: 'images/5e6f96eebe6d2.png' },
    { flavor: 'Romeu e Julieta', price: 5.00, image: 'images/5e62d58359be7.png' },
    { flavor: 'Pera', price: 5.00, image: 'images/5e62d4d9a385d.png' },
    { flavor: 'Pequi', price: 5.00, image: 'images/pequi.png' },
    { flavor: 'Pé de Moleque Premium', price: 5.00, image: 'images/5e6f94963476e.png' },
    { flavor: 'Passas ao Rum Premium', price: 5.00, image: 'images/5e6404e46d0dd.png' },
    { flavor: 'Olho de Sogra', price: 5.00, image: 'images/5e62c94c2a399.png' },
    { flavor: 'Ninho Trufado Premium', price: 5.00, image: 'images/5e6403e4b5173.png' },
    { flavor: 'Ninho Premium', price: 5.00, image: 'images/5e64001fb8b67.png' },
    { flavor: 'Ninho com Trufas Paleta', price: 7.50, image: 'images/5ec7d1c01ad01.png' },
    { flavor: 'Ninho com Morango Premium', price: 5.00, image: 'images/5e63ff9db9f26.png' },
    { flavor: 'Ninho com Abacaxi Premium', price: 5.00, image: 'images/5e63feb61a3d1.png' },
    { flavor: 'Murici', price: 5.00, image: 'images/5e62c8c9e60a3.png' },
    { flavor: 'Morango', price: 5.00, image: 'images/5e62c806cced0.png' },
    { flavor: 'Morango Diet', price: 5.00, image: 'images/5e639c73a5ec1.png' },
    { flavor: 'Morango com Leite Condensado Paleta', price: 5.00, image: 'images/5e63a31375c05.png' },
    { flavor: 'Morango ao Leite', price: 5.00, image: 'images/5e62c763c9dfd.png' },
    { flavor: 'Milho Verde', price: 5.00, image: 'images/5e62c62021e99.png' },
    { flavor: 'Melão', price: 5.00, image: 'images/5e62c58a280a0.png' },
    { flavor: 'Melancia', price: 6.00, image: 'images/5e62c4dd6ae6c.png' },
    { flavor: 'Maracujá', price: 5.00, image: 'images/5e62c27685f8c.png' },
    { flavor: 'Maracujá com Leite Condensado Paleta', price: 5.00, image: 'images/5e63a24fa43cb.png' },
    { flavor: 'Maracujá ao Leite', price: 5.00, image: 'images/5e62c23ede39c.png' },
    { flavor: 'Mangaba', price: 5.00, image: 'images/5e62c1a55ce99.png' },
    { flavor: 'Manga', price: 5.00, image: 'images/5e62c0ecd419d.png' },
    { flavor: 'Mamão', price: 5.00, image: 'images/5e62c0694356f.png' }

];
// Inicialização do carrinho de compras
let cartItems = [];

// Função para renderizar o catálogo de sorvetes
function renderIceCreams() {
    const iceCreamList = document.getElementById('iceCreamList');
    iceCreamList.innerHTML = '';
    iceCreams.forEach((iceCream, index) => {
        const iceCreamItem = document.createElement('div');
        iceCreamItem.classList.add('iceCreamItem');
        iceCreamItem.innerHTML = `
            <img src="${iceCream.image}" alt="${iceCream.flavor}">
            <p>${iceCream.flavor} - R$ ${iceCream.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Comprar</button>
        `;
        iceCreamItem.addEventListener('click', () => addToCart(index));
        iceCreamList.appendChild(iceCreamItem);
    });
}

// Função para adicionar um sorvete ao carrinho de compras
function addToCart(index) {
    const selectedIceCream = iceCreams[index];
    cartItems.push(selectedIceCream);
    updateCartBadge();
    renderCart();
}

// Função para renderizar o carrinho de compras
function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '<ul>';
    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
        cartItemsDiv.innerHTML += `<li>${item.flavor} - R$ ${item.price.toFixed(2)}</li>`;
    });
    cartItemsDiv.innerHTML += '</ul>';
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para atualizar o número de itens na notificação da cesta
function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.textContent = cartItems.length;
}

// Função para mostrar a aba correspondente
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tabContent');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

// Chamando as funções para renderizar o catálogo de sorvetes
renderIceCreams();
(function($){
   

    $(document).ready(function(){

        
 

        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) { 
                $('#mainNav').addClass('navbar-scrolled'); 
                $('.logo').addClass('logo-scrolled'); 
            } else {
             $('#mainNav').removeClass('navbar-scrolled'); 
             $('.logo').removeClass('logo-scrolled'); 
            }
        });
     
        //Wow
        new WOW().init();  


    });

    
})(jQuery);
